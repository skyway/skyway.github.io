---
layout: rightnav
title: iOS SDK チュートリアル
lang: ja
breadcrumb: [index.md, developer.md, ios-sdk.md]
---

- TOC
{:toc}

# iOS SDK チュートリアル

iOS SDKの基本機能を利用して、1:1のシンプルなビデオ通話アプリを作成することで、iOS SDKの使い方について理解を深めます。
現在サーバに接続されているユーザーの一覧を表示し、通話相手を選び、1対1のビデオ通話を開始し、終了する機能、また着信を受け付ける機能を実装していきます。

このチュートリアルで作成するアプリは、サンプルコードとして提供している[1対1のビデオ通話](#){:target="_blank"}と同じものになります。
完成したアプリを試したい場合は、ソースコードをダウンロードし、このチュートリアルのビルド手順に沿ってビルドししてください。

<figure class="figure">
  <img src="https://github.com/skyway/webrtc-handson-native/wiki/img/hands-on-summary.png"
    class="figure-img img-fluid rounded" alt="SkyWayでシグナリングをして、端末間がビデオ通話で繋がる">
  <figcaption class="figure-caption">SkyWayでシグナリングをして、端末間がビデオ通話で繋がる</figcaption>
</figure>

<figure class="figure">
  <img src="https://github.com/skyway/webrtc-handson-native/wiki/img/video-chat.png"
    class="figure-img img-fluid rounded" alt="ビデオ通話のスクリーンショット">
  <figcaption class="figure-caption">ビデオ通話のスクリーンショット</figcaption>
</figure>

## 開発前の準備
{: #preparation }

### SkyWayのAPIキー発行

SkyWayへの開発者登録がまだの方は、まず、[Community Editionの新規登録](./signup.html)から開発者登録をしてください。
トライアル提供していました旧SkyWayのAPIキーはご利用になれないため、旧SkyWayをご利用の方も新規登録をお願いします。

開発者登録済みの方、完了した方は、[ダッシュボードにログイン](./login.html)し、アプリケーションを作成して、APIキーを取得してください。
ダッシュボードでのアプリケーションの設定内容は以下のとおりです。

|設定項目|項目の説明|チュートリアルの設定内容|
|:--|:--|:--|
|アプリケーション説明文|アプリケーションにつける説明文で、ダッシュボードでの表示のみに利用されます。<br>128文字以内で指定してください。|SkyWayチュートリアルアプリ|
|利用可能ドメイン名|作成するアプリケーションで利用するドメイン名を入力します。利用可能ドメイン名は複数指定可能です。利用可能ドメイン名は複数指定可能です。<br>指定例：hogehoge.com|`localhost`|
|権限(TURNを利用する)|TURN(Traversal Using Relay around NAT) サーバを利用する場合はチェックします。TURNサーバは、ファイアウォールを経由する等の理由によりP2P通信ができない場合でも、メディアやデータをリレーすることにより通信を可能とします。ユーザーに最も近いTURNサーバが自動的に選択されます。|ON|
|権限(SFUを利用する)|SFU(Selective  Forwarding  Unit)サーバを利用する場合はチェックします。SFUとは、P2PではなくSFUというメディアサーバを経由して映像や音声の送受信を行う技術です。詳しくは[SFUについて](./sfu.html)をご覧ください。|ON|
|権限(listAllPeers APIを利用する)|`listALLPeers API`を使用する場合はチェックします。このAPIは、APIキー毎のアクティブなPeerIDを取得します。詳しくは、APIリファレンスをご覧ください。|ON|
|権限(APIキー認証を利用する)|APIキーの不正利用を防止するための認証機能を提供します。詳しくは[こちら](https://github.com/nttcom/Peer-Authentication-Server-Samples){:target="_blank"} をご覧ください。|OFF|

### 開発環境の準備

このチュートリアルでは以下の環境を前提に開発を進めます。

- Xcode Version 8.1
- 動作確認端末
  - iPod nano(MKH22J/A)
- iOS バージョン
  - 10.3.2
- 開発言語
  - ObjectiveC

## プロジェクトの作成
{: #create-project }

チュートリアルで利用するXcodeのプロジェクトは以下のリポジトリからダウンロードしてください。  

- [https://github.com/skyway/ios-sdk-tutorial](https://github.com/skyway/ios-sdk-tutorial){:target="_blank"}

### SDKをプロジェクトに追加する

SDKのバイナリファイルを配置します。  
今回のチュートリアルでは、ダウンロードしたファイルを手動でプロジェクトに組込む手順を紹介します。  

1. SDKを[こちら](https://s3-ap-northeast-1.amazonaws.com/skyway-sdk-production/skyway-ios-sdk.zip)からダウンロード
2. ZIPファイルを解凍後、`SkyWay.framework`を、`skyway-ios-sdk-tutorial`ディレクトリ直下に配置
3. `skyway-ios-sdk-tutorial.xcodeproj`をダブルクリックしプロジェクトを開く
4. 左ペインのファイルツリー上で右クリックし`Add File to…`を選択し、先程配置した`SkyWay.framework`をファイルツリーに追加
5. General > Linked Frameworks and Libraries から`SkyWay.framework`を一度削除
6. General > Embedded Binaries から`SkyWay.framework`を再度追加

<figure class="figure">
  <img src="{{ site.rootdir[page.lang] }}images/ios-tutorial-xcode1.png"
    class="figure-img img-fluid rounded" alt="SDKをプロジェクトに追加したところ">
  <figcaption class="figure-caption">SDKをプロジェクトに追加したところ</figcaption>
</figure>

プロジェクトに含まれる主要ファイルの説明は以下のとおりです。

- ViewController.m
  - 今回のチュートリアルで主に必要なコードを追記していくコントローラー
- PeerListViewController.m
  - PeerID一覧を表示するUITableViewを生成するコントローラー
  - 完成版が同梱されており、今回のチュートリアルでは触れません
- storyboard
  - 完成版が同梱されており、今回のチュートリアルで触れません

### ヘッダーファイルインポート

チュートリアルでは既に記載済みですが、`ViewController.h`にSDK用のヘッダーファイルを追加します。

*Objective-C*
{: .lang}

```objc
#import <ECLWebRTC/SKWPeer.h>
```

### ビルドする

1. General > Identity から Bundle Identifierを適宜修正
2. Signing > Team から ビルドに利用するアカウントを選択
3. 実機を接続しビルド実行

実行時にエラーが出てしまいますが、以下のとおりビルドに成功すれば準備完了です。

<figure class="figure">
  <img src="{{ site.rootdir[page.lang] }}images/ios-tutorial-sc1.png"
    class="figure-img img-fluid rounded" alt="実機上でLaunchScreenが表示されたところ">
  <figcaption class="figure-caption">実機上でLaunchScreenが表示されたところ</figcaption>
</figure>

## SkyWayサーバへの接続
{: #connect-server }

### 宣言

プログラム中で利用する定数を追記してください。  
`apikey`には先程ダッシュボードで発行したAPIキーを指定してください。  
`domain`には先程ダッシュボードで指定した利用可能ドメイン名のうち一つを指定してください。

*Objective-C*
{: .lang}

```objc
//
// Set your APIkey and Domain
//
static NSString *const kAPIkey = @"apikey";
static NSString *const kDomain = @"domain";

```

プログラム中で利用するインスタンス変数の宣言を追記してください。  
- `_peer` : Peerオブジェクト
- `_localStream` : 自分自身のMediaStreamオブジェクト
- `_remoteStream` : 相手のMediaStreamオブジェクト
- `_mediaConnection` : MediaConnectionオブジェクト

*Objective-C*
{: .lang}

```objc
//
// declaration
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


プロパティ宣言、そしてインスタンス変数のdealloc処理を追記してください。
- `localView` : 自分自身のカメラ映像を表示するためのレンダラービューオブジェクト
- `remoteView` : 相手のカメラ映像を表示するためのレンダラービューオブジェクト

*Objective-C*
{: .lang}

```objc
@property (weak, nonatomic) IBOutlet UILabel*   idLabel;
@property (weak, nonatomic) IBOutlet UIButton*  actionButton;
@property (weak, nonatomic) IBOutlet SKWVideo*  localView;
@property (weak, nonatomic) IBOutlet SKWVideo*  remoteView;

@end

@implementation ViewController

// 省略

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
```

### Peerオブジェクトの作成

viewDidLoadメソッド内に、Peerオブジェクトを作成するための処理を追記してください。  
Peerオブジェクトには、SKWPeerOptionクラスを利用し、APIキー、ドメイン名、デバッグレベルを指定してください。

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

Peerオブジェクトで指定可能なその他のオプションについては、[APIリファレンス](./ios-reference/)をご覧ください。

## 接続成功・失敗・切断時の処理
{: #eventlistener }

続けて、Peerオブジェクトに必要なイベントコールバックを追記してください。

### openイベント

SkyWayのシグナリングサーバと接続し、利用する準備が整ったら発火します。
SkyWayのすべての処理はこのイベント発火後に利用できるようになります。  
PeerIDと呼ばれるクライアント識別用のIDがシグナリングサーバで発行され、コールバックイベントで取得できます。
PeerIDはクライアントサイドで指定することもできます。  
以下の処理では、PeerIDが発行されたら、その情報をUIに表示する処理を行っています。

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

### カメラ映像、マイク音声の取得

openイベントのコールバック内に、カメラ映像とマイク音声を取得するための処理を追記してください。  

#### オプション設定

SKWMediaConstraintsクラスでカメラ映像・マイク音声取得に関するオプションを設定可能です。  
ここで設定している項目の説明は以下のとおりです。  
- `maxWidth`: キャプチャ映像の横サイズ上限（単位：ピクセル）
- `maxHeight`: キャプチャ映像の縦サイズ上限（単位：ピクセル）
- `cameraPosition`: 使用するカメラの選択（ディフォルトは`SKW_CAMERA_POSITION_FRONT`）
  - カメラポジションは前面カメラ（`SKW_CAMERA_POSITION_FRONT`）と背面カメラ（`SKW_CAMERA_POSITION_BACK`）が選択可能

これ以外の項目については、[APIリファレンス](./ios-reference/)をご覧ください。  

*Objective-C*
{: .lang}

```objc
// OPEN
[_peer on:SKW_PEER_EVENT_OPEN callback:^(NSObject* obj) {
    
    // 省略
    
    // Set MediaConstraints
    SKWMediaConstraints* constraints = [[SKWMediaConstraints alloc] init];
    constraints.maxWidth = 960;
    constraints.maxHeight = 540;
    constraints.cameraPosition = SKW_CAMERA_POSITION_FRONT;

}];        
```

#### 取得と再生

SKWNavigatorクラスの初期化を行い、getUserMediaメソッドの引数に`constraints`を指定して実行することで、自分のカメラ映像（ローカルストリーム）が取得できます。  
取得したMediaStreamオブジェクトに、addVideoRendererメソッドを利用して、ビデオレンダラー(表示用のSKWVideoオブジェクト)を割り当てます。

*Objective-C*
{: .lang}

```objc
// OPEN
[_peer on:SKW_PEER_EVENT_OPEN callback:^(NSObject* obj) {
    
    // 省略
    
    // Set MediaConstraints
    // 省略

    // Get a local MediaStream & show it
    [SKWNavigator initialize:_peer];
    _localStream = [SKWNavigator getUserMedia:constraints];
    [_localStream addVideoRenderer:_localView track:0];

}];        
```


### errorイベント

何らかのエラーが発生した場合に発火します。エラーが発生したら、ログにその内容を表示できるようにします。

*Objective-C*
{: .lang}

```objc
// ERROR
[_peer on:SKW_PEER_EVENT_ERROR callback:^(NSObject* obj) {
    SKWPeerError* error = (SKWPeerError*)obj;
    NSLog(@"%@",error);
    
}];
```

### closeイベント

Peer（相手）との接続が切れた際に発火します。チュートリアルでは特に処理は行いません。

*Objective-C*
{: .lang}

```objc
// CLOSE
[_peer on:SKW_PEER_EVENT_CLOSE callback:^(NSObject* obj) {}];
```

### disconnectedイベント

シグナリングサーバとの接続が切れた際に発火します。チュートリアルでは特に処理は行いません。

*Objective-C*
{: .lang}

```objc
// DISCONNECTED
[_peer on:SKW_PEER_EVENT_DISCONNECTED callback:^(NSObject* obj) {}];
```

## 発信・切断・着信処理
{: #call-event }

発信、切断、着信をするための処理を追記してください。

### 発信処理
{: #call }

相手のPeerIDを選択して発信します。

#### 発信先のPeerIDを取得

actionButtonをタップし未接続状態であれば、listAllPeersメソッドを利用して接続先のPeerID一覧を取得します。
取得した一覧から自分自身のIDを削除し、`PeerListViewController`で一覧表示します。  

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

#### 発信

`PeerListViewController`でPeerIDが選択されたら、didSelectPeerメソッドが呼ばれます。
相手のPeerID、自分自身のlocalStreamを引数にセットし発信します。  
発信後は必要なイベントコールバックをセットします。  
`setMediaCallbacks`の中身については後ほど説明します。

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

### 切断処理
{: #disconnect }

相手との接続を切断します。

#### MediaConnectionの切断

actionButtonをタップした際に接続中であれば、MediaConnectionオブジェクトのCloseメソッドで該当するMediaConnectionを切断し、後ほど説明する`closeRemoteStream`で必要な処理を行います。

*Objective-C*
{: .lang}

```objc
//
// Action for actionButton (make/hang up a call)
//
- (IBAction)onActionButtonClicked:(id)sender {
    
    if(nil == _mediaConnection) {
        
        // 省略
         
    else {
        
        //
        // hang up a call
        //
        
        [self closeRemoteStream];
        [_mediaConnection close];
    }
}
```

#### MediaStreamのクローズ

MediaConnectionオブジェクトのCloseメソッドが実行された後は、removeVideoRendererメソッドを利用して該当のMediaStreamに割り当てられた、ビデオレンダラーを取り外します。

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

#### コールバックイベントの解放関連

MediaConnection切断時に実行するコールバックイベントの開放処理を追記してください。  
尚、`unsetPeerCallbacks`についてはPeerオブジェクトの破棄時に利用します。
今回のチュートリアルでは、Peerオブジェクトの破棄は省略しているため未使用です。

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

### 着信処理
{: #oncall }

相手から接続要求がきた場合に応答します。   
相手から接続要求が来た場合は`SKW_PEER_EVENT_CALL`が発火します。
引数として相手との接続を管理するためのMediaConnectionオブジェクトが取得できるため、answerメソッドを実行し接続要求に応答します。  
この時に、自分自身の`_localStream`をセットすると、相手にカメラ映像・マイク音声を送信することができるようになります。  
発信時の処理と同じく`setMediaCallbacks`を実行し、イベントをセットします。中身については後ほど説明します。

*Objective-C*
{: .lang}


```objc
- (void)viewDidLoad {
    [super viewDidLoad];
    
    // 省略
   
    // CALL (Incoming call)
    [_peer on:SKW_PEER_EVENT_CALL callback:^(NSObject* obj) {
        if (YES == [obj isKindOfClass:[SKWMediaConnection class]]) {
            _mediaConnection = (SKWMediaConnection *)obj;
            [self setMediaCallbacks];
            [_mediaConnection answer:_localStream];
        }
    }];
```


### MediaConnectionオブジェクトに必要なイベント

MediaConnectionオブジェクトに必要なイベントコールバックです。  
`SKW_MEDIACONNECTION_EVENT_STREAM`は相手のカメラ映像・マイク音声を受信した際に発火します。  
コールバック内では、UI上の接続ステータスのアップデート処理と、取得した相手のMediaStreamオブジェクトにaddVideoRendererメソッドを利用して、ビデオレンダラーを割り当てます。

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

`SKW_MEDIACONNECTION_EVENT_CLOSE`は相手がメディアコネクションの切断処理を実行し、実際に切断されたら発火します。  
コールバック内では、必要な切断処理を実行します。詳細は後述します。

*Objective-C*
{: .lang}

```objc
//
// Set callbacks for MEDIACONNECTION_EVENTs
//
- (void)setMediaCallbacks {

    // 省略
    
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

`SKW_MEDIACONNECTION_EVENT_ERROR`は何らかのエラーが発生した際に発火します。エラーが発生したら、ログにその内容を表示できるようにします。

*Objective-C*
{: .lang}

```objc
//
// Set callbacks for MEDIACONNECTION_EVENTs
//
- (void)setMediaCallbacks {

    // 省略
    
    [_mediaConnection on:SKW_MEDIACONNECTION_EVENT_ERROR callback:^(NSObject* obj) { }];
}
```

## UIのセットアップ
{: #setup-ui }

UI関連の必要な処理を追記してください。  
actionButtonはトグルで利用するため、接続状態に応じてラベルを張り替えます。updateActionButtonTitleメソッドの中身を追記してください。

*Objective-C*
{: .lang}

```objc
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

## カメラの切り替え
{: #switch-camera}

最後にカメラの切り替え処理を追記してください。  
getCameraPositionメソッドで該当メディアストリームで利用しているカメラ位置情報を取得します。その取得結果を利用して、トグルで切り替えます。

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

## 動作確認
{: #testing }

実機でビルドし動作を確認してください。listAllPeersで取得したPeerIDに対して発信し、相手とビデオ通話ができれば成功です。
実機が1台しかない場合は、JavaScript SDKで実装したWebアプリケーションとの相互接続で動作を確認することができます。
