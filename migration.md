---
layout: default
title: マイグレーション
lang: ja
---

# マイグレーション



<div class="row d-flex justify-content-center align-items-center">
  <div class="col-lg-6 col-xl-5">
    <div class="card">
      <div class="card-block">
        <h3 class="card-title"><span>SkyWayを</span><wbr><span>ご利用中の方</span></h3>
        <p class="card-text">SkyWayは2018年3月31日をもって提供を終了します。SkyWayからECLWebRTCへの移行方法をご紹介します</p>
        <a href="#toECLWebRTC" class="btn btn-primary" data-toggle="collapse" href="#toECLWebRTC" aria-expanded="false" aria-controls="collapseExample">移行方法を確認</a>
      </div>
    </div>
  </div>
  <div class="col-lg-6 col-xl-5">
    <div class="card">
      <div class="card-block">
        <h3 class="card-title"><span>ECLWebRTCを</span><wbr><span>ご利用中の方</span></h3>
        <p class="card-text">Community EditionからEnterprise Editionへの移行方法をご紹介します</p>
        <a href="#toEnterprise" class="btn btn-outline-primary" data-toggle="collapse" data-target="#toEnterprise" aria-expanded="false" aria-controls="collapseExample">移行方法を確認</a>
      </div>
    </div>
  </div>
</div>

<p>
  SkyWayは2018年3月31日をもって提供を終了します。<br>
  SkyWayをご利用の方は、SkyWayを発展させた後継サービス「ECLWebRTC」への移行をお願いします。<br>
  （参考: <a href="https://support.skyway.io/hc/ja" target="_target">SkyWayとECLWebRTCの機能比較)</a>
</p>

<div class="collapse" id="toECLWebRTC">
  <h2>SkyWayからECLWebRTCへの移行について</h2>

  <ol>
    <li>ECLWebRTC新規登録</li>
    <li>APIKey発行</li>
    <li>SDK差し替え</li>
  </ol>

  <p>以下の手順に沿ってマイグレーションを実施して下さい。</p>

  <h3>1. ECLWebRTC新規登録</h3>
  <p>
    <a href="./signup.html">新規登録ページ</a>よりECLWebRTCの新規登録をお願いします。<br>
    Community Editionは無料でご利用いただけます。詳細は<a href="./singup.html">料金ページ</a>をご確認ください。<br>
    <a href="./contactus.html">Enterprise Editionにお申込み</a>いただいた場合も、以下の手順は同じです。
  </p>
  <a href="./signup.html" class="btn btn-primary">無料で新規登録</a>

  <h3>2. APIKey発行</h3>
  <p>
    SkyWayで利用中のAPIキーはECLWebRTCではご利用いただけません。<br>
    ダッシュボードにて新規APIKeyを発行し、次の<a href="#3-SDK差し替え">3. SDKの差し替え</a>時に、APIKeyの変更をお願いします。
  </p>

  <h3 id="3-SDK差し替え">3. SDK差し替え</h3>
  <p>
    ECLWebRTCでは新しいSDKを提供しています。<br>
    SDKのAPIに一部差分があるため、以下のドキュメントを参考にプログラムの修正をお願いします。
  </p>

  <a href="https://github.com/nttcom/skyway-sdk-migration-docs" class="btn btn-primary">SDK差分と移行方法について</a>

  <div class="alert alert-info" role="alert">
    <span>
      SkyWayのSDKとECLWebRTCのSDKは相互接続できません<br>
      ECLWebRTCのSDKは、ECLWebRTC Community EditionまたはEnterprise Editionで発行したAPIKeyのみご利用いただけます。
    </span>
  </div>
</div>
<div class="collapse" id="toEnterprise">
  <h2>Community EditionからEnterprise Editionへの切り替えについて</h2>

  <ol>
    <li>Enteprise Cloud申込</li>
    <li>Community Editionからの移行</li>
  </ol>

  <h3>1. Enterprise Editionへの申込</h3>
  <p><a href="./singup.html">新規登録ページ</a>よりEnterprise Editionへの新規申込をお願いします。</p>
  <a href="#" class="btn btn-primary">Enterprise Edition申込</a>

  <h3>2. Community Editionからの移行</h3>
  <p>
    Community EditionからEnterprise EditionへAPIKeyを引継ぐ機能は、近日中に提供予定です。<br>
    提供開始まではEnterprise Editionのダッシュボード画面にてAPIKeyを新規発行し、差し替えをお願いします。
  </p>

  <h4>Enterprise editionへの移行タイミングについて</h4>
  <p>
    Community Editionのダッシュボードにて月間の利用量を確認できる機能を、近日中に提供予定です。<br>
    SkyWayをご利用いただいていた方の中で、利用制限に達している方には個別連絡を実施しております。
    サポート、SLAが必要ない場合は、まずはCommunity Editionの利用をご検討ください。
  </p>
</div>
