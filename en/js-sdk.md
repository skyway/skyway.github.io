---
layout: default
title: JavaScript SDK
lang: en
breadcrumb: [en/index.md, en/developer.md]
---

# JavaScript SDK

## Turorial

By using basic functions of JavaScript SDK, we will create a simple one-to-one video conversation application to acquire deeper knowledge on how to use the JavaScript SDK.
The application will have functions to input ID of a conversation partner, to start and stop a one-to-one video conversation, and to accept the call.

You can try [demonstration of the completed application]().

<figure class="figure">
  <img src="https://github.com/skyway/webrtc-handson-native/wiki/img/hands-on-summary.png" class="figure-img img-fluid rounded" alt="Use ECLWebRTC to perform signaling to interconnect terminals with videochat">
  <figcaption class="figure-caption">Use ECLWebRTC to perform signaling to interconnect terminals with videochat</figcaption>
</figure>

[Continue the turorial](js-tutorial.html){: .btn .btn-primary }

## Download SDK
{: #sdkdownload }

### Case: Using npm

```sh
$ npm install eclwebrtc-js-sdk
```

### Case: Using CDN

*HTML*
{: .lang}
  
```html
<script type="text/javascript" src="https://cdn.webrtc.ecl.ntt.com/eclwebrtc-latest.js"></script>
```

### Case: Downloading as file

<div class="d-sm-flex">
  <div class="pr-1 pb-2">
    <a href="https://github.com/nttcom/ECLWebRTC-JS-SDK/archive/master.zip" class="btn btn-primary">Download as ZIP</a>
  </div>
  <div>
    <a href="https://github.com/nttcom/ECLWebRTC-JS-SDK" class="btn btn-outline-primary" target="_blank">Clone on GitHub</a><br>
  </div>
</div>

##  Verified Browsers

- [Google Chrome](https://www.google.com/chrome){: target="_blank"} the newest stable version
- [Firefox](https://www.mozilla.org/firefox/){: target="_blank"} the newest stable version

## API Reference

<div class="d-sm-flex">
  <div class="pr-1 pb-2">
    <a href="./js-reference/" class="btn btn-primary">ECLWebRTC API Reference</a>
  </div>
  <div class="pb-3">
    <a href="http://nttcom.github.io/skyway/docs/#JS" class="btn btn-outline-primary" target="_blank">SkyWay API Reference</a><br>
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
          <td><a href="#">video chat</a></td>
          <td></td>
          <td><a href="#">text chat</a></td>
        </tr>
        <tr>
          <th scope="row">Multi-party, P2P</th>
          <td><a href="#">video chat</a></td>
          <td><a href="#">One-to-many video distribution</a></td>
          <td><a href="#">text chat</a></td>
        </tr>
        <tr>
          <th scope="row">Multi-party, SFU</th>
          <td><a href="#">video chat</a></td>
          <td><a href="#">One-to-many video distribution</a></td>
          <td><a href="#">text chat</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## Support
{: #support }

{% include support-cards.html %}
