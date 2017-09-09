---
layout: default
title: Android SDK
lang: en
breadcrumb: [en/index.md, en/developer.md]
---

# Android SDK

## Tutorial

By using basic functions of Android SDK, we will create a simple one-to-one video conversation application to acquire deeper knowledge on how to use the Android SDK.
The application will have functions to display a list of users currently connected to the server, to select a conversation partner, to start and stop a one-to-one video conversation, and to accept the call.

The application to be created in this tutorial will be the same as [one-to-one video chat](https://github.com/skyway/skyway-android-sdk/tree/master/examples/p2p-videochat){:target="_blank"} provided as sample codes.
If you want to try the completed application, [download the source codes](https://github.com/skyway/skyway-android-sdk/archive/master.zip) and build in accordance with the build procedure of this tutorial.


<figure class="figure">
  <img src="{{ site.baseurl }}/images/sdk-tutorial-top-image.png"
    class="figure-img img-fluid rounded" alt="Use ECLWebRTC to perform signaling to interconnect terminals with videochat">
  <figcaption class="figure-caption">Use ECLWebRTC to perform signaling to interconnect terminals with videochat</figcaption>
</figure>

<figure class="figure">
  <img src="{{ site.baseurl }}/images/android-tutorial-videochat-sc.png" class="figure-img img-fluid rounded" alt="Screenshot of video chat">
  <figcaption class="figure-caption">Screenshot of video chat</figcaption>
</figure>

##  Download SDK
{: #sdkdownload }

<div class="d-sm-flex">
  <div class="pr-1 pb-2">
    <a href="https://github.com/skyway/skyway-android-sdk/archive/master.zip" class="btn btn-primary">Download as ZIP</a>
  </div>
  <div>
    <a href="https://github.com/skyway/skyway-android-sdk" class="btn btn-outline-primary" target="_blank">Clone on GitHub</a><br>
  </div>
</div>

## 対応OS

Android 4.2+ (API Level 17+)

## API Refference

<div class="d-sm-flex">
  <div class="pr-1 pb-2">
    <a href="./android-reference/" class="btn btn-primary">ECLWebRTC API Reference</a>
  </div>
  <div class="pb-3">
    <a href="http://nttcom.github.io/skyway/en/docs/#Android" class="btn btn-outline-primary" target="_blank">SkyWay API Reference</a><br>
  </div>
</div>

Provides difference information of API refference between ECLWebRTC and SkyWay on [Github](https://github.com/nttcom/skyway-sdk-migration-docs/blob/master/android_sdk_next_version_api_diff.md){: _target="_blank" }.

## Sample Code

Sample code is open to public.

<div class="row">
  <div class="col-md-9 col-lg-7 col-xl-6">
    <table class="table">
      <tbody align="right">
        <tr>
          <th scope="row">One-on-One, P2P</th>
          <td><a href="https://github.com/skyway/skyway-android-sdk/tree/master/examples/p2p-videochat" target="_blank">video chat</a></td>
          <td><a href="https://github.com/skyway/skyway-android-sdk/tree/master/examples/p2p-textchat" target="_blank">text chat</a></td>
        </tr>
        <tr>
          <th scope="row">Multi-party, P2P</th>
          <td><a href="https://github.com/skyway/skyway-android-sdk/tree/master/examples/mesh-videochat" target="_blank">video chat</a></td>
          <td><a href="https://github.com/skyway/skyway-android-sdk/tree/master/examples/mesh-textchat" target="_blank">text chat</a></td>
        </tr>
        <tr>
          <th scope="row">Multi-party, P2P</th>
          <td><a href="https://github.com/skyway/skyway-android-sdk/tree/master/examples/sfu-videochat" target="_blank">video chat</a></td>
          <td><a href="https://github.com/skyway/skyway-android-sdk/tree/master/examples/sfu-textchat" target="_blank">text chat</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## Support
{: #support }

{% include support-cards.html %}
