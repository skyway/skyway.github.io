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

[チュートリアルの続きを読む](ios-tutorial.html){: .btn .btn-primary }

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
    <a href="https://s3-ap-northeast-1.amazonaws.com/skyway-sdk-production/skyway-ios-sdk.zip" class="btn btn-primary">ZIPでダウンロード</a>
  </div>
  <div>
    <a href="https://github.com/nttcom/ECLWebRTC-iOS-SDK" class="btn btn-secondary" target="_blank">GitHubでクローン</a><br>
    <small>git-lfsのインストールが必要です</small>
  </div>
</div>

## 対応OS

iOS 8+

## APIリファレンス

<div class="d-sm-flex">
  <div class="pr-1 pb-2">
    <a href="./ios-reference/" class="btn btn-primary">ECLWebRTCのAPIリファレンス</a>
  </div>
  <div class="pb-3">
    <a href="http://nttcom.github.io/skyway/docs/#iOS" class="btn btn-secondary" target="_blank">SkyWayのAPIリファレンス</a><br>
  </div>
</div>

[ECLWebRTCとSkyWayのAPI差分](https://github.com/nttcom/skyway-sdk-migration-docs/blob/master/ios_sdk_next_version_api_diff.md){: _target="_blank" }をGitHubで公開しています。

## サンプルコード

サンプルコードを公開しています。

<div class="row">
  <div class="col-md-9 col-lg-7 col-xl-6">
    <table class="table">
      <tbody align="right">
        <tr>
          <th scope="row">1対1、P2P</th>
          <td><a href="#">ビデオチャット</a></td>
          <td><a href="#">テキストチャット</a></td>
        </tr>
        <tr>
          <th scope="row">多人数、P2P</th>
          <td><a href="#">ビデオチャット</a></td>
          <td><a href="#">テキストチャット</a></td>
        </tr>
        <tr>
          <th scope="row">多人数、SFU</th>
          <td><a href="#">ビデオチャット</a></td>
          <td><a href="#">テキストチャット</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## サポート

{% include support-cards.html %}
