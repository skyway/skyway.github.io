---
layout: default
title: iOS SDK
lang: en
breadcrumb: [en/index.md, en/developer.md]
---

# iOS SDK

## Tutorial

In the tutorial, you will create a one-on-one video chat app using the basic features of the iOS SDK.
The app will have the ability to display a list of users currently connected to the server, select which user to call, call, answer and hang up a one-to-one video conversation.

The application to be created in this tutorial will be the same as [one-to-one video chat](https://github.com/skyway/skyway-ios-sdk/tree/master/examples/objective-c/p2p-videochat){:target="_blank"}  provided in the samples.
If you want to try the finished app, [download the source code](https://github.com/skyway/skyway-ios-sdk/archive/master.zip) and and follow the tutorial to build.


<figure class="figure">
  <img src="{{ site.baseurl }}/images/sdk-tutorial-top-image.png"
    class="figure-img img-fluid rounded" alt="Use ECLWebRTC to start a video chat session between two devices">
  <figcaption class="figure-caption">Use ECLWebRTC to start a video chat session between two devices</figcaption>
</figure>

<figure class="figure">
  <img src="{{ site.baseurl }}/images/ios-tutorial-videochat-sc.png" class="figure-img img-fluid rounded" alt="Screenshot of video chat">
  <figcaption class="figure-caption">Screenshot of video chat</figcaption>
</figure>

[Continue the tutorial](./ios-tutorial.html){: .btn .btn-primary }

## Downloading the SDK
{: #sdkdownload }

### Downloading the SDK Using CocoaPods

Add the the text below to your Podfile.

*Podfile*
{: .lang }

```
platform :ios,'8.0'
use_frameworks!

def install_pods
  pod 'SkyWay'
end

target 'source code directory path(rewrite)' do
  install_pods
end
```

Install ECLWebRTC.

```sh
$ pod setup
$ pod install
```

### Downloading the SDK as a file

<div class="d-sm-flex">
  <div class="pr-1 pb-2">
    <a href="https://github.com/skyway/skyway-ios-sdk/releases/latest" class="btn btn-primary">Download SkyWay.framework.zip</a>
  </div>
</div>

## Supported OS's

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

A list of changes between the old (SkyWay) SDK and the new ECLWebRTC SDK can be found on  [Github](https://github.com/nttcom/skyway-sdk-migration-docs/blob/master/android_sdk_next_version_api_diff.md){: _target="_blank" }.

## Sample Code

Sample code for Objective-C.

<div class="row">
  <div class="col-md-9 col-lg-7 col-xl-6">
    <table class="table">
      <tbody align="right">
        <tr>
          <th scope="row">One-on-One, P2P</th>
          <td><a href="https://github.com/skyway/skyway-ios-sdk/tree/master/examples/objective-c/p2p-videochat" target="_blank">video chat</a></td>
          <td><a href="https://github.com/skyway/skyway-ios-sdk/tree/master/examples/objective-c/p2p-textchat" target="_blank">text chat</a></td>
        </tr>
        <tr>
          <th scope="row">Multi-party, P2P</th>
          <td><a href="https://github.com/skyway/skyway-ios-sdk/tree/master/examples/objective-c/mesh-videochat" target="_blank">video chat</a></td>
          <td><a href="https://github.com/skyway/skyway-ios-sdk/tree/master/examples/objective-c/mesh-textchat" target="_blank">text chat</a></td>
        </tr>
        <tr>
          <th scope="row">Multi-party, P2P</th>
          <td><a href="https://github.com/skyway/skyway-ios-sdk/tree/master/examples/objective-c/sfu-videochat" target="_blank">video chat</a></td>
          <td><a href="https://github.com/skyway/skyway-ios-sdk/tree/master/examples/objective-c/sfu-textchat" target="_blank">text chat</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

Sample code for Swift.

<div class="row">
  <div class="col-md-9 col-lg-7 col-xl-6">
    <table class="table">
      <tbody align="right">
        <tr>
          <th scope="row">One-on-One, P2P</th>
          <td><a href="https://github.com/skyway/skyway-ios-sdk/tree/master/examples/swift" target="_blank">video chat</a></td>
          <td><a href="https://github.com/skyway/skyway-ios-sdk/tree/master/examples/swift" target="_blank">text chat</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## Support

{% include support-cards.html %}
