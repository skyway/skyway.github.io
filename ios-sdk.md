---
layout: default
title: iOS SDK
lang: ja
---

# iOS SDK

## チュートリアル

iOS SDKの基本機能を利用して、1:1のシンプルなビデオ通話アプリを作成することで、iOS SDKの使い方について理解を深めます。
現在サーバに接続されているユーザーの一覧を表示し、通話相手を選び、1対1のビデオ通話を開始し、終了する機能、また着信を受け付ける機能を実装していきます。
[完成したアプリのデモ](tbd)を試すことができます。

<figure class="figure">
  <img src="https://github.com/skyway/webrtc-handson-native/wiki/img/hands-on-summary.png" class="figure-img img-fluid rounded" alt="ECLWebRTCでシグナリングをして、端末間がビデオチャットで繋がる">
  <figcaption class="figure-caption">ECLWebRTCでシグナリングをして、端末間がビデオチャットで繋がる</figcaption>
</figure>

<figure class="figure">
  <img src="https://github.com/skyway/webrtc-handson-native/wiki/img/video-chat.png" class="figure-img img-fluid rounded" alt="ビデオチャットのスクリーンショット">
  <figcaption class="figure-caption">ビデオチャットのスクリーンショット</figcaption>
</figure>

### 開発前の準備

ECLWebRTCへの開発者登録がまだの方は、まず、[新規登録](signup.md)から開発者登録をしてください。
開発者登録済みの方、完了した方は、[ダッシュボードにログイン](login.md)し、アプリを作成して、APIキーを取得してください。
利用可能ドメインは `localhost` としてください。

### プロジェクトの作成

ベースとなる写経用のプロジェクトをGitHubからクローン云々。
必要なライブラリ、フレームワークを追加。
SkyWay iOS SDKのダウンロード、Xcodeに追加、インポート。


### サーバへ接続

ECLWebRTCのシグナリングサーバに接続します。

まず初めに、シグナリングサーバに接続する際の引数で、APIキーと利用可能ドメインを指定します。
app/src/main/java/io/skyway/testpeerjava/ を選択。
MediaActivity.javaを開く。
APIキーを各自 https://skyway.io/ds から取得したものを設定。
利用可能ドメインは localhost に設定。

{:refdef: .lang}
*Objective-C*
{: refdef}

```objc
//APIキー、ドメインを設定
SKWPeerOption* option = [[SKWPeerOption alloc] init];
option.key = @"";
option.domain = @"";
```

{:refdef: .lang}
*Swift*
{: refdef}

```swift
//APIキー、ドメインを設定
let option: SKWPeerOption = SKWPeerOption.init();
option.key = ""
option.domain = ""
```

Peerオブジェクトの生成します。
Peerクラスは、SkyWayが提供するシグナリングのためのクラス。
Peerオブジェクトを生成し、シグナリングサーバに接続する。

{:refdef: .lang}
*Objective-C*
{: refdef}

```objc
// Peerオブジェクトのインスタンスを生成
_peer = [[SKWPeer alloc] initWithOptions:option];
```

{:refdef: .lang}
*Swift*
{: refdef}

```swift
// Peerオブジェクトのインスタンスを生成
_peer = SKWPeer.init(options: option);
```

### 接続成功・失敗時の処理

エラー発生時のコールバック処理を、OnCallback()に記述する。
Peer.on()で上記のコールバックを登録する。
第一引数にイベント種別を登録（ERROR,OPENなど）。
エラーが起きたらコンソールログを出力する。
APIキーが間違っている。
ドメインが登録されていない　など。


{:refdef: .lang}
*Objective-C*
{: refdef}

```objc
//コールバックを登録（ERROR)
    [_peer on:SKW_PEER_EVENT_ERROR callback:^(NSObject* obj)
     {
         SKWPeerError* error = (SKWPeerError*)obj;
         NSLog(@"%@",error);
     }];
```

{:refdef: .lang}
*Swift*
{: refdef}

```swift
//コールバックを登録（ERROR)
    _peer?.on(SKWPeerEventEnum.PEER_EVENT_ERROR,callback:{ (obj: NSObject!) -> Void in
        let error:SKWPeerError = obj as! SKWPeerError
        print("\(error)")
    })
```

成功時のコールバックを登録。
自分のピアIDがコールバックの引数に渡されてくる。
自分のピアIDを画面に表示する。

{:refdef: .lang}
*Objective-C*
{: refdef}

```objc
// コールバックを登録(OPEN)
[_peer on:SKW_PEER_EVENT_OPEN callback:^(NSObject* obj)
  {
      _id = (NSString *)obj;
      dispatch_async(dispatch_get_main_queue(), ^{
         UILabel* lbl = (UILabel*)[self.view viewWithTag:TAG_ID];
  　　　　　　　   [lbl setText:[NSString stringWithFormat:@"your ID: \n%@", _id]];
      });
}];
```

{:refdef: .lang}
*Swift*
{: refdef}

```swift
// コールバックを登録(OPEN)
    _peer?.on(SKWPeerEventEnum.PEER_EVENT_OPEN,callback:{ (obj: NSObject!) -> Void in
        self._id = obj as? String
        dispatch_async(dispatch_get_main_queue(), {
            self.idLabel.text = "your ID: \n\(self._id!)"
        })
    })
```

### カメラ映像、マイク音声の取得

自分のカメラの映像を取得して表示。
Navigator.getUserMediaで、カメラの映像が取得できる。
Canvasにセットする。

{:refdef: .lang}
*Objective-C*
{: refdef}

```objc
//メディアを取得
[SKWNavigator initialize:_peer];
SKWMediaConstraints* constraints = [[SKWMediaConstraints alloc] init];
_msLocal = [SKWNavigator getUserMedia:constraints];

// 映像を表示する為のUI
SKWVideo* localVideoView = [self.view viewWithTag:TAG_LOCAL_VIDEO];
[localVideoView addSrc:_msLocal track:0];
```

{:refdef: .lang}
*Swift*
{: refdef}

```swift
//メディアを取得
SKWNavigator.initialize(_peer);
let constraints:SKWMediaConstraints = SKWMediaConstraints.init();
_msLocal = SKWNavigator.getUserMedia(constraints) as SKWMediaStream
    
// 映像を表示する為のUI
let localVideoView:SKWVideo = self.view.viewWithTag(ViewTag.TAG_LOCAL_VIDEO.hashValue) as! SKWVideo
localVideoView.addSrc(_msLocal, track: 0)
```

### 着信時の処理

シグナリングサーバ経由でビデオ通話着信があった場合の処理。
相手に自分のメディア情報を回答。
相手とのP2Pコネクションで発生するイベントのコールバックを登録。
  
{:refdef: .lang}
*Objective-C*
{: refdef}

```objc
//コールバックを登録（CALL)
[_peer on:SKW_PEER_EVENT_CALL callback:^(NSObject* obj)
 {
     _mediaConnection = (SKWMediaConnection *)obj;
     [_mediaConnection answer:_msLocal];
     [self setMediaCallbacks:_mediaConnection];
     _bEstablished = YES;
     [self updateUI];
 }];
```

{:refdef: .lang}
*Swift*
{: refdef}

```swift
//コールバックを登録（CALL)
_peer?.on(SKWPeerEventEnum.PEER_EVENT_CALL, callback: { (obj:NSObject!) -> Void in
    self._mediaConnection = obj as? SKWMediaConnection
    self._mediaConnection?.answer(self._msLocal);
    self._bEstablished = true
    self.updateUI()
})
```

P2Pコネクションのコールバック処理。
映像を受信した場合(STREAM)、映像をUIに表示。
コネクションが切断された場合、映像を削除。

{:refdef: .lang}
*Objective-C*
{: refdef}

```objc
- (void)setMediaCallbacks:(SKWMediaConnection *)media
{
    // コールバックを登録（Stream）
    [media on:SKW_MEDIACONNECTION_EVENT_STREAM callback:^(NSObject* obj)
     {
         _msRemote = (SKWMediaStream *)obj;
         
         dispatch_async(dispatch_get_main_queue(), ^
                        {
                            SKWVideo* vwRemote = (SKWVideo *)[self.view viewWithTag:TAG_REMOTE_VIDEO];
                            [vwRemote setHidden:NO];
                            [vwRemote addSrc:_msRemote track:0];
                        });
     }];
    
    // コールバックを登録（Close）
    [media on:SKW_MEDIACONNECTION_EVENT_CLOSE callback:^(NSObject* obj)
     {
        
         dispatch_async(dispatch_get_main_queue(), ^{
             
              //Viewから削除
             SKWVideo* vwRemote = (SKWVideo *)[self.view viewWithTag:TAG_REMOTE_VIDEO];
             [vwRemote removeSrc:_msRemote track:0];
             _msRemote = nil;
             _mediaConnection = nil;
             _bEstablished = NO;
             [vwRemote setHidden:YES];
         });
         
         [self updateUI];
         
     }];
    
}
```

{:refdef: .lang}
*Swift*
{: refdef}

```swift
func setMediaCallbacks(media:SKWMediaConnection){
    
    //コールバックを登録（Stream）
    media .on(SKWMediaConnectionEventEnum.MEDIACONNECTION_EVENT_STREAM, callback: { (obj:NSObject!) -> Void in
        self._msRemote = obj as? SKWMediaStream
        
        dispatch_async(dispatch_get_main_queue(), { () -> Void in
            let remoteVideoView:SKWVideo = self.view.viewWithTag(ViewTag.TAG_REMOTE_VIDEO.hashValue) as! SKWVideo
            remoteVideoView.hidden = false
            remoteVideoView.addSrc(self._msRemote, track: 0)
        })
    })
    
    //コールバックを登録（Close）
    media .on(SKWMediaConnectionEventEnum.MEDIACONNECTION_EVENT_CLOSE, callback: { (obj:NSObject!) -> Void in
        self._msRemote = obj as? SKWMediaStream
        
        dispatch_async(dispatch_get_main_queue(), { () -> Void in
            let remoteVideoView:SKWVideo = self.view.viewWithTag(ViewTag.TAG_REMOTE_VIDEO.hashValue) as! SKWVideo
            remoteVideoView.removeSrc(self._msRemote, track: 0)
            self._msRemote = nil
            self._mediaConnection = nil
            self._bEstablished = false
            remoteVideoView.hidden = true
        })
        self.updateUI()
    })
}
```

### 発信する

相手へビデオ通話をかける。
サーバに接続しているピアの一覧を取得する。

{:refdef: .lang}
*Objective-C*
{: refdef}

```objc
//接続相手を選択する
- (void)getPeerList
{
    if ((nil == _peer) || (nil == _id) || (0 == _id.length)){
        return;
    }
    
    [_peer listAllPeers:^(NSArray* peers)
     {
         _listPeerIds = [[NSMutableArray alloc] init];

             for (NSString* strValue in peers)
             {
                 if (NSOrderedSame == [_id caseInsensitiveCompare:strValue])
                 {
                     continue;
                 }
                 
                 [_listPeerIds addObject:strValue];
             }
         if((nil != _listPeerIds) && (0< [_listPeerIds count]))
         {
             [self showPeerListDialog];
         }
         
     }];
}
```

{:refdef: .lang}
*Swift*
{: refdef}

```swift
func getPeerList(){
        if (_peer == nil) || (_id == nil) || (_id?.characters.count == 0) {
            return
        }
        _peer?.listAllPeers({ (peers:[AnyObject]!) -> Void in
            self._listPeerIds = []
            let peersArray:[String] = peers as! [String]
            for strValue:String in peersArray{
                
                if strValue == self._id{
                    continue
                }   
                self._listPeerIds.append(strValue)
            }
            if self._listPeerIds.count > 0{
                self.showPeerDialog()
            }

        })
    }
```

通話したい相手を選んで、ビデオ通話発信する。

{:refdef: .lang}
*Objective-C*
{: refdef}

```objc
- (void)call:(NSString *)strDestId
{
    SKWCallOption *option = [[SKWCallOption alloc]init];
    _mediaConnection = [_peer callWithId:strDestId stream:_msLocal options:option];
    
    if(_mediaConnection != nil){
        [self setMediaCallbacks:_mediaConnection];
        _bEstablished = YES;
    }
    
    [self updateUI];
    
}


//ビデオ通話を終了する
- (void)closeChat
{
    if (nil != _mediaConnection)
    {
        if (nil != _msRemote)
        {
            SKWVideo* video = (SKWVideo *)[self.view viewWithTag:TAG_REMOTE_VIDEO];
            if (nil != video)
            {
                [video removeSrc:_msRemote track:0];
            }
            
            [_msRemote close];
            
            _msRemote = nil;
        }
        
        [_mediaConnection close];
    }
}
```

{:refdef: .lang}
*Swift*
{: refdef}

```
//ビデオ通話を開始する
func call(strDestId: String) {
    let option = SKWCallOption()
    _mediaConnection = _peer!.callWithId(strDestId, stream: _msLocal, options: option)
    if _mediaConnection != nil {
        self.setMediaCallbacks(self._mediaConnection!)
        _bEstablished = true
    }
    self.updateUI()
}

//ビデオ通話を終了する
func closeChat(){
    if _mediaConnection != nil{
        if _msRemote != nil{
            let remoteVideoView:SKWVideo = self.view.viewWithTag(ViewTag.TAG_REMOTE_VIDEO.hashValue) as! SKWVideo

            remoteVideoView .removeSrc(_msRemote, track: 0)
            _msRemote?.close()
            _msRemote = nil
        }
        _mediaConnection?.close()
    }
}
```

### UIのセットアップ

UIの初期化。

{:refdef: .lang}
*Objective-C*
{: refdef}

```objc
略
UIButton* btnCall = [UIButton buttonWithType:UIButtonTypeRoundedRect];
[btnCall setTag:TAG_WEBRTC_ACTION];
[btnCall setFrame:rcCall];
[btnCall setTitle:@"Call" forState:UIControlStateNormal];
[btnCall addTarget:self action:@selector(pushCallButton:) forControlEvents:UIControlEventTouchUpInside];
[self.view addSubview:btnCall];
略)
}
略）
- (void)pushCallButton:(NSObject *)sender
{
	UIButton* btn = (UIButton *)sender;
	
	if (TAG_WEBRTC_ACTION == btn.tag)
	{
		if (nil == _mediaConnection)
		{
			// Listing all peers
            [self getPeerList];
		}
		else
		{
			// Closing chat
			[self performSelectorInBackground:@selector(closeChat) withObject:nil];
		}
	}
	
}
```

{:refdef: .lang}
*Swift*
{: refdef}

```swift
//ボタンはstoryboardで設定

@IBAction func pushCallButton(sender: AnyObject) {
    if self._mediaConnection == nil {
        self.getPeerList()
    }else{
        self.performSelectorInBackground("closeChat", withObject: nil)
    }
}
```

UIの更新。

{:refdef: .lang}
*Objective-C*
{: refdef}

```objc
-(void)updateUI{
    dispatch_async(dispatch_get_main_queue(), ^{
        
        //update Call Button
        UIButton* btn = (UIButton *)[self.view viewWithTag:TAG_WEBRTC_ACTION];
        if (NO == _bEstablished)
        {
            [btn setTitle:@"Call" forState:UIControlStateNormal];
        }
        else
        {
            [btn setTitle:@"Hang up" forState:UIControlStateNormal];
        }

        //update ID Label
        UILabel* lbl = (UILabel*)[self.view viewWithTag:TAG_ID];
        if (nil == _id)
        {
            [lbl setText:@"your ID: "];
        }
        else
        {
            [lbl setText:[NSString stringWithFormat:@"your ID: \n%@", _id]];
        }
    });
}
```

{:refdef: .lang}
*Swift*
{: refdef}

```swift
func updateUI(){
    dispatch_async(dispatch_get_main_queue()) { () -> Void in
        
        //CALLボタンのアップデート
        if self._bEstablished == false{
            self.callButton.titleLabel?.text = "CALL"
        }else{
            self.callButton.titleLabel?.text = "Hang up"
        }
        
        //IDラベルのアップデート
        if self._id == nil{
            self.idLabel.text = "your Id:"
        }else{
            self.idLabel.text = "your Id:"+self._id! as String
        }
    }
}
```

これで完成です。

## SDKのダウンロード

<a class="btn btn-primary" href="#" role="button">GitHub</a>
<a class="btn btn-primary" href="#" role="button">ZIPでダウンロード</a>

## APIリファレンス

<a class="btn btn-primary" href="#" role="button">APIリファレンスを見る</a>

## FAQ

このテキストはサンプルです。

<a class="btn btn-primary" href="https://support.skyway.io/hc/ja/sections/207320308-iOS-SDK" role="button">FAQを見る</a>

## Technical Forum

このテキストはサンプルです。
開発者同士の議論や情報交換、質問のためにコミュニティを提供しています。

<a class="btn btn-primary" href="https://support.skyway.io/hc/ja/community/topics/201688347-iOS-SDK" role="button">Technical Forumを見る</a>
