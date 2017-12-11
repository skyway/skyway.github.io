---
layout: default
title: iOS SDK
lang: en
breadcrumb: [en/index.md, en/developer.md]
---

# iOS SDK

## Tutorial

In this tuturial, you will create a one-on-one video chat application using the basic functionality of the iOS SDK.
The app will have the ability to display a list of users currently connected to the server, to select a conversation partner, to call, answer and hang up a one-to-one video conversation.

<<<<<<< Updated upstream
The application to be created in this tutorial will be the same as [one-to-one video chat](https://github.com/skyway/skyway-ios-sdk/tree/master/examples/p2p-videochat){:target="_blank"} provided as sample codes.
If you want to try the completed application, [download the source codes](https://github.com/skyway/skyway-ios-sdk/archive/master.zip) and build in accordance with the build procedure of this tutorial.


<figure class="figure">
  <img src="{{ site.baseurl }}/images/sdk-tutorial-top-image.png"
    class="figure-img img-fluid rounded" alt="Use ECLWebRTC to perform signaling to interconnect terminals with videochat">
  <figcaption class="figure-caption">Use ECLWebRTC to perform signaling to interconnect terminals with videochat</figcaption>
=======
The app to be created in this tutorial will be the same as the [one-to-one video chat](){:target="_blank"} sample we provide on Github.
If you want to try the completed application, download the source code and follow the instructions in this tutorial to build.


<figure class="figure">
  <img src="https://github.com/skyway/webrtc-handson-native/wiki/img/hands-on-summary.png" class="figure-img img-fluid rounded" alt="Use SkyWay to start a video chat session between two devices">
  <figcaption class="figure-caption">Use SkyWay to start a video chat session between two devices</figcaption>
>>>>>>> Stashed changes
</figure>

<figure class="figure">
  <img src="{{ site.baseurl }}/images/ios-tutorial-videochat-sc.png" class="figure-img img-fluid rounded" alt="Screenshot of video chat">
  <figcaption class="figure-caption">Screenshot of video chat</figcaption>
</figure>

[Continue the tutorial](./ios-tutorial.html){: .btn .btn-primary }

## Download SDK
{: #sdkdownload }

### Including the SDK Using CocoaPods

Add the contents to the Podfile.

*Podfile*
{: .lang }

```
platform :ios, '8.0'
pod 'SkyWay'
```

You can install ECLWebRTC in your project.

```sh
$ pod setup
$ pod install
```

### Including the SDK from file

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

Provides difference information of API reference between ECLWebRTC and SkyWay on [Github](https://github.com/nttcom/skyway-sdk-migration-docs/blob/master/android_sdk_next_version_api_diff.md){: _target="_blank" }.

## Sample Code

Sample Code is open to public.

<div class="row">
  <div class="col-md-9 col-lg-7 col-xl-6">
    <table class="table">
      <tbody align="right">
        <tr>
          <th scope="row">One-on-One, P2P</th>
          <td><a href="https://github.com/skyway/skyway-ios-sdk/tree/master/examples/p2p-videochat" target="_blank">video chat</a></td>
          <td><a href="https://github.com/skyway/skyway-ios-sdk/tree/master/examples/p2p-textchat" target="_blank">text chat</a></td>
        </tr>
        <tr>
          <th scope="row">Multi-party, P2P</th>
          <td><a href="https://github.com/skyway/skyway-ios-sdk/tree/master/examples/mesh-videochat" target="_blank">video chat</a></td>
          <td><a href="https://github.com/skyway/skyway-ios-sdk/tree/master/examples/mesh-textchat" target="_blank">text chat</a></td>
        </tr>
        <tr>
          <th scope="row">Multi-party, P2P</th>
          <td><a href="https://github.com/skyway/skyway-ios-sdk/tree/master/examples/sfu-videochat" target="_blank">video chat</a></td>
          <td><a href="https://github.com/skyway/skyway-ios-sdk/tree/master/examples/sfu-textchat" target="_blank">text chat</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## Support

{% include support-cards.html %}
