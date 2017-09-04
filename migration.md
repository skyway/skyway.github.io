---
layout: default
title: マイグレーション
lang: ja
breadcrumb: [index.md, developer.md]
---

# マイグレーション

<div id="accordion" role="tablist">
  <!-- controller -->
  <div class="row card-row">
    <div class="col-lg-6">
      <div class="card">
        <div class="card-body" role="tab" id="headingOne">
          <h3 class="card-title"><span>新SDKへの</span><wbr><span>移行方法</span></h3>
          <p class="card-text">2017年9月7日に提供を開始した新バージョンのSkyWay SDKへの移行方法をご紹介します。（参考: <a href="https://github.com/nttcom/skyway-sdk-migration-docs" target="_blank">新旧SDKの機能差分と移行方法について)</a></p>
            <a class="btn btn-outline-primary collapsed" data-toggle="collapse" href="#toECLWebRTC" aria-expanded="true" aria-controls="toECLWebRTC">
              移行方法を確認
            </a>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card">
        <div class="card-body" role="tab" id="headingTwo">
          <h3 class="card-title"><span>Enterprise Edition</span><wbr><span>への</span><wbr><span>移行方法</span></h3>
          <p class="card-text">Community EditionからEnterprise Editionへの移行方法をご紹介します。</p>
          <a class="btn btn-outline-primary collapsed" data-toggle="collapse" href="#toEnterprise" aria-expanded="false" aria-controls="toEnterprise">
            移行方法を確認
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- content -->
  <div class="card card-borderless">
    <div id="toECLWebRTC" class="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
        <h2>新SDKヘの移行について</h2>
        <p>トライアル版のSkyWayは2018年3月31日をもって提供を終了します。最新のSDKに移行し、Community Editionの利用をお願いします（参考: <a href="https://support.webrtc.ecl.ntt.com/hc/ja" target="_blank">新旧SkyWayの機能比較)</a></p>
        <h3>1. Community Edition新規登録</h3>
        <p>
          Community Editionヘの<a href="./signup.html">新規登録</a>をお願いします。<br>
          Community Editionは無料でご利用いただけます。詳細は<a href="./pricing.html">料金ページ</a>をご確認ください。<br>
          <a href="./contactus.html">Enterprise Editionに申し込み</a>いただいた場合も、以下の手順は同じです。
        </p>
        <a href="./signup.html" class="btn btn-primary">無料で新規登録</a>
        <h3>2. APIKey発行</h3>
        <p>
          トライアル版でご利用中のAPIキーは最新のSDKではご利用いただけません。<br>
          ダッシュボードにて新規APIKeyを発行し、次の<a href="#3-SDK差し替え">3. SDKの差し替え</a>を参考に、APIKeyの差し替えをお願いします。
        </p>
        <h3 id="3-SDK差し替え">3. SDK差し替え</h3>
        <p>
          SDKのAPIに一部差分があるため、以下のドキュメントを参考にプログラムの修正をお願いします。
        </p>
        <p><a href="https://github.com/nttcom/skyway-sdk-migration-docs" target="_blank" class="btn btn-primary">SDK差分と移行方法について</a></p>
        <div class="alert alert-info" role="alert">
            トライアル版のSDKとは相互接続できません<br>
            最新のSDKは、SkyWay Community EditionまたはEnterprise Editionで発行したAPIKeyのみご利用いただけます。
        </div>
      </div>
    </div>
  </div>
  <div class="card card-borderless">
    <div id="toEnterprise" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
        <h2>Community EditionからEnterprise Editionへの切り替えについて</h2>
        <h3>1. Enterprise Editionへの申し込み</h3>
        <p><a href="./contactus.html">新規登録ページ</a>よりEnterprise Editionへの申し込みをお願いします。</p>
        <a href="./contactus.html" class="btn btn-primary">Enterprise Edition申し込み</a>
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
    </div>
  </div>
</div>
