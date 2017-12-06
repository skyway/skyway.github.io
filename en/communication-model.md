---
layout: rightnav
title: Communication model of ECLWebRTC
lang: en
breadcrumb: [en/index.md, en/developer.md]
---

- TOC
{:toc}

# Communication model of ECLWebRTC

This article describes basic concept of ECLWebRTC. ECLWebRTC provides several SDKs. The function name described in this article is based on JavaScript SDK, but the name is basically same[^1] among the other SDKs, so this article basically applies to all SDKs.

[^1]: Subtle differences among parameters and class names.

## Peer

When you develop some services, You need to create `Peer` instance at first. Peer is kind of an agent which manages the connection to signaling server and the connections between other clients. For example, in 1-to-1 video chat application, each calling party and called party sends and receives media such as audio and video.

### Peer ID

When creating a new Peer(`new Peer`), the peer connects to ECLWebRTC's signaling server. When the connection succeeds, you can obtain the Peer ID with the ECLWebRTC server creates randomly and will be notified by `Peer.open` event. The Peer ID is used to identify the peer. If the connection establishment to ECLWebRTC's server, the `Peer.error` event will fire.

The peer ID is not only created by ECLWebRTC's signaling server, but also assigned by developers like `new Peer('your own Peer ID')`.

## 2 Communication Models

There are 2 models for managing connections between clients; one is based on Telephone model, and the other one is based on Room model.

### 1. Telephone Model

Like chatting via cellphone, the telephone model provides 1:1 communication. When initiating communication, a destination Peer ID should be obtained in some way.

#### Media Channel (Audio and Video)

When calling to opponent(`Peer.call()`), you need to specify PeerID like phone number. The `call` event will fire on incoming call. To answer the call, you need to call `answer()`. Then, connection will be established. Audio and video media streams can be acquired with `stream` event.

#### Data Channel

If you want to send and receive data, `Peer.connect()` is used to establish Data Channel. After connection established, `connection` event will be fired.

Unlike Media Channel, `answer()` needs not be called explicitly, but the connection is established automatically.

### 2. Room Model

Like chatting in the same room, Peers talks with the other peers[^2] in Room model.

At first Peer specifies the room name and join the room(`peer.joinRoom()`). Then, if the peer receives audio and video media stream, `Room.stream` will be fired. If the Peer wants to leave the room, `Room.close()` is used. Note `Room.close()` doesn't remove the room itself; If other peers are joining the room, those peers don't leave and their media connections continue. If all of the peers in the room leave, the room is removed. 

Each API key has each namespace. Namely, if there are 2 API keys(A and B) and if the same room name is created by both API key, 2 rooms are treated as separate room. The peers in the room of API key A and B can't establish connection, if the API key is different.

You can choose `Full mesh` room and `SFU` room when using room. See details from [here](https://webrtc.ecl.ntt.com/en/sfu.html).

[^2]: Peers can not only send and receive media stream, but only receive media stream.

## Media Stream

With ECLWebRTC, if the peer sends and receives the audio and video, [MediaStream](https://www.w3.org/TR/mediacapture-streams/#mediastream){:target="_blank"} is used. The way of generating or modifying media stream[^3] isn't provided by ECLWebRTC. You can only pass the media stream to ECLWebRTC's SDK as input and get the media stream from ECLWebRTC's SDK as output.

[^3]: iOS/Android SDK implements `Navigator.getUserMedia` internally. Also, [ECLWebRTC-ScreenShare](https://github.com/ECLWebRTC/ECLWebRTC-screenshare){:target="_blank"} is provided as a wrapper of `getUserMedia` to share a screen.
