---
layout: default
title: SFU
lang: en
breadcrumb: [en/index.md, en/developer.md]
---

# About SFU

WebRTC communicates, basically not via server, but directly in P2P.
In multi-person conversation, it is common to use a method called "full-mesh connection" which employs multiple P2P connections simultaneously, while ECLWebRTC provides a media server called SFU to realize stable conversation with more persons.


<div class="row">
    <div class="col-sm-6">
        <div class="card">
            <img src='{{ site.baseurl }}/images/fullmesh.png' id='fullmesh.png' width='350' alt='Multi-person conversation by full-mesh connection'>
            <div class="card-body">
                <h3 class="card-title">Multi-person conversation by full-mesh connection</h3>
                <p class="card-text">As image and voice streams are sent to all participating members, terminal load will increase if the number of the members increases.</p>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="card">
            <img src='{{ site.baseurl }}/images/sfu.png' id='sfu_img' width='350' alt='Multi-person conversation using SFU'>
            <div class="card-body">
                <h3 class="card-title">Multi-person conversation using SFU</h3>
                <p class="card-text">As image and voice streams are sent only to the server (SFU), terminal load can be reduced compared with full-mesh connection.</p>
            </div>
        </div>
    </div>    
</div>


## How to use

You can use SFU from JavaScript SDK, iOS SDK and Android SDK.
RoomAPI provided by ECLWebRTC has two modes, SFU and Full-Mesh, which can be switched easily.
Please refer to API Reference for details on how to use.
