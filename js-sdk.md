---
layout: rightnav
title: JavaScript SDK
lang: ja
---

- TOC
{:toc}

# JavaScript SDK

## チュートリアル
{: #tutorial }

JavaScript SDKの基本機能を利用して、1:1のシンプルなビデオ通話アプリを作成することで、JavaScript SDKの使い方について理解を深めます。
通話相手のIDを入力し、1対1のビデオ通話を開始し、終了する機能、また着信を受け付ける機能を実装していきます。
[完成したアプリのデモ](tbd)を試すことができます。

<figure class="figure">
  <img src="https://github.com/skyway/webrtc-handson-native/wiki/img/hands-on-summary.png" class="figure-img img-fluid rounded" alt="ECLWebRTCでシグナリングをして、端末間がビデオチャットで繋がる">
  <figcaption class="figure-caption">ECLWebRTCでシグナリングをして、端末間がビデオチャットで繋がる</figcaption>
</figure>

<figure class="figure">
  <img src="http://via.placeholder.com/250x350" class="figure-img img-fluid rounded" alt="ビデオチャットのスクリーンショット">
  <figcaption class="figure-caption">ビデオチャットのスクリーンショット</figcaption>
</figure>

### 開発前の準備

ECLWebRTCへの開発者登録がまだの方は、まず、[新規登録](signup.md)から開発者登録をしてください。
開発者登録済みの方、完了した方は、[ダッシュボードにログイン](login.md)し、アプリを作成して、APIキーを取得してください。
利用可能ドメインは `localhost` としてください。

### プロジェクトの作成

ベースとなる写経用のプロジェクトをGitHubからクローン云々。
localのWebサーバのこととか。

### カメラ映像、マイク音声の取得

getUserMediaというAPIを利用。
Promiseによる非同期処理を行うAPI

*JavaScript*
{: .lang}

```js
navigator.mediaDevices.getUserMedia({video: true, audio: true})
    .then(function (stream) { // success
    }).catch(function (error) { // error
    return;
});

```

getUserMediaに必要な処理を追加する
`script.js`に追記して下さい

*JavaScript*
{: .lang}

```js
    let localStream = null;

    navigator.mediaDevices.getUserMedia({video: true, audio: true})
        .then(function (stream) {
            $('#myStream').get(0).srcObject = stream;
            localStream = stream;
        }).catch(function (error) {
            console.error('mediaDevice.getUserMedia() error:', error);
            return;
        });
```

実装する際のポイント1
VideoとAudioの選択

`{video: true, audio: true}`

キャプチャサイズの設定（一例/後ほど利用します）

`{ audio: true, video: { width: 640, height: 480 } }`

フレームレートの設定（一例/Chrome限定）

`{ audio: true, video: { frameRate: { min: 10, max: 15 } } }`

実装する際のポイント2
srcObject
Chrome M52 , Firefox 42（Prefixが削除）で対応済み
Stream Objectを直接設定可能
VIDEO、AUDIO Elementで利用可能

使用する上の注意点
許可を求めるダイアログが出てくる
複数のカメラやマイクが接続されている場合は、適切なものを選択する必要あり

<figure class="figure">
  <img src="https://qiita-image-store.s3.amazonaws.com/0/6651/7e985821-901b-33eb-0f57-2fc4b677f0d8.png" class="figure-img img-fluid rounded" alt="ECLWebRTCでシグナリングをして、端末間がビデオチャットで繋がる">
  <figcaption class="figure-caption">Chromeのダイアログ</figcaption>
</figure>

<figure class="figure">
  <img src="https://qiita-image-store.s3.amazonaws.com/0/6651/21d50fdc-e86a-d301-98f1-2a8df20c7608.png" class="figure-img img-fluid rounded" alt="ECLWebRTCでシグナリングをして、端末間がビデオチャットで繋がる">
  <figcaption class="figure-caption">Firefoxのダイアログ</figcaption>
</figure>

使用する上の注意点
ホスティング先に注意

|スキーマ\ブラウザ|Chrome|Firefox|
|:--|:--:|:--:|
|http://localhost/|◯|◯|
|http://domain.jp|x|◯|
|file://index.html|x|◯|
|https://domain.jp|◯|◯|

### サーバへ接続

今回のハンズオンのHTMLには既に記載済みですが、以下の通りScript要素でSDKをインポートします。

*HTML*
{: .lang}

```html
<script type="text/javascript" src="https://cdn.skyway.io/skyway.js"></script>
```

Peerオブジェクトを作成する
`script.js`に追記して下さい

*JavaScript*
{: .lang}

```js
    let localStream = null;
    let peer = null;
    let existingCall = null;

    navigator.mediaDevices.getUserMedia({video: true, audio: true})
      // 省略
    });

    peer = new Peer({
        key: 'apikey',
        debug: 3
    });
```

### 接続成功・失敗時の処理

PeerオブジェクトのEventListenerを追加する
`script.js`に追記して下さい

Openイベント
SkyWayのシグナリングサーバと接続し、利用する準備が整ったら発火します
今回は、PeerIDと呼ばれるクライアント識別用のIDをシグナリングサーバで発行し、その情報をUIに表示する処理を行っています

*JavaScript*
{: .lang}

```js
    peer.on('open', function(){
        $('#my-id').text(peer.id);
    });
```

Callイベント
相手から接続要求がきた場合に発火します
相手との接続を管理するためのCallオブジェクトが取得できるため、それを利用して必要な処理を行います
Answerメソッドを実行し、接続要求に応答します。この時に、自分自身のlocalStreamをセットすると、相手に映像・音声を送信することができるようになります
Callオブジェクトを利用したEventListenerをセットします
setupCallEventHandlers()の中身については後ほど説明

*JavaScript*
{: .lang}

```js
    peer.on('call', function(call){
        call.answer(localStream);
        setupCallEventHandlers(call);
    });
```

Errorイベント
何らかのエラーが発生した場合に発火します

*JavaScript*
{: .lang}

```js
    peer.on('error', function(err){
        alert(err.message);
    });
```

### 発信処理

`peer.call`で相手のPeerID、自分自身のlocalStreamを引数にセットし発信します
PeerIDは電話番号のようなもので、何らかの方法で入手する必要があります
Callオブジェクトが返ってくるため、必要なEventListenerをセットします
setupCallEventHandlers()の中身については後ほど説明

*JavaScript*
{: .lang}

```js
    $('#make-call').submit(function(e){
        e.preventDefault();
        const call = peer.call($('#peer-id').val(), localStream);
        setupCallEventHandlers(call);
    });
```

切断処理
Callオブジェクトのclose()メソッドを実行します
先程生成したCallオブジェクトは`existingCall`として保持しておきます
オブジェクト保持はsetupCallEventHandlers()の中で実行します

*JavaScript*
{: .lang}

```js
    $('#end-call').click(function(){
        existingCall.close();
    });
```

### 着信処理

今回作るアプリでは既に接続中の場合は一旦既存の接続を切断し、後からきた接続要求を優先する
アプリの仕様次第

*JavaScript*
{: .lang}

```js
        if (existingCall) {
            existingCall.close();
        };

        existingCall = call;
```

Streamイベント
相手の映像・音声を受信した際に発火します
取得したStreamオブジェクトをVIDEO要素にセットします
addVideo()の中身については後ほど説明
UI関連の処理を実施します
切断用のボタンを表示

*JavaScript*
{: .lang}

```js
        call.on('stream', function(stream){
            addVideo(call,stream);
            setupEndCallUI();
            $('#connected-peer-id').text(call.remoteId);
        });
```

Closeイベント
Callオブジェクトのclose()メソッドが実行され切断処理が完了したら発火します
close()メソッドを実行した側、実行された側それぞれで発火します
切断時にVIDEO要素を削除します
`call.peer`で切断先のPeerIDを取得できます
removeVideo()の中身については後ほど説明
UI関連の処理を実施します
接続用のボタン、PeerIDを入力するInputボックスを用意

*JavaScript*
{: .lang}

```js
        call.on('close', function(){
            removeVideo(call.peer);
            setupMakeCallUI();
        });
```

### UIのセットアップ

VIDEO要素のsrcObjectプロパティにStreamオブジェクトをセットすることで再生できます
削除する処理のことを考えて、idプロパティに`call.peer(PeerID)`をセットします

*JavaScript*
{: .lang}

```js
function addVideo(call,stream){
        const videoDom = $('<video autoplay>');
        videoDom.attr('id',call.peer);
        videoDom.get(0).srcObject = stream;
        $('.remoteVideosContainer').append(videoDom);
    }
```

切断された（した）相手のVIDEO要素をPeerIDを元に削除します

*JavaScript*
{: .lang}

```js
    function removeVideo(peerId){
        $('#'+peerId).remove();
    }
```

UI関連処理を実装します

*JavaScript*
{: .lang}

```js
    function setupMakeCallUI(){
        $('#make-call').show();
        $('#end-call').hide();
    }
    
    function setupEndCallUI() {
        $('#make-call').hide();
        $('#end-call').show();
    }
```

### 動作確認

2つのブラウザタブでアプリを開く
片方の`Your id`を片方のInputボックスにコピペしてCallボックスをクリックする

## SDKのダウンロード

[ZIPでダウンロード](#){: .btn .btn-primary}
[GitHubでクローン](#){: .btn .btn-secondary}

## APIリファレンス

[APIリファレンスを見る](#){: .btn .btn-primary}

## サンプルコード
{: #sample-code }

サンプルコードを公開しています。

<table class="table">
  <tbody align="right">
    <tr>
      <th scope="row">1対1、P2P</th>
      <td><a href="#" class="card-link">ビデオチャット</a></td>
      <td></td>
      <td><a href="#" class="card-link">テキストチャット</a></td>
    </tr>
    <tr>
      <th scope="row">多人数、P2P</th>
      <td><a href="#" class="card-link">ビデオチャット</a></td>
      <td><a href="#" class="card-link">1:多のビデオ配信</a></td>
      <td><a href="#" class="card-link">テキストチャット</a></td>
    </tr>
    <tr>
      <th scope="row">多人数、SFU</th>
      <td><a href="#" class="card-link">ビデオチャット</a></td>
      <td><a href="#" class="card-link">1:多のビデオ配信</a></td>
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
