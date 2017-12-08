---
layout: rightnav
title: ECLWebRTC Communication Model
lang: en
breadcrumb: [en/index.md, en/developer.md]
---

- TOC
{:toc}

# ECLWebRTC Communication Model

This article describes basic concept of ECLWebRTC. ECLWebRTC provides several SDKs. The names of functions described in this article are based on the JavaScript SDK, but the function names are very similar[^1] in the other SDKs. Everything in this article applies to all SDKs.

[^1]: Subtle differences among parameters and class names.

## Peer

When developing an service, you must first create an instance of `Peer`. `Peer` is an agent that manages the connection to the signaling server and to other clients. `Peer` also sends/receives the p2p data and media traffic to/from other `Peer`s.

### Peer ID

When creating a new Peer(new Peer()), the peer connects to the ECLWebRTC's signaling server. When the connection is established, you can obtain the Peer ID which was generated randomly on the ECLWebRTC server and will be notified by Peer.on('open') event. The Peer ID is used to identify the peer. If the connection to ECLWebRTC's server fails, the Peer.on('error') event will fire.

If you want to specify the Peer ID instead of being assigned a randomly generated one, you can pass a string as the first argument of new Peer('your own Peer ID').

## 2 Communication Models

There are 2 models for managing connections between clients; one is based on Telephone model, and the other one is based on Room model.

### 1. Telephone Model

Like chatting via cellphone, the telephone model provides 1:1 communication. When initiating a connection to another Peer, the destination Peer ID must be obtained in some way.

#### Media Channel (Audio and Video)

When calling another Peer using (`Peer.call()`), you need to specify their PeerID like you would a phone number. The  `Peer.on('call')` event will fire when there is an incoming call. To accept the call, call the `answer()` function. The connection will be established and the media streams can be acquired with the `MediaConnection.on('stream')` event.

#### Data Channel

If you want to send and receive data, `Peer.connect()` can be used to establish a Data Channel. After connection established, the `Peer.on('connection')` event will be fired.

Unlike Media Channel, `answer()` does not need to be called explicitly. The connection is established automatically.

### 2. Room Model

Like chatting in the same room, Peers talks with the other Peers[^2] in Room model.

First, the Peer specifies the room name and join the room(peer.joinRoom()). Then, if the Peer receives audio and video media stream, the `Room.on('stream')` will be fired. `room.close()` can be used if the Peer wants to leave the room. Note: `room.close()` doesn't destroy the room itself; If other Peers are joining the room, those Peers don't leave and their media connections continue. If all of the Peers in the room leave, the room is destroyed.

Each API key has each namespace i.e. if there are 2 API keys (A and B), and if the same room name is created on both API keys, the 2 rooms are treated as separate rooms. The peers in the room of API key A and B can't connect to each other, if they are using different API keys.

You can choose `Full mesh` room and `SFU` room when creating a Room. See details [here](https://webrtc.ecl.ntt.com/en/sfu.html).

[^2]: Peers can not only send and receive media stream, but only receive media stream.

## Media Stream

With ECLWebRTC, if the Peer sends and receives audio and video, [MediaStream](https://www.w3.org/TR/mediacapture-streams/#mediastream){:target="_blank"} is used. Methods of generating or modifying MediaStreams[^3] isn't provided by ECLWebRTC. You can only pass the MediaStream to ECLWebRTC's SDK as input and get the MediaStream from ECLWebRTC's SDK as output.

[^3]: iOS/Android SDK implements `Navigator.getUserMedia` internally. Also, [ECLWebRTC-ScreenShare](https://github.com/ECLWebRTC/ECLWebRTC-screenshare){:target="_blank"} is provided as a wrapper of `getUserMedia` to share a screen.
[^3]: iOS/Android SDKs implement a function equivalent to JavaScript's `Navigator.getUserMedia`. Also, [ECLWebRTC-ScreenShare](https://github.com/ECLWebRTC/ECLWebRTC-screenshare){:target="_blank"} provides a wrapper of getUserMedia to share what's on your screen.
