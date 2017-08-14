---
layout: default
title: iOS SDK
lang: ja
---

# iOS SDK

## チュートリアル
{: #tutorial }

iOS SDKの基本機能を利用して、1:1のシンプルなビデオ通話アプリを作成することで、iOS SDKの使い方について理解を深めます。
現在サーバに接続されているユーザーの一覧を表示し、通話相手を選び、1対1のビデオ通話を開始し、終了する機能、また着信を受け付ける機能を実装していきます。

このチュートリアルで作成するアプリは、サンプルコードとして提供している[1対1のビデオチャット](#){:target="_blank"}と同じものになります。
完成したアプリを試したい場合は、ソースコードをダウンロードし、このチュートリアルのビルド手順に沿ってビルドししてください。

<figure class="figure">
  <img src="https://github.com/skyway/webrtc-handson-native/wiki/img/hands-on-summary.png" class="figure-img img-fluid rounded" alt="ECLWebRTCでシグナリングをして、端末間がビデオチャットで繋がる">
  <figcaption class="figure-caption">ECLWebRTCでシグナリングをして、端末間がビデオチャットで繋がる</figcaption>
</figure>

<figure class="figure">
  <img src="https://github.com/skyway/webrtc-handson-native/wiki/img/video-chat.png" class="figure-img img-fluid rounded" alt="ビデオチャットのスクリーンショット">
  <figcaption class="figure-caption">ビデオチャットのスクリーンショット</figcaption>
</figure>

[続きを読む](ios-tutorial.md){: .btn .btn-primary }

## SDKのダウンロード

<div class="row">
  <div class="col">
    <h3 class="h4">CocoaPodsを利用する場合</h3>
    <p>Podfileを作成して</p>
    <div class="language-sh highlighter-rouge">
      <pre class="highlight">
<code>$ pod init</code></pre>
    </div>
    <p>以下を追記し、</p>
    <p class="lang"><em>Prodfile</em></p>
    <div class="highlighter-rouge">
      <pre class="highlight">
<code>platform :ios, '7.0'
pod 'ECLWebRTC-iOS-SDK'</code></pre>
    </div>
    <p>インストールする。</p>
    <div class="language-sh highlighter-rouge">
      <pre class="highlight">
<code>$ pod install</code></pre>
    </div>
  </div>
  <div class="col">
    <h3 class="h4">ファイルをダウンロードする場合</h3>
    <p><a href="https://s3-ap-northeast-1.amazonaws.com/skyway-sdk-production/skyway-ios-sdk.zip" class="btn btn-primary">ZIPでダウンロード</a></p>
    <p>
      <a href="https://github.com/nttcom/ECLWebRTC-iOS-SDK" class="btn btn-secondary">GitHubでクローン</a><br>
      <small>git-lfsのインストールが必要です</small>
    </p>
  </div>
</div>

## 対応OS

iOS 8+

## APIリファレンス

[ECLWebRTCのAPIリファレンス](#){: .btn .btn-primary}
[SkyWayのAPIリファレンス](http://nttcom.github.io/skyway/docs/#iOS){: .btn .btn-secondary target="_blank"}

[ECLWebRTCとSkyWayのAPI差分](https://github.com/nttcom/skyway-sdk-migration-docs){: _target="_blank" }をGitHubで公開しています。

## サンプルコード

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

{% include support-cards.html %}
