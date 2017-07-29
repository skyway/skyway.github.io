---
layout: rightnav
title: Android SDK
lang: ja
---

- TOC
{:toc}

# Android SDK

## チュートリアル
{: #tutorial }

Android SDKの基本機能を利用して、1:1のシンプルなビデオ通話アプリを作成することで、Android SDKの使い方について理解を深めます。
現在サーバに接続されているユーザーの一覧を表示し、通話相手を選び、1対1のビデオ通話を開始し、終了する機能、また着信を受け付ける機能を実装していきます。
[完成したアプリのデモ](tbd)を試すことができます。

<figure class="figure">
  <img src="https://github.com/skyway/webrtc-handson-native/wiki/img/hands-on-summary.png" class="figure-img img-fluid rounded" alt="ECLWebRTCでシグナリングをして、端末間がビデオチャットで繋がる">
  <figcaption class="figure-caption">ECLWebRTCでシグナリングをして、端末間がビデオチャットで繋がる</figcaption>
</figure>

<figure class="figure">
  <img src="https://github.com/skyway/webrtc-handson-native/wiki/img/video-chat.png" class="figure-img img-fluid rounded" alt="ビデオチャットのスクリーンショット">
  <figcaption class="figure-caption">ビデオチャットのスクリーンショット</figcaption>
</figure>

### 開発前の準備

ECLWebRTCへの開発者登録がまだの方は、まず、[新規登録](signup.md)から開発者登録をしてください。
開発者登録済みの方、完了した方は、[ダッシュボードにログイン](login.md)し、アプリを作成して、APIキーを取得してください。
利用可能ドメインは `localhost` としてください。

### プロジェクトの作成

ベースとなる写経用のプロジェクトをGitHubからクローン云々。
必要なライブラリ、フレームワークを追加。
SkyWay Android SDKのダウンロード、Android Studioに追加、インポート。

### サーバへ接続

ECLWebRTCのシグナリングサーバに接続します。

まず初めに、シグナリングサーバに接続する際の引数で、APIキーと利用可能ドメインを指定します。
app/src/main/java/io/skyway/testpeerjava/ を選択。
MediaActivity.javaを開く。
APIキーを各自 https://skyway.io/ds から取得したものを設定。
利用可能ドメインは localhost に設定。

*Java*
{: .lang}

```java
// APIキー、ドメインを設定
PeerOption options = new PeerOption();
options.key = "XXXXXXXXXXXXXXXXXXXXX"; // 各自で取得したAPIキーを設定
options.domain = "localhost";
```

Peerオブジェクトを生成します。
Peerクラスは、SkyWayが提供するシグナリングのためのクラス。
Peerオブジェクトを生成し、シグナリングサーバに接続する。

*Java*
{: .lang}

```java
// Peerオブジェクトのインスタンスを生成
_peer = new Peer(context, options);
```

### 接続成功・失敗時の処理

エラー発生時のコールバック処理を、OnCallback()に記述する。
Peer.on()で上記のコールバックを登録する。
第一引数にイベント種別を登録（ERROR,OPENなど）。
エラーが起きたらコンソールログを出力する。
APIキーが間違っている。
ドメインが登録されていない　など。

*Java*
{: .lang}

```java
// コールバックを登録(ERROR)
_peer.on(Peer.PeerEventEnum.ERROR, new OnCallback() {
  @Override
  public void onCallback(Object object) {
    PeerError error = (PeerError) object;
    Log.d(TAG, "[On/Error]" + error);
  }
});
```

成功時のコールバックを登録。
自分のピアIDがコールバックの引数に渡されてくる。
自分のピアIDを画面に表示する。

*Java*
{: .lang}

```java
// コールバックを登録(OPEN)
_peer.on(Peer.PeerEventEnum.OPEN, new OnCallback() {
  @Override
  public void onCallback(Object object) {
    _id = (String) object;
    _handler.post(new Runnable() {
      @Override
      public void run() {
        // 自分のIDを表示
        TextView tv = (TextView) findViewById(R.id.tvOwnId);
        tv.setText("ID【" + _id + "】");
        tv.invalidate();
      }
    });
  }
});
```

### カメラ映像、マイク音声の取得

自分のカメラの映像を取得して表示。
Navigator.getUserMediaで、カメラの映像が取得できる。
Canvasにセットする。

*Java*
{: .lang}

```java
// メディアを取得
Navigator.initialize(_peer);
MediaConstraints constraints = new MediaConstraints();
_msLocal = Navigator.getUserMedia(constraints);

// 映像を表示する為のUI
Canvas canvas = (Canvas) findViewById(R.id.svSecondary);
canvas.addSrc(_msLocal, 0);
```

### 着信時の処理

シグナリングサーバ経由でビデオ通話着信があった場合の処理。
相手に自分のメディア情報を回答。
相手とのP2Pコネクションで発生するイベントのコールバックを登録。
  
*Java*
{: .lang}

```java
// コールバックを登録(CALL)
_peer.on(Peer.PeerEventEnum.CALL, new OnCallback(){
  @Override
  public void onCallback(Object object){
    _media = (MediaConnection) object;
    _media.answer(_msLocal);
    setMediaCallback(_media);
    _bEstablished = true;
    updateUI();
  }
});
```

P2Pコネクションのコールバック処理。
映像を受信した場合(STREAM)、映像をUIに表示。
コネクションが切断された場合、映像を削除。

*Java*
{: .lang}

```java
private void setMediaCallback(MediaConnection media){
  // コールバックを登録(STREAM)
  media.on(MediaConnection.MediaEventEnum.STREAM, new OnCallback() {
    @Override
    public void onCallback(Object object) {
      _msRemote = (MediaStream) object;
      Canvas canvas = (Canvas) findViewById(R.id.svPrimary);
      canvas.addSrc(_msRemote, 0);
    }
  });

  // コールバックを登録(CLOSE)
  media.on(MediaConnection.MediaEventEnum.CLOSE, new OnCallback() {
    @Override
    public void onCallback(Object object) {
      Canvas canvas = (Canvas) findViewById(R.id.svPrimary);
      canvas.removeSrc(_msRemote, 0);
      _msRemote = null;
      _media = null;
      _bEstablished = false;
      updateUI();
    }
  });
}
```

### 発信する

相手へビデオ通話をかける。
サーバに接続しているピアの一覧を取得する。

*Java*
{: .lang}

```java
// 接続相手を選択する
private void getPeerList(){
  if ((null == _peer) || (null == _id) || (0 == _id.length())){
    return;
  }

  _listPeerIds.clear();

  _peer.listAllPeers(new OnCallback() {
    @Override
    public void onCallback(Object object) {
      JSONArray peers = (JSONArray) object;
      for (int i = 0; peers.length() > i; i++) {
        String strValue = "";
        try {
          strValue = peers.getString(i);
        } catch (Exception e) {
          e.printStackTrace();
        }

        if (0 != _id.compareToIgnoreCase(strValue)) {
          _listPeerIds.add(strValue);
        }
      }

      if ((null != _listPeerIds) && (0 < _listPeerIds.size())) {
        showPeerListDialog();
      }
    }
  });
}
```

通話したい相手を選んで、ビデオ通話発信する。

*Java*
{: .lang}

```java
// ビデオ通話をかける
private void call(String strPeerId){
  CallOption option = new CallOption();
  _media = _peer.call(strPeerId, _msLocal, option);

  if (null != _media){
    setMediaCallback(_media);
    _bEstablished = true;
  }

  updateUI();
}

// ビデオ通話を終了する
private void close(){
  if (_bEstablished) {
    _bEstablished = false;
    if (null != _media) {
      _media.close();
    }
  }
}
```

### UIのセットアップ

UIの初期化。

*Java*
{: .lang}

```java
// アクションボタン
Button btnAction = (Button) findViewById(R.id.btnAction);
btnAction.setEnabled(true);
btnAction.setOnClickListener(new View.OnClickListener(){
  @Override
  public void onClick(View v){
    v.setEnabled(false);
    if (!_bEstablished){
      getPeerList();
    }
    else{
      close();
    }
    v.setEnabled(true);
  }
});
```

UIの更新。

*Java*
{: .lang}

```java
// UIを更新する
private void updateUI() {
  _handler.post(new Runnable() {
    @Override
    public void run() {
      Button btnAction = (Button) findViewById(R.id.btnAction);
      if (null != btnAction) {
        if (false == _bEstablished) {
          btnAction.setText("Call");
        } else {
          btnAction.setText("Hang up");
        }
      }

      TextView tvOwnId = (TextView) findViewById(R.id.tvOwnId);
      if (null != tvOwnId) {
        if (null == _id) {
          tvOwnId.setText("");
        } else {
          tvOwnId.setText(_id);
        }
      }
    }
  });
}
```

## SDKのダウンロード

[ZIPでダウンロード](#){: .btn .btn-primary}
[GitHubでクローン](#){: .btn .btn-secondary}

## APIリファレンス

[APIリファレンスを見る](#){: .btn .btn-primary}

## サンプルコード
{: #sample-code }

サンプルコードを公開しています。

<table class="table w-75">
  <tbody align="right">
    <tr>
      <th scope="row">1対1、P2P</th>
      <td><a href="#" class="card-link">ビデオチャット</a></td>
      <td><a href="#" class="card-link">テキストチャット</a></td>
    </tr>
    <tr>
      <th scope="row">多人数、P2P</th>
      <td><a href="#" class="card-link">ビデオチャット</a></td>
      <td><a href="#" class="card-link">テキストチャット</a></td>
    </tr>
    <tr>
      <th scope="row">多人数、SFU</th>
      <td><a href="#" class="card-link">ビデオチャット</a></td>
      <td><a href="#" class="card-link">テキストチャット</a></td>
    </tr>
  </tbody>
</table>

## サポート
{: #support }

<div class="row">
  <div class="col-sm-4 h-100">
    <div class="card h-100">
      <div class="card-block">
        <h3 class="card-title">FAQ</h3>
        <p class="card-text"><small class="text-muted">Enterprise Edition / Community Edition</small></p>
        <p class="card-text">よくある質問や開発ノウハウをFAQとして公開しています<BR>困った場合はまず検索してみて下さい</p>
        <a href="#" class="btn btn-primary">FAQを確認</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4 h-100">
    <div class="card h-100">
      <div class="card-block">
        <h3 class="card-title">Technical Forum</h3>
        <p class="card-text"><small class="text-muted">Enterprise Edition / Community Edition</small></p>
        <p class="card-text">FAQだけでは解決できない事がある場合<BR>開発者同士の議論や情報交換にご活用下さい</p>
        <a href="#" class="btn btn-primary">Technical Forumに参加</a>
      </div>
    </div>
  </div>
    <div class="col-sm-4 h-100">
      <div class="card h-100">
        <div class="card-block">
          <h3 class="card-title">チケットサポート</h3>
          <p class="card-text"><small class="text-muted">Enterprise Edition 限定</small></p>
          <p class="card-text">ダッシュボードよりチケットを利用して開発に関する問い合わせが可能です<BR>詳しい利用方法は<a href="https://ecl.ntt.com/documents/tutorials/rsts/Support/ticket/ticket.html" target="_blank">「チケットシステムのご利用方法」</a>をご覧下さい</p>
          <a href="#" class="btn btn-primary">ダッシュボードにログイン</a>
        </div>
      </div>
    </div>
</div>
