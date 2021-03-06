---
layout: default
title: 開発者
lang: ja
main_visual:
  main_copy: <span>あなたの</span><wbr><span>アイデアを</span><wbr><span>形にしよう</span>
  sub_copy: <span>マルチ</span><wbr><span>プラット</span><wbr><span>フォームに</span><wbr><span>対応する</span><wbr><span>SDKや</span><wbr><span>実践的な</span><wbr><span>チュートリアル、</span><wbr><span>豊富な</span><wbr><span>サンプルコードを</span><wbr><span>用意、</span><wbr><span>あなたの</span><wbr><span>アイデアを</span><wbr><span>すぐに</span><wbr><span>形に</span><wbr><span>できます</span>
  links: 
  copy_position: ["after"]
  image_file_name: 
  font_color: "#fff"
  background_color: "#004386"
breadcrumb: [index.md]
---

## Get Started

SkyWayを利用すればアプリケーションの開発を簡単に始めることができます。 

### STEP1

次のコマンドを入力して、ビデオ通話アプリを動かしてみましょう。

```sh
$ git clone git@github.com:skyway/skyway-js-skeleton.git
$ cd skyway-js-skeleton
$ npm install & npm start
```

### STEP2

うまく動いたら、[Community Edition](https://console-webrtc-free.ecl.ntt.com/users/registration)に登録し、APIキーを発行しましょう。　　

### STEP3

次のコマンドを入力して、STEP1のビデオ通話アプリのAPIキーをあなたのものに変更しましょう。  
チュートリアルやAPIリファレンスを参考に、本格的な開発を始めましょう。

```sh
$ echo "window.__SKYWAY_KEY__ = '<YOUR_KEY_HERE>';" > ./key.js
```

## SDKを利用する前に

各SDKを利用する際に役立つ、共通の概念や通信モデルについて、ドキュメントを公開しています。  
はじめにお読みください。

[SkyWayの通信モデル](./communication-model.html){: .btn .btn-primary }

## SDK・ツール

Webブラウザ、iOS、Androidをカバーする3つのSDK、組み込み機器などで動作するツールを用意しています。

<div id="sdk-div" class="row row-for-slim-card">
    <div class="col-6 col-md-3">
        <div class="list-group">
            <a href="./js-sdk.html" class="list-group-item active list-head">
                <i class="fa fa-television fa-fw" aria-hidden="true"></i>
                <span>JavaScript SDK</span>
            </a>
            <a href="./js-tutorial.html" class="list-group-item list-group-item-action">チュートリアル</a>
            <a href="./js-sdk.html#sdkdownload" class="list-group-item list-group-item-action">SDKダウンロード</a>
            <a href="./js-reference/" class="list-group-item list-group-item-action">APIリファレンス</a>
            <a href="https://github.com/skyway/skyway-js-sdk/tree/master/examples" class="list-group-item list-group-item-action" target="_blank">サンプルコード</a>
        </div>
    </div>
    <div class="col-6 col-md-3">
        <div class="list-group">
            <a href="./ios-sdk.html" class="list-group-item active list-head">
                <i class="fa fa-apple fa-fw fa-3x" aria-hidden="true"></i>
                <span>iOS SDK</span>
            </a>
            <a href="./ios-tutorial.html" class="list-group-item list-group-item-action">チュートリアル</a>
            <a href="./ios-sdk.html#sdkdownload" class="list-group-item list-group-item-action">SDKダウンロード</a>
            <a href="./ios-reference/" class="list-group-item list-group-item-action">APIリファレンス</a>
            <a href="https://github.com/skyway/skyway-ios-sdk/tree/master/examples" class="list-group-item list-group-item-action" target="_blank">サンプルコード</a>
        </div>
    </div>
    <div class="col-6 col-md-3">
        <div class="list-group">
            <a href="./android-sdk.html" class="list-group-item active list-head">
                <i class="fa fa-android fa-fw fa-3x" aria-hidden="true"></i>
                <span>Android SDK</span>
            </a>
            <a href="./android-tutorial.html" class="list-group-item list-group-item-action">チュートリアル</a>
            <a href="./android-sdk.html#sdkdownload" class="list-group-item list-group-item-action">SDKダウンロード</a>
            <a href="./android-reference/" class="list-group-item list-group-item-action">APIリファレンス</a>
            <a href="https://github.com/skyway/skyway-android-sdk/tree/master/examples" class="list-group-item list-group-item-action" target="_blank">サンプルコード</a>
        </div>
    </div>
    <div class="col-6 col-md-3">
        <div class="list-group">
            <a href="https://github.com/skyway/skyway-webrtc-gateway/" class="list-group-item active list-head" target="_blank">
                <i class="fa fa-microchip fa-fw fa-3x" aria-hidden="true"></i>
                <span>WebRTC Gateway</span>
            </a>
            <a href="https://github.com/skyway/skyway-webrtc-gateway/blob/master/README.md" class="list-group-item list-group-item-action" target="_blank">ツールの説明</a>
            <a href="https://github.com/skyway/skyway-webrtc-gateway/releases/latest" class="list-group-item list-group-item-action" target="_blank">ツールダウンロード</a>
            <a href="http://35.200.46.204/" class="list-group-item list-group-item-action" target="_blank">APIリファレンス</a>
            <a href="https://github.com/skyway/skyway-webrtc-gateway/tree/master/samples" class="list-group-item list-group-item-action" target="_blank">サンプルコード</a>
        </div>
    </div>
</div>

## すべての機能 

{% include functions-cards.html %}

## Labs

実験的な機能を公開しています。

{% include labs-cards.html %}

## ドキュメント

開発に役立つドキュメントを公開しています。

<div id="docs-div" class="row row-for-slim-card">
    <div class="col-12 col-sm-6 col-lg-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">ECL APIチュートリアル</h3>
                <p>
                    <span class="badge badge-enterprise">enterprise</span>
                </p>
                <p class="card-text">SkyWayのリソースを管理するためのAPIを提供しています。その利用方法をご紹介します。</p>
                <small class="text-muted">2018年12月05日</small>
                <a href="./ecl-api-tutorial.html" class="btn btn-outline-primary">チュートリアル</a>
                <a href="./ecl-api.html" class="btn btn-outline-primary">APIリファレンス</a>
            </div>
        </div>
    </div>    
    <div class="col-12 col-sm-6 col-lg-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">Enterprise Editionへの移行</h3>
                <p class="card-text">Community EditionからEnterprise Editionへサービスを停止せずにAPIキーを引き継ぐことが可能です。APIキーの移行方法をご紹介します。</p>
                <small class="text-muted">2018年4月19日</small>
                <a href="./migration.html" class="btn btn-outline-primary">APIキーの移行</a>
            </div>
        </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">SkyWayの通信モデル</h3>
                <p class="card-text">各SDKを利用する際に役立つ、共通の概念や通信モデルについて、ドキュメントを公開しています。</p>
                <small class="text-muted">2017年12月4日</small>
                <a href="./communication-model.html" class="btn btn-outline-primary">SkyWayの通信モデル</a>
            </div>
        </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">WebRTCセキュリティレポート</h3>
                <p class="card-text">WebRTCのセキュリティに関する考察をオープンソースで公開しています。WebRTCのセキュリティについて詳しく知りたい方はご覧ください。</p>
                <small class="text-muted">2015年7月28日</small>
                <a href="http://webrtc-security.github.io/index.html" target="_blank" class="btn btn-outline-primary">セキュリティレポート</a>
            </div>
        </div>
    </div>
</div>

## サポート

開発に役立つ開発者コミュニティやチケットサポートを提供しています。

{% include support-cards.html %}

## メンテナンス・障害情報

メンテナンス、障害情報を公開しています。  
各情報の通知をRSSで受け取りたい方は、 [メンテナンスおよび障害情報のお知らせと通知について](https://support.skyway.io/hc/ja/articles/236195548){:target="_blank"} をご覧ください。


<div class="card">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#maintenance" role="tab">メンテナンス情報</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#failure" role="tab">障害情報</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <div class="tab-content">
      <div class="tab-pane active" id="maintenance" role="tabpanel"> 
      </div>
      <div class="tab-pane" id="failure" role="tabpanel">
      </div>
    </div>
  </div>
</div>

<script>
$(function() {
  'use strict';

  // AJAXでZendeskのお知らせを取得して表示

  // JSON取得
  $.getJSON(CONST.JSON_URL_MAINTENANCE).done(function(data) {
    updateNews(data, 'maintenance', CONST.ZENDESK_URL_MAINTENANCE);
  }).fail(function(data) {
    console.log('xhr failed');
  });

  $.getJSON(CONST.JSON_URL_FAILURE).done(function(data) {
    updateNews(data, 'failure', CONST.ZENDESK_URL_FAILURE);
  }).fail(function(data) {
    console.log('xhr failed');
  });

  // DOM作成
  function updateNews(obj, id, siteurl){
    var $rows = $('<div>').addClass('rows');;
    for (var i = 0; i < obj.articles.length; i++) {
      var $cardTitle = $('<h4>')
        .text(obj.articles[i].body.substr(4, 10))
        .addClass('card-title h6');
      var $cardText = $('<p>')
        .html(obj.articles[i].body)
        .addClass('mini-headline-text card-text');
      var $col1 = $('<div>')
        .addClass('col-sm-3 col-lg-2')
        .append($cardTitle);
      var $col2 = $('<div>')
        .addClass('col-sm-9 col-lg-10')
        .append($cardText);
      var $row = $('<div>')
        .addClass('row')
        .append($col1)
        .append($col2);
      $rows.append($row);
    }
    var $link = $('<a>')
      .addClass('btn btn-primary')
      .attr({
        href: siteurl,
        target: '_blank'
      })
      .text('すべて見る')
      .appendTo('<div class="allnewslink">')
      .parent();
    $('#' + id).append($rows).append($link);
  }
});
</script>
