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

[完成したアプリのデモ](https://webrtc.ecl.ntt.com/skyway-js-sdk-tutorial/){:target="_blank"}を試すことができます。

<figure class="figure">
  <img src="{{ site.baseurl }}/images/sdk-tutorial-top-image.png"
    class="figure-img img-fluid rounded" alt="SkyWayでシグナリングをして、端末間がビデオ通話で繋がる">
  <figcaption class="figure-caption">SkyWayでシグナリングをして、端末間がビデオ通話で繋がる</figcaption>
</figure>

<figure class="figure">
  <img src="{{ site.baseurl }}/images/js-tutorial-videchat.png"
    class="figure-img img-fluid rounded" alt="ビデオ通話のスクリーンショット">
  <figcaption class="figure-caption">ビデオ通話のスクリーンショット</figcaption>
</figure>

## 開発前の準備
{: #preparation }

### SkyWayのAPIキー発行

<p>
  SkyWayへの開発者登録がまだの方は、まず、<a href="https://console-webrtc-free.ecl.ntt.com/users/registration">Community Editionの新規登録</a>から開発者登録をしてください。
  <small class="text-muted">
    <br>トライアル提供していました旧SkyWayのAPIキーはご利用になれないため、2017年9月6日以前にSkyWayにご登録いただいた方も新規登録をお願いします。
  </small>
</p>

開発者登録済みの方、完了した方は、[ダッシュボードにログイン](https://console-webrtc-free.ecl.ntt.com/users/login)し、アプリケーションを作成して、APIキーを取得してください。
ダッシュボードでのアプリケーションの設定内容は以下のとおりです。

|設定項目|項目の説明|チュートリアルの設定内容|
|:--|:--|:--|
|アプリケーション説明文|アプリケーションにつける説明文で、ダッシュボードでの表示のみに利用されます。<br>128文字以内で指定してください。|SkyWayチュートリアルアプリ|
|利用可能ドメイン名|作成するアプリケーションで利用するドメイン名を入力します。利用可能ドメイン名は複数指定可能です。利用可能ドメイン名は複数指定可能です。<br>指定例：hogehoge.com|`localhost`|
|権限(TURNを利用する)|TURN(Traversal Using Relay around NAT) サーバを利用する場合はチェックします。TURNサーバは、ファイアウォールを経由する等の理由によりP2P通信ができない場合でも、メディアやデータをリレーすることにより通信を可能とします。ユーザーに最も近いTURNサーバが自動的に選択されます。|ON|
|権限(SFUを利用する)|SFU(Selective  Forwarding  Unit)サーバを利用する場合はチェックします。SFUとは、P2PではなくSFUというメディアサーバを経由して映像や音声の送受信を行う技術です。詳しくは[SFUについて](./sfu.html)をご覧ください。|ON|
|権限(listAllPeers APIを利用する)|`listALLPeers API`を使用する場合はチェックします。このAPIは、APIキー毎のアクティブなPeerIDを取得します。詳しくは、[APIリファレンス](./js-reference/Peer.html#listAllPeers)をご覧ください。|ON|
|権限(APIキー認証を利用する)|APIキーの不正利用を防止するための認証機能を提供します。詳しくは[こちら](https://github.com/skyway/skyway-peer-authentication-samples){:target="_blank"}をご覧ください。|OFF|

### ローカルWebサーバの準備

WebRTCの機能をローカル環境で利用する場合は、Webサーバを利用する必要があります。

#### Macの場合

以下に示すいくつかの方法で、Webサーバをローカル環境で利用することができます。

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

[Mongoose](https://cesanta.com/){:target="_blank"}や[XAMPP](https://sourceforge.net/projects/xampp/){:target="_blank"}をインストールし、Webサーバをローカル環境で利用できるようにしてください。

## プロジェクトの作成
{: #craete-project }

チュートリアルで利用するソースコードは以下のリポジトリからダウンロードしてください。  
ダウンロード後は、 `index.html` をWebサーバで閲覧できるように適切に配置してください。

- [https://github.com/skyway/skyway-js-sdk-tutorial](https://github.com/skyway/skyway-js-sdk-tutorial){:target="_blank"}

以後のステップでは、同梱されている `script.js` に必要なコードを追記していきます。
  
- 本チュートリアルの制約事項
  - DOM操作にはjQueryを利用しています。
  - 動作確認済ブラウザは[Google Chrome](https://www.google.com/chrome){:target="_blank"}と[Firefox](https://www.mozilla.org/firefox/){:target="_blank"}の最新版です。


## カメラ映像、マイク音声の取得
{: #getUserMedia }

カメラ映像・マイク音声を取得する処理を追記してください。
Webブラウザでカメラ映像、マイク音声を取得するためには、getUserMediaというAPIを利用します。    
getUserMediaで取得した、Streamオブジェクト（自分のカメラ映像）を表示用のvideo要素にセットします。  

*JavaScript*
{: .lang}

```js
let localStream = null;

navigator.mediaDevices.getUserMedia({video: true, audio: true})
    .then(function (stream) {
        // Success
        $('#my-video').get(0).srcObject = stream;
        localStream = stream;
    }).catch(function (error) {
        // Error
        console.error('mediaDevice.getUserMedia() error:', error);
        return;
    });
```

getUserMediaのConstraints(`{video: true, audio: true}`)に以下のような指定をすることも可能です。

- 例：カメラ映像のみ取り込み、マイク音声は取り込まない    
`{video: true, audio: false}`
- 例：カメラ映像のサイズの設定例    
`{ audio: true, video: { width: 640, height: 480 } }`
- 例：カメラ映像のフレームレートの設定例（2017年8月現在、Chromeでしか動作しません）    
`{ audio: true, video: { frameRate: { min: 10, max: 15 } } }`

#### APIを使用する上の注意点1

プライバシーを考慮し、ブラウザによっては、SSLで暗号化されたWebサイトでしか動作しません。
2017年8月現在の動作状況は以下のとおりです。

|スキーマ/ブラウザ|Chrome|Firefox|
|:--|:--:|:--:|
|http://localhost|◯|◯|
|http://domain.jp|x|◯|
|file://index.html|x|◯|
|https://domain.jp|◯|◯|

### APIを使用する上の注意点2

利用者のプライバシーを守るために、許可を求めるダイアログが出てきます。  
複数のカメラやマイクが接続されている場合は、このダイアログで任意のカメラやマイクを選ぶことができます。

<figure class="figure">
  <img src="{{ site.baseurl }}/images/js-tutorial-chrome-gum.png"
    class="figure-img img-fluid rounded" alt="Chromeのダイアログ">
  <figcaption class="figure-caption">Chromeのダイアログ</figcaption>
</figure>

<figure class="figure">
  <img src="{{ site.baseurl }}/images/js-tutorial-firefox-gum.png"
    class="figure-img img-fluid rounded" alt="Firefoxのダイアログ">
  <figcaption class="figure-caption">Firefoxのダイアログ</figcaption>
</figure>

## SkyWayサーバへ接続
{: #connect-server }

### SDKのインポート

以下のとおりscript要素でSDKをインポートします。  
チュートリアルのソースコードでは`index.html`に追記済みです。

*HTML*
{: .lang}

```html
<script type="text/javascript" src="https://cdn.webrtc.ecl.ntt.com/skyway-latest.js"></script>
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

Peerオブジェクトで指定可能なその他のオプションについては、[APIリファレンス](./js-reference/Peer.html#Peer)をご覧ください。

## 接続成功・失敗・切断時の処理
{: #eventlistener }

Peerオブジェクトに必要なイベントリスナーを追記してください。

### openイベント

SkyWayのシグナリングサーバと接続し、利用する準備が整ったら発火します。
SkyWayのすべての処理はこのイベント発火後に利用できるようになります。  
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

### errorイベント

何らかのエラーが発生した場合に発火します。エラーが発生したら、警告ダイアログでその内容を表示できるようにします。

*JavaScript*
{: .lang}

```js
peer.on('error', function(err){
    alert(err.message);
});
```

### closeイベント

Peer（相手）との接続が切れた際に発火します。チュートリアルでは特に処理は行いません。

*JavaScript*
{: .lang}

```js
peer.on('close', function(){
});
```

### disconnectedイベント

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
発信後はCallオブジェクトが返ってくるため、必要なイベントリスナーをセットします。  
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
引数として相手との接続を管理するためのCallオブジェクトが取得できるため、`call.answer()`を実行し接続要求に応答します。  
この時に、自分自身の`localStream`をセットすると、相手にカメラ映像・マイク音声を送信することができるようになります。  
発信時の処理と同じく`setupCallEventHandlers`を実行し、 Callオブジェクトのイベントリスナーをセットします。

*JavaScript*
{: .lang}

```js
peer.on('call', function(call){
    call.answer(localStream);
    setupCallEventHandlers(call);
});
```

### Callオブジェクトに必要なイベント

Callオブジェクトに必要なイベントリスナーです。    
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

相手のカメラ映像・マイク音声を受信した際に発火します。  
取得したStreamオブジェクトをvideo要素にセットします。  
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
切断時にはvideo要素の削除とUI関連の処理をを削除します。`removeVideo()`、`setupMakeCallUI()`の中身については後ほど説明します。

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

### video要素の再生

VIDEOを再生するための処理を追記してください。  
video要素のsrcObjectプロパティにStreamオブジェクトをセットすることで再生できます。
削除する処理のことを考えて、idプロパティに`call.peer(PeerID)`をセットします

*JavaScript*
{: .lang}

```js
function addVideo(call,stream){
    $('#their-video').get(0).srcObject = stream;
}
```

### video要素の削除

切断された（した）相手のvideo要素を削除するための処理を追記してください。
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
相手とビデオ通話ができれば成功です。
