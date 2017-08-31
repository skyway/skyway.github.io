---
layout: default
title: Developer
lang: en
main_visual:
  main_copy: <span>あなたの</span><wbr><span>アイデアを</span><wbr><span>形にしよう</span>
  sub_copy: <span>マルチ</span><wbr><span>プラット</span><wbr><span>フォームに</span><wbr><span>対応する</span><wbr><span>SDKや</span><wbr><span>実践的な</span><wbr><span>チュートリアル、</span><wbr><span>豊富な</span><wbr><span>サンプルコードを</span><wbr><span>用意、</span><wbr><span>あなたの</span><wbr><span>アイデアを</span><wbr><span>すぐに</span><wbr><span>形に</span><wbr><span>できます</span>
  links: 
  copy_position: ["after"]
  image_file_name: 
  font_color: "#fff"
  background_color: rgb(0, 67, 134)
---

## Get Started

ECLWebRTCを利用すればアプリケーションの開発を簡単に始めることが出来ます。 

### STEP1

[Community Edition](http://127.0.0.1:4000/signup.html#)に登録し、APIキーを発行しましょう。　　

### STEP2

次のコマンドを入力して、JavaScript SDKを利用したビデオチャットアプリを動かしてみましょう。

```sh
~ $ gem install jekyll
~ $ jekyll new my-awesome-site
~ $ cd my-awesome-site
~/my-awesome-site $ jekyll serve
```

### STEP3

上手く動いたら、STEP2のサンプルコードのAPIキーをSTEP1で発行したものと置き換えます。  
チュートリアルやAPIリファレンスを参考に、本格的な開発を始めましょう。

## SDK

Webブラウザ、iOS、Android、IoTデバイスをカバーできる4つのSDKを用意しています。

<div id="sdk-div" class="row card-row">
    <div class="col-6 col-md-3">
        <div class="list-group">
            <a href="./js-sdk.html" class="list-group-item active list-head">
                <i class="fa fa-television fa-fw" aria-hidden="true"></i>
                <span>JavaScript SDK</span>
            </a>
            <a href="./js-sdk.html" class="list-group-item list-group-item-action">チュートリアル</a>
            <a href="./js-sdk.html#sdkdownload" class="list-group-item list-group-item-action">SDKダウンロード</a>
            <a href="./js-reference/" class="list-group-item list-group-item-action">APIリファレンス</a>
            <a href="https://github.com/nttcom/ECLWebRTC-JS-SDK/tree/master/examples" class="list-group-item list-group-item-action">サンプルコード</a>
        </div>
    </div>
    <div class="col-6 col-md-3">
        <div class="list-group">
            <a href="./ios-sdk.html" class="list-group-item active list-head">
                <i class="fa fa-apple fa-fw fa-3x" aria-hidden="true"></i>
                <span>iOS SDK</span>
            </a>
            <a href="ios-sdk.html" class="list-group-item list-group-item-action">チュートリアル</a>
            <a href="ios-sdk.html#sdkdownload" class="list-group-item list-group-item-action">SDKダウンロード</a>
            <a href="#" class="list-group-item list-group-item-action">APIリファレンス</a>
            <a href="https://github.com/nttcom/ECLWebRTC-iOS-SDK/tree/master/examples" class="list-group-item list-group-item-action">サンプルコード</a>
        </div>
    </div>
    <div class="col-6 col-md-3">
        <div class="list-group">
            <a href="./android-sdk.html" class="list-group-item active list-head">
                <i class="fa fa-android fa-fw fa-3x" aria-hidden="true"></i>
                <span>Android SDK</span>
            </a>
            <a href="./android-sdk.html" class="list-group-item list-group-item-action">チュートリアル</a>
            <a href="/android-sdk.html#sdkdownload" class="list-group-item list-group-item-action">SDKダウンロード</a>
            <a href="#" class="list-group-item list-group-item-action">APIリファレンス</a>
            <a href="https://github.com/nttcom/ECLWebRTC-Android-SDK/tree/master/examples" class="list-group-item list-group-item-action">サンプルコード</a>
        </div>
    </div>
    <div class="col-6 col-md-3">
        <div class="list-group">
            <a href="https://github.com/nttcom/skyway-iot-sdk" target="_blank" class="list-group-item active list-head">
                <i class="fa fa-microchip fa-fw fa-3x" aria-hidden="true"></i>
                <span>IoT SDK</span>
                <small>β version</small>
            </a>
            <a href="https://github.com/nttcom/skyway-iot-sdk/blob/master/docs/how_to_install.md" target="_blank" class="list-group-item list-group-item-action">インストール</a>
            <a href="https://github.com/nttcom/skyway-iot-sdk/blob/master/docs/how_to_use_sample_app.md" target="_blank" class="list-group-item list-group-item-action">利用手順</a>
            <a href="https://github.com/nttcom/skyway-iot-sdk/tree/master/docs/apiref" target="_blank" class="list-group-item list-group-item-action">APIリファレンス</a>
            <a href="https://github.com/nttcom/skyway-siru-sample" target="_blank" class="list-group-item list-group-item-action">サンプルコード</a>
        </div>
    </div>
</div>



## すべての機能 

<div id="feature-div" class="row card-row">
    <div class="col-6 col-sm-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">Media & Data</h3>
                <p class="card-text">提供するSDKではメディアチャンネル・データチャンネルを利用可能</p>
            </div>
        </div>
    </div>
    <div class="col-6 col-sm-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">シグナリング</h3>
                <p class="card-text">IPアドレスやコーデック等の情報を相手と交換する為のサーバ、多人数通話に便利なRoom管理機能を備える</p>
            </div>
        </div>
    </div>
    <div class="col-6 col-sm-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">STUN</h3>
                <p class="card-text">NAT通過に必要な、自身のPublic IPアドレスとポート番号を確認するサーバを無料で提供<br></p>
            </div>
        </div>
    </div>
    <div class="col-6 col-sm-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">認証</h3>
                <p class="card-text">APIキーの不正利用を防止するための認証機能を提供</p>
                <a href="https://github.com/nttcom/Peer-Authentication-Server-Samples" target="_blank" class="btn btn-primary">利用方法(GitHub)</a>
            </div>
        </div>
    </div>
    <div class="col-6 col-sm-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">TURN</h3>
                <p class="card-text">Peer to Peerで通信が確立できない環境にメディアを中継するサーバを提供</p>
                <a href="./pricing.html#サーバ通信料" class="btn btn-primary">料金</a>
            </div>
        </div>
    </div>
    <div class="col-6 col-sm-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">SFU</h3>
                <p class="card-text">多人数通話や配信を実現する、映像・音声送信を代行するメディアサーバを提供</p>
                <a href="#" class="btn btn-primary">料金</a>
                <a href="./sfu.html" class="btn btn-primary">SFUの説明</a>
            </div>
        </div>
    </div>
    <div class="col-6 col-sm-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">画面共有</h3>
                <p class="card-text">画面共有用ブラウザ拡張を簡単に実装する為のライブラリ、サンプルコードを提供</p>
                <a href="https://github.com/nttcom/SkyWay-ScreenShare" target="_blank" class="btn btn-primary">利用方法(GitHub)</a>
            </div>
        </div>
    </div>
</div>

## ドキュメント

開発に役立つドキュメントを公開しています。


<div id="docs-div" class="row card-row">
    <div class="col-12 col-md-6">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">SkyWayからECLWebRTCへの移行方法</h3>
                <p class="card-text">SkyWayは2018年3月31日をもってサービスを終了します。ドキュメントを参考にSkyWayからECLWebRTCへの移行をお願いします。</p>
                <small class="text-muted">Sep 5th, 2017</small>
                <a href="./sfu.html" class="btn btn-primary">マイグレーション</a>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">WebRTCセキュリティレポート</h3>
                <p class="card-text">WebRTCのセキュリティに関する考察をオープンソースで公開しています。WebRTCのセキュリティについて詳しく知りたい方はご覧ください。</p>
                <small class="text-muted">Jul 28th, 2017</small>
                <a href="./sfu.html" class="btn btn-primary">セキュリティレポート</a>
            </div>
        </div>
    </div>
</div>

## サポート

開発に役立つコミュニティサポートやチケットサポートを提供しています。

{% include support-cards.html %}

## メンテナンス・障害情報

メンテナンス、障害情報を公開しています。  
各情報の通知をRSSで受け取りたい方は、 [メンテナンス及び障害情報のお知らせと通知について](https://support.skyway.io/hc/ja/articles/236195548){:target="_blank"} をご覧ください。

<ul class="nav nav-tabs" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" data-toggle="tab" href="#maintenance" target="_blank" role="tab">メンテナンス情報</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#failure" target="_blank" role="tab">障害情報</a>
  </li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="maintenance" role="tabpanel"> 
  </div>
  <div class="tab-pane" id="failure" role="tabpanel">
  </div>
</div>
