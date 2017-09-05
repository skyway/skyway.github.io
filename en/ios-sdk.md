---
layout: default
title: iOS SDK
lang: en
breadcrumb: [en/index.md, en/developer.md]
---

# iOS SDK

## Turorial

By using basic functions of iOS SDK, we will create a simple one-to-one video conversation application to acquire deeper knowledge on how to use the iOS SDK.
The application will have functions to display a list of users currently connected to the server, to select a conversation partner, to start and stop a one-to-one video conversation, and to accept the call.

The application to be created in this tutorial will be the same as [one-to-one video chat](https://github.com/skyway/skyway-ios-sdk/tree/master/examples/p2p_videochat){:target="_blank"} provided as sample codes.
If you want to try the completed application, [download the source codes](https://github.com/skyway/skyway-ios-sdk/archive/master.zip) and build in accordance with the build procedure of this tutorial.


<figure class="figure">
  <img src="{{ site.rootdir[page.lang] }}/images/sdk-tutorial-top-image.png"
    class="figure-img img-fluid rounded" alt="Use ECLWebRTC to perform signaling to interconnect terminals with videochat">
  <figcaption class="figure-caption">Use ECLWebRTC to perform signaling to interconnect terminals with videochat</figcaption>
</figure>

<figure class="figure">
  <img src="https://github.com/skyway/webrtc-handson-native/wiki/img/video-chat.png" class="figure-img img-fluid rounded" alt="Screenshot of video chat">
  <figcaption class="figure-caption">Screenshot of video chat</figcaption>
</figure>

[Continue the turorial](./ios-tutorial.html){: .btn .btn-primary }

## Download DSK
{: #sdkdownload }

### Case: Using CocoaPods

Add the contents to the Prodfile.

*Prodfile*
{: .lang }

```
platform :ios, '7.0'
pod 'ECLWebRTC-iOS-SDK'
```

You can install ECLWebRTC in your project.

```sh
$ pod init
```

### Case: Downloading as file

<div class="d-sm-flex">
  <div class="pr-1 pb-2">
    <a href="https://github.com/skyway/skyway-ios-sdk/archive/master.zip" class="btn btn-primary">Download as ZIP</a>
  </div>
  <div>
    <a href="https://github.com/skyway/skyway-ios-sdk" class="btn btn-outline-primary" target="_blank">Clone on GitHub</a><br>
  </div>
</div>

## Supported OS

iOS 8+

## API Reference

<div class="d-sm-flex">
  <div class="pr-1 pb-2">
    <a href="./ios-reference/" class="btn btn-primary">ECLWebRTC API Reference</a>
  </div>
  <div class="pb-3">
    <a href="http://nttcom.github.io/skyway/en/docs/#iOS" class="btn btn-outline-primary" target="_blank">SkyWay API Reference</a><br>
  </div>
</div>

Provides difference information of API refference between ECLWebRTC and SkyWay on [Github](https://github.com/nttcom/skyway-sdk-migration-docs/blob/master/android_sdk_next_version_api_diff.md){: _target="_blank" }.

## Sample Code

Sample Code is open to public.

<div class="row">
  <div class="col-md-9 col-lg-7 col-xl-6">
    <table class="table">
      <tbody align="right">
        <tr>
          <th scope="row">One-on-One, P2P</th>
          <td><a href="https://github.com/skyway/ios-sdk/tree/master/examples/p2p_videochat" target="_blank">video chat</a></td>
          <td><a href="https://github.com/skyway/ios-sdk/tree/master/examples/p2p_textchat" target="_blank">text chat</a></td>
        </tr>
        </tr>
        <tr>
          <th scope="row">Multi-party, P2P</th>
          <td><a href="https://github.com/skyway/ios-sdk/tree/master/examples/fullmesh_videochat" target="_blank">video chat</a></td>
          <td><a href="https://github.com/skyway/ios-sdk/tree/master/examples/fullmesh_textchat" target="_blank">text chat</a></td>
        </tr>
        <tr>
          <th scope="row">Multi-party, P2P</th>
          <td><a href="https://github.com/skyway/ios-sdk/tree/master/examples/sfu_videochat" target="_blank">video chat</a></td>
          <td><a href="https://github.com/skyway/ios-sdk/tree/master/examples/sfu_textchat" target="_blank">text chat</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## Support

{% include support-cards.html %}
