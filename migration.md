---
layout: default
title: マイグレーション
lang: ja
---

# マイグレーション


<div class="row d-flex justify-content-center align-items-center">
  <div class="col-5">
    <div class="card">
      <div class="card-block">
        <h3 class="card-title"><span>SkyWayを</span><wbr><span>ご利用中の方</span></h3>
        <ol>
          <li>ECLWebRTC新規登録</li>
          <li>APIKey発行</li>
          <li>SDK差し替え</li>
        </ol>
        <a href="#toCommunity" class="btn btn-outline-primary">Community Editionへ移行</a>
      </div>
    </div>
  </div>
  <div class="col-5">
    <div class="card">
      <div class="card-block">
        <h3 class="card-title"><span>Enterprise Edition</span><wbr><span>への移行を希望される方</span></h3>
        <ol>
          <li>Enteprise Cloud申込</li>
          <li>Community Editionからの移行</li>
        </ol>
        <a href="#toEnterprise" class="btn btn-outline-primary">Enteprise Editionへ移行</a>
      </div>
    </div>
  </div>
</div>

<h2 id="toCommunity">SkyWayからECLWebRTCへの移行について</h2>
SkyWayは2018年3月31日をもって提供を終了します。<br>
SkyWayをご利用の方は、SkyWayを発展させた後継サービス「ECLWebRTC」への移行をお願いします。<br>
（参考: [SkyWayとECLWebRTCの機能比較](https://support.skyway.io/hc/ja){:target="_blank"})

以下の手順に沿ってマイグレーションを実施して下さい。

### 1. ECLWebRTC新規登録

[新規登録ページ](./singup.html)よりECLWebRTCの新規登録をお願いします。<br>
Community Editionは無料でご利用いただけます。詳細は[料金ページ]()をご確認ください。<br>
[Enterprise Editionにお申込み]()いただいた場合も、以下の手順は同じです。

<a href="#" class="btn btn-primary">無料で新規登録</a>

### 2. APIKey発行

SkyWayで利用中のAPIキーはECLWebRTCではご利用いただけません。<br>
ダッシュボードにて新規APIKeyを発行し、次の[3. SDKの差し替え]()時に、APIKeyの変更をお願いします。

### 3. SDK差し替え

ECLWebRTCでは新しいSDKを提供しています。<br>
SDKのAPIに一部差分があるため、以下のドキュメントを参考にプログラムの修正をお願いします。

[SDK差分と移行方法について](https://github.com/nttcom/skyway-sdk-migration-docs)

<div class="alert alert-info" role="alert">
  SkyWayのSDKとECLWebRTCのSDKは相互接続できません<br>
  ECLWebRTCのSDKは、ECLWebRTC Community EditionまたはEnterprise Editionで発行したAPIKeyのみご利用いただけます。
</div>

<h2 id="toEnterprise">Community EditionからEnterprise Editionへの切り替えについて</h2>

### 1. Enterprise Editionへの申込

[新規登録ページ](./singup.html)よりEnterprise Editionへの新規申込をお願いします。

### 2. Community Editionからの移行

Community EditionからEnterprise EditionへAPIKeyを引継ぐ機能は、近日中に提供予定です。<br>
それまでは、Enterprise Editionのダッシュボード画面にて、APIKeyを新規発行し、差し替えをお願いします。

#### Enterprise editionへの移行タイミングについて

Community Editionのダッシュボードにて月間の利用量を確認できる機能を、近日中に提供予定です。<br>
SkyWayをご利用いただいていた方の中で、利用制限に達している方には個別連絡を実施しております。
サポート、SLAが必要ない場合は、まずはCommunity Editionの利用をご検討ください。

