---
layout: default
title: Developer
lang: en
main_visual:
  main_copy: Realize your idea.
  sub_copy: With the SDK supporting multi-platforms, practical tutorials and abundant sample codes, you can realize your idea at once.
  links: 
  copy_position: ["after"]
  image_file_name: 
  font_color: "#fff"
  background_color: rgb(0, 67, 134)
breadcrumb: [en/index.md]
---

## Get Started

ECLWebRTC enables customers to start developing application easily.

### STEP1

Enter the following command to start a videochat application.

```sh
~ $ npm install eclwebrtc-skeleton
~ $ npm start
```

### STEP2

If it works fine, register for[Community Edition](./signup.html) and generate API Key.

### STEP3

Replace the API key in the sample code in STEP1 with the one generated in STEP2.
Start a new development on a full-scale basis by consulting Tutorials and API Reference.

```sh
~ $ echo "window.__ECLWEBRTC_KEY__ = '<YOUR_KEY_HERE>';" > ./key.js
```

## SDK

There are four SDK which covers Web browser, iOS, Android and IoT device.

<div id="sdk-div" class="row card-row">
    <div class="col-6 col-md-3">
        <div class="list-group">
            <a href="./js-sdk.html" class="list-group-item active list-head">
                <i class="fa fa-television fa-fw" aria-hidden="true"></i>
                <span>JavaScript SDK</span>
            </a>
            <a href="./js-tutorial.html" class="list-group-item list-group-item-action">Tutorial</a>
            <a href="./js-sdk.html#sdkdownload" class="list-group-item list-group-item-action">SDK Download</a>
            <a href="./js-reference/" class="list-group-item list-group-item-action">API Reference</a>
            <a href="https://github.com/nttcom/ECLWebRTC-JS-SDK/tree/master/examples" class="list-group-item list-group-item-action">Sample Code</a>
        </div>
    </div>
    <div class="col-6 col-md-3">
        <div class="list-group">
            <a href="./ios-sdk.html" class="list-group-item active list-head">
                <i class="fa fa-apple fa-fw fa-3x" aria-hidden="true"></i>
                <span>iOS SDK</span>
            </a>
            <a href="./ios-tutorial.html" class="list-group-item list-group-item-action">Tutorial</a>
            <a href="./ios-sdk.html#sdkdownload" class="list-group-item list-group-item-action">SDK Download</a>
            <a href="./ios-reference/" class="list-group-item list-group-item-action">API Reference</a>
            <a href="https://github.com/nttcom/ECLWebRTC-iOS-SDK/tree/master/examples" class="list-group-item list-group-item-action">Sample Code</a>
        </div>
    </div>
    <div class="col-6 col-md-3">
        <div class="list-group">
            <a href="./android-sdk.html" class="list-group-item active list-head">
                <i class="fa fa-android fa-fw fa-3x" aria-hidden="true"></i>
                <span>Android SDK</span>
            </a>
            <a href="./android-tutorial.html" class="list-group-item list-group-item-action">Tutorial</a>
            <a href="./android-sdk.html#sdkdownload" class="list-group-item list-group-item-action">SDK Download</a>
            <a href="./android-reference/" class="list-group-item list-group-item-action">API Reference</a>
            <a href="https://github.com/nttcom/ECLWebRTC-Android-SDK/tree/master/examples" class="list-group-item list-group-item-action">Sample Code</a>
        </div>
    </div>
    <div class="col-6 col-md-3">
        <div class="list-group">
            <a href="https://github.com/nttcom/skyway-iot-sdk" target="_blank" class="list-group-item active list-head">
                <i class="fa fa-microchip fa-fw fa-3x" aria-hidden="true"></i>
                <span>IoT SDK</span>
                <small>β version</small>
            </a>
            <a href="https://github.com/nttcom/skyway-iot-sdk/blob/master/docs/how_to_install.md" target="_blank" class="list-group-item list-group-item-action">Install</a>
            <a href="https://github.com/nttcom/skyway-iot-sdk/blob/master/docs/how_to_use_sample_app.md" target="_blank" class="list-group-item list-group-item-action">Use Procedure</a>
            <a href="https://github.com/nttcom/skyway-iot-sdk/tree/master/docs/apiref" target="_blank" class="list-group-item list-group-item-action">API Reference</a>
            <a href="https://github.com/nttcom/skyway-siru-sample" target="_blank" class="list-group-item list-group-item-action">Sample Code</a>
        </div>
    </div>
</div>



## All Features

<div id="feature-div" class="row card-row">
    <div class="col-6 col-sm-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">Media & Data</h3>
                <p class="card-text">With the provided SDK, media channels and data channels can be used.</p>
            </div>
        </div>
    </div>
    <div class="col-6 col-sm-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">Signaling</h3>
                <p class="card-text">A server to exchange information such as IP addresses and codec with the partner. It is equipped with Room management function useful for multi-person conversation.</p>
            </div>
        </div>
    </div>
    <div class="col-6 col-sm-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">STUN</h3>
                <p class="card-text">A server to check own Public IP address and Port No. required for NAT passing is provided for free.<br></p>
            </div>
        </div>
    </div>
    <div class="col-6 col-sm-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">Authorization</h3>
                <p class="card-text">Authentication functions to prevent illegal use of API keys are provided.</p>
                <a href="https://github.com/nttcom/Peer-Authentication-Server-Samples" target="_blank" class="btn btn-outline-primary">How to use(Github)</a>
            </div>
        </div>
    </div>
    <div class="col-6 col-sm-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">TURN</h3>
                <p class="card-text">A server to relay media in an environment where Peer to Peer communication cannot be established is provided.</p>
                <a href="./pricing.html#サーバ通信料" class="btn btn-outline-primary">Charge</a>
            </div>
        </div>
    </div>
    <div class="col-6 col-sm-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">SFU</h3>
                <p class="card-text">A media server that transmits images and voices as a proxy to realize multi-person conversation and distribution is provided.</p>
                <a href="#" class="btn btn-outline-primary">Charge</a>
                <a href="./sfu.html" class="btn btn-outline-primary">Details of SFU</a>
            </div>
        </div>
    </div>
    <div class="col-6 col-sm-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">Screen Sharing</h3>
                <p class="card-text">A library and sample codes to facilitate implementation of browser extension for screen sharing are provided.</p>
                <a href="https://github.com/nttcom/SkyWay-ScreenShare" target="_blank" class="btn btn-outline-primary">How to use(Github)</a>
            </div>
        </div>
    </div>
</div>

## Document

Document useful for development is open to public.

<div id="docs-div" class="row card-row">
    <div class="col-12 col-md-6">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">How to migrate to ECLWebRTC</h3>
                <p class="card-text">Skyway is terminated as of March 31st, 2018. Please migrate from SkyWay to ECLWebRTC reffering to document.</p>
                <small class="text-muted">Sep 7th, 2017</small>
                <a href="./migration.html" class="btn btn-outline-primary">Migration</a>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">WebRTC Security report</h3>
                <p class="card-text">Considerations on WebRTC security are released as an open-source. Customers interested to know details of WebRTC security are advised to read them.</p>
                <small class="text-muted">Jul 28th, 2017</small>
                <a href="http://webrtc-security.github.io/index.html" target="_blank" class="btn btn-outline-primary">Security Report</a>
            </div>
        </div>
    </div>
</div>

## サポート

Provides community ticket support useful for development.

{% include support-cards.html %}

## Maintenance and Failure Information

Maintenance and Failure Information is open to public.
For customers who want to receive notification of each information by RSS, please see [Announcement and Notification of Maintenance and Failure Information](https://support.skyway.io/hc/ja/articles/236195548){:target="_blank"}.



<div class="card">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#maintenance" role="tab">Maintenance Information</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#failure" role="tab">Failure Information</a>
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
      .text('See all')
      .appendTo('<div class="allnewslink">')
      .parent();
    $('#' + id).append($rows).append($link);
  }
});
</script>
