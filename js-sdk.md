---
layout: default
title: JavaScript SDK
lang: ja
breadcrumb: [index.md, developer.md]
---

# JavaScript SDK

## チュートリアル

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


[チュートリアルの続きを読む](./js-tutorial.html){: .btn .btn-primary }

## SDKのダウンロード
{: #sdkdownload }

### npmを利用する場合

npmをインストールしコマンドを実行

```
$ npm install -s skyway-js
```

requireまたはimportを利用してパッケージをインポート

```js
// require
const Peer = require('skyway-js');
const peer = new Peer({key: 'your-api-key'});
 
// import
import Peer from 'skyway-js';
const peer = new Peer({key: 'your-api-key'});
```

### CDNを利用する場合

*HTML*
{: .lang}
  
```html
<script type="text/javascript" src="https://cdn.webrtc.ecl.ntt.com/skyway-latest.js"></script>
```

### ファイルをダウンロードする場合

<div class="d-sm-flex">
  <div class="pr-1 pb-2">
    <a href="https://github.com/skyway/skyway-js-sdk/archive/master.zip" class="btn btn-primary">ZIPでダウンロード</a>
  </div>
  <div>
    <a href="https://github.com/skyway/skyway-js-sdk" class="btn btn-secondary" target="_blank">GitHubでクローン</a><br>
  </div>
</div>

## 動作確認済みブラウザ

- [Google Chrome](https://www.google.com/chrome){: target="_blank"} 安定版の最新2バージョン
- [Firefox](https://www.mozilla.org/firefox/){: target="_blank"} 安定版の最新2バージョン

## APIリファレンス

<div class="d-sm-flex">
  <div class="pr-1 pb-2">
    <a href="./js-reference/" class="btn btn-primary">新SDKのAPIリファレンス</a>
  </div>
  <div class="pb-3">
    <a href="http://nttcom.github.io/skyway/docs/#JS" class="btn btn-secondary" target="_blank">旧SDKのAPIリファレンス</a><br>
  </div>
</div>

[新旧SDKの機能差分と移行方法](https://github.com/nttcom/skyway-sdk-migration-docs){: target="_blank" }をGitHubで公開しています。

## サンプルコード

サンプルコードを公開しています。

<div class="row">
  <div class="col-lg-9 col-xl-8">
    <ul class="list-group">
      <li class="list-group-item"><a href="https://github.com/skyway/skyway-js-sdk/tree/master/examples/p2p-media" target="_blank">1対1、P2P ビデオ通話</a></li>
      <li class="list-group-item"><a href="https://github.com/skyway/skyway-js-sdk/tree/master/examples/p2p-data" target="_blank">1対1、P2P テキストチャット</a></li>
      <li class="list-group-item"><a href="https://github.com/skyway/skyway-js-sdk/tree/master/examples/room" target="_blank">多人数 ビデオ通話/テキストチャット</a></li>
    </ul>
  </div>
</div>

## サポート
{: #support }

{% include support-cards.html %}
