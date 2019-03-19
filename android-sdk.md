---
layout: default
title: Android SDK
lang: ja
breadcrumb: [index.md, developer.md]
---

# Android SDK

## チュートリアル

Android SDKの基本機能を利用して、1:1のシンプルなビデオ通話アプリを作成することで、Android SDKの使い方について理解を深めます。
現在サーバに接続されているユーザーの一覧を表示し、通話相手を選び、1対1のビデオ通話を開始し、終了する機能、また着信を受け付ける機能を実装していきます。

このチュートリアルで作成するアプリは、サンプルコードとして提供している[1対1のビデオ通話](https://github.com/skyway/skyway-android-sdk/tree/master/examples/p2p-videochat){:target="_blank"}と同じものになります。
完成したアプリを試したい場合は、[ソースコードをダウンロード](https://github.com/skyway/skyway-android-sdk/archive/master.zip)し、このチュートリアルのビルド手順に沿ってビルドししてください。

<figure class="figure">
  <img src="{{ site.baseurl }}/images/sdk-tutorial-top-image.png"
    class="figure-img img-fluid rounded" alt="SkyWayでシグナリングをして、端末間がビデオ通話で繋がる">
  <figcaption class="figure-caption">SkyWayでシグナリングをして、端末間がビデオ通話で繋がる</figcaption>
</figure>

<figure class="figure">
  <img src="{{ site.baseurl }}/images/android-tutorial-videochat-sc.png" class="figure-img img-fluid rounded" alt="ビデオ通話のスクリーンショット">
  <figcaption class="figure-caption">ビデオ通話のスクリーンショット</figcaption>
</figure>

[チュートリアルの続きを読む](android-tutorial.html){: .btn .btn-primary }

## SDKのダウンロード
{: #sdkdownload }

<div class="d-sm-flex">
  <div class="pr-1 pb-2">
    <a href="https://github.com/skyway/skyway-android-sdk/releases/latest" class="btn btn-primary">skyway.aarをダウンロード</a>
  </div>
</div>

## 対応OS

Android 5.0+ (API Level 21+)

## APIリファレンス

<div class="d-sm-flex">
  <div class="pr-1 pb-2">
    <a href="./android-reference/" class="btn btn-primary">新SDKのAPIリファレンス</a>
  </div>
  <div class="pb-3">
    <a href="http://nttcom.github.io/skyway/docs/#Android" class="btn btn-secondary" target="_blank">旧SDKのAPIリファレンス</a><br>
  </div>
</div>

[新旧SDKの機能差分と移行方法](https://github.com/nttcom/skyway-sdk-migration-docs/blob/master/android_sdk_next_version_api_diff.md){: _target="_blank" }をGitHubで公開しています。

## サンプルコード

サンプルコードを公開しています。

<div class="row">
  <div class="col-md-9 col-lg-7 col-xl-6">
    <table class="table">
      <tbody align="right">
        <tr>
          <th scope="row">1対1、P2P</th>
          <td><a href="https://github.com/skyway/skyway-android-sdk/tree/master/examples/p2p-videochat" target="_blank">ビデオ通話</a></td>
          <td><a href="https://github.com/skyway/skyway-android-sdk/tree/master/examples/p2p-textchat" target="_blank">テキストチャット</a></td>
        </tr>
        <tr>
          <th scope="row">多人数、P2P</th>
          <td><a href="https://github.com/skyway/skyway-android-sdk/tree/master/examples/mesh-videochat" target="_blank">ビデオ通話</a></td>
          <td><a href="https://github.com/skyway/skyway-android-sdk/tree/master/examples/mesh-textchat" target="_blank">テキストチャット</a></td>
        </tr>
        <tr>
          <th scope="row">多人数、SFU</th>
          <td><a href="https://github.com/skyway/skyway-android-sdk/tree/master/examples/sfu-videochat" target="_blank">ビデオ通話</a></td>
          <td><a href="https://github.com/skyway/skyway-android-sdk/tree/master/examples/sfu-textchat" target="_blank">テキストチャット</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## サポート
{: #support }

{% include support-cards.html %}
