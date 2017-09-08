---
layout: rightnav
title: iOS SDK tutorial
lang: en
breadcrumb: [en/index.md, en/developer.md, en/ios-sdk.md]
---

- TOC
{:toc}

# iOS SDK Tutorial

By using basic functions of iOS SDK, we will create a simple one-to-one video conversation application to acquire deeper knowledge on how to use the iOS SDK.
The application will have functions to display a list of users currently connected to the server, to select a conversation partner, to start and stop a one-to-one video conversation, and to accept the call.

The application to be created in this tutorial will be the same as [one-to-one video chat](https://github.com/skyway/skyway-ios-sdk/tree/master/examples/p2p_videochat){:target="_blank"} provided as sample codes.
If you want to try the completed application, [download the source codes](https://github.com/skyway/skyway-ios-sdk/archive/master.zip) and build in accordance with the build procedure of this tutorial.


<figure class="figure">
  <img src="{{ site.baseurl }}/images/sdk-tutorial-top-image.png"
    class="figure-img img-fluid rounded" alt="Use ECLWebRTC to perform signaling to interconnect terminals with videochat">
  <figcaption class="figure-caption">Use ECLWebRTC to perform signaling to interconnect terminals with videochat</figcaption>
</figure>

<figure class="figure">
  <img src="{{ site.baseurl }}/images/ios-tutorial-videochat-sc.png" class="figure-img img-fluid rounded" alt="Screenshot of video chat">
  <figcaption class="figure-caption">Screenshot of video chat</figcaption>
</figure>

## Preparation before the Development Start
{: #preparation }

### Generate ECLWebRTC API Key

For customers who have not completed a developer registration, do so from [Registration of the Community Edition](https://console-webrtc-free.ecl.ntt.com/users/registration).
For those who had registered already, or have just completed the registration, [Login to Dashboard](https://console-webrtc-free.ecl.ntt.com/users/login) and create an application to obtain an API key.

Application settings on the Dashboard are as follows.

|Items to be set|Explanation of Items|Settings of Tutorial|
|:--|:--|:--|
|Explanation of Application|Explanatory description attached to the application and is used only for display on the Dashboard. <br>Please specify within 128 characters.|ECLWebRTC Tutorial Application|
|Available Domain Name|Enter Domain Name used in application creating. Multiple available Domain Name can be specified. Multiple available Domain Name can be specified. <br>Example：hogehoge.com|`localhost`|
|Administration (Use TURN)|Check this in case of using the TURN (Traversal Using Relay around NAT) server. The TURN server makes communication possible by relaying media and data, even when P2P communication is not possible because the communication has to go through firewalls. The TURN server closest to the user will be selected automatically.|ON|
|Administration (Use TURN)|Check this in case of using SFU (Selective Forwarding Unit) server. SFU is a technology to send/receive image and voice via a media server called SFU but not using P2P. Please refer to [About SFU](./sfu.html) for details.|ON|
|Administration (Use listAllPeers API)|Check this in case of using `listALLPeers API`. This API obtains an active PeerID per API key. Please refer to [API Reference](./ios-reference/interface_s_k_w_peer.html#a87e4f8349efd2e9178af7e5a5b47708a) for details.|ON|
|Administration (Use API Key authorization)|Provides authorization function to prevent from unauthorized use. Please refer to [Here](https://github.com/skyway/skyway-peer-authentication-samples){:target="_blank"} for details.|OFF|

### Preparation of Development Environment

In this tutorial, the development will proceed assuming the following environment.

- Xcode version 8.1
- Verified terminal
  - iPod nano(MKH22J/A)
- iOS version
  - 10.3.2
- Development language
  - ObjectiveC

## Create Project
{: #create-project }

Download Xcode project used in Tutorial from below repository.

- [https://github.com/skyway/skyway-ios-sdk-tutorial](https://github.com/skyway/skyway-ios-sdk-tutorial){:target="_blank"}

### Add SDK to Project

Arrange SDK binary files.
In this tutorial, we will introduce a procedure to manually set the downloaded file into the project.

1. Download SDK from [Here](https://github.com/skyway/skyway-ios-sdk/archive/master.zip)
2. After decompressing the ZIP file, arrange `SkyWay.framework` directly under `skyway-ios-sdk-tutorial` directory.
3. Double click `skyway-ios-sdk-tutorial.xcodeproj` and open project.
4. Right-click on the file tree on the left pane and select [ **Add File to…** ] to add `SkyWay.framework` arranged just before to the file tree.
5. From [ **General** ] → [ **Linked Frameworks and Libraries** ], delete `SkyWay.framework` once.
6. From [ **General** ] → [ **Embedded Binaries** ], add `SkyWay.framework` again.

<figure class="figure">
  <img src="{{ site.baseurl }}/images/ios-tutorial-xcode-sc.png" class="figure-img img-fluid rounded" alt="As SDK is added to the project">
  <figcaption class="figure-caption">As SDK is added to the project</figcaption>
</figure>

Descriptions of main files contained in the project are as follows.

- ViewController.m
  - Controller which adds code necessary for this Tutorial.
- PeerListViewController.m
  - Controller which genetrates UITableView displaying a list of PeerID.
  - The complete version is included in the kit and is not mentioned in this tutorial.
- storyboard
  - The complete version is included in the kit and is not mentioned in this tutorial.

### Header file import

Though it is already stated in the tutorial, add the header file for SDK to `ViewController.h`.

*Objective-C*
{: .lang}

```objc
#import <SkyWay/SKWPeer.h>
```

### Build

1. From [ **General** ] → [ **Identity** ], modify the Bundle Identifier as required.
2. Select account from Signing > Team used for Build. 
3. Connect the actual device and execute build.

Though we will see some errors during execution, the preparation is complete if we succeed in the build as follows.

<figure class="figure">
  <img src="{{ site.baseurl }}/images/ios-tutorial-splash-sc.png" class="figure-img img-fluid rounded" alt="As the LaunchScreen is displayed on the actual device.">
  <figcaption class="figure-caption">As the LaunchScreen is displayed on the actual device.</figcaption>
</figure>

## Connect with ECLWebRTC server
{: #connect-server }

### Declaration

Add constants that are used in the program.
For `apikey`, specify the API key that was generated on the Dashboard just before.
For `domain`, specify one of the available domain names specified on the Dashboard just before.

*Objective-C*
{: .lang}

```objc
//
// Set your APIkey and Domain
//
static NSString *const kAPIkey = @"apikey";
static NSString *const kDomain = @"domain";

```

Add declaration of instance variables used in the program.

- `_peer` : Peer Object
- `_localStream` : Own MediaStream Object
- `_remoteStream` : Opponent MediaStream Object
- `_mediaConnection` : MediaConnection Object

*Objective-C*
{: .lang}

```objc
//
// Instance declaration
//
@interface ViewController () {
    SKWPeer*			_peer;
    SKWMediaStream*		_localStream;
    SKWMediaStream*		_remoteStream;
    SKWMediaConnection*	_mediaConnection;
    
    NSString*			_strOwnId;
    BOOL				_bConnected;   
}
```


Add property declaration and dealloc process of instance variables.
- `localView`: Renderer view object to display your own image
- `remoteView`: Renderer view object to display the partner’s image

*Objective-C*
{: .lang}

```obj
//
// Property declaration
//
@property (weak, nonatomic) IBOutlet UILabel*   idLabel;
@property (weak, nonatomic) IBOutlet UIButton*  actionButton;
@property (weak, nonatomic) IBOutlet SKWVideo*  localView;
@property (weak, nonatomic) IBOutlet SKWVideo*  remoteView;

@end

@implementation ViewController

     :
     :

//
// dealloc
//
- (void)dealloc {
    _localStream = nil;
    _remoteStream = nil;
    _strOwnId = nil;
    _mediaConnection = nil;
    _peer = nil;
    
}

     :
     :

@end
```
### Create Peer Object

Add a process to create a Peer object in viewDidLoad method.

For the Peer object, specify API key, domain name and debug level by using SKWPeerOption class.

*Objective-C*
{: .lang}

```objc
- (void)viewDidLoad {
    [super viewDidLoad];

    //
    // Initialize Peer
    //
    SKWPeerOption* option = [[SKWPeerOption alloc] init];
    option.key = kAPIkey;
    option.domain = kDomain;
    option.debug = 3;
    _peer	= [[SKWPeer alloc] initWithId:nil options:option];
```

Please refer to [API Reference](./ios-reference/interface_s_k_w_peer_option.html) for other options that can be specified in Peer object.

## Process When Connection is Succeeded, Failed, or Disconnected
{: #eventlistener }

In succession, add an event callback required for Peer object.

### Open Event

Connects with the signaling server of ECLWebRTC and ignites when ready to use. All processes of ECLWebRTC become available after this event ignition.
A client identification ID called as PeerID is generated from the signaling server and can be obtained by callback event. PeerID can also be specified by the client side.
In the following process, it displays PeerID to UI if the PeerID is generated.

*Objective-C*
{: .lang}

```objc
//
// Set Peer event callbacks
//

// OPEN
[_peer on:SKW_PEER_EVENT_OPEN callback:^(NSObject* obj) {
    
    // Show my ID
    _strOwnId = (NSString*) obj;
    _idLabel.text = _strOwnId;
            
}];
```

### Obtain Camera Image and Microphone Voice

In the callback of the OPEN event, add a process to obtain camera images and microphone voices.

#### Option Setting

Options on image and voice obtainment can be set by SKWMediaConstraints class.   
Explanation for items to be set is as below.

- `maxWidth`: The upper limit of the horizontal size of captured image (unit: pixel)
- `maxHeight`: The upper limit of the vertical size of captured image (unit: pixel)
`cameraPosition`: Select camera for use（`SKW_CAMERA_POSITION_FRONT` as default）
- For the camera position, front camera (`SKW_CAMERA_POSITION_FRONT`) or back camera (`SKW_CAMERA_POSITION_BACK`) can be selected.

Please refer to [API Reference](./ios-reference/interface_s_k_w_media_constraints.html) for other items.

*Objective-C*
{: .lang}

```objc
// OPEN
[_peer on:SKW_PEER_EVENT_OPEN callback:^(NSObject* obj) {
    
     :
     :
    
    // Set MediaConstraints
    SKWMediaConstraints* constraints = [[SKWMediaConstraints alloc] init];
    constraints.maxWidth = 960;
    constraints.maxHeight = 540;
    constraints.cameraPosition = SKW_CAMERA_POSITION_FRONT;

}];        
```

#### Obtainment and Playback

Initialize SKWNavigator class, specify `constraints` to the parameter of getUserMedia method and execute it to obtain the own image (local stream).
Use addVideoRenderer method to allocate video renderer (SKWVideo object for display) to the obtained MediaStream object.

*Objective-C*
{: .lang}

```objc
// OPEN
[_peer on:SKW_PEER_EVENT_OPEN callback:^(NSObject* obj) {
    
     :
     :
    
    // Set MediaConstraints
    
     :
     :

    // Get a local MediaStream & show it
    [SKWNavigator initialize:_peer];
    _localStream = [SKWNavigator getUserMedia:constraints];
    [_localStream addVideoRenderer:_localView track:0];

}];        
```


### Error Event

It ignites when any error occurs. Make it possible to show details of an error on the log if it occurs.

*Objective-C*
{: .lang}

```objc
// ERROR
[_peer on:SKW_PEER_EVENT_ERROR callback:^(NSObject* obj) {
    SKWPeerError* error = (SKWPeerError*)obj;
    NSLog(@"%@",error);
    
}];
```

### Close Event

It ignites when connection with the Peer (partner) is broken. No specific process is applied in the tutorial.

*Objective-C*
{: .lang}

```objc
// CLOSE
[_peer on:SKW_PEER_EVENT_CLOSE callback:^(NSObject* obj) {}];
```

### Disconnected Event

It ignites when connection with the signaling server is broken. No specific process is applied in the tutorial.

*Objective-C*
{: .lang}

```objc
// DISCONNECTED
[_peer on:SKW_PEER_EVENT_DISCONNECTED callback:^(NSObject* obj) {}];
```

## Calling/Disconnecting/Receiving Process
{: #call-event }

Add processes to call/disconnect/receive.

### Calling Process
{: #call }

Select the PeerID of the partner and call him/her.

#### Obtain the PeerID of the Destination

Tap actionButton. If in not-connected status, use listAllPeers method to obtain a list of PeerID of the connection destination. Delete your own ID from the obtained list and show the list with `PeerListViewController`.

*Objective-C*
{: .lang}

```objc
//
// Action for actionButton (make/hang up a call)
//
- (IBAction)onActionButtonClicked:(id)sender {
    
    if(nil == _mediaConnection) {
        
        //
        // Select remote peer & make a call
        //
        
        // Get all IDs connected to the server
        [_peer listAllPeers:^(NSArray* aryPeers){
            NSMutableArray* maItems = [[NSMutableArray alloc] init];
            if (nil == _strOwnId) {
                 return;
            }
            
            // Exclude my own ID
            for (NSString* strValue in aryPeers) {
                if (NSOrderedSame != [_strOwnId caseInsensitiveCompare:strValue]) {
                    [maItems addObject:strValue];
                }
            }
            
            // Show IDs using UITableViewController
            PeerListViewController* vc = [[PeerListViewController alloc] initWithStyle:UITableViewStylePlain];
            vc.items = [NSArray arrayWithArray:maItems];
            vc.delegate = self;
            
            UINavigationController* nc = [[UINavigationController alloc] initWithRootViewController:vc];
            dispatch_async(dispatch_get_main_queue(), ^{
                [self presentViewController:nc animated:YES completion:nil];
            });
            
            [maItems removeAllObjects];
        
        }];
    }
         
    else {

    }
}
```

#### Calling

If Peer ID is selected in `PeerListViewController`, didSelectPeer method will be called. Set the PeerID of the partner and your own localStream to the parameter, and call.
After calling, set up necessary event callbacks.
Details of `setMediaCallbacks` will be explained later.

*Objective-C*
{: .lang}

```objc

//
// Create a MediaConnection
//
- (void) didSelectPeer:(NSString *)peerId {
    _mediaConnection = [_peer callWithId:peerId stream:_localStream];
    [self setMediaCallbacks];
}
```

### Disconnecting Process
{: #disconnect }

It disconnects the connection with the partner.

#### Terminate MediaConnection

If the connection is alive when the actionButton is tapped, use Close method of MediaConnection object to disconnect the corresponding MediaConnection and execute necessary processing with `closeRemoteStream` which will be explained later.

*Objective-C*
{: .lang}

```objc
//
// Action for actionButton (make/hang up a call)
//
- (IBAction)onActionButtonClicked:(id)sender {
    
    if(nil == _mediaConnection) {
        
     :
     :
         
    else {
        
        //
        // hang up a call
        //
        
        [self closeRemoteStream];
        [_mediaConnection close];
    }
}
```

#### Close MediaStream

After Close method of MediaConnection object is executed, use removeVideoRenderer method to remove the video renderer assigned to the corresponding MediaStream.

*Objective-C*
{: .lang}

```objc
//
// Close & release a remote MediaStream
//
- (void) closeRemoteStream {
    if(nil == _remoteStream) {
        return;
    }
    
    if(nil != _remoteView) {
        [_remoteStream removeVideoRenderer:_remoteView track:0];
    }
    
    [_remoteStream close];
    _remoteStream = nil;
}
```

#### Related with Release of Callback Event

Add a release process of a callback event executed at the time of disconnection of the MediaConnection.

In addition, concerning `unsetPeerCallbacks`, it will be used when we destroy Peer objects. It will not be used in this tutorial where destruction of Peer objects is omitted.

*Objective-C*
{: .lang}

```objc
//
// Unset callbacks for PEER_EVENTs
//
- (void)unsetPeerCallbacks {
    if (nil == _peer) {
        return;
    }
    
    [_peer on:SKW_PEER_EVENT_OPEN callback:nil];
    [_peer on:SKW_PEER_EVENT_CONNECTION callback:nil];
    [_peer on:SKW_PEER_EVENT_CALL callback:nil];
    [_peer on:SKW_PEER_EVENT_CLOSE callback:nil];
    [_peer on:SKW_PEER_EVENT_DISCONNECTED callback:nil];
    [_peer on:SKW_PEER_EVENT_ERROR callback:nil];
}

//
// Unset callbacks for MEDIACONNECTION_EVENTs
//
- (void)unsetMediaCallbacks {
    if(nil == _mediaConnection) {
        return;
    }
    
    [_mediaConnection on:SKW_MEDIACONNECTION_EVENT_STREAM callback:nil];
    [_mediaConnection on:SKW_MEDIACONNECTION_EVENT_CLOSE callback:nil];
    [_mediaConnection on:SKW_MEDIACONNECTION_EVENT_ERROR callback:nil];
}
```

### Receiving Process
{: #oncall }

Responds when connection request is received from the partner.
If connection request is received from the partner, `SKW_PEER_EVENT_CALL` will ignite. As you can obtain MediaConnection object to manage the connection with the partner as a parameter, execute answer method and respond to the connection request.
If you set your own `_localStream` then, you will be able to send image and voice to your partner.
In the same way as the calling process, execute `setMediaCallbacks` and set the event. Details will be explained later.

*Objective-C*
{: .lang}


```objc
- (void)viewDidLoad {
    [super viewDidLoad];
    
     :
     :
   
    // CALL (Incoming call)
    [_peer on:SKW_PEER_EVENT_CALL callback:^(NSObject* obj) {
        if (YES == [obj isKindOfClass:[SKWMediaConnection class]]) {
            _mediaConnection = (SKWMediaConnection *)obj;
            [self setMediaCallbacks];
            [_mediaConnection answer:_localStream];
        }
    }];
```


### Event necessary for MediaConnection Object

Event callback necessary for MediaConnection.
`SKW_MEDIACONNECTION_EVENT_STREAM` will ignite when image and/or voice of the partner are received.

In the callback, use update process of the connection status on UI and apply addVideoRenderer method to the obtained MediaStream object of the partner, to assign the video renderer.

*Objective-C*
{: .lang}

```objc
//
// Set callbacks for MEDIACONNECTION_EVENTs
//
- (void)setMediaCallbacks {
    if (nil == _mediaConnection) {
        return;
    }
    
    [_mediaConnection on:SKW_MEDIACONNECTION_EVENT_STREAM callback:^(NSObject* obj) {
        if (YES == [obj isKindOfClass:[SKWMediaStream class]]) {
            if (YES == _bConnected) {
                return;
            }
            
            // Change connection state
            _bConnected = YES;
            [self updateActionButtonTitle];
            
            // Get a remote MediaStream & show it
            _remoteStream = (SKWMediaStream *)obj;
            dispatch_async(dispatch_get_main_queue(), ^{
                [_remoteStream addVideoRenderer:_remoteView track:0];
            });
            
        }
    }];
   
}

```

`SKW_MEDIACONNECTION_EVENT_CLOSE` will ignite if the partner executes the disconnection process and if the connection is actually disconnected.
In the callback, necessary disconnection processes will be executed. Details will be explained later.

*Objective-C*
{: .lang}

```objc
//
// Set callbacks for MEDIACONNECTION_EVENTs
//
- (void)setMediaCallbacks {

     :
     :
    
    [_mediaConnection on:SKW_MEDIACONNECTION_EVENT_CLOSE callback:^(NSObject* obj) {
        if (NO == _bConnected) {
            return;
        }
        
        [self closeRemoteStream];
        [self unsetMediaCallbacks];
        _mediaConnection = nil;
        
        _bConnected = NO;
        [self updateActionButtonTitle];
        
    }];
    
}

```

`SKW_MEDIACONNECTION_EVENT_ERROR` will ignite when any error occurs. Make it possible to show details of an error on the log if it occurs.

*Objective-C*
{: .lang}

```objc
//
// Set callbacks for MEDIACONNECTION_EVENTs
//
- (void)setMediaCallbacks {

     :
     :
    
    [_mediaConnection on:SKW_MEDIACONNECTION_EVENT_ERROR callback:^(NSObject* obj) { }];
}
```

## Setup UI
{: #setup-ui }

Add necessary processes related with UI.
As actionButton is used in toggle mode, change the label in accordance with the connection status. Add the contents of updateActionButtonTitle method.

*Objective-C*
{: .lang}

```objc
//
// UIViewcontroller lifecycle
//
- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    [[UIApplication sharedApplication] setIdleTimerDisabled:YES];
    [self updateActionButtonTitle];
}

- (void)viewDidDisappear:(BOOL)animated {
    [[UIApplication sharedApplication] setIdleTimerDisabled:NO];
    [super viewDidDisappear:animated];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
}

//
// Update actionButton title
//
- (void)updateActionButtonTitle {
    dispatch_async(dispatch_get_main_queue(), ^{
        NSString* title = (_bConnected) ? @"Hang up" : @"Make Call";
        [_actionButton setTitle:title forState:UIControlStateNormal];
    });
    
}
```

## Switching Camera
{: #switch-camera}

In the last, add a process of switching camera.
Use getCameraPosition method to obtain the camera position used by the corresponding media stream. Use the result obtained to switch over by toggling.

*Objective-C*
{: .lang}

```objc
//
// Action for switchCameraButton
//
- (IBAction)onSwitchCameraButtonClicked:(id)sender {
    if(nil == _localStream) {
        return;
    }
    
    SKWCameraPositionEnum pos = [_localStream getCameraPosition];
    if(SKW_CAMERA_POSITION_BACK == pos) {
        pos = SKW_CAMERA_POSITION_FRONT;
    }
    else if(SKW_CAMERA_POSITION_FRONT == pos) {
        pos = SKW_CAMERA_POSITION_BACK;
    }
    else {
        return;
    }
    
    [_localStream setCameraPosition:pos];
}
```

## Operation Check
{: #testing }

Build on a real machine and check the operation. Call a PeerID obtained by listAllPeers. If videochat is possible with the partner, the project is successful. If only one actual machine is available, you can check the operation by interconnecting with a Web application implemented by JavaScript SDK.
