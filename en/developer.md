---
layout: default
title: Developer
lang: en
main_visual:
  main_copy: Shape your ideas into reality.
  sub_copy: With SDKs supporting multiple platforms, lots of tutorials and sample code, ECLWebRTC can help you materialize your ideas.
  links: 
  copy_position: ["after"]
  image_file_name: 
  font_color: "#fff"
  background_color: "#004386"
breadcrumb: [en/index.md]
---

## Get Started

ECLWebRTC enables customers to start developing applications easily.

### STEP1

Enter the following command to start a videochat application.

```sh
$ git clone git@github.com:skyway/skyway-js-skeleton.git
$ cd skyway-js-skeleton
$ npm install & npm start
```

### STEP2

Once you've given it a try, sign up for the free [Community Edition](https://console-webrtc-free.ecl.ntt.com/users/registration) and get an API Key.

### STEP3

Replace the API key in the sample code with the one you got in STEP2.
Start a developing a fully functioning app by reading the tutorials and API reference.

```sh
$ echo "window.__SKYWAY_KEY__ = '<YOUR_KEY_HERE>';" > ./key.js
```

## Basic Concept

This article describes basic concept of ECLWebRTC. Recommended for developers interested in knowing about the communication model of ECLWebRTC.

[Communication Model](./communication-model.html){: .btn .btn-primary }

## SDK and Tools

There are SDKs for Web browsers, iOS and Android, and tools that work on the embedded devices.

<div id="sdk-div" class="row row-for-slim-card">
    <div class="col-6 col-md-3">
        <div class="list-group">
            <a href="./js-sdk.html" class="list-group-item active list-head">
                <i class="fa fa-television fa-fw" aria-hidden="true"></i>
                <span>JavaScript SDK</span>
            </a>
            <a href="./js-tutorial.html" class="list-group-item list-group-item-action">Tutorial</a>
            <a href="./js-sdk.html#sdkdownload" class="list-group-item list-group-item-action">SDK Download</a>
            <a href="./js-reference/" class="list-group-item list-group-item-action">API Reference</a>
            <a href="https://github.com/skyway/skyway-js-sdk/tree/master/examples/" class="list-group-item list-group-item-action" target="_blank">Sample Code</a>
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
            <a href="https://github.com/skyway/skyway-ios-sdk/tree/master/examples/" class="list-group-item list-group-item-action" target="_blank">Sample Code</a>
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
            <a href="https://github.com/skyway/skyway-android-sdk/tree/master/examples/" class="list-group-item list-group-item-action" target="_blank">Sample Code</a>
        </div>
    </div>
    <div class="col-6 col-md-3">
        <div class="list-group">
            <a href="https://github.com/skyway/skyway-webrtc-gateway/" class="list-group-item active list-head" target="_blank">
                <i class="fa fa-microchip fa-fw fa-3x" aria-hidden="true"></i>
                <span>WebRTC Gateway</span>
            </a>
            <a href="https://github.com/skyway/skyway-webrtc-gateway/blob/master/README-en.md" class="list-group-item list-group-item-action" target="_blank">Overview</a>
            <a href="https://github.com/skyway/skyway-webrtc-gateway/releases/latest" class="list-group-item list-group-item-action" target="_blank">Tool Download</a>
            <a href="http://35.200.46.204/" class="list-group-item list-group-item-action" target="_blank">API Reference</a>
            <a href="https://github.com/skyway/skyway-webrtc-gateway/tree/master/samples" class="list-group-item list-group-item-action" target="_blank">Sample Code</a>
        </div>
    </div>
</div>

## All Features

{% include functions-cards.html %}

## Labs

Experimental features.

{% include labs-cards.html %}

## Document

Documents useful for development.

<div id="docs-div" class="row row-for-slim-card">
    <div class="col-12 col-sm-6 col-lg-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">ECL API tutorial</h3>
                <p>
                    <span class="badge badge-enterprise">enterprise</span>
                </p>
                <p class="card-text">Provide API for your SkyWay resource management.</p>
                <small class="text-muted">Dec, 5th, 2018</small>
                <a href="./ecl-api.html" class="btn btn-outline-primary">API Reference</a>
            </div>
        </div>
    </div>   
    <div class="col-12 col-sm-6 col-lg-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">How to migrate to Enterprise Edition</h3>
                <p class="card-text">It is possible to migrate the API key from the Community Edition to the Enterprise Edition without stopping the service. How to migrate from the Community Edition to the Enterprise Edition.</p>
                <small class="text-muted">Apr 19th, 2018</small>
                <a href="./migration.html" class="btn btn-outline-primary">Migration to Enterprise Edition</a>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">Communication Model of ECLWebRTC</h3>
                <p class="card-text">This article describes basic concept of ECLWebRTC. Recommended for developers interested in knowing about the communication model of ECLWebRTC.</p>
                <small class="text-muted">Dec 8th, 2017</small>
                <a href="./communication-model.html" class="btn btn-outline-primary">Communication Model</a>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">WebRTC Security report</h3>
                <p class="card-text">An open-source document on the considerations on WebRTC security. Recommended for customers interested in knowing about the security concerns of WebRTC.</p>
                <small class="text-muted">Jul 28th, 2017</small>
                <a href="http://webrtc-security.github.io/index.html" target="_blank" class="btn btn-outline-primary">Security Report</a>
            </div>
        </div>
    </div>
</div>

## Support

Provides developer community and support ticket useful for development.

{% include support-cards.html %}

## Maintenance and Failure Information

Maintenance and Failure Information.
If you want to receive RSS notifications, please see [Announcement and Notification of Maintenance and Failure Information](https://support.skyway.io/hc/en-us/articles/236195548){:target="_blank"}.



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
