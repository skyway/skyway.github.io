---
layout: default
title: マイグレーション
lang: ja
---

# マイグレーション

SkyWayは2018.03.31をもってサービス提供を終了します。現在、SkyWayをご利用の方は、以下の手順に沿って、ECLWebRTC Community Edition/Enterprise Editionへの移行作業をお願いします。

## 移行手順

### 1. SDKのアップデート

ECLWebRTCでは新しいSDKを利用しますので、アップデートが必要です。

尚、SDKにはAPIに一部差分があります。アップデート後は以下のドキュメントを参考にプログラムの修正をお願いします。

[SkyWay SDK 次期バージョン API 差分](https://github.com/nttcom/skyway-sdk-migration-docs)

#### JavaScript SDK

##### peer.jsをご利用の場合

- アップデート方法を説明

##### skyway.jsをご利用の場合

- アップデート方法を説明

#### Android SDK

- アップデート方法を説明

#### iOS SDK

- アップデート方法を説明

### 2. APIキーの発行と差し替え

SkyWayで利用中のAPIキーはECLWebRTCでは利用できません。

[Sing up](./singup.html)ページからECLWebRTCの会員登録を行い、APIキーの発行と差し替えをお願いします。

## Community Edition から Enterprise Editionへの移行について

Community EditionからEnterprise Editionへ移行したい場合は、APIキーの新規発行が必要となります。

Enterprise Editionのポータル画面から新たにAPIキーの発行し、差し替えをお願いします。

## マイグレーション時の注意点

### 以下のSDKの組み合わせで相互接続することは出来ません。

- SkyWay(peerjs)とECLWebRTC SDK

- SkyWay(skywayjs)とECLWebRTC SDK

- SkyWay(peerjs)とSkyWay(skywayjs)

### SDKとAPIキーの組み合わせについて

- ECLWebRTCのSDKはECLWebRTC Community Edition / Enterprise Editionで発行したAPIキーのみ利用可能です

- SkyWay(peerjs/skywayjs)ではSkyWayで発行したAPIキーのみ利用可能です




