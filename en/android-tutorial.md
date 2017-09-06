---
layout: rightnav
title: Android SDK tutorial
lang: en
breadcrumb: [en/index.md, en/developer.md, en/android-sdk.md]
---

- TOC
{:toc}

# Android SDK tutorial

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

## Preparation before the Development Start
{: #preparation }

### Generate ECLWebRTC API Key

For customers who have not completed a developer registration, do so from [New Registration of the Community Edition](https://console-webrtc-free.ecl.ntt.com/users/registration).
For those who had registered already, or have just completed the registration, [Login to Dashboard](https://console-webrtc-free.ecl.ntt.com/users/login) and create an application to obtain an API key.

Application settings in the Dashboard are as follows.


|Items to be set|Explanation of Items|Settings of Tutorial|
|:--|:--|:--|
|Explanation of Application|Explanatory description attached to the application and is used only for display on the Dashboard. <br>Please specify within 128 characters.|ECLWebRTC Tutorial Application|
|Available Domain Name|Enter Domain Name used in application creating. Multiple available Domain Name can be specified. Multiple available Domain Name can be specified. <br>Example：hogehoge.com|`localhost`|
|Administration (Use TURN)|Check this in case of using the TURN (Traversal Using Relay around NAT) server. The TURN server makes communication possible by relaying media and data, even when P2P communication is not possible because the communication has to go through firewalls. The TURN server closest to the user will be selected automatically.|ON|
|Administration (Use TURN)|Check this in case of using SFU (Selective Forwarding Unit) server. SFU is a technology to send/receive image and voice via a media server called SFU but not using P2P. Please refer to [About SFU](./sfu.html) for details.|ON|
|Administration (Use listAllPeers API)|Check this in case of using `listALLPeers API`. This API obtains an active PeerID per API key. Please refer to [API Reference](./android-reference/) for details.|ON|
|Administration (Use API Key authorization)|Provides authorization function to prevent from unauthorized use. Please refer to [Here](https://github.com/skyway/skyway-peer-authentication-samples){:target="_blank"} for details.|OFF|

### Preparation of Development Environment

In this tutorial, the development will proceed assuming the following environment.

- Androdi Studio 2.3.3
- Verified terminal
  - Nexus6
- OS Version
  - 7.1
- Development language
  - Java

## Create Project

Download Android Studio project used in Tutorial from below repository.

- [https://github.com/skyway/skyway-android-sdk-tutorial](https://github.com/skyway/skyway-android-sdk-tutorial)

## Add SDK to Project

Arrange SDK binary files.

1. Download SDK from [here](https://github.com/skyway/skyway-android-sdk/archive/master.zip)
2. After decompressing ZIP file, arrange `skyway.arr` directly under `app/libs` directory.
3. Open the development project on an IDE such as Android Studio, and complete settings of the build tool such as Gradle.

<figure class="figure">
  <img src="{{ site.baseurl }}/images/android-tutorial-studio1.png" class="figure-img img-fluid rounded" alt="As SDK is added to the project">
  <figcaption class="figure-caption">As SDK is added to the project</figcaption>
</figure>

Descriptions of main files contained in the project are as follows.

- app/src/main/java/com.ntt.ecl.webrtc.tutorial_sdk_android/MainActivity
  - The controller to which required codes are mainly added in this tutorial.
- app/src/main/java/com.ntt.ecl.webrtc.tutorial_sdk_android/PeerListDialogFragment
  - Controller which genetrates ListDialog displaying a list of PeerID.
  - The complete version is included in the kit and is not mentioned in this tutorial.
- res/**
  - For resources and layout, the complete versions are included in the kit and are not mentioned in this tutorial.

## Header file import

Though it is already stated in the tutorial, import statement for SDK is added.

*Java*
{: .lang}

```java
//
// Import for SkyWay
//
import io.skyway.Peer.Browser.Canvas;
import io.skyway.Peer.Browser.MediaConstraints;
import io.skyway.Peer.Browser.MediaStream;
import io.skyway.Peer.Browser.Navigator;
import io.skyway.Peer.CallOption;
import io.skyway.Peer.MediaConnection;
import io.skyway.Peer.OnCallback;
import io.skyway.Peer.Peer;
import io.skyway.Peer.PeerError;
import io.skyway.Peer.PeerOption;
```

## Add to Manifest File

To use SDK functions, add the contents to the manifest file.

*Java*
{: .lang}

```java
<uses-feature android:name="android.hardware.camera" />
<uses-feature android:name="android.hardware.camera.autofocus" />
<uses-feature android:glEsVersion="0x00020000" android:required="true" />

<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
```

## Build

Connect the actual device and execute build. Though processing on the actual device will stop on the way, please confirm that build is possible.

## Connect with ECLWebRTC Server
{: #connect-server }

### Declaration

Add constants to MainActivity that are used in the program.
For `API_KEY`, specify the API key that was generated on the Dashboard just before.
For `DOMAIN`, specify one of the available domain names specified on the Dashboard just before.

*Java*
{: .lang}

```java
//
// Set your APIkey and Domain
//
private static final String API_KEY = "apikey";
private static final String DOMAIN = "domain";

```

Add declaration of instance variables used in the program.

- `_peer` : Peer Object
- `_localStream` : Own MediaStream Object
- `_remoteStream` : Opponent MediaStream Object
- `_mediaConnection` : MediaConnection Object

*Java*
{: .lang}

```java
//
// declaration
//
private Peer			_peer;
private MediaStream		_localStream;
private MediaStream		_remoteStream;
private MediaConnection	_mediaConnection;

private String			_strOwnId;
private boolean			_bConnected;

private Handler			_handler;
```

### UI-Related Processing

At the beginning of onCreate method, add a process to hide the title of the main window and to generate a Handler for UI thread processing.

*Java*
{: .lang}

```java
//
// Windows title hidden
//
Window wnd = getWindow();
wnd.addFlags(Window.FEATURE_NO_TITLE);
setContentView(R.layout.activity_main);

//
// Set UI handler
//
_handler = new Handler(Looper.getMainLooper());
final Activity activity = this;
```

### Create Peer Object

In succession, add a process to create a Peer object.
For the Peer object, specify API key, domain name and debug level by using PeerOption class.

*Java*
{: .lang}

```java
//
// Initialize Peer
//
PeerOption option = new PeerOption();
option.key = API_KEY;
option.domain = DOMAIN;
option.debug = Peer.DebugLevelEnum.ALL_LOGS;
_peer = new Peer(this, option);
```

Please refer to [API Reference](./android-reference/) for other options that can be specified in Peer object.

##  Process When Connection is Succeeded, Failed, or Disconnected
{: #eventlistener }

In succession, add an event callback required for Peer object.

### Open Event

Connects with the signaling server of ECLWebRTC and ignites when ready to use. All processes of ECLWebRTC become available after this event ignition.
A client identification ID called as PeerID is generated from the signaling server and can be obtained by callback event. PeerID can also be specified by the client side.
In the following process, it displays PeerID to UI if the PeerID is generated.

*Java*
{: .lang}

```java
//
// Set Peer event callbacks
//

// OPEN
_peer.on(Peer.PeerEventEnum.OPEN, new OnCallback() {
  @Override
  public void onCallback(Object object) {

    // Show my ID
    _strOwnId = (String) object;
    TextView tvOwnId = (TextView) findViewById(R.id.tvOwnId);
    tvOwnId.setText(_strOwnId);
    
    }
});
```

### Obtain Camera Image and Microphone Voice

In the callback of the open event, add a process to obtain camera images and microphone voices.

#### Request for Administration(1)

It checks if an authority to access the camera and the microphone is given. If not, it demands the authority.
If the authority is given, execute startLocalStream method to obtain camera image and microphone voice.

*Java*
{: .lang}

```java
// Request permissions
if (ContextCompat.checkSelfPermission(activity,
    Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED && ContextCompat.checkSelfPermission(activity,
    Manifest.permission.RECORD_AUDIO) != PackageManager.PERMISSION_GRANTED) {
  ActivityCompat.requestPermissions(activity,new String[]{Manifest.permission.CAMERA, Manifest.permission.RECORD_AUDIO},0);
}
else {

  // Get a local MediaStream & show it
  startLocalStream();
}
```

#### Request for Administration(2)

If the authority is obtained by requestPermissions method, execute startLocalStream method to obtain camera image and microphone voice.

*Java*
{: .lang}

```java
//
// onRequestPermissionResult
//
@Override
public void onRequestPermissionsResult(int requestCode, String permissions[], int[] grantResults) {
    switch (requestCode) {
        case 0: {
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                startLocalStream();
            }
    else {
                Toast.makeText(this,"Failed to access the camera and microphone.\nclick allow when asked for permission.", Toast.LENGTH_LONG).show();
            }
            break;
        }
    }
}
```

#### Option Setting

Options on image and voice obtainment can be set by MediaConstraints class.
Descriptions of items set here are as follows.
- `maxWidth`: The upper limit of the horizontal size of captured image (unit: pixel)
- `maxHeight`: The upper limit of the vertical size of captured image (unit: pixel)
- `cameraPosition`: Selection of a camera to use (default is `FRONT`)
- `FRONT` camera or `BACK` camera can be selected for the `cameraPosition`.

Please refer to [API Reference](./android-reference/) for other items.

*Java*
{: .lang}

```java
//
// Get a local MediaStream & show it
//
void startLocalStream() {
  MediaConstraints constraints = new MediaConstraints();
  constraints.maxWidth = 960;
  constraints.maxHeight = 540;
  constraints.cameraPosition = MediaConstraints.CameraPositionEnum.FRONT;

}
```

#### Obtainment and Playback

Initialize Navigator class, specify `constraints` to the parameter of getUserMedia method and execute it to obtain the own image (local stream).
Use addVideoRenderer method to allocate video renderer (Canvas object for display) to the obtained MediaStream object.

*Java*
{: .lang}

```java
//
// Get a local MediaStream & show it
//
void startLocalStream() {

  // 省略

  Navigator.initialize(_peer);
  _localStream = Navigator.getUserMedia(constraints);
  Canvas canvas = (Canvas) findViewById(R.id.svLocalView);
  _localStream.addVideoRenderer(canvas,0);
}       
```


#### Error Event

It ignites when any error occurs. Make it possible to show details of an error on the log if it occurs.

*Java*
{: .lang}

```java
// ERROR
_peer.on(Peer.PeerEventEnum.ERROR, new OnCallback() {
  @Override
  public void onCallback(Object object) {
    PeerError error = (PeerError) object;
    Log.d(TAG, "[On/Error]" + error);
  }
});
```

#### Close Event

It ignites when connection with the Peer (partner) is broken. No specific process is applied in the tutorial.

*Java*
{: .lang}

```java
// CLOSE
_peer.on(Peer.PeerEventEnum.CLOSE, new OnCallback()	{
  @Override
  public void onCallback(Object object) {
    Log.d(TAG, "[On/Close]");
  }
});
```

#### Disconnected Event

It ignites when connection with the signaling server is broken. No specific process is applied in the tutorial.

*Java*
{: .lang}

```java
// DISCONNECTED
_peer.on(Peer.PeerEventEnum.DISCONNECTED, new OnCallback() {
  @Override
  public void onCallback(Object object) {
    Log.d(TAG, "[On/Disconnected]");
  }
});
```

### Calling/Disconnecting/Receiving Process
{: #call-event }

Add processes to call/disconnect/receive.

#### Calling Process

Select the PeerID of the partner and call him/her.

##### Obtain the PeerID of the Destination (1)

Tap the Make Call button. Execute showPeerIDs method if not in connected status.

*Java*
{: .lang}

```java
// Set GUI event listner for Button (make/hang up a call)
Button btnAction = (Button) findViewById(R.id.btnAction);
btnAction.setEnabled(true);
btnAction.setOnClickListener(new View.OnClickListener()	{
  @Override
  public void onClick(View v)	{
    v.setEnabled(false);

    if (!_bConnected) {

      // Select remote peer & make a call
      showPeerIDs();
    }
    else {

    }

    v.setEnabled(true);
  }
});
```

##### Obtain the PeerID of the Destination (2)

In showPeerIDs method, listAllPeers method is used to obtain a list of PeerID of the connection destination. Delete your own ID from the obtained list and show the list with `PeerListDialogFragment`.

*Java*
{: .lang}

```java
//
// Listing all peers
//
void showPeerIDs() {
  if ((null == _peer) || (null == _strOwnId) || (0 == _strOwnId.length())) {
    Toast.makeText(this, "Your PeerID is null or invalid.", Toast.LENGTH_SHORT).show();
    return;
  }

  // Get all IDs connected to the server
  final Context fContext = this;
  _peer.listAllPeers(new OnCallback() {
    @Override
    public void onCallback(Object object) {
      if (!(object instanceof JSONArray)) {
        return;
      }

      JSONArray peers = (JSONArray) object;
      ArrayList<String> _listPeerIds = new ArrayList<>();
      String peerId;

      // Exclude my own ID
      for (int i = 0; peers.length() > i; i++) {
        try {
          peerId = peers.getString(i);
          if (!_strOwnId.equals(peerId)) {
            _listPeerIds.add(peerId);
          }
        } catch(Exception e){
          e.printStackTrace();
        }
      }

      // Show IDs using DialogFragment
      if (0 < _listPeerIds.size()) {
        FragmentManager mgr = getFragmentManager();
        PeerListDialogFragment dialog = new PeerListDialogFragment();
        dialog.setListener(
          new PeerListDialogFragment.PeerListDialogFragmentListener() {
            @Override
            public void onItemClick(final String item) {
              _handler.post(new Runnable() {
                @Override
                public void run() {
                  onPeerSelected(item);
                }
              });
            }
          });
        dialog.setItems(_listPeerIds);
        dialog.show(mgr, "peerlist");
      }
      else{
        Toast.makeText(fContext, "PeerID list (other than your ID) is empty.", Toast.LENGTH_SHORT).show();
      }
    }
  });

}
```

##### Calling

If Peer ID is selected in `PeerListDialogFragment`, onPeerSelected method will be called. Set the PeerID of the partner and your own localStream to the parameter, and call.
After calling, set up necessary event callbacks. Details of `setMediaCallbacks` will be explained later.

*Java*
{: .lang}

```java
//
// Create a MediaConnection
//
void onPeerSelected(String strPeerId) {
  if (null == _peer) {
    return;
  }

  if (null != _mediaConnection) {
    _mediaConnection.close();
  }

  CallOption option = new CallOption();
  _mediaConnection = _peer.call(strPeerId, _localStream, option);

  if (null != _mediaConnection) {
    setMediaCallbacks();
    _bConnected = true;
  }

  updateActionButtonTitle();
}
```

#### Disconnecting Process

It disconnects the connection with the partner.

##### Disconnect MediaConnection

Tap the actionButton (Make Call button). If the connection is alive, use Close method of MediaConnection object to disconnect the corresponding MediaConnection and perform necessary processing with `closeRemoteStream` which will be explained later.

*Java*
{: .lang}

```java
// Set GUI event listner for Button (make/hang up a call)
Button btnAction = (Button) findViewById(R.id.btnAction);
btnAction.setEnabled(true);
btnAction.setOnClickListener(new View.OnClickListener()	{
  @Override
  public void onClick(View v)	{
    v.setEnabled(false);

    if (!_bConnected) {

      // 省略

    }
    else {

      // Hang up a call
      closeRemoteStream();
      _mediaConnection.close();

    }

    v.setEnabled(true);
  }
});
```

##### Close MediaStream

After Close method of MediaConnection object is executed, use removeVideoRenderer method to remove the video renderer assigned to the corresponding MediaStream.

*Java*
{: .lang}

```java
//
// Close a remote MediaStream
//
void closeRemoteStream(){
  if (null == _remoteStream) {
    return;
  }

  Canvas canvas = (Canvas) findViewById(R.id.svRemoteView);
  _remoteStream.removeVideoRenderer(canvas,0);
  _remoteStream.close();
}
```

#### Receiving Process

Responds when connection request is received from the partner.
If connection request is received from the partner, `Peer.PeerEventEnum.CALL` will ignite. As you can obtain MediaConnection object to manage the connection with the partner as a parameter, execute answer method and respond to the connection request.
If you set your own `_localStream` then, you will be able to send image and voice to your partner.
In the same way as the calling process, execute `setMediaCallbacks` and set the event. Details will be explained later.

*Java*
{: .lang}


```java
// CALL (Incoming call)
_peer.on(Peer.PeerEventEnum.CALL, new OnCallback() {
  @Override
  public void onCallback(Object object) {
    if (!(object instanceof MediaConnection)) {
      return;
    }

    _mediaConnection = (MediaConnection) object;
    setMediaCallbacks();
    _mediaConnection.answer(_localStream);

    _bConnected = true;
    updateActionButtonTitle();
  }
});
```


#### Event necessary for MediaConnection Object

Event callback necessary for MediaConnection.
`MediaConnection.MediaEventEnum.STREAM` will ignite when image and/or voice of the partner are received.
In the callback, use update process of the connection status on UI and apply addVideoRenderer method to the obtained MediaStream object of the partner, in order to assign the video renderer.

*Java*
{: .lang}

```java
//
// Set callbacks for MediaConnection.MediaEvents
//
void setMediaCallbacks() {

  _mediaConnection.on(MediaConnection.MediaEventEnum.STREAM, new OnCallback() {
    @Override
    public void onCallback(Object object) {
      _remoteStream = (MediaStream) object;
      Canvas canvas = (Canvas) findViewById(R.id.svRemoteView);
      _remoteStream.addVideoRenderer(canvas,0);
    }
  });

}
```

`SKW_MEDIACONNECTION_EVENT_CLOSE` will ignite if the partner executes the disconnection process and if the connection is actually disconnected.
In the callback, necessary disconnection processes will be executed. Details will be explained later.

*Java*
{: .lang}

```java
//
// Set callbacks for MediaConnection.MediaEvents
//
void setMediaCallbacks() {

  // 省略

  _mediaConnection.on(MediaConnection.MediaEventEnum.CLOSE, new OnCallback()	{
    @Override
    public void onCallback(Object object) {
      closeRemoteStream();
      _bConnected = false;
      updateActionButtonTitle();
    }
  });

}
```

`MediaConnection.MediaEventEnum.ERROR` will ignite when any error occurs. Make it possible to show details of an error on the log if it occurs.

*Java*
{: .lang}

```java
//
// Set callbacks for MediaConnection.MediaEvents
//
void setMediaCallbacks() {

  // 省略

  _mediaConnection.on(MediaConnection.MediaEventEnum.ERROR, new OnCallback()	{
    @Override
    public void onCallback(Object object) {
      PeerError error = (PeerError) object;
      Log.d(TAG, "[On/MediaError]" + error);
    }
  });

}
```

### Process necessary for Activity Lifecycle

Add processes to various methods of the Activity Lifecycle.

#### Overrideメソッドの処理

Ovverrideされたメソッドに必要な処理を追記してください。  
In onDestory method, execute `destoryPeer` to destroy Peer objects. Details will be explained later.

*Java*
{: .lang}

```java
//
// Activity Lifecycle
//
@Override
protected void onStart() {
  super.onStart();

  // Disable Sleep and Screen Lock
  Window wnd = getWindow();
  wnd.addFlags(WindowManager.LayoutParams.FLAG_TURN_SCREEN_ON);
  wnd.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
}

@Override
protected void onResume() {
  super.onResume();

  // Set volume control stream type to WebRTC audio.
  setVolumeControlStream(AudioManager.STREAM_VOICE_CALL);
}

@Override
protected void onPause() {
  // Set default volume control stream type.
  setVolumeControlStream(AudioManager.USE_DEFAULT_STREAM_TYPE);
  super.onPause();
}

@Override
protected void onStop()	{
  // Enable Sleep and Screen Lock
  Window wnd = getWindow();
  wnd.clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
  wnd.clearFlags(WindowManager.LayoutParams.FLAG_TURN_SCREEN_ON);
  super.onStop();
}

@Override
protected void onDestroy() {
  destroyPeer();
  super.onDestroy();
}
```

#### Process necessary for Destroy Peer Objects

Add necessary processes at the timing when Activity is destroyed. An outline of the processes executed here is as follows.

- Close remote/local mediastream
- Release callback event of MediaConnection Object.(`unsetMediaCallbacks`)
- Initialize Navigator Object
- Release callback event of Peer Object.(`unsetPeerCallback`)
- Disconnect with the signaling server
- Destroy Peer objects

Details of `unsetMediaCallbacks` and `unsetPeerCallback` will be explained later.

*Java*
{: .lang}

```java
//
// Clean up objects
//
private void destroyPeer() {
  closeRemoteStream();

  if (null != _localStream) {
    Canvas canvas = (Canvas) findViewById(R.id.svLocalView);
    _localStream.removeVideoRenderer(canvas,0);
    _localStream.close();
  }

  if (null != _mediaConnection)	{
    if (_mediaConnection.isOpen()) {
      _mediaConnection.close();
    }
    unsetMediaCallbacks();
  }

  Navigator.terminate();

  if (null != _peer) {
    unsetPeerCallback(_peer);
    if (!_peer.isDisconnected()) {
      _peer.disconnect();
    }

    if (!_peer.isDestroyed()) {
      _peer.destroy();
    }

    _peer = null;
  }
}
```


#### コールバックイベントの開放処理

MediaConnectionオブジェクト、Peerオブジェクトに関するコールバックイベントの開放処理を追記してください。  

*Java*
{: .lang}

```java
//
// Unset callbacks for PeerEvents
//
void unsetPeerCallback(Peer peer) {
  if(null == _peer){
    return;
  }

  peer.on(Peer.PeerEventEnum.OPEN, null);
  peer.on(Peer.PeerEventEnum.CONNECTION, null);
  peer.on(Peer.PeerEventEnum.CALL, null);
  peer.on(Peer.PeerEventEnum.CLOSE, null);
  peer.on(Peer.PeerEventEnum.DISCONNECTED, null);
  peer.on(Peer.PeerEventEnum.ERROR, null);
}

//
// Unset callbacks for MediaConnection.MediaEvents
//
void unsetMediaCallbacks() {
  if(null == _mediaConnection){
    return;
  }

  _mediaConnection.on(MediaConnection.MediaEventEnum.STREAM, null);
  _mediaConnection.on(MediaConnection.MediaEventEnum.CLOSE, null);
  _mediaConnection.on(MediaConnection.MediaEventEnum.ERROR, null);
}
```

## Setup UI
{: #setup-ui }

Add necessary processes related with UI.
As actionButton is used in toggle mode, change the label in accordance with the connection status. Add the contents of updateActionButtonTitle method.

*Java*
{: .lang}

```java
//
// Update actionButton title
//
void updateActionButtonTitle() {
  _handler.post(new Runnable() {
    @Override
    public void run() {
      Button btnAction = (Button) findViewById(R.id.btnAction);
      if (null != btnAction) {
        if (false == _bConnected) {
          btnAction.setText("Make Call");
        } else {
          btnAction.setText("Hang up");
        }
      }
    }
  });
}
```

## Switching Camera
{: #switch-camera}

In the last, add a process of switching camera.
Using switchCamera method, switch the camera position used by the corresponding media stream between FRONT and BACK.

*Java*
{: .lang}

```java
//
// Action for switchCameraButton
//
Button switchCameraAction = (Button)findViewById(R.id.switchCameraAction);
switchCameraAction.setOnClickListener(new View.OnClickListener() {
  @Override
  public void onClick(View v)	{
    if(null != _localStream){
      Boolean result = _localStream.switchCamera();
      if(true == result)	{
        //Success
      }
      else {
        //Failed
      }
    }

  }
});
```

## Operation Check
{: #testing }

Build on a real machine and check the operation. Call a PeerID obtained by listAllPeers. If videochat is possible with the partner, the project is successful. If only one actual machine is available, you can check the operation by interconnecting with a Web application implemented by JavaScript SDK.
