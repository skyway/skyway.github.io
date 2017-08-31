---
layout: rightnav
title: Android SDK tutorial
lang: en
breadcrumb: [en/index.md, en/developer.md, en/android-sdk.md]
---

- TOC
{:toc}

# Android SDK チュートリアル

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

## 開発前の準備
{: #preparation }

### ECLWebRTCのAPIキー発行

ECLWebRTCへの開発者登録がまだの方は、まず、[Community Editionの新規登録](signup.md)から開発者登録をしてください。
開発者登録済みの方、完了した方は、[ダッシュボードにログイン](login.md)し、アプリケーションを作成して、APIキーを取得してください。

ダッシュボードでのアプリケーションの設定内容は以下のとおりです。

|設定項目|項目の説明|チュートリアルの設定内容|
|:--|:--|:--|
|アプリケーション説明文|アプリケーションにつける説明文で、ダッシュボードでの表示のみに利用されます。<BR>128文字以内で指定してください。|ECLWebRTCチュートリアルアプリ|
|利用可能ドメイン名|作成するアプリケーションで利用するドメイン名を入力します。利用可能ドメイン名は複数指定可能です。利用可能ドメイン名は複数指定可能です。<BR>指定例：hogehoge.com|`localhost`|
|権限(TURNを利用する)|TURN(Traversal Using Relay around NAT) サーバを利用する場合はチェックします。TURNサーバは、ファイアウォールを経由する等の理由によりP2P通信が出来ない場合でも、メディアやデータをリレーすることにより通信を可能とします。ユーザーに最も近いTURNサーバが自動的に選択されます。|ON|
|権限(SFUを利用する)|SFU(Selective  Forwarding  Unit)サーバを利用する場合はチェックします。SFUとは、P2PではなくSFUというメディアサーバを経由して映像や音声の送受信を行う技術です。詳しくは[SFUについて](./sfu.html)をご覧ください。|ON|
|権限(listAllPeers APIを利用する)|`listALLPeers API`を使用する場合はチェックします。このAPIは、APIキー毎のアクティブなPeerIDを取得します。詳しくは、APIリファレンスをご覧ください。|ON|
|権限(APIキー認証を利用する)|APIキーの不正利用を防止するための認証機能を提供します。詳しくは[こちら](https://github.com/nttcom/Peer-Authentication-Server-Samples)をご覧ください。|OFF|

### 開発環境の準備

このチュートリアルでは以下の環境を前提に開発を進めます。

- Androdi Studio 2.3.3
- 動作確認端末
  - Nexus6
- OSバージョン
  - 7.1
- 開発言語
  - Java

## プロジェクトの作成

チュートリアルで利用するAndroid Studioのプロジェクトは以下のリポジトリからダウンロードしてください。  

- [https://github.com/skyway/eclwebrtc-android-sdk-tutorial](https://github.com/skyway/eclwebrtc-android-sdk-tutorial)

## SDKをプロジェクトに追加する

SDKのバイナリファイルを配置します。  

1. SDKを[こちら](https://github.com/nttcom/SkyWay-Android-SDK/releases/latest)からダウンロード
2. 開発用プロジェクトに`app/libs`ディレクトリを作成する
3. ZIPファイルを解凍後、`eclwebrtc.arr`を、`app/libs`ディレクトリ直下に配置
4. 開発用プロジェクトをAndroid Studio等のIDEで開き、ビルドツールGradle等の設定を済ませる

<figure class="figure">
  <img src="{{ site.rootdir[page.lang] }}images/android-tutorial-studio1.png" class="figure-img img-fluid rounded" alt="SDKをプロジェクトに追加したところ">
  <figcaption class="figure-caption">SDKをプロジェクトに追加したところ</figcaption>
</figure>

プロジェクトに含まれる主要ファイルの説明は以下のとおりです。

- app/src/main/java/com.ntt.ecl.webrtc.tutorial_sdk_android/MainActivity
  - 今回のチュートリアルで主に必要なコードを追記していくコントローラー
- app/src/main/java/com.ntt.ecl.webrtc.tutorial_sdk_android/PeerListDialogFragment
  - PeerID一覧を表示するListDialogを生成するコントローラー
  - 完成版が同梱されており、今回のチュートリアルでは触れません
- res/**
  - リソースやレイアウトについては完成版が同梱されており、今回のチュートリアルでは触れません

## ヘッダーファイルインポート

チュートリアルでは既に記載済みですが、SDK用のimport文を追記します。

*Java*
{: .lang}

```java
import io.skyway.Peer.Browser.Canvas;
import io.skyway.Peer.Browser.MediaConstraints;
import io.skyway.Peer.Browser.MediaStream;
import io.skyway.Peer.Browser.Navigator;
import io.skyway.Peer.CallOption;
import io.skyway.Peer.MediaConnection;
import io.skyway.Peer.OnCallback;
import io.skyway.Peer.Peer;
import io.skyway.Peer.PeerError;
import io.skyway.Peer.PeerOption;
```

## マニフェストファイルへの追加

SDKの機能を利用するために、内容をマニフェストファイルに追記してください。

*Java*
{: .lang}

```java
<uses-feature android:name="android.hardware.camera" />
<uses-feature android:name="android.hardware.camera.autofocus" />
<uses-feature android:glEsVersion="0x00020000" android:required="true" />

<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
```

## ビルドする

実機を接続しビルドします。実機での処理は途中で止まりますが、ビルドできることを確認してください。

## ECLWebRTCサーバへの接続
{: #connect-server }

### 宣言

MainActivityにプログラム中で利用する定数を追記してください。  
`API_KEY`には先程ダッシュボードで発行したAPIキーを指定してください。  
`DOMAIN`には先程ダッシュボードで指定した利用可能ドメイン名のうち一つを指定してください。

*Java*
{: .lang}

```java
//
// Set your APIkey and Domain
//
private static final String API_KEY = "apikey";
private static final String DOMAIN = "domain";

```

プログラム中で利用するインスタンス変数の宣言を追記してください。  
- `_peer` : Peerオブジェクト
- `_localStream` : 自分自身のMediaStreamオブジェクト
- `_remoteStream` : 相手のMediaStreamオブジェクト
- `_mediaConnection` : MediaConnectionオブジェクト

*Java*
{: .lang}

```java
//
// declaration
//
private Peer			_peer;
private MediaStream		_localStream;
private MediaStream		_remoteStream;
private MediaConnection	_mediaConnection;

private String			_strOwnId;
private boolean			_bConnected;

private Handler			_handler;
```

### UI関連処理

onCreateメソッドの冒頭で、メインウィンドウのタイトルを非表示に設定し、UIスレッド処理のためのHandlerを生成する処理を追記してください。

*Java*
{: .lang}

```java
Window wnd = getWindow();
wnd.addFlags(Window.FEATURE_NO_TITLE);
setContentView(R.layout.activity_main);

_handler = new Handler(Looper.getMainLooper());
final Activity activity = this;
```

### Peerオブジェクトの作成

続けて、Peerオブジェクトを作成するための処理を追記してください。  
Peerオブジェクトには、PeerOptionクラスを利用し、APIキー、ドメイン名、デバッグレベルを指定してください。

*Java*
{: .lang}

```java
//
// Initialize Peer
//
PeerOption option = new PeerOption();
option.key = API_KEY;
option.domain = DOMAIN;
option.debug = Peer.DebugLevelEnum.ALL_LOGS;
_peer = new Peer(this, option);
```

Peerオブジェクトで指定可能なその他のオプションについては、[APIリファレンス]()をご覧ください。

## 接続成功・失敗・切断時の処理
{: #eventlistener }

続けて、Peerオブジェクトに必要なイベントコールバックを追記してください。

### OPENイベント

ECLWebRTCのシグナリングサーバと接続し、利用する準備が整ったら発火します。ECLWebRTCのすべての処理はこのイベント発火後に利用できるようになります。  
PeerIDと呼ばれるクライアント識別用のIDがシグナリングサーバで発行され、コールバックイベントで取得できます。PeerIDはクライアントサイドで指定することも出来ます。  
以下の処理では、PeerIDが発行されたら、その情報をUIに表示する処理を行っています。

*Java*
{: .lang}

```java
//
// Set Peer event callbacks
//

// OPEN
_peer.on(Peer.PeerEventEnum.OPEN, new OnCallback() {
  @Override
  public void onCallback(Object object) {

    // Show my ID
    _strOwnId = (String) object;
    TextView tvOwnId = (TextView) findViewById(R.id.tvOwnId);
    tvOwnId.setText(_strOwnId);
    
    }
});
```

### カメラ映像、マイク音声の取得

OPENイベントのコールバック内に、カメラ映像とマイク音声を取得するための処理を追記してください。  

#### 権限リクエスト(1)

カメラ、マイクにアクセスするための権限があるかどうかのチェックを行い、無ければ権限を要求します。  
権限がある場合は、startLocalStreamメソッドを実行してカメラ映像とマイク音声を取得します。

*Java*
{: .lang}

```java
// Request permissions
if (ContextCompat.checkSelfPermission(activity,
    Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED && ContextCompat.checkSelfPermission(activity,
    Manifest.permission.RECORD_AUDIO) != PackageManager.PERMISSION_GRANTED) {
  ActivityCompat.requestPermissions(activity,new String[]{Manifest.permission.CAMERA, Manifest.permission.RECORD_AUDIO},0);
}
else {

  // Get a local MediaStream & show it
  startLocalStream();
}
```

#### 権限リクエスト(2)

requestPermissionsメソッドで権限が取得できた場合は、startLocalStreamメソッドを実行してカメラ映像とマイク音声を取得します。

*Java*
{: .lang}

```java
@Override
public void onRequestPermissionsResult(int requestCode, String permissions[], int[] grantResults) {
    switch (requestCode) {
        case 0: {
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                startLocalStream();
            }
    else {
                Toast.makeText(this,"Failed to access the camera and microphone.\nclick allow when asked for permission.", Toast.LENGTH_LONG).show();
            }
            break;
        }
    }
}
```

#### オプション設定

MediaConstraintsクラスで映像・音声取得に関するオプションを設定可能です。  
ここで設定している項目の説明は以下のとおりです。 
- `maxWidth`: キャプチャ映像の横サイズ上限（単位：ピクセル）
- `maxHeight`: キャプチャ映像の縦サイズ上限（単位：ピクセル）
- `cameraPosition`: 使用するカメラの選択（ディフォルトは`FRONT`）
  - カメラポジションは前面カメラ（`FRONT`）と背面カメラ（`BACK`）が選択可能

これ以外の項目については、[APIリファレンス]()をご覧ください。  

*Java*
{: .lang}

```java
//
// Get a local MediaStream & show it
//
void startLocalStream() {
  MediaConstraints constraints = new MediaConstraints();
  constraints.maxWidth = 960;
  constraints.maxHeight = 540;
  constraints.cameraPosition = MediaConstraints.CameraPositionEnum.FRONT;

}
```

#### 取得と再生

Navigatorクラスの初期化を行い、getUserMediaメソッドの引数に`constraints`を指定して実行することで、自分の映像（ローカルストリーム）が取得できます。  
取得したMediaStreamオブジェクトに、addVideoRendererメソッドを利用して、ビデオレンダラー(表示用のCanvasオブジェクト)を割り当てます。

*Java*
{: .lang}

```java
//
// Get a local MediaStream & show it
//
void startLocalStream() {

  // 省略

  Navigator.initialize(_peer);
  _localStream = Navigator.getUserMedia(constraints);
  Canvas canvas = (Canvas) findViewById(R.id.svLocalView);
  _localStream.addVideoRenderer(canvas,0);
}       
```


#### ERRORイベント

何らかのエラーが発生した場合に発火します。エラーが発生したら、ログにその内容を表示できるようにします。

*Java*
{: .lang}

```java
// ERROR
_peer.on(Peer.PeerEventEnum.ERROR, new OnCallback() {
  @Override
  public void onCallback(Object object) {
    PeerError error = (PeerError) object;
    Log.d(TAG, "[On/Error]" + error);
  }
});
```

#### CLOSEイベント

Peer（相手）との接続が切れた際に発火します。チュートリアルでは特に処理は行いません。

*Java*
{: .lang}

```java
// CLOSE
_peer.on(Peer.PeerEventEnum.CLOSE, new OnCallback()	{
  @Override
  public void onCallback(Object object) {
    Log.d(TAG, "[On/Close]");
  }
});
```

#### DISCONNECTEDイベント

シグナリングサーバとの接続が切れた際に発火します。チュートリアルでは特に処理は行いません。

*Java*
{: .lang}

```java
// DISCONNECTED
_peer.on(Peer.PeerEventEnum.DISCONNECTED, new OnCallback() {
  @Override
  public void onCallback(Object object) {
    Log.d(TAG, "[On/Disconnected]");
  }
});
```

### 発信・切断・着信処理
{: #call-event }

発信、切断、着信をするための処理を追記してください。

#### 発信処理

相手のPeerIDを選択して発信します。

##### 発信先のPeerIDを取得(1)

Make Callボタンをタップし未接続状態であれば、showPeerIDsメソッドを実行します。

*Java*
{: .lang}

```java
// Set GUI event listner for Button (make/hang up a call)
Button btnAction = (Button) findViewById(R.id.btnAction);
btnAction.setEnabled(true);
btnAction.setOnClickListener(new View.OnClickListener()	{
  @Override
  public void onClick(View v)	{
    v.setEnabled(false);

    if (!_bConnected) {

      // Select remote peer & make a call
      showPeerIDs();
    }
    else {

    }

    v.setEnabled(true);
  }
});
```

##### 発信先のPeerIDを取得(2)

showPeerIDsメソッドでは、listAllPeersメソッドを利用して、接続先のPeerID一覧を取得します。取得した一覧から自分自身のIDを削除し、`PeerListDialogFragment`で一覧表示します。

*Java*
{: .lang}

```java
//
// Listing all peers
//
void showPeerIDs() {
  if ((null == _peer) || (null == _strOwnId) || (0 == _strOwnId.length())) {
    Toast.makeText(this, "Your PeerID is null or invalid.", Toast.LENGTH_SHORT).show();
    return;
  }

  // Get all IDs connected to the server
  final Context fContext = this;
  _peer.listAllPeers(new OnCallback() {
    @Override
    public void onCallback(Object object) {
      if (!(object instanceof JSONArray)) {
        return;
      }

      JSONArray peers = (JSONArray) object;
      ArrayList<String> _listPeerIds = new ArrayList<>();
      String peerId;

      // Exclude my own ID
      for (int i = 0; peers.length() > i; i++) {
        try {
          peerId = peers.getString(i);
          if (!_strOwnId.equals(peerId)) {
            _listPeerIds.add(peerId);
          }
        } catch(Exception e){
          e.printStackTrace();
        }
      }

      // Show IDs using DialogFragment
      if (0 < _listPeerIds.size()) {
        FragmentManager mgr = getFragmentManager();
        PeerListDialogFragment dialog = new PeerListDialogFragment();
        dialog.setListener(
          new PeerListDialogFragment.PeerListDialogFragmentListener() {
            @Override
            public void onItemClick(final String item) {
              _handler.post(new Runnable() {
                @Override
                public void run() {
                  onPeerSelected(item);
                }
              });
            }
          });
        dialog.setItems(_listPeerIds);
        dialog.show(mgr, "peerlist");
      }
      else{
        Toast.makeText(fContext, "PeerID list (other than your ID) is empty.", Toast.LENGTH_SHORT).show();
      }
    }
  });

}
```

##### 発信

`PeerListDialogFragment`でPeerIDが選択されたら、onPeerSelectedメソッドが呼ばれます。相手のPeerID、自分自身のlocalStreamを引数にセットし発信します。  
発信後は必要なイベントコールバックをセットします。`setMediaCallbacks`の中身については後ほど説明します。

*Java*
{: .lang}

```java
//
// Create a MediaConnection
//
void onPeerSelected(String strPeerId) {
  if (null == _peer) {
    return;
  }

  if (null != _mediaConnection) {
    _mediaConnection.close();
  }

  CallOption option = new CallOption();
  _mediaConnection = _peer.call(strPeerId, _localStream, option);

  if (null != _mediaConnection) {
    setMediaCallbacks();
    _bConnected = true;
  }

  updateActionButtonTitle();
}
```

#### 切断処理

相手との接続を切断します。

##### MediaConnectionの切断

actionButton（Make Callボタン）をタップし接続中であれば、MediaConnectionオブジェクトのCloseメソッドで該当するMediaConnectionを切断し、後ほど説明する`closeRemoteStream`で必要な処理を行います。

*Java*
{: .lang}

```java
// Set GUI event listner for Button (make/hang up a call)
Button btnAction = (Button) findViewById(R.id.btnAction);
btnAction.setEnabled(true);
btnAction.setOnClickListener(new View.OnClickListener()	{
  @Override
  public void onClick(View v)	{
    v.setEnabled(false);

    if (!_bConnected) {

      // 省略

    }
    else {

      // Hang up a call
      closeRemoteStream();
      _mediaConnection.close();

    }

    v.setEnabled(true);
  }
});
```

##### MediaStreamのクローズ

MediaConnectionオブジェクトのCloseメソッドが実行された後は、removeVideoRendererメソッドを利用して該当のMediaStreamに割り当てられた、ビデオレンダラーを取り外します。

*Java*
{: .lang}

```java
//
// Close a remote MediaStream
//
void closeRemoteStream(){
  if (null == _remoteStream) {
    return;
  }

  Canvas canvas = (Canvas) findViewById(R.id.svRemoteView);
  _remoteStream.removeVideoRenderer(canvas,0);
  _remoteStream.close();
}
```

#### 着信処理

相手から接続要求がきた場合に応答します。   
相手から接続要求が来た場合は`Peer.PeerEventEnum.CALL`が発火します。引き数として相手との接続を管理するためのMediaConnectionオブジェクトが取得できるため、answerメソッドを実行し接続要求に応答します。  
この時に、自分自身の`_localStream`をセットすると、相手に映像・音声を送信することが出来るようになります。  
発信時の処理と同じく`setMediaCallbacks`を実行し、イベントをセットします。中身については後ほど説明します。

*Java*
{: .lang}


```java
// CALL (Incoming call)
_peer.on(Peer.PeerEventEnum.CALL, new OnCallback() {
  @Override
  public void onCallback(Object object) {
    if (!(object instanceof MediaConnection)) {
      return;
    }

    _mediaConnection = (MediaConnection) object;
    setMediaCallbacks();
    _mediaConnection.answer(_localStream);

    _bConnected = true;
    updateActionButtonTitle();
  }
});
```


#### MediaConnectionオブジェクトに必要なイベント

MediaConnectionオブジェクトに必要なイベントコールバックです。  
`MediaConnection.MediaEventEnum.STREAM`は相手の映像・音声を受信した際に発火します。  
コールバック内では、UI上の接続ステータスのアップデート処理と、取得した相手のMediaStreamオブジェクトにaddVideoRendererメソッドを利用して、ビデオレンダラーを割り当てます。

*Java*
{: .lang}

```java
//
// Set callbacks for MediaConnection.MediaEvents
//
void setMediaCallbacks() {

  _mediaConnection.on(MediaConnection.MediaEventEnum.STREAM, new OnCallback() {
    @Override
    public void onCallback(Object object) {
      _remoteStream = (MediaStream) object;
      Canvas canvas = (Canvas) findViewById(R.id.svRemoteView);
      _remoteStream.addVideoRenderer(canvas,0);
    }
  });

}
```

`SKW_MEDIACONNECTION_EVENT_CLOSE`は相手がメディアコネクションの切断処理を実行し、実際に切断されたら発火します。  
コールバック内では、必要な切断処理を実行します。`closeRemoteStream`、`updateActionButtonTitle`の中身については後ほど説明します。

*Java*
{: .lang}

```java
//
// Set callbacks for MediaConnection.MediaEvents
//
void setMediaCallbacks() {

  // 省略

  _mediaConnection.on(MediaConnection.MediaEventEnum.CLOSE, new OnCallback()	{
    @Override
    public void onCallback(Object object) {
      closeRemoteStream();
      _bConnected = false;
      updateActionButtonTitle();
    }
  });

}
```

`MediaConnection.MediaEventEnum.ERROR`は何らかのエラーが発生した際に発火します。エラーが発生したら、ログにその内容を表示できるようにします。

*Java*
{: .lang}

```java
//
// Set callbacks for MEDIACONNECTION_EVENTs
//
- (void)setMediaCallbacks {

    // 省略
    
		_mediaConnection.on(MediaConnection.MediaEventEnum.ERROR, new OnCallback()	{
			@Override
			public void onCallback(Object object) {
				PeerError error = (PeerError) object;
				Log.d(TAG, "[On/MediaError]" + error);
			}
		});

}
```

### Activityライフサイクルに必要な処理

Activityライフサイクルに必要な処理を追記してください。  

#### Overrideメソッドの処理

Ovverrideされたメソッドに必要な処理を追記してください。  
onDestoryメソッド内では、Peerオブジェクトを破棄するために`destoryPeer`を実行します。中身については後ほど説明します。

*Java*
{: .lang}

```java
@Override
protected void onStart() {
  super.onStart();

  // Disable Sleep and Screen Lock
  Window wnd = getWindow();
  wnd.addFlags(WindowManager.LayoutParams.FLAG_TURN_SCREEN_ON);
  wnd.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
}

@Override
protected void onResume() {
  super.onResume();

  // Set volume control stream type to WebRTC audio.
  setVolumeControlStream(AudioManager.STREAM_VOICE_CALL);
}

@Override
protected void onPause() {
  // Set default volume control stream type.
  setVolumeControlStream(AudioManager.USE_DEFAULT_STREAM_TYPE);
  super.onPause();
}

@Override
protected void onStop()	{
  // Enable Sleep and Screen Lock
  Window wnd = getWindow();
  wnd.clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
  wnd.clearFlags(WindowManager.LayoutParams.FLAG_TURN_SCREEN_ON);
  super.onStop();
}

@Override
protected void onDestroy() {
  destroyPeer();
  super.onDestroy();
}
```

#### Activity破棄時の処理

Activityが破棄されるタイミングで必要な処理を追記してください。  
ここで実行されている処理の概要は以下のとおりです。  

- リモート/ローカルのメディアストリームのクローズ
- MediaConnectionオブジェクトに関するコールバックイベントの開放(`unsetMediaCallbacks`)
- Navigatorオブジェクトの初期化
- Peerオブジェクトに関するコールバックイベントの開放(`unsetPeerCallback`)
- シグナリングサーバとの切断とPeerオブジェクトの破棄

`unsetMediaCallbacks`、`unsetPeerCallback`の中身については後ほど説明します。

*Java*
{: .lang}

```java
//
// Clean up objects
//
private void destroyPeer() {
  closeRemoteStream();

  if (null != _localStream) {
    Canvas canvas = (Canvas) findViewById(R.id.svLocalView);
    _localStream.removeVideoRenderer(canvas,0);
    _localStream.close();
  }

  if (null != _mediaConnection)	{
    if (_mediaConnection.isOpen()) {
      _mediaConnection.close();
    }
    unsetMediaCallbacks();
  }

  Navigator.terminate();

  if (null != _peer) {
    unsetPeerCallback(_peer);
    if (!_peer.isDisconnected()) {
      _peer.disconnect();
    }

    if (!_peer.isDestroyed()) {
      _peer.destroy();
    }

    _peer = null;
  }
}
```


#### コールバックイベントの開放処理

MediaConnectionオブジェクト、Peerオブジェクトに関するコールバックイベントの開放処理を追記してください。  

*Java*
{: .lang}

```java
//
// Unset callbacks for PeerEvents
//
void unsetPeerCallback(Peer peer) {
  if(null == _peer){
    return;
  }

  peer.on(Peer.PeerEventEnum.OPEN, null);
  peer.on(Peer.PeerEventEnum.CONNECTION, null);
  peer.on(Peer.PeerEventEnum.CALL, null);
  peer.on(Peer.PeerEventEnum.CLOSE, null);
  peer.on(Peer.PeerEventEnum.DISCONNECTED, null);
  peer.on(Peer.PeerEventEnum.ERROR, null);
}

//
// Unset callbacks for MediaConnection.MediaEvents
//
void unsetMediaCallbacks() {
  if(null == _mediaConnection){
    return;
  }

  _mediaConnection.on(MediaConnection.MediaEventEnum.STREAM, null);
  _mediaConnection.on(MediaConnection.MediaEventEnum.CLOSE, null);
  _mediaConnection.on(MediaConnection.MediaEventEnum.ERROR, null);
}
```

### UIのセットアップ
{: #setup-ui }

UI関連の必要な処理を追記してください。  
actionButtonはトグルで利用するため、接続状態に応じてラベルを張り替えます。updateActionButtonTitleメソッドの中身を追記してください。

*Java*
{: .lang}

```java
//
// Update actionButton title
//
void updateActionButtonTitle() {
  _handler.post(new Runnable() {
    @Override
    public void run() {
      Button btnAction = (Button) findViewById(R.id.btnAction);
      if (null != btnAction) {
        if (false == _bConnected) {
          btnAction.setText("Make Call");
        } else {
          btnAction.setText("Hang up");
        }
      }
    }
  });
}
```

### カメラの切り替え
{: #switch-camera}

最後にカメラの切り替え処理を追記してください。  
switchCameraメソッドで、該当メディアストリームで利用しているカメラ位置をFRONT、BACKで交互に切り替えます。

*Java*
{: .lang}

```java
//
// Action for switchCameraButton
//
Button switchCameraAction = (Button)findViewById(R.id.switchCameraAction);
switchCameraAction.setOnClickListener(new View.OnClickListener() {
  @Override
  public void onClick(View v)	{
    if(null != _localStream){
      Boolean result = _localStream.switchCamera();
      if(true == result)	{
        //Success
      }
      else {
        //Failed
      }
    }

  }
});
```

### 動作確認
{: #testing }

実機でビルドし動作を確認して下さい。listAllPeersで取得したPeerIDに対して発信し、相手とビデオチャットができれば成功です。実機が1台しかない場合は、JavaScript SDKで実装したWebアプリケーションとの相互接続で動作を確認することが出来ます。
