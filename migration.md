---
layout: default
title: マイグレーション
lang: ja
---

# マイグレーション

SkyWayは2018.03.31をもってサービス提供を終了します。

現在、SkyWayをご利用の方は、機能やサービスがより充実した（ 参考: [SkyWayとECLWebRTCの機能比較](https://support.skyway.io/hc/ja){:target="_blank"} ) ECLWebRTC Community Edition/Enterprise Editionへのマイグレーション作業をお願いします。

このページではマイグレーションに必要な情報を提供します。

## マイグレーション手順

以下の手順に沿ってマイグレーションを実施して下さい。

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

## マイグレーション時の注意点

- SkyWayのSDKとECLWebRTCのSDKは相互接続できません

- ECLWebRTCのSDKはECLWebRTC Community Edition / Enterprise Editionで発行したAPIキーのみ利用可能です

## Community EditionからEnterprise Editionへ切り替えについて

### APIキーの新規発行が必要

Community EditionからEnterprise Editionへ切り替える場合は、APIキーの新規発行が必要となります。

Enterprise Editionのポータル画面から新たにAPIキーの発行し、差し替えをお願いします。

### 切り替えのタイミング

Community Editionには利用制限が有ります（詳しくは[参考]）。利用制限に達しそうなお客さまには個別にご連絡いたします。

サポート、SLAが必要ない場合は、まずはCommunity Editionへのマイグレーションをおすすめいたします。

※SkyWayとECLWebRTCの機能比較はHTMLコメントで↓
<!--
||SkyWay|ECLWebRTC Community Edition|ECLWebRTC Enterprise Edition|
|提供機能|シグナリング<BR>TURN<BR>SFU|シグナリング<BR>TURN<BR>SFU|シグナリング<BR>TURN<BR>SFU|
|提供SDK|JavaScript<BR>iOS<BR>Android<BR>IoT|JavScript<BR>iOS<BR>Android<BR>IoT|JavScript<BR>iOS<BR>Android<BR>IoT|
|APIキー認証機能|無し|有り|有り|
|Room管理機能|JacaScript SDKのみ提供<BR>Multiparty Libraryを提供|有り|有り|
|IE/Safari Plugin提供|有り|無し（Safari/Edgeへの正式対応を予定）|無し（Safari/Edgeへの正式対応を予定）|
|画面共有|ScreenShare Libraryを提供|JavaScript SDKに同梱|JavaScript SDKに同梱|
|利用制限|無し|月間のシグナリング回数、TURN/SFU利用回数に制限有り|有り|
|SLA|無し|無し|有り|
|サポート|コミュニティベース|コミュニティベース|コミュニティベース<BR>チケットサポート|
-->
