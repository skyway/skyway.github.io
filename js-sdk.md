---
layout: default
title: JavaScript SDK
lang: ja
---

# JavaScript SDK

## チュートリアル

JavaScript SDKの基本機能を利用して、1:1のシンプルなビデオ通話アプリを作成することで、JavaScript SDKの使い方について理解を深めます。
通話相手のIDを入力し、1対1のビデオ通話を開始し、終了する機能、また着信を受け付ける機能を実装していきます。

[完成したアプリのデモ](#){:target="_blank"}を試すことができます。

<figure class="figure">
  <img src="https://github.com/skyway/webrtc-handson-native/wiki/img/hands-on-summary.png" class="figure-img img-fluid rounded" alt="ECLWebRTCでシグナリングをして、端末間がビデオチャットで繋がる">
  <figcaption class="figure-caption">ECLWebRTCでシグナリングをして、端末間がビデオチャットで繋がる</figcaption>
</figure>

<figure class="figure">
  <img src="http://via.placeholder.com/250x350" class="figure-img img-fluid rounded" alt="ビデオチャットのスクリーンショット">
  <figcaption class="figure-caption">ビデオチャットのスクリーンショット</figcaption>
</figure>

[チュートリアルの続きを読む](js-tutorial.html){: .btn .btn-primary }

## SDKのダウンロード

### npmを利用する場合

```sh
$ npm install eclwebrtc-js-sdk
```

### CDNを利用する場合

*HTML*
{: .lang}
  
```html
<script type="text/javascript" src="https://cdn.webrtc.ecl.ntt.com/eclwebrtc-latest.js"></script>
```

### ファイルをダウンロードする場合

<div class="d-sm-flex">
  <div class="pr-1 pb-2">
    <a href="https://github.com/nttcom/ECLWebRTC-JS-SDK/archive/master.zip" class="btn btn-primary">ZIPでダウンロード</a>
  </div>
  <div>
    <a href="https://github.com/nttcom/ECLWebRTC-JS-SDK" class="btn btn-secondary" target="_blank">GitHubでクローン</a><br>
  </div>
</div>

## 動作確認済みブラウザ

- [Google Chrome](https://www.google.com/chrome){: target="_blank"} 最新安定版
- [Firefox](https://www.mozilla.org/firefox/){: target="_blank"} 最新安定版

## APIリファレンス

<div class="d-sm-flex">
  <div class="pr-1 pb-2">
    <a href="#" class="btn btn-primary">ECLWebRTCのAPIリファレンス</a>
  </div>
  <div class="pb-3">
    <a href="http://nttcom.github.io/skyway/docs/#JS" class="btn btn-secondary" target="_blank">SkyWayのAPIリファレンス</a><br>
  </div>
</div>

[ECLWebRTCとSkyWayのAPI差分](https://github.com/nttcom/skyway-sdk-migration-docs){: _target="_blank" }をGithubで公開しています。

## サンプルコード

サンプルコードを公開しています。

<div class="row">
  <div class="col-lg-9 col-xl-8">
    <table class="table">
      <tbody align="right">
        <tr>
          <th scope="row">1対1、P2P</th>
          <td><a href="#">ビデオチャット</a></td>
          <td></td>
          <td><a href="#">テキストチャット</a></td>
        </tr>
        <tr>
          <th scope="row">多人数、P2P</th>
          <td><a href="#">ビデオチャット</a></td>
          <td><a href="#">1:多のビデオ配信</a></td>
          <td><a href="#">テキストチャット</a></td>
        </tr>
        <tr>
          <th scope="row">多人数、SFU</th>
          <td><a href="#">ビデオチャット</a></td>
          <td><a href="#">1:多のビデオ配信</a></td>
          <td><a href="#">テキストチャット</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## サポート
{: #support }

{% include support-cards.html %}
