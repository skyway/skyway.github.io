---
layout: rightnav
title: JavaScript SDK tutorial
lang: en
breadcrumb: [en/index.md, en/developer.md, en/js-sdk.md]
---

- TOC
{:toc}

# JavaScript SDK Tutorial

By using basic functions of JavaScript SDK, we will create a simple one-to-one video conversation application to acquire deeper knowledge on how to use the JavaScript SDK.
The application will have functions to input ID of a conversation partner, to start and stop a one-to-one video conversation, and to accept the call.

You can try [demonstration of the completed application](){:target="_blank"}.

<figure class="figure">
  <img src="https://github.com/skyway/webrtc-handson-native/wiki/img/hands-on-summary.png" class="figure-img img-fluid rounded" alt="Use ECLWebRTC to perform signaling to interconnect terminals with videochat">
  <figcaption class="figure-caption">Use ECLWebRTC to perform signaling to interconnect terminals with videochat</figcaption>
</figure>

##  Preparation before the Development Start
{: #preparation }

### Generate ECLWebRTC API Key

For customers who have not completed a developer registration, do so from [Registration of the Community Edition](./signup.html).
For those who had registered already, or have just completed the registration, [Login to Dashboard](./login.html) and create an application to obtain an API key.

Application settings on the Dashboard are as follows.

|Items to be set|Explanation of Items|Settings of Tutorial|
|:--|:--|:--|
|Explanation of Application|Explanatory description attached to the application and is used only for display on the Dashboard. <br>Please specify within 128 characters.|ECLWebRTC Tutorial Application|
|Available Domain Name|Enter Domain Name used in application creating. Multiple available Domain Name can be specified. Multiple available Domain Name can be specified. <br>Example：hogehoge.com|`localhost`|
|Administration (Use TURN)|Check this in case of using the TURN (Traversal Using Relay around NAT) server. The TURN server makes communication possible by relaying media and data, even when P2P communication is not possible because the communication has to go through firewalls. The TURN server closest to the user will be selected automatically.|ON|
|Administration (Use TURN)|Check this in case of using SFU (Selective Forwarding Unit) server. SFU is a technology to send/receive image and voice via a media server called SFU but not using P2P. Please refer to [About SFU](./sfu.html) for details.|ON|
|Administration (Use listAllPeers API)|Check this in case of using `listALLPeers API`. This API obtains an active PeerID per API key. Please refer to [API Reference](./android-reference/) for details.|ON|
|Administration (Use API Key authorization)|Provides authorization function to prevent from unauthorized use. Please refer to [Here](https://github.com/nttcom/Peer-Authentication-Server-Samples){:target="_blank"} for details.|OFF|

### Preparation for Local Web Server

If you use WebRTC functions in the local environment, you need to use a Web server.

#### In case of Mac

You can use a Web server in the local environment by the several methods shown below.

*python 2.X*
{: .lang }

```sh
$ python -m SimpleHTTPServer 8080
```

*python 3.X*
{: .lang }

```sh
$ python -m http.server 8080
```

*ruby*
{: .lang }

```sh
$ ruby -run -e httpd . -p 8080
```

*php*
{: .lang }

```sh
$ php -S localhost:8080
```

#### In case of Windows

Install [Mongoose](https://cesanta.com/){:target="_blank"} or [XAMPP](https://sourceforge.net/projects/xampp/){:target="_blank"} to make a Web server available in the local environment.

## Create Project
{: #craete-project }

For the source codes used in the tutorial, please download them from the following repository.

After downloading, arrange `index.html` adequately so that it can be viewed on the Web server.

- [https://github.com/skyway/skyway-js-sdk-tutorial](https://github.com/skyway/skyway-js-sdk-tutorial){:target="_blank"}

In the following steps, we will add required codes to `script.js` which is included in the package.

- Restriction for this Tutorial
    - JQuery is used for Dom operation.
    - Verified browsers are the latest versions of [Google Chrome](https://www.google.com/chrome){:target="_blank"} and [Firefox](https://www.mozilla.org/firefox/){:target="_blank"}.

## Obtain Camera Image and Microphone Voice
{: #getUserMedia }

Add a process to obtain camera images and microphone voices.  
We use an API called getUserMedia to obtain camera images and microphone voices.  
Set the Stream object (own image) obtained by getUserMedia to the VIDEO element for display.

*JavaScript*
{: .lang}

```js
let localStream = null;

navigator.mediaDevices.getUserMedia({video: true, audio: true})
    .then(function (stream) {
        // Success
        $('#myStream').srcObject = stream;
        localStream = stream;
    }).catch(function (error) {
        // Error
        console.error('mediaDevice.getUserMedia() error:', error);
        return;
    });
```

You can set the following specification to Constraints(`{video: true, audio: true}`) of getUserMedia.

- Example: Capture video only, no audio  
`{video: true, audio: false}`
- Example：Setting example of capture size 
`{ audio: true, video: { width: 640, height: 480 } }`
- Example: Setting the frame rate. (As of August, 2017, it works only on Chrome.)    
`{ audio: true, video: { frameRate: { min: 10, max: 15 } } }`



#### Notes on Using API 1

Considering the privacy protection, it works only on Website encrypted by SSL, depending on the browser.  
Compatibility status as of August, 2017 is as follows.

|Schemer/Browser|Chrome|Firefox|
|:--|:--:|:--:|
|http://localhost|◯|◯|
|http://domain.jp|x|◯|
|file://index.html|x|◯|
|https://domain.jp|◯|◯|

### Notes on Using API 2

To protect the privacy of the user, a dialog box asking for your permission will appear.  
If multiple cameras and/or microphones are connected, you can choose any camera and/or microphone with this dialog.

<figure class="figure">
  <img src="https://qiita-image-store.s3.amazonaws.com/0/6651/7e985821-901b-33eb-0f57-2fc4b677f0d8.png" class="figure-img img-fluid rounded" alt="Dialogue of Chrome">
  <figcaption class="figure-caption">Dialogue of Chrome</figcaption>
</figure>

<figure class="figure">
  <img src="https://qiita-image-store.s3.amazonaws.com/0/6651/21d50fdc-e86a-d301-98f1-2a8df20c7608.png" class="figure-img img-fluid rounded" alt="Dialogue of Firefox">
  <figcaption class="figure-caption">Dialogue of Firefox</figcaption>
</figure>

## Connect with ECLWebRTC server
{: #connect-server }

### Import SDK

Import the SDK as a script element as follows.  
In the tutorial source codes, it is already added to `index.html`.

*HTML*
{: .lang}

```html
<script type="text/javascript" src="https://cdn.webrtc.ecl.ntt.com/skyway.js"></script>
```

### Create Peer Object

Add a process to create a Peer object.  
For `apikey`, specify the API key that was generated on the Dashboard just before.  
In `debug`, specify the log output level. If it is `3`, all logs will be outputted for development.

*JavaScript*
{: .lang}

```js
let localStream = null;
let peer = null;
let existingCall = null;

navigator.mediaDevices.getUserMedia({video: true, audio: true})
    // 省略
});

peer = new Peer({
    key: 'apikey',
    debug: 3
});
```

Please refer to [API Reference](./js-reference/) for other options that can be specified in Peer object.

## Process When Connection is Succeeded, Failed, or Disconnected
{: #eventlistener }

Add an EventListener required in Peer object.

### Open Event

Connects with the signaling server of ECLWebRTC and ignites when ready to use. All processes of ECLWebRTC become available after this event ignition.  
A client identification ID called as PeerID is generated from the signaling server and can be obtained by callback event. PeerID can also be specified by the client side.  
In the following process, it displays PeerID to UI if the PeerID is generated.

*JavaScript*
{: .lang}

```js
peer.on('open', function(){
    $('#my-id').text(peer.id);
});
```

### Error Event

It ignites when any error occurs. We will make it possible to show details of an error on an alert message if it occurs.

*JavaScript*
{: .lang}

```js
peer.on('error', function(err){
    alert(err.message);
});
```

### Close Event

It ignites when connection with the Peer (partner) is broken. No specific process is applied in the tutorial.

*JavaScript*
{: .lang}

```js
peer.on('close', function(){
});
```

### Disconnected Event

It ignites when connection with the signaling server is broken. No specific process is applied in the tutorial.

*JavaScript*
{: .lang}

```js
peer.on('disconnected', function(){
});
```


## Calling/Disconnecting/Receiving Process
{: #call-event }

Add processes to call/disconnect/receive.

### Calling Process

If you click the Call button, a call is made to the partner.  
Use `peer.call()` to set the PeerID of the partner and your own localStream to the parameter , and call.
The PeerID of the partner to connect should be obtained separately by some means.  
As Call object will be returned after the call, set a necessary EventListener.  
Details of `setupCallEventHandlers` will be explained later.

*JavaScript*
{: .lang}

```js
$('#make-call').submit(function(e){
    e.preventDefault();
    const call = peer.call($('#callto-id').val(), localStream);
    setupCallEventHandlers(call);
});
```

###  Disconnecting Process

If you click the Disconnect button, the connection with the partner will be disconnected.  
Use `call.close()` to disconnect the corresponding connection. Keep the Call object created in the calling process as `existingCall`. Execute object keeping in `setupCallEventHandlers()` of the calling process.

*JavaScript*
{: .lang}

```js
$('#end-call').click(function(){
    existingCall.close();
});
```
    
###  Receiving Process

Responds when connection request is received from the partner.  
If connection request is received from the partner, `call` will ignite. As you can obtain a Call object to manage the connection with the partner as a parameter, execute `call.answer()` and respond to the connection request.  
If you set your own `localStream` then, you will be able to send image and voice to your partner.  
In the same way as calling process, execute `setupCallEventHandlers` and set the EventListener of the Call object.

*JavaScript*
{: .lang}

```js
peer.on('call', function(call){
    call.answer(localStream);
    setupCallEventHandlers(call);
});
```

### Event necessary for Call Object

EventListener necessary for Call Object.  
In the application that we create this time, if the connection is alive, cut the existing connection and prioritize a connection request arrived later. Keep the Call object as `existingCall` to use it in disconnecting process, etc.  
This process depends on the specifications of the application.

*JavaScript*
{: .lang}

```js
function setupCallEventHandlers(call){
    if (existingCall) {
        existingCall.close();
    };

    existingCall = call;
    // 省略
}
```

It will ignite when an image and/or a voice of the partner are received.  
Set the obtained Stream object to VIDEO element.  
Details of `addVideo()` and `setupEndCallUI()` will be explained later.

*JavaScript*
{: .lang}

```js
function setupCallEventHandlers(call){
    // 省略
    call.on('stream', function(stream){
        addVideo(call,stream);
        setupEndCallUI();
        $('#their-id').text(call.remoteId);
    });
    // 省略
}
```

Disconnection process by `call.close()` is executed and it will ignite when actually disconnected. This event will ignite each on the executer-side and the executed-side. By `call.peer`, you can obtain the PeerID of the partner you disconnected.  
At the time of disconnection, delete VIDEO elements and UI-related processes. Details of `removeVideo()` and `setupMakeCallUI()` will be explained later.

*JavaScript*
{: .lang}

```js
function setupCallEventHandlers(call){
    // 省略
    call.on('close', function(){
        removeVideo(call.remoteId);
        setupMakeCallUI();
    });
}
```

## Setup UI
{: #setup-ui }

### Playback of Video Element

Add processes to play back video.
You can play back video by setting Stream object to srcObject property of the video element. Considering the processes to delete, set `call.peer(PeerID)` to the id property.

*JavaScript*
{: .lang}

```js
function addVideo(call,stream){
    $('#their-video').get(0).srcObject = stream;
}
```

###  Delete Video Element

Add a processes to delete video elements of the disconnected (disconnecting) partner.  
Delete based on PeerID.

*JavaScript*
{: .lang}

```js
function removeVideo(peerId){
    $('#'+peerId).remove();
}
```

### Switch Over to Display/Hide the Button

Add a process to switch over the display of the Call button and Disconnect button.

*JavaScript*
{: .lang}

```js
function setupMakeCallUI(){
    $('#make-call').show();
    $('#end-call').hide();
}

function setupEndCallUI() {
    $('#make-call').hide();
    $('#end-call').show();
}
```

## Operation Check
{: #testing }

Open the application on two browsers. Copy one of the `Your id` and paste it to the Input Box of other browser. If videochat is possible between the tow browsers, the work is successful.
