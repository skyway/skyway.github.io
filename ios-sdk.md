---
layout: default
title: iOS SDK
lang: ja
breadcrumb: [index.md, developer.md]
---

# iOS SDK

## チュートリアル

iOS SDKの基本機能を利用して、1:1のシンプルなビデオ通話アプリを作成することで、iOS SDKの使い方について理解を深めます。
現在サーバに接続されているユーザーの一覧を表示し、通話相手を選び、1対1のビデオ通話を開始し、終了する機能、また着信を受け付ける機能を実装していきます。

このチュートリアルで作成するアプリは、サンプルコードとして提供している[1対1のビデオ通話](#){:target="_blank"}と同じものになります。
完成したアプリを試したい場合は、ソースコードをダウンロードし、このチュートリアルのビルド手順に沿ってビルドししてください。

<figure class="figure">
  <img src="https://github.com/skyway/webrtc-handson-native/wiki/img/hands-on-summary.png" class="figure-img img-fluid rounded" alt="SkyWayでシグナリングをして、端末間がビデオ通話で繋がる">
  <figcaption class="figure-caption">SkyWayでシグナリングをして、端末間がビデオ通話で繋がる</figcaption>
</figure>

<figure class="figure">
  <img src="https://github.com/skyway/webrtc-handson-native/wiki/img/video-chat.png" class="figure-img img-fluid rounded" alt="ビデオ通話のスクリーンショット">
  <figcaption class="figure-caption">ビデオ通話のスクリーンショット</figcaption>
</figure>

[チュートリアルの続きを読む](./ios-tutorial.html){: .btn .btn-primary }

## SDKのダウンロード
{: #sdkdownload }

### CocoaPodsを利用する場合

Podfileに以下を追記し、

*Prodfile*
{: .lang }

```
platform :ios, '7.0'
pod 'ECLWebRTC-iOS-SDK'
```

インストールする。

```sh
$ pod init
```

### ファイルをダウンロードする場合

<div class="d-sm-flex">
  <div class="pr-1 pb-2">
    <a href="https://github.com/skyway/skyway-ios-sdk/archive/master.zip" class="btn btn-primary">ZIPでダウンロード</a>
  </div>
  <div>
    <a href="https://github.com/skyway/skyway-ios-sdk" class="btn btn-secondary" target="_blank">GitHubでクローン</a><br>
    <small>git-lfsのインストールが必要です</small>
  </div>
</div>

## 対応OS

iOS 8+

## APIリファレンス

<div class="d-sm-flex">
  <div class="pr-1 pb-2">
    <a href="./ios-reference/" class="btn btn-primary">新SDKのAPIリファレンス</a>
  </div>
  <div class="pb-3">
    <a href="http://nttcom.github.io/skyway/docs/#iOS" class="btn btn-secondary" target="_blank">旧SDKのAPIリファレンス</a><br>
  </div>
</div>

[新旧SDKの機能差分と移行方法](https://github.com/nttcom/skyway-sdk-migration-docs/blob/master/ios_sdk_next_version_api_diff.md){: _target="_blank" }をGitHubで公開しています。

## サンプルコード

サンプルコードを公開しています。

<div class="row">
  <div class="col-md-9 col-lg-7 col-xl-6">
    <table class="table">
      <tbody align="right">
        <tr>
          <th scope="row">1対1、P2P</th>
          <td><a href="https://github.com/skyway/ios-sdk/tree/master/examples/p2p_videochat" target="_blank">ビデオ通話</a></td>
          <td><a href="https://github.com/skyway/ios-sdk/tree/master/examples/p2p_textchat" target="_blank">テキストチャット</a></td>
        </tr>
        <tr>
          <th scope="row">多人数、P2P</th>
          <td><a href="https://github.com/skyway/ios-sdk/tree/master/examples/fullmesh_videochat" target="_blank">ビデオ通話</a></td>
          <td><a href="https://github.com/skyway/ios-sdk/tree/master/examples/fullmesh_textchat" target="_blank">テキストチャット</a></td>
        </tr>
        <tr>
          <th scope="row">多人数、SFU</th>
          <td><a href="https://github.com/skyway/ios-sdk/tree/master/examples/sfu_videochat" target="_blank">ビデオ通話</a></td>
          <td><a href="https://github.com/skyway/ios-sdk/tree/master/examples/sfu_textchat" target="_blank">テキストチャット</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## サポート

{% include support-cards.html %}
