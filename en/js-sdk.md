---
layout: default
title: JavaScript SDK
lang: en
breadcrumb: [en/index.md, en/developer.md]
---

# JavaScript SDK

## Tutorial

In the tutorial, you will create a one-on-one video chat web-app using the basic features of the JS SDK.
The web-app will have the ability to display a list of users currently connected to the server, select which user to call, call, answer and hang up a one-to-one video conversation.

You can try it out [here](https://webrtc.ecl.ntt.com/skyway-js-sdk-tutorial/){: target="_blank"}.

<figure class="figure">
  <img src="{{ site.baseurl }}/images/sdk-tutorial-top-image.png"
    class="figure-img img-fluid rounded" alt="Use ECLWebRTC to start a video chat session between two devices">
  <figcaption class="figure-caption">Use ECLWebRTC to start a video chat session between two devices</figcaption>
</figure>

<figure class="figure">
  <img src="{{ site.baseurl }}/images/js-tutorial-videchat.png"
    class="figure-img img-fluid rounded" alt="Screenshot of video chat">
  <figcaption class="figure-caption">Screenshot of video chat</figcaption>
</figure>

[Continue the tutorial](js-tutorial.html){: .btn .btn-primary }

## Using the SDK
{: #sdkdownload }

### Using npm

With npm installed, run

```
$ npm install -s skyway-js
```

You can then use require or import to import the package.

```js
// require
const Peer = require('skyway-js');
const peer = new Peer({key: 'your-api-key'});

// import
import Peer from 'skyway-js';
const peer = new Peer({key: 'your-api-key'});
```

### Including the SDK directly from the CDN

*HTML*
{: .lang}

```html
<script type="text/javascript" src="https://cdn.webrtc.ecl.ntt.com/skyway-latest.js"></script>
```

### Downloading as a file

<div class="d-sm-flex">
  <div class="pr-1 pb-2">
    <a href="https://github.com/skyway/skyway-js-sdk/archive/master.zip" class="btn btn-primary">Download as ZIP</a>
  </div>
  <div>
    <a href="https://github.com/skyway/skyway-js-sdk" class="btn btn-outline-primary" target="_blank">Clone on GitHub</a><br>
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
    <a href="http://nttcom.github.io/skyway/en/docs/#JS" class="btn btn-outline-primary" target="_blank">SkyWay API Reference</a><br>
  </div>
</div>

A list of changes between the old (SkyWay) SDK and the new ECLWebRTC SDK can be found on  [Github](https://github.com/nttcom/skyway-sdk-migration-docs){: target="_blank"}.

## Sample Code

<div class="row">
  <div class="col-md-9 col-lg-7 col-xl-6">
    <table class="table">
      <tbody align="right">
        <tr>
          <th scope="row">One-on-One, P2P</th>
          <td><a href="https://github.com/skyway/skyway-js-sdk/tree/master/examples/p2p-videochat" target="_blank">video chat</a></td>
          <td></td>
          <td><a href="https://github.com/skyway/skyway-js-sdk/tree/master/examples/p2p-textchat" target="_blank">text chat</a></td>
        </tr>
        <tr>
          <th scope="row">Multi-party, P2P</th>
          <td><a href="https://github.com/skyway/skyway-js-sdk/tree/master/examples/fullmesh-videochat" target="_blank">video chat</a></td>
          <td><a href="https://github.com/skyway/skyway-js-sdk/tree/master/examples/p2p-broadcast" target="_blank">video distribution</a></td>
          <td><a href="https://github.com/skyway/skyway-js-sdk/tree/master/examples/fullmesh-textchat" target="_blank">text chat</a></td>
        </tr>
        <tr>
          <th scope="row">Multi-party, SFU</th>
          <td><a href="https://github.com/skyway/skyway-js-sdk/tree/master/examples/sfu-videochat" target="_blank">video chat</a></td>
          <td></td>
          <td><a href="https://github.com/skyway/skyway-js-sdk/tree/master/examples/sfu-textchat" target="_blank">text chat</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## Support
{: #support }

{% include support-cards.html %}
