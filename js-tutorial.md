---
layout: rightnav
title: JavaScript SDK チュートリアル
lang: ja
breadcrumb: [index.md, developer.md, js-sdk.md]
---

- TOC
{:toc}

# JavaScript SDK チュートリアル

JavaScript SDKの基本機能を利用して、1:1のシンプルなビデオ通話アプリを作成することで、JavaScript SDKの使い方について理解を深めます。
通話相手のIDを入力し、1対1のビデオ通話を開始し、終了する機能、また着信を受け付ける機能を実装していきます。

[完成したアプリのデモ](#){:target="_blank"}を試すことができます。

<figure class="figure">
  <img src="https://github.com/skyway/webrtc-handson-native/wiki/img/hands-on-summary.png"
    class="figure-img img-fluid rounded" alt="ECLWebRTCでシグナリングをして、端末間がビデオチャットで繋がる">
  <figcaption class="figure-caption">ECLWebRTCでシグナリングをして、端末間がビデオチャットで繋がる</figcaption>
</figure>

<figure class="figure">
  <img src="http://via.placeholder.com/250x350"
    class="figure-img img-fluid rounded" alt="ビデオチャットのスクリーンショット">
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
|権限(TURNを利用する)|TURN(Traversal Using Relay around NAT) サーバを利用する場合はチェックします。TURNサーバは、ファイアウォールを経由する等の理由によりP2P通信ができない場合でも、メディアやデータをリレーすることにより通信を可能とします。ユーザーに最も近いTURNサーバが自動的に選択されます。|ON|
|権限(SFUを利用する)|SFU(Selective  Forwarding  Unit)サーバを利用する場合はチェックします。SFUとは、P2PではなくSFUというメディアサーバを経由して映像や音声の送受信を行う技術です。詳しくは[SFUについて](./sfu.html)をご覧ください。|ON|
|権限(listAllPeers APIを利用する)|`listALLPeers API`を使用する場合はチェックします。このAPIは、APIキー毎のアクティブなPeerIDを取得します。詳しくは、APIリファレンスをご覧ください。|ON|
|権限(APIキー認証を利用する)|APIキーの不正利用を防止するための認証機能を提供します。詳しくは[こちら](https://github.com/nttcom/Peer-Authentication-Server-Samples)をご覧ください。|OFF|

### ローカルWebサーバの準備

WebRTCの機能をローカル環境で利用する場合は、Webサーバを利用する必要があります。

#### Macの場合

以下に示す幾つかの方法で、Webサーバをローカル環境で利用することができます。

*python 2.X*
{: .lang }

```sh
$ python -m SimpleHTTPServer 8080
```

*python 3.X*
{: .lang }

```sh
$ python -m http.server 8080
```

*ruby*
{: .lang }

```sh
$ ruby -run -e httpd . -p 8080
```

*php*
{: .lang }

```sh
$ php -S localhost:8080
```

#### Windowsの場合

[Mongoose](https://cesanta.com/)や[XAMPP](https://sourceforge.net/projects/xampp/)をインストールし、Webサーバをローカル環境で利用できるようにしてください。

## プロジェクトの作成
{: #craete-project }

チュートリアルで利用するソースコードは以下のリポジトリからダウンロードしてください。  
ダウンロード後は、 `index.html` をWebサーバで閲覧できるように適切に配置してください。

- [https://github.com/skyway/eclwebrtc-js-sdk-tutorial](https://github.com/skyway/eclwebrtc-js-sdk-tutorial)

以後のステップでは、同梱されている `script.js` に必要なコードを追記していきます。
  
- 本チュートリアルの制約事項
  - Dom操作にはJQueryを利用しています。
  - 動作確認済ブラウザは[Google Chrome](https://www.google.com/chrome)と[Firefox](https://www.mozilla.org/firefox/)の最新版です。


## カメラ映像、マイク音声の取得
{: #getUserMedia }

映像・音声を取得する処理を追記してください。
Webブラウザでカメラ映像、マイク音声を取得するためには、getUserMediaというAPIを利用します。    
getUserMediaで取得した、Streamオブジェクト（自分の映像）を表示用のVIDEO要素にセットします。  

*JavaScript*
{: .lang}

```js
let localStream = null;

navigator.mediaDevices.getUserMedia({video: true, audio: true})
    .then(function (stream) {
        // Success
        $('#myStream').srcObject = stream;
        localStream = stream;
    }).catch(function (error) {
        // Error
        console.error('mediaDevice.getUserMedia() error:', error);
        return;
    });
```

getUserMediaのConstraints(`{video: true, audio: true}`)に以下のような指定をすることも可能です。

- 例：VideoのみキャプチャしAudioは取り込まない    
`{video: true, audio: false}`
- 例：キャプチャサイズの設定例    
`{ audio: true, video: { width: 640, height: 480 } }`
- 例：フレームレートの設定（2017.08現在、Chromeでしか動作しません）    
`{ audio: true, video: { frameRate: { min: 10, max: 15 } } }`

#### APIを使用する上の注意点1

プライバシーを考慮し、ブラウザによっては、SSLで暗号化されたWebサイトでしか動作しません。
2018.08現在の動作状況は以下のとおりです。

|スキーマ\ブラウザ|Chrome|Firefox|
|:--|:--:|:--:|
|http://localhost|◯|◯|
|http://domain.jp|x|◯|
|file://index.html|x|◯|
|https://domain.jp|◯|◯|

### APIを使用する上の注意点2

利用者のプライバシーを守るために、許可を求めるダイアログが出てきます。  
複数のカメラやマイクが接続されている場合は、このダイアログで任意のカメラやマイクを選ぶことができます。

<figure class="figure">
  <img src="https://qiita-image-store.s3.amazonaws.com/0/6651/7e985821-901b-33eb-0f57-2fc4b677f0d8.png"
    class="figure-img img-fluid rounded" alt="ECLWebRTCでシグナリングをして、端末間がビデオチャットで繋がる">
  <figcaption class="figure-caption">Chromeのダイアログ</figcaption>
</figure>

<figure class="figure">
  <img src="https://qiita-image-store.s3.amazonaws.com/0/6651/21d50fdc-e86a-d301-98f1-2a8df20c7608.png"
    class="figure-img img-fluid rounded" alt="ECLWebRTCでシグナリングをして、端末間がビデオチャットで繋がる">
  <figcaption class="figure-caption">Firefoxのダイアログ</figcaption>
</figure>

## ECLWebRTCサーバへ接続
{: #connect-server }

### SDKのインポート

以下の通りScript要素でSDKをインポートします。  
チュートリアルのソースコードでは`index.html`に追記済みです。

*HTML*
{: .lang}

```html
<script type="text/javascript" src="https://cdn.webrtc.ecl.ntt.com/eclwebrtc-latest.js"></script>
```

### Peerオブジェクトの作成

Peerオブジェクトを作成するための処理を追記してください。  
`apikey`には先程ダッシュボードで発行したAPIキーを指定してください。  
`debug`ではログ出力レベルを指定します。`3`の場合は、開発用に全てのログを出力します。

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

Peerオブジェクトで指定可能なその他のオプションについては、[APIリファレンス]()をご覧ください。

## 接続成功・失敗・切断時の処理
{: #eventlistener }

Peerオブジェクトに必要なEventListenerを追記してください。

### OPENイベント

ECLWebRTCのシグナリングサーバと接続し、利用する準備が整ったら発火します。
ECLWebRTCのすべての処理はこのイベント発火後に利用できるようになります。  
PeerIDと呼ばれるクライアント識別用のIDがシグナリングサーバで発行され、コールバックイベントで取得できます。
PeerIDはクライアントサイドで指定することもできます。  
以下の処理では、PeerIDが発行されたら、その情報をUIに表示する処理を行っています。

*JavaScript*
{: .lang}

```js
peer.on('open', function(){
    $('#my-id').text(peer.id);
});
```

### ERRORイベント

何らかのエラーが発生した場合に発火します。エラーが発生したら、アラートメッセージでその内容を表示できるようにします。

*JavaScript*
{: .lang}

```js
peer.on('error', function(err){
    alert(err.message);
});
```

### CLOSEイベント

Peer（相手）との接続が切れた際に発火します。チュートリアルでは特に処理は行いません。

*JavaScript*
{: .lang}

```js
peer.on('close', function(){
});
```

### DISCONNECTEDイベント

シグナリングサーバとの接続が切れた際に発火します。チュートリアルでは特に処理は行いません。

*JavaScript*
{: .lang}

```js
peer.on('disconnected', function(){
});
```


## 発信・切断・着信処理
{: #call-event }

発信、切断、着信をするための処理を追記してください。

### 発信処理

発信ボタンをクリックした場合に相手に発信します。  
`peer.call()`で相手のPeerID、自分自身のlocalStreamを引数にセットし発信します。
接続するための相手のPeerIDは、別途何らかの方法で入手する必要があります。  
発信後はCallオブジェクトが返ってくるため、必要なEventListenerをセットします。  
`setupCallEventHandlers`の中身については後ほど説明します。

*JavaScript*
{: .lang}

```js
$('#make-call').submit(function(e){
    e.preventDefault();
    const call = peer.call($('#callto-id').val(), localStream);
    setupCallEventHandlers(call);
});
```

### 切断処理

切断ボタンをクリックした場合に、相手との接続を切断します。   
`call.close()`で該当する接続を切断します。発信処理で生成したCallオブジェクトは`existingCall`として保持しておきます。
オブジェクト保持は発信処理の`setupCallEventHandlers()`の中で実行します。

*JavaScript*
{: .lang}

```js
$('#end-call').click(function(){
    existingCall.close();
});
```
    
### 着信処理

相手から接続要求がきた場合に応答します。    
相手から接続要求が来た場合は`call`が発火します。
引き数として相手との接続を管理するためのCallオブジェクトが取得できるため、`call.answer()`を実行し接続要求に応答します。  
この時に、自分自身の`localStream`をセットすると、相手に映像・音声を送信することができるようになります。  
発信時の処理と同じく`setupCallEventHandlers`を実行し、 CallオブジェクトのEventListenerをセットします。

*JavaScript*
{: .lang}

```js
peer.on('call', function(call){
    call.answer(localStream);
    setupCallEventHandlers(call);
});
```

### Callオブジェクトに必要なイベント

Callオブジェクトに必要なEventListenerです。    
今回作るアプリでは既に接続中の場合は一旦既存の接続を切断し、後からきた接続要求を優先します。
また、切断処理等で利用するため、Callオブジェクトを`existingCall`として保持しておきます。  
この処理はアプリの仕様次第です。

*JavaScript*
{: .lang}

```js
function setupCallEventHandlers(call){
    if (existingCall) {
        existingCall.close();
    };

    existingCall = call;
    // 省略
}
```

相手の映像・音声を受信した際に発火します。  
取得したStreamオブジェクトをVIDEO要素にセットします。  
`addVideo()`、`setupEndCallUI()`の中身については後ほど説明します。

*JavaScript*
{: .lang}

```js
function setupCallEventHandlers(call){
    // 省略
    call.on('stream', function(stream){
        addVideo(call,stream);
        setupEndCallUI();
        $('#their-id').text(call.remoteId);
    });
    // 省略
}
```

`call.close()`による切断処理が実行され、実際に切断されたら発火します。
このイベントは、`call.close()`実行した側、実行された側それぞれで発火します。`call.peer`で切断した相手のPeerIDを取得できます。  
切断時にはVIDEO要素の削除とUI関連の処理をを削除します。`removeVideo()`、`setupMakeCallUI()`の中身については後ほど説明します。

*JavaScript*
{: .lang}

```js
function setupCallEventHandlers(call){
    // 省略
    call.on('close', function(){
        removeVideo(call.remoteId);
        setupMakeCallUI();
    });
}
```

## UIのセットアップ
{: #setup-ui }

### VIDEO要素の再生

VIDEOを再生するための処理を追記してください。  
VIDEO要素のsrcObjectプロパティにStreamオブジェクトをセットすることで再生できます。
削除する処理のことを考えて、idプロパティに`call.peer(PeerID)`をセットします

*JavaScript*
{: .lang}

```js
function addVideo(call,stream){
    $('#their-video').get(0).srcObject = stream;
}
```

### VIDEO要素の削除

切断された（した）相手のVIDEO要素を削除するための処理を追記してください。
PeerIDを元に削除します。

*JavaScript*
{: .lang}

```js
function removeVideo(peerId){
    $('#'+peerId).remove();
}
```

### ボタンの表示、非表示切り替え

発信ボタン、切断ボタンの表示を切り替えるための処理を追記してください。

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

## 動作確認
{: #testing }

2つのブラウザタブでアプリを開きます。片方の`Your id`を片方のInputボックスにコピペしてCallボタンをクリックしてください。
相手とビデオチャットができれば成功です。
