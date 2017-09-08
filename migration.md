---
layout: default
title: マイグレーション
lang: ja
breadcrumb: [index.md, developer.md]
---

# マイグレーション

<div id="accordion" role="tablist">
  <!-- controller -->
  <div class="row row-for-slim-card">
    <div class="col-lg-6">
      <div class="card">
        <div class="card-body" role="tab" id="headingOne">
          <h3 class="card-title"><span>新SDKへの</span><wbr><span>移行方法</span></h3>
          <p class="card-text">
            2017年9月7日に提供を開始した、新しいSDKへの移行方法をご説明します。
            （参考: <a href="https://github.com/nttcom/skyway-sdk-migration-docs" target="_blank">新旧SDKの機能差分</a>)
          </p>
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
        <p>
          トライアル提供していた旧SkyWayは2018年3月に提供を終了します。
          2017年9月6日以前にSkyWayに登録された方は、Community Editionへの新規登録と、新SDKへの移行をお願いします。
          （参考: <a href="https://support.skyway.io/hc/ja/articles/115012186787" target="_blank">新旧SkyWayの機能比較)</a><br>
          <small class="text-muted"><a href="#moverio">EPSON MOVERIO向けアプリを開発される方へ</a></small>
        </p>
        <h3>1. Community Edition新規登録</h3>
        <p>
          Community Editionヘの<a href="./signup.html">新規登録</a>をお願いします。
          Community Editionは無料でご利用いただけます。詳細は<a href="./pricing.html">料金ページ</a>をご確認ください。<br>
          <a href="./contactus.html">Enterprise Editionに申し込み</a>いただく場合も、以下の手順は同じです。
        </p>
        <p>
          <a href="./signup.html" class="btn btn-outline-primary">無料で新規登録</a>
        </p>
        <h3>2. APIキー発行</h3>
        <p>
          旧SkyWayのAPIキーは、新SDKで利用できません。
          以下の手順を参考にして、ダッシュボードで新しいAPIキーを発行してください。
        </p>
        <ul>
          <li><a href="./js-tutorial.html#skywayのapiキー発行">JavaScript SDK チュートリアル / SkyWayのAPIキー発行</a></li>
          <li><a href="./ios-tutorial.html#skywayのapiキー発行">iOS SDK チュートリアル / SkyWayのAPIキー発行</a></li>
          <li><a href="./android-tutorial.html#skywayのapiキー発行">Android SDK チュートリアル / SkyWayのAPIキー発行</a></li>
        </ul>
        <h3 id="3-SDK差し替え">3. SDKの差し替え</h3>
        <p>
          新しいSDKに差し替えてください。ダウンロード先は以下の通りです。
        </p>
        <ul>
          <li><a href="./js-sdk.html#sdkdownload">JavaScript SDK</a></li>
          <li><a href="./ios-sdk.html#sdkdownload">iOS SDK</a></li>
          <li><a href="./android-sdk.html#sdkdownload">Android SDK</a></li>
        </ul>
        <h3 id="4-APIキー差し替え">4. APIキーの差し替えとプログラムの修正</h3>
        <p>
          以下の手順を参考にして、APIキーを先ほど発行した新しいものに書き換えてください。
        </p>
        <ul>
          <li><a href="./js-tutorial.html#peerオブジェクトの作成">JavaScript SDK チュートリアル / Peerオブジェクトの作成</a></li>
          <li><a href="./ios-tutorial.html#宣言">iOS SDK チュートリアル / 宣言</a></li>
          <li><a href="./android-tutorial.html#宣言">Android SDK チュートリアル / 宣言</a></li>
        </ul>
        <p>
          SDKの仕様が一部変更になったので、以下のドキュメントを参考にして、プログラムを修正してください。<br>
          リンク先にも書かれていますが、旧SDKと新SDKの間で相互接続はできません。ご注意ください。
        </p>
        <p>
          <a href="https://github.com/nttcom/skyway-sdk-migration-docs" target="_blank" class="btn btn-outline-primary">新旧SDKの機能差分</a>
        </p>
        <h3 id="moverio">EPSON MOVERIO向けアプリを開発される方へ</h3>
        <p>
          新しいSDKは、BT-300/350のみに対応しています。
          以前、<a href="http://www.epson.jp/products/smartglasses/partner/applist/" target="_blank">MOVERIO「パートナープログラム」</a>で配布していた専用SDKは不要です。
        </p>
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
          Community EditionからEnterprise EditionへAPIキーを引継ぐ機能は、近日中に提供予定です。<br>
          提供開始まではEnterprise Editionのダッシュボード画面にてAPIキーを新規発行し、差し替えをお願いします。
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
