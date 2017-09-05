---
layout: default
title: 料金
lang: ja
main_visual:
  main_copy: <span>あなたの</span><wbr><span>イノベーションを</span><wbr><span>始めよう</span>
  sub_copy: <span>SkyWayは、</span><wbr><span>無料で</span><wbr><span>利用できる</span><wbr>Community Editionを</span><wbr><span>用意して</span><wbr><span>います</span>
  links: <p><a class="btn btn-light" href="signup.html" role="button">無料で新規登録</a></p>
  copy_position: ["after"]
  image_file_name: 
  font_color: "#fff"
  background_color: rgb(0, 67, 134)
breadcrumb: [index.md]
---

## 料金

オンラインでの新規登録で、すぐに利用可能です。<br>
世界中の開発者とともにあなたのイノベーションを始めましょう。<br>
Community Editionは一切、料金がかかりません。

### 基本料金

<p>
  初期費用なしで利用できます。<br>
  <small class="text-muted">STUNの利用や通話の回数、room機能利用回数に制限はありません。</small>
</p>

<table class="table table-sm pricing-table">
  <thead>
    <tr class="m-0">
      <th class="w-20"></th>
      <th class="w-40 text-right">Community Edition</th>
      <th class="w-40 text-right">Enterprise Edition</th>
    </tr>
  </thead>
    <tbody align="right">
      <tr>
        <th scope="row">基本料金</th>
        <td class="td-badge"><span class="badge badge-community">community</span> 初期費用、月額費用とも¥0</td>
        <td class="td-badge"><span class="badge badge-enterprise">enterprise</span> 初期費用¥0、月額費用¥100,000</td>
      </tr>
      <tr>
        <th scope="row">サポート</th>
        <td class="td-badge"><span class="badge badge-community">community</span> FAQ、Technical Forum</td>
        <td class="td-badge"><span class="badge badge-enterprise">enterprise</span> チケット（24時間365日）</td>
      </tr>
      <tr>
        <th scope="row">SLA</th>
        <td class="td-badge"><span class="badge badge-community">community</span> なし</td>
        <td class="td-badge"><span class="badge badge-enterprise">enterprise</span> 稼働率99.99%保証</td>
    </tr>
  </tbody>
</table>

### 接続回数

<p>
  シグナリングサーバとの月間接続回数に応じた料金が発生します。<br>
  <small class="text-muted">1回の接続あたりの接続時間やcallする回数に制限はありません。<span class="d-none d-md-inline"><br></span>接続回数は、全APIKeyの合計ではなく、APIKey単位でカウントし、制限や料金の発生もAPIKey毎となります。</small>
</p>

<table class="table table-sm pricing-table">
<thead>
  <tr>
    <th class="d-none d-md-table-cell"></th>
    <th>接続回数</th>
    <th class="text-right">Community Edition</th>
    <th class="text-right">Enterprise Edition</th>
  </tr>
</thead>
<tbody align="right">
  <tr>
    <th scope="row" class="hidden-sm">シグナリング<span class="badge badge-pill badge-info" data-toggle="tooltip" data-placement="top" title="シグナリング: 端末間で通信を行う際に、シグナリングサーバを介してお互いのIPアドレスやコーデックなど情報の交換を行います。">i</span></th>
    <td class="td-header" align="left">
      〜500,000<span class="d-sm-none">回/月</span>
    </td>
    <td class="td-badge"><span class="badge badge-community">community</span> ¥0</td>
    <td class="td-badge"><span class="badge badge-enterprise">enterprise</span> ¥0</td>
  </tr>
  <tr>
    <th scope="row" class="d-none d-md-table-cell"></th>
    <td class="td-header" align="left">
      〜1,000,000<span class="d-sm-none">回/月</span>
    </td>
    <td class="td-badge"><span class="badge badge-community">community</span> 制限</td>
    <td class="td-badge"><span class="badge badge-enterprise">enterprise</span> ¥0</td>
  </tr>
  <tr>
    <th scope="row" class="d-none d-md-table-cell"></th>
    <td class="td-header" align="left">
      1,000,001〜<span class="d-sm-none">回/月</span>
    </td>
    <td></td>
    <td class="td-badge"><span class="badge badge-enterprise">enterprise</span> ¥100,000</td>
  </tr>
</tbody>
</table>


### サーバ通信料

<p>
  TURNサーバおよびSFUサーバとの月間通信量に応じた料金が発生します。<br>
  <small class="text-muted">
    1回の接続あたりの接続時間やcall回数に制限はありません。<span class="d-none d-md-inline"><br></span>
    サーバ通信量は、全APIKeyの合計ではなく、APIKey単位、TURN/SFU種別でカウントし、制限や料金の発生もAPIKey毎となります。また、サーバへのIN/OUTの通信の合計です。
  </small>
</p>

<table class="table table-sm pricing-table">
<thead>
  <tr>
    <th class="d-none d-md-table-cell"></th>
    <th>通信量</th>
    <th class="text-right">Community Edition</th>
    <th class="text-right">Enterprise Edition</th>
  </tr>
</thead>
<tbody align="right">
  <tr>
    <!-- PC表示用 -->
    <th scope="row" class="d-none d-md-table-cell">TURN<span class="badge badge-pill badge-info" data-toggle="tooltip" data-placement="top" title="TURN: P2Pでの通信が確立できない環境で、TURNサーバを中継することによりNAT越えを実現します。">i</span></th>
    <!-- スマホ表示用 -->
    <th scope="row" class="d-sm-none">TURN / SFU</th> 
    <td class="td-header" align="left">〜500GB</td>
    <td class="td-badge"><span class="badge badge-community">community</span> ¥0</td>
    <td class="td-badge"><span class="badge badge-enterprise">enterprise</span> ¥40/GB</td>
  </tr>
  <tr>
    <th scope="row" class="d-none d-md-table-cell"></th>
    <td class="td-header" align="left">501GB〜</td>
    <td class="td-badge"><span class="badge badge-community">community</span> 制限</td>
    <td class="td-badge"><span class="badge badge-enterprise">enterprise</span> ¥40/GB</td>
  </tr>
  <tr class="hidden-xs hidden-sm">
    <th scope="row">SFU<span class="badge badge-pill badge-info" data-toggle="tooltip" data-placement="top" title="SFU: 映像の送信をSFUサーバが代行することで、端末のCPUやネットワーク負荷を抑え、多人数での通話や配信を実現します。">i</span></th>
    <td align="left">〜500GB</td>
    <td>¥0</td>
    <td>¥40/GB</td>
  </tr>
  <tr class="hidden-xs hidden-sm">
    <th scope="row"></th>
    <td align="left">501GB〜</td>
    <td>制限</td>
    <td>¥40/GB</td>
  </tr>
</tbody>
</table>


#### 利用モデル
各ケースでのCommunity EditionのTURN利用制限までの通話時間とEnterpsise Editionの料金の目安です。

<div id="accordion" role="tablist" aria-multiselectable="true">
  <div class="card">
    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <div class="card-header" role="tab" id="headingOne">
        <h5 class="mb-0">
          Community Edition
          <i class="fa fa-chevron-up pull-right" aria-hidden="true"></i>
        </h5>
      </div>
    </a>
    <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
      <div class="card-body">
        TURN利用上限までにどの程度通話できるかの目安です。<br>
        <small class="text-muted">TURNの利用制限がかかっても、P2Pでの通信は可能です。<br>TURNの利用率はユーザーによって大きく変わり、一般的に法人20%、個人10%、スマートフォン1%です。<br>発信者が1人の場合の時間です。</small>
        <table class="pricing-sample-table table table-sm">
        <thead>
          <tr>
            <th class="w-25"></th>
            <th class="w-25 text-right"><span>法人向け</span><wbr><span class="d-none d-md-inline">Webサービス</span></th>
            <th class="w-25 text-right"><span>個人向け</span><wbr><span class="d-none d-md-inline">Webサービス</span></th>
            <th class="w-25 text-right"><span class="d-none d-md-inline">スマートフォン向け</span><wbr><span class="d-none d-md-inline">アプリ</span><span class="d-md-none">スマホアプリ</span></th>
          </tr>
        </thead>
        <tbody align="right">
          <tr>
            <th scope="row">1:1音声通話<br><small>40Kbps</small></th>
            <td><span>69,444</span><wbr><span><small class="text-muted">時間分</small></span><span><br>2,893</span><wbr><span><small class="text-muted">日分</small></span></td>
            <td><span>138,888</span><wbr><span><small class="text-muted">時間分</small></span><span><br>5,787</span><wbr><span><small class="text-muted">日分</small></span></td>
            <td><span>1,388,888</span><wbr><span><small class="text-muted">時間分</small></span><span><br>57,870</span><wbr><span><small class="text-muted">日分</small></span></td>
          </tr>
          <tr>
            <th scope="row">1:1ビデオ通話(SD)<br><small>500Kbps</small></th>
            <td><span>5,555</span><wbr><span><small class="text-muted">時間分</small></span><span><br>231</span><wbr><span><small class="text-muted">日分</small></span></td>
            <td><span>11,111</span><wbr><span><small class="text-muted">時間分</small></span><span><br>462</span><wbr><span><small class="text-muted">日分</small></span></td>
            <td><span>111,111</span><wbr><span><small class="text-muted">時間分</small></span><span><br>4,629</span><wbr><span><small class="text-muted">日分</small></span></td>
          </tr>
          <tr>
            <th scope="row">1:1ビデオ通話(HD)<br><small>1.5Mbps</small></th>
            <td><span>1,851</span><wbr><span><small class="text-muted">時間分</small></span><span><br>77.1</span><wbr><span><small class="text-muted">日分</small></span></td>
            <td><span>3,703</span><wbr><span><small class="text-muted">時間分</small></span><span><br>154</span><wbr><span><small class="text-muted">日分</small></span></td>
            <td><span>37,037</span><wbr><span><small class="text-muted">時間分</small></span><span><br>1,543</span><wbr><span><small class="text-muted">日分</small></span></td>
          </tr>
          <tr>
            <th scope="row">4人ビデオ会議(SD)<br><small>1.5Mbps</small></th>
            <td><span>1,851</span><wbr><span><small class="text-muted">時間分</small></span><span><br>77.1</span><wbr><span><small class="text-muted">日分</small></span></td>
            <td><span>3,703</span><wbr><span><small class="text-muted">時間分</small></span><span><br>154</span><wbr><span><small class="text-muted">日分</small></span></td>
            <td><span>37,037</span><wbr><span><small class="text-muted">時間分</small></span><span><br>1,543</span><wbr><span><small class="text-muted">日分</small></span></td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="card">
    <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <div class="card-header" role="tab" id="headingTwo">
        <h5 class="mb-0">
          Enterprise Edition
          <i class="fa fa-chevron-down pull-right" aria-hidden="true"></i>
        </h5>
      </div>
    </a>
    <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="card-body">
        TURN利用時の料金目安です。<br>
        <small class="text-muted">TURNの利用率はユーザーによって大きく変わり、一般的に法人20%、個人10%、スマートフォン1%です。<br>発信者が1人の場合の料金です。</small>
        <table class="pricing-sample-table table table-sm">
        <thead>
          <tr>
            <th class="w-25"></th>
            <th class="w-25 text-right"><span>法人向け</span><wbr><span class="d-none d-md-inline">Webサービス</span></th>
            <th class="w-25 text-right"><span>個人向け</span><wbr><span class="d-none d-md-inline">Webサービス</span></th>
            <th class="w-25 text-right"><span class="d-none d-md-inline">スマートフォン向け</span><wbr><span class="d-none d-md-inline">アプリ</span><span class="d-md-none">スマホアプリ</span></th>
          </tr>
        </thead>
        <tbody align="right">
          <tr>
            <th scope="row">1:1音声通話<br><small>40Kbps</small></th>
            <td><span>¥0.0096</span><wbr><span><small class="text-muted">/分</small></span><span><br>¥0.576</span><wbr><span><small class="text-muted">/時間</small></span></td>
            <td><span>¥0.0048</span><wbr><span><small class="text-muted">/分</small></span><span><br>¥0.288</span><wbr><span><small class="text-muted">/時間</small></span></td>
            <td><span>¥0.0005</span><wbr><span><small class="text-muted">/分</small></span><span><br>¥0.0288</span><wbr><span><small class="text-muted">/時間</small></span></td>
          </tr>
          <tr>
            <th scope="row">1:1ビデオ通話(SD)<br><small>500Kbps</small></th>
            <td><span>¥0.12</span><wbr><span><small class="text-muted">/分</small></span><span><br>¥7.2</span><wbr><span><small class="text-muted">/時間</small></span></td>
            <td><span>¥0.06</span><wbr><span><small class="text-muted">/分</small></span><span><br>¥3.6</span><wbr><span><small class="text-muted">/時間</small></span></td>
            <td><span>¥0.006</span><wbr><span><small class="text-muted">/分</small></span><span><br>¥0.36</span><wbr><span><small class="text-muted">/時間</small></span></td>
          </tr>
          <tr>
            <th scope="row">1:1ビデオ通話(HD)<br><small>1.5Mbps</small></th>
            <td><span>¥0.36</span><wbr><span><small class="text-muted">/分</small></span><span><br>¥21.6</span><wbr><span><small class="text-muted">/時間</small></span></td>
            <td><span>¥0.18</span><wbr><span><small class="text-muted">/分</small></span><span><br>¥10.8</span><wbr><span><small class="text-muted">/時間</small></span></td>
            <td><span>¥0.018</span><wbr><span><small class="text-muted">/分</small></span><span><br>¥1.08</span><wbr><span><small class="text-muted">/時間</small></span></td>
          </tr>
          <tr>
            <th scope="row">4人ビデオ会議(SD)<br><small>1.5Mbps</small></th>
            <td><span>¥0.36</span><wbr><span><small class="text-muted">分</small></span><span><br>¥21.6</span><wbr><span><small class="text-muted">/時間</small></span></td>
            <td><span>¥0.18</span><wbr><span><small class="text-muted">分</small></span><span><br>¥10.8</span><wbr><span><small class="text-muted">/時間</small></span></td>
            <td><span>¥0.018</span><wbr><span><small class="text-muted">分</small></span><span><br>¥1.08</span><wbr><span><small class="text-muted">/時間</small></span></td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

## 料金に関して

より詳細に料金を見積りたい方は[料金表及び料金シミュレーター](https://ecl.ntt.com/pricing/)をご利用ください

## あなたのイノベーションを始めよう

{% include signup-cards.html %}

<script>
$(function() {
  $('#collapseOne, #collapseTwo, #collapseThree').on({
    // 折り畳み開く処理
    'show.bs.collapse': function() {
      $('a[href="#' + this.id + '"] i.fa-chevron-down')
        .removeClass('fa-chevron-down')
        .addClass('fa-chevron-up');
    },
    // 折り畳み閉じる処理
    'hide.bs.collapse': function() {
      $('a[href="#' + this.id + '"] i.fa-chevron-up')
        .removeClass('fa-chevron-up')
        .addClass('fa-chevron-down');
    }
  });
});
</script>
