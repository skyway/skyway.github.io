---
layout: default
title: JavaScript SDK
lang: ja
---

# JavaScript SDK

## チュートリアル

<!-- http://qiita.com/yusuke84/items/54dce88f9e896903e64f より -->

### 作るもの

本編で作成する最終的なアプリのデモをお見せします。

- https://skyway.github.io/skyway-handson-js/

### STEP0 SkyWayの開発者登録をしてみよう

- https://skyway.io/ds/registration

<img src="https://qiita-image-store.s3.amazonaws.com/0/6651/32f83db9-9e96-52bd-1450-cdb34f78b93f.png" class="img-fluid" alt="開発者登録の画面">

#### 登録に必要な情報を入力

|項目|内容|
|:--|:--|
|名前|フルネームでお願いします|
|メールアドレス|連絡の取れるアドレスを入れて下さい<BR>メールアドレスがID代わりになります|
|パスワード|パスワードを設定して下さい|
|SkyWayを利用するドメイン|許可するドメインを設定して下さい<BR>詳しくは次ページ|

#### 登録完了後ダッシュボードへログイン

- アプリ開発時にここで発行されたAPIキーを設定する

<img src="https://qiita-image-store.s3.amazonaws.com/0/6651/d9eacfae-cfee-5a0d-da9b-61c0afcce153.png" class="img-fluid" alt="skywaydashboard.png">

#### 「SkyWayを利用するドメイン」について

- SkyWayのAPIキーにはドメイン認証がかかっています
  - JavaScript SDKの場合は、SkyWayを利用したWebアプリをホスティングするWebサイトのドメイン名を設定
  - iOS / Android SDK同士の場合は、任意の文字列を設定
  - `skyway.js`を利用する場合、利用可能ドメインの指定にワイルドカード（Ex: *.xxx.co.jp）が利用できます。
- ハンズオン用のAPIキーには *localhost* を設定

#### SkyWayのあれこれ

- APIキーは1アカウント最大20個まで発行可能
- ドメインについては複数登録可能、自由に変更可能
- TURNサーバを利用する場合は事前申請が必要
  - https://skyway.io/ds/turnrequest

### STEP1 ブラウザでカメラ、マイクを利用してみよう

- getUserMediaというAPIを利用
  - Promiseによる非同期処理を行うAPI

```js

navigator.mediaDevices.getUserMedia({video: true, audio: true})
    .then(function (stream) { // success
    }).catch(function (error) { // error
    return;
});

```

#### getUserMediaに必要な処理を追加する

- `script.js`に追記して下さい

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

#### 実装する際のポイント1

- VideoとAudioの選択

`{video: true, audio: true}`

- キャプチャサイズの設定（一例/後ほど利用します）

`{ audio: true, video: { width: 640, height: 480 } }`

- フレームレートの設定（一例/Chrome限定）

`{ audio: true, video: { frameRate: { min: 10, max: 15 } } }`

#### 実装する際のポイント2

- srcObject
  - Chrome M52 , Firefox 42（Prefixが削除）で対応済み
  - Stream Objectを直接設定可能
  - VIDEO、AUDIO Elementで利用可能

#### 使用する上の注意点

- 許可を求めるダイアログが出てくる
  - 複数のカメラやマイクが接続されている場合は、適切なものを選択する必要あり

Chrome

<img src="https://qiita-image-store.s3.amazonaws.com/0/6651/7e985821-901b-33eb-0f57-2fc4b677f0d8.png" class="img-fluid" alt="Chromeのダイアログ">

Firefox

<img src="https://qiita-image-store.s3.amazonaws.com/0/6651/21d50fdc-e86a-d301-98f1-2a8df20c7608.png" class="img-fluid" alt="Firefoxのダイアログ">

#### 使用する上の注意点

- ホスティング先に注意

|スキーマ\ブラウザ|Chrome|Firefox|
|:--|:--:|:--:|
|http://localhost/|◯|◯|
|http://domain.jp|x|◯|
|file://index.html|x|◯|
|https://domain.jp|◯|◯|

### STEP2 1:1のビデオチャットを実装してみよう

SkyWayを利用して1:1のビデオチャットを実現してみます。

#### SkyWayのSDKを利用する

今回のハンズオンのHTMLには既に記載済みですが、以下の通りScript要素でSDKをインポートします。

```HTML
<script type="text/javascript" src="https://cdn.skyway.io/skyway.js"></script>
```

#### Peerオブジェクトを作成する

- `script.js`に追記して下さい

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

#### 実装する際のポイント

- ダッシュボードで払い出したAPIキーを設定する
- デバッグレベル（console log）で表示する情報を規定する
- 下記以外のオプションパラメータについては[APIマニュアル](http://nttcom.github.io/skyway/docs/#peer)を参照
  - peer.jsを基本的には踏襲しています

```js
    peer = new Peer({
        key: 'apikey',
        debug: 3
    });
```

#### PeerオブジェクトのEventListenerを追加する

- `script.js`に追記して下さい

```js
    peer.on('open', function(){
        $('#my-id').text(peer.id);
    });

    peer.on('call', function(call){
        call.answer(localStream);
        setupCallEventHandlers(call);
    });

    peer.on('error', function(err){
        alert(err.message);
    });
```

#### 実装する際のポイント（１）

- Openイベント
  - SkyWayのシグナリングサーバと接続し、利用する準備が整ったら発火します
  - 今回は、PeerIDと呼ばれるクライアント識別用のIDをシグナリングサーバで発行し、その情報をUIに表示する処理を行っています

```js
    peer.on('open', function(){
        $('#my-id').text(peer.id);
    });
```

#### 実装する際のポイント（２）

- Callイベント
  - 相手から接続要求がきた場合に発火します
  - 相手との接続を管理するためのCallオブジェクトが取得できるため、それを利用して必要な処理を行います
      - Answerメソッドを実行し、接続要求に応答します。この時に、自分自身のlocalStreamをセットすると、相手に映像・音声を送信することができるようになります
      - Callオブジェクトを利用したEventListenerをセットします
          - setupCallEventHandlers()の中身については後ほど説明

```js
    peer.on('call', function(call){
        call.answer(localStream);
        setupCallEventHandlers(call);
    });
```

#### 実装する際のポイント（３）

- Errorイベント
  - 何らかのエラーが発生した場合に発火します

```js
    peer.on('error', function(err){
        alert(err.message);
    });
```

#### 発信、切断処理の為の処理を追加する

- `script.js`に追記して下さい

```js
    $('#make-call').submit(function(e){
        e.preventDefault();
        const call = peer.call($('#peer-id').val(), localStream);
        setupCallEventHandlers(call);
    });

    $('#end-call').click(function(){
        existingCall.close();
    });
```

#### 実装する際のポイント（１）

- 発信処理
  - `peer.call`で相手のPeerID、自分自身のlocalStreamを引数にセットし発信します
      - PeerIDは電話番号のようなもので、何らかの方法で入手する必要があります
  - Callオブジェクトが返ってくるため、必要なEventListenerをセットします
      - setupCallEventHandlers()の中身については後ほど説明

```js
    $('#make-call').submit(function(e){
        e.preventDefault();
        const call = peer.call($('#peer-id').val(), localStream);
        setupCallEventHandlers(call);
    });
```

#### 実装する際のポイント（２）

- 切断処理
  - Callオブジェクトのclose()メソッドを実行します
  - 先程生成したCallオブジェクトは`existingCall`として保持しておきます
      - オブジェクト保持はsetupCallEventHandlers()の中で実行します

```js
    $('#end-call').click(function(){
        existingCall.close();
    });
```

#### CallオブジェクトのEventListenerを追加する

- `script.js`に追記して下さい

```js
    function setupCallEventHandlers(call){
        if (existingCall) {
            existingCall.close();
        };

        existingCall = call;

        call.on('stream', function(stream){
            addVideo(call,stream);
            setupEndCallUI();
            $('#connected-peer-id').text(call.remoteId);
        });

        call.on('close', function(){
            removeVideo(call.peer);
            setupMakeCallUI();
        });

    }
```

#### 実装する際のポイント（１）

- 今回作るアプリでは既に接続中の場合は一旦既存の接続を切断し、後からきた接続要求を優先する
  - アプリの仕様次第

```js
        if (existingCall) {
            existingCall.close();
        };

        existingCall = call;
```

#### 実装する際のポイント（２）

- Streamイベント
  - 相手の映像・音声を受信した際に発火します
  - 取得したStreamオブジェクトをVIDEO要素にセットします
      - addVideo()の中身については後ほど説明
  - UI関連の処理を実施します
      - 切断用のボタンを表示

```js
        call.on('stream', function(stream){
            addVideo(call,stream);
            setupEndCallUI();
            $('#connected-peer-id').text(call.remoteId);
        });
```

#### 実装する際のポイント（３）

- Closeイベント
  - Callオブジェクトのclose()メソッドが実行され切断処理が完了したら発火します
  - close()メソッドを実行した側、実行された側それぞれで発火します
  - 切断時にVIDEO要素を削除します
      - `call.peer`で切断先のPeerIDを取得できます
      - removeVideo()の中身については後ほど説明
  - UI関連の処理を実施します
      - 接続用のボタン、PeerIDを入力するInputボックスを用意

```js
        call.on('close', function(){
            removeVideo(call.peer);
            setupMakeCallUI();
        });
```

#### 必要な関数を準備する

- `script.js`に追記して下さい

```js
    function addVideo(call,stream){
        const videoDom = $('<video autoplay>');
        videoDom.attr('id',call.peer);
        videoDom.get(0).srcObject = stream;
        $('.remoteVideosContainer').append(videoDom);
    }

    function removeVideo(peerId){
        $('#'+peerId).remove();
    }

    function setupMakeCallUI(){
        $('#make-call').show();
        $('#end-call').hide();
    }
    
    function setupEndCallUI() {
        $('#make-call').hide();
        $('#end-call').show();
    }
```

#### 実装する際のポイント（１）

- VIDEO要素のsrcObjectプロパティにStreamオブジェクトをセットすることで再生できます
  - 削除する処理のことを考えて、idプロパティに`call.peer(PeerID)`をセットします

```js
function addVideo(call,stream){
        const videoDom = $('<video autoplay>');
        videoDom.attr('id',call.peer);
        videoDom.get(0).srcObject = stream;
        $('.remoteVideosContainer').append(videoDom);
    }
```

#### 実装する際のポイント（２）

- 切断された（した）相手のVIDEO要素をPeerIDを元に削除します

```js
    function removeVideo(peerId){
        $('#'+peerId).remove();
    }
```

#### 実装する際のポイント（３）

- UI関連処理を実装します

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

#### 1:1のビデオチャットを試してみる

1. ２つのブラウザタブでアプリを開く
2. 片方の`Your id`を片方のInputボックスにコピペしてCallボックスをクリックする
 
### STEP3 SkyWayのroom機能を利用して複数人によるビデオチャットを実装してみよう

- WebRTCは1:1の通信をP2Pでやることを前提に作られていますが、それを応用することで複数人で通信することが可能になります
- SkyWayではroom機能を提供し、より直感的に複数人によるビデオチャット等を実現できるようになっています
- STEP2で作成したコードを修正します

#### getUserMediaのキャプチャサイズを変更する

- `script.js`を修正して下さい

```js
    let constraints = {
        video: {},
        audio: true
    };
    constraints.video.width = 320;
    constraints.video.height = 240;

    navigator.mediaDevices.getUserMedia(constraints)
        .then(function (stream) { // success
            $('#myStream').get(0).srcObject = stream;
            localStream = stream;
        }).catch(function (error) { // error
        console.error('mediaDevice.getUserMedia() error:', error);
        return;
    });
```

#### 実装する際のポイント（１）

- 640x480に制限する
  - 複数人のビデオチャットの場合、ブラウザに掛かる負荷が増えます。メディアのキャプチャサイズを制限し負荷を減らすことが出来ます

```js
    let constraints = {
        video: {},
        audio: true
    };
    constraints.video.width = 640;
    constraints.video.height = 480;

    navigator.mediaDevices.getUserMedia(constraints)
     :
     :
```

#### 発信処理をRoomへの参加処理に変更する

- `script.js`を修正して下さい

```js
    $('#make-call').submit(function(e){
        e.preventDefault();
        let roomName = $('#join-room').val();
        if (!roomName) {
            return;
        }
        const　call = peer.joinRoom(roomName, {mode: 'sfu', stream: localStream});
        setupCallEventHandlers(call);
    });
```

#### 実装する際のポイント（１）

- 接続先のPeerIDの代わりに参加するRoom名を入力してもらい、そのRoom名を引数に指定し、`peer.joinRoom`メソッドを実行する
  - modeは`sfu`と`mesh`から選択可能

```js
let roomName = $('#join-room').val();
if (!roomName) {
  return;
}
const　call = peer.joinRoom(roomName, {mode: 'sfu', stream: localStream});
```

#### 実装する際のポイント（２）

- SFUとMeshの違い
  - SFUはサーバに対して自分自身のメディアストリームを送信する
  - Meshは参加者全員に対してメディアストリームを送信する
  - 受信はどちらとも参加者分だけ行う
  - SFUの方が端末の負荷が軽い

<img width="819" alt="sfu_mesh.png" src="https://qiita-image-store.s3.amazonaws.com/0/6651/ae36eaf0-a33b-5b2c-9c6e-e7f9de3afb90.png">

#### CallオブジェクトのEventListenerにRoom機能を実現するためのイベントを追加する

- `script.js`を修正して下さい

```js
    function setupCallEventHandlers(call){
        if (existingCall) {
            existingCall.close();
        };

        existingCall = call;
        setupEndCallUI();
        $('#room-id').text(call.name);

        call.on('stream', function(stream){
            addVideo(stream);
        });

        call.on('peerLeave', function(peerId){
            removeVideo(peerId);
        });

        call.on('close', function(){
            removeAllRemoteVideos();
            setupMakeCallUI();
        });

    }
```

#### 実装する際のポイント（１）

- 1:1の時はStreamイベント内部にあった処理を外に出す
  - Room機能を利用する場合はRoomに参加した時点で通信開始となるため

```js
        setupEndCallUI();
        $('#room-id').text(call.name);
```

#### 実装する際のポイント（２）

- Room機能を利用するとStreamオブジェクトにPeerIDが格納されるため、addVideoの第一引数に指定したCallオブジェクトは省略できます
    - addVideo()の中身については後ほど

```js
        call.on('stream', function(stream){
            addVideo(stream);
        });
```

#### 実装する際のポイント（３）

- peerLeaveイベント
  - Roomから参加者が抜けたら発火します
  - 抜けた参加者のPeerIDを取得できるため、そのIDを利用して対応するVIDEO要素を削除します

```js
        call.on('peerLeave', function(peerId){
            removeVideo(peerId);
        });
```

#### 実装する際のポイント（４）

- Closeイベント
  - close()メソッドを実行し、自分自身がRoomから抜けた場合に発火します
  - 複数参加者がいる場合があるため、全てのVIDEO要素を削除します
      - removeAllRemoteVideos()の中身については後ほど

```js
        call.on('close', function(){
            removeAllRemoteVideos();
            setupMakeCallUI();
        });
```

#### addVideoを修正しremoveAllRemoteVideosを追加する

- `script.js`を修正して下さい

```js
    function addVideo(stream){
        const videoDom = $('<video autoplay>');
        videoDom.attr('id',stream.peerId);
        videoDom.get(0).srcObject = stream;
        $('.remoteVideosContainer').append(videoDom);
    }

   :
   :

    function removeAllRemoteVideos(){
        $('.remoteVideosContainer').empty();
    }
```

#### 実装する際のポイント（１）

- stream.peerIdでPeerIDが取得できます

```js
    function addVideo(stream){
        const videoDom = $('<video autoplay>');
        videoDom.attr('id',stream.peerId);
        videoDom.get(0).srcObject = stream;
        $('.remoteVideosContainer').append(videoDom);
    }
```

#### 実装する際のポイント（２）

- JQueryの機能を使いVIDEO要素全てを削除します

```js
    function removeAllRemoteVideos(){
        $('.remoteVideosContainer').empty();
    }
```

#### UI上の文言を修正する

- `index.html`を修正して下さい

```HTML
<div class="myControllerContainer">
    <p>Your id: <span id="my-id">...</span></p>
    <form id="make-call">
        <input type="text" placeholder="Join room..." id="join-room">
        <button type="submit">Join</button>
    </form>
    <div id="end-call">
        <p>Currently in room <span id="room-id">...</span></p>
        <button>Leave</button>
    </div>
</div>
```

#### 実装する際のポイント（１）

- CallからJoin roomへ変更します

```HTML
        <input type="text" placeholder="Join room..." id="join-room">
        <button type="submit">Join</button>
```

```HTML
        <p>Currently in room <span id="room-id">...</span></p>
        <button>Leave</button>
```

#### 複数人によるビデオチャットを試してみる

1. 3つのブラウザタブでアプリを開く
2. 任意のRoom名（半角英数）を決めて、全アプリでそのRoomに参加する


## SDKのダウンロード

<a class="btn btn-primary" href="#" role="button">ダウンロード</a>

## APIリファレンス

<a class="btn btn-primary" href="#" role="button">APIリファレンスを見る</a>

## FAQ
このテキストはサンプルです。

<a class="btn btn-primary" href="https://support.skyway.io/hc/ja/sections/207320288-JavaScript-SDK" role="button">FAQを見る</a>

## Technical Forum
このテキストはサンプルです。
開発者同士の議論や情報交換、質問のためにコミュニティを提供しています。

<a class="btn btn-primary" href="https://support.skyway.io/hc/ja/community/topics/201676907-JavaScript-SDK" role="button">Technical Forumを見る</a>

