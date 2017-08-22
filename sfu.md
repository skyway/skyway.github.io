---
layout: default
title: SFU
lang: ja
breadcrumb: [index.md, developer.md]
---

# SFUについて

WebRTCは基本的にサーバは介さず、P2Pで直接通信を行います。  
複数人で通話する際は、P2P通信を複数同時に使用したフルメッシュ接続という手法を用いることが一般的ですが、ECLWebRTCではより多人数で安定した通話を実現するために、SFUというメディアサーバを提供しています。


<div class="row">
    <div class="col-sm-6">
        <div class="card">
            <img src='{{ site.rootdir[page.lang] }}images/fullmesh.png' id='fullmesh.png' width='350' alt='フルメッシュ接続の通信'>
            <div class="card-body">
                <h3 class="card-title">フルメッシュ接続による多人数通話</h3>
                <p class="card-text">参加者全員に対して映像・音声ストリームを送信するため、人数が増えると端末負荷が大きくなる</p>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="card">
            <img src='{{ site.rootdir[page.lang] }}images/sfu.png' id='sfu_img' width='350' alt='SFUを使用した通信'>
            <div class="card-body">
                <h3 class="card-title">SFUを使用した多人数通話</h3>
                <p class="card-text">サーバ（SFU）に対してのみ映像・音声ストリームを送信するため、フルメッシュ接続に比べて端末負荷を抑えることができる</p>
            </div>
        </div>
    </div>    
</div>


## 利用方法

SFUは、JavaScript SDK、iOS SDK、Android SDKからそれぞれ利用可能です。  
ECLWebRTCが提供するRoomAPIには<b>SFU</b>と<b>フルメッシュ</b>の2つのモードがあり、簡単に切り替えることが出来ます。  
詳しい利用方法は[APIリファレンス](./sfu.htmk)をご覧ください。


