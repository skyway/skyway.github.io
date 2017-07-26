---
layout: default
title: 料金
lang: ja
---

<div class="jumbotron">
  <h1 class="display-4">あなたのイノベーションを始めよう</h1>
  <p class="lead">ECLWebRTCは、無料で利用できるCommunity Editionを用意しています。</p>
  <p class="lead">
	<a class="btn btn-primary btn-lg" href="#" role="button">無料で新規登録</a>
  </p>
</div>


## 料金

オンラインでの新規登録で、すぐに利用可能です。  
世界中の開発者とともにあなたのイノベーションを始めましょう。  
Community Editionは一切、料金がかかりません。

### 基本料金

初期費用なしで利用できます。  

<small class="text-muted">STUNの利用や通話の回数、room機能利用回数に制限はありません。</small>

<table class="table table-sm">
  <thead>
    <tr>
      <th></th>
      <th>Community Edition</th>
      <th>Enterprise Edition</th>
    </tr>
  </thead>
    <tbody align="right">
      <tr>
        <th scope="row">基本料金</th>
        <td>初期費用、月額費用とも¥0</td>
        <td>初期費用¥0、月額費用¥100,000</td>
      </tr>
      <tr>
        <th scope="row">サポート</th>
        <td>FAQ、Technical Forum</td>
        <td>チケット（24時間365日）</td>
      </tr>
      <tr>
        <th scope="row">SLA</th>
        <td>なし</td>
        <td>稼働率99.99%保証</td>
    </tr>
  </tbody>
</table>

### 接続回数

シグナリングサーバとの月間接続回数に応じた制限や料金が発生します。  
1回の接続あたりの接続時間やcallする回数に制限はありません。

<small class="text-muted">接続回数は、全APIKeyの合計ではなく、APIKey単位でカウントし、制限や料金の発生もAPIKey毎となります。</small>

<table class="table table-sm">
<thead>
	<tr>
		<th></th>
		<th>接続回数</th>
		<th>Community Edition</th>
		<th>Enterprise Edition</th>
	</tr>
</thead>
<tbody align="right">
	<tr>
		<th scope="row">シグナリング<span class="badge badge-pill badge-info" data-toggle="tooltip" data-placement="top" title="シグナリング: 端末間で通信を行う際に、シグナリングサーバを介してお互いのIPアドレスやコーデックなど情報の交換を行います。">i</span></th>
		<td align="left">〜500,000</td>
		<td>¥0</td>
		<td>¥0</td>
	</tr>
	<tr>
		<th scope="row"></th>
		<td align="left">500,001〜1,000,000</td>
		<td>制限</td>
		<td>¥0</td>
	</tr>
	<tr>
		<th scope="row"></th>
		<td align="left">1,000,001〜10,000,000</td>
		<td></td>
		<td>¥100,000</td>
	</tr>
	<tr>
		<th scope="row"></th>
		<td align="left">10,000,001+</td>
		<td></td>
		<td>contact us</td>
	</tr>
</tbody>
</table>


### サーバ通信料

TURNサーバ及びSFUサーバとの月間通信量に応じた制限や料金が発生します。  
1回の接続あたりの接続時間やcall回数に制限はありません。

<small class="text-muted">サーバ通信量は、全APIKeyの合計ではなく、APIKey単位でカウントし、制限や料金の発生もAPIKey毎となります。また、サーバへのIN/OUTの通信の合計です。</small>

<table class="table table-sm">
<thead>
	<tr>
		<th></th>
		<th>通信量</th>
		<th>Community Edition</th>
		<th>Enterprise Edition</th>
	</tr>
</thead>
<tbody align="right">
	<tr>
		<th scope="row">TURN<span class="badge badge-pill badge-info" data-toggle="tooltip" data-placement="top" title="TURN: Peer to Peerでの通信が確立できない環境で、TURNサーバを中継することによりNAT越えを実現します。">i</span></th>
		<td align="left">〜500GB</td>
		<td>¥0</td>
		<td>¥40/GB</td>
	</tr>
	<tr>
		<th scope="row"></th>
		<td align="left">501GB〜</td>
		<td>制限</td>
		<td>¥40/GB</td>
	</tr>
	<tr>
		<th scope="row">SFU<span class="badge badge-pill badge-info" data-toggle="tooltip" data-placement="top" title="SFU: 映像の送信をSFUサーバが代行することで、端末のCPUやネットワーク負荷を抑え、多人数での通話や配信を実現します。">i</span></th>
		<td align="left">〜500GB</td>
		<td>¥0</td>
		<td>¥40/GB</td>
	</tr>
	<tr>
		<th scope="row"></th>
		<td align="left">501GB〜</td>
		<td>制限</td>
		<td>¥40/GB</td>
	</tr>
</tbody>
</table>


#### エンドユーザ別利用モデル

TURNの利用率は、エンドユーザによって大きく変わります。  
各ケースでのCommunity EditionのTURN利用制限までの通話時間とEnterpsise Editionの料金の目安です。

<small class="text-muted">TURN利用率は、一般的に法人20%、個人10%、スマートフォン1%です。</small><br>
<small class="text-muted">TURNの利用制限がかかっても、Peer to Peerでの通信は可能です。</small>

<div id="accordion" role="tablist" aria-multiselectable="true">
  <div class="card">
    <div class="card-header" role="tab" id="headingTwo">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          法人向けサービス
        </a>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="card-block">
				<small class="text-muted"></small>
				<table class="table table-sm">
				<thead>
					<tr>
						<th></th>
						<th>Community Edition<br>通話時間<span class="badge badge-pill badge-info" data-toggle="tooltip" data-placement="top" title="送信者1人あたり">i</span></th>
						<th>Enterprise Edition<br>料金<span class="badge badge-pill badge-info" data-toggle="tooltip" data-placement="top" title="送信者1人あたり">i</span></th>
					</tr>
				</thead>
				<tbody align="right">
					<tr>
						<th scope="row">1:1 Audio Call<br><small>40Kbps</small></th>
						<td>69,444時間分<br>2,893日分</td>
						<td>¥0.0096/分<br>¥0.576/時間</td>
					</tr>
					<tr>
						<th scope="row">1:1 SD Video Call<br><small>500Kbps</small></th>
						<td>5,555時間分<br>231日分</td>
						<td>¥0.12/分<br>¥7.2/時間</td>
					</tr>
					<tr>
						<th scope="row">1:1 HD Video Call<br><small>1.5Mbps</small></th>
						<td>1,851時間分<br>77.1日分</td>
						<td>¥0.36/分<br>¥21.6/時間</td>
					</tr>
					<tr>
						<th scope="row">4 Party SD Video Conference<br><small>1.5Mbps</small></th>
						<td>1,851時間分<br>77.1日分</td>
						<td>¥0.36/分<br>¥21.6/時間</td>
					</tr>
				</tbody>
				</table>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" role="tab" id="headingOne">
      <h5 class="mb-0">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          個人向けサービス
        </a>
      </h5>
    </div>
    <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
      <div class="card-block">
				<table class="table table-sm">
				<thead>
					<tr>
						<th></th>
						<th>Community Edition<br>通話時間<span class="badge badge-pill badge-info" data-toggle="tooltip" data-placement="top" title="送信者1人あたり">i</span></th>
						<th>Enterprise Edition<br>料金<span class="badge badge-pill badge-info" data-toggle="tooltip" data-placement="top" title="送信者1人あたり">i</span></th>
					</tr>
				</thead>
				<tbody align="right">
					<tr>
						<th scope="row">1:1 Audio Call<br><small>40Kbps</small></th>
						<td>138,888時間分<br>5,787日分</td>
						<td>¥0.0048/分<br>¥0.288/時間</td>
					</tr>
					<tr>
						<th scope="row">1:1 SD Video Call<br><small>500Kbps</small></th>
						<td>11,111時間分<br>462日分</td>
						<td>¥0.06/分<br>¥3.6/時間</td>
					</tr>
					<tr>
						<th scope="row">1:1 HD Video Call<br><small>1.5Mbps</small></th>
						<td>3,703時間分<br>154日分</td>
						<td>¥0.18/分<br>¥10.8/時間</td>
					</tr>
					<tr>
						<th scope="row">4 Party SD Video Conference<br><small>1.5Mbps</small></th>
						<td>3,703時間分<br>154日分</td>
						<td>¥0.18/分<br>¥10.8/時間</td>
					</tr>
				</tbody>
				</table>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" role="tab" id="headingThree">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          スマートフォン向けアプリ
        </a>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
      <div class="card-block">
				<table class="table table-sm">
				<thead>
					<tr>
						<th></th>
						<th>Community Edition<br>通話時間<span class="badge badge-pill badge-info" data-toggle="tooltip" data-placement="top" title="送信者1人あたり">i</span></th>
						<th>Enterprise Edition<br>料金<span class="badge badge-pill badge-info" data-toggle="tooltip" data-placement="top" title="送信者1人あたり">i</span></th>
					</tr>
				</thead>
				<tbody align="right">
					<tr>
						<th scope="row">1:1 Audio Call<br><small>40Kbps</small></th>
						<td>1,388,888時間分<br>57,870日分</td>
						<td>¥0.0005/分<br>¥0.0288/時間</td>
					</tr>
					<tr>
						<th scope="row">1:1 SD Video Call<br><small>500Kbps</small></th>
						<td>111,111時間分<br>4,629日分</td>
						<td>¥0.006/分<br>¥0.36/時間</td>
					</tr>
					<tr>
						<th scope="row">1:1 HD Video Call<br><small>1.5Mbps</small></th>
						<td>37,037時間分<br>1,543日分</td>
						<td>¥0.018/分<br>¥1.08/時間</td>
					</tr>
					<tr>
						<th scope="row">4 Party SD Video Conference<br><small>1.5Mbps</small></th>
						<td>37,037時間分<br>1,543日分</td>
						<td>¥0.018/分<br>¥1.08/時間</td>
					</tr>
				</tbody>
				</table>
      </div>
    </div>
  </div>
</div>

## 料金に関して
より詳細な情報は[FAQ]()をご覧ください<br>
より詳細に料金を見積りたい方は[料金シミュレーター]()をご利用ください

## あなたのイノベーションを始めよう

<div class="row">
  <div class="col-sm-6">
	<div class="card">
	  <div class="card-block">
		<h3 class="card-title">Community Edition</h3>
		<p class="card-text">個人開発者、スタートアップ向け<br>新規サービスの創造により新しい体験と価値を提供しよう</p>
		<a href="#" class="btn btn-primary">無料で新規登録</a>
	  </div>
	</div>
  </div>
  <div class="col-sm-6">
	<div class="card">
	  <div class="card-block">
		<h3 class="card-title">Enterprise Edition</h3>
		<p class="card-text">大規模サービス向け<br>価値を広い世界へ拡げ、社会的変化を起こそう</p>
		<a href="#" class="btn btn-outline-primary">Contact Us</a>
	  </div>
	</div>
  </div>
</div>

