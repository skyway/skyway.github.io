---
layout: default
title: Recording
lang: en
breadcrumb: [en/index.md, en/developer.md]
---

# 録音について

この機能は、Recorder SDKを利用して開発された録音アプリの音声を、WebRTCで録音サーバに転送し、音声ファイルとしてお客様のクラウドストレージにアップロードするものです。  
利用するためには、Enterprise Editionの契約とクラウドストレージの用意が必要となります。対応するクラウドストレージは**[Google Cloud Strage](https://cloud.google.com/storage/){:target="_blank"}**のみとなります。  
この機能は**当面無料で利用制限なく利用可能**ですが、将来、提供料金が変更になる可能性があります。その際は、事前にメールや当サイトでお知らせします。また、この機能は**SLA対象外**となります。

<figure class="figure details-image">
  <img src="{{ site.baseurl }}/images/recording_details.png"
    class="figure-img img-fluid rounded" alt="録音の仕組み">
  <figcaption class="figure-caption">録音の流れ</figcaption>
</figure>

## 利用方法

録音機能はRecorder SDKから利用可能です。SDKはJavaScriptのみ対応しています。SDKの入手方法は[こちら](https://github.com/skyway/skyway-recorder-sdk/blob/master/README.md){:target="_blank"}をご覧ください。  
詳しい利用方法は、[チュートリアル](./en/recording-tutorial.html)と[APIリファレンス](https://github.com/skyway/skyway-recorder-sdk/blob/master/API.md){:target="_blank"}をご覧ください。


