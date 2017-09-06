---
layout: default
title: Pricing Simulator
lang: en
breadcrumb: [en/index.md, en/pricing.md]
---

# 料金シミュレーター

<h4>月額基本料</h4>
<div class="form-group row">
  <label for="inputPlan" class="col-sm-2 col-form-label">Edition</label>
  <div class="col-sm-10">
    <div class="form-check form-check-inline disabled">
      <label class="form-check-label">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio01" value="Community Edition" disabled> Community Edition
      </label>
    </div>
    <div class="form-check form-check-inline">
      <label class="form-check-label">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio02" value="Enterprise Edition" checked> Enterprise Edition
      </label>
    </div>
  </div>
</div>

<h4>Signaling利用料</h4>
<small class="text-muted">
  new Peer()の実行回数
</small>

<div class="form-group row">
  <label for="inputFrequency" class="col-sm-2 col-form-label">接続回数</label>
  <div class="col-sm-10 input-group">
    <input type="text" class="form-control" id="inputFrequency" placeholder="150000">
    <span class="input-group-addon">回/月</span>
  </div>
  <small class="text-muted">5人での会議を1日1,000回なら150,000回</small>
</div>


<h4>TURN/SFU利用料</h4>
<small class="text-muted">
  TURN/SFUの通信量
</small>


<div class="form-group row">
  <label for="inputMinutes" class="col-sm-2 col-form-label">月間通話時間</label>
  <div class="col-sm-10 input-group">
    <input type="text" class="form-control" id="inputMinutes" placeholder="10000">
    <span class="input-group-addon">分/月</span>
  </div>
</div>
<div class="form-group row">
  <label for="inputTURNRate" class="col-sm-2 col-form-label">TURN利用率</label>
  <div class="col-sm-10 input-group">
    <input type="text" class="form-control" id="inputTURNRate" placeholder="10">
    <span class="input-group-addon">%</span>
  </div>
  <small class="text-muted">法人20%, 個人10%, スマホ1%, 利用しない0%</small>
</div>

<div class="form-group row">
  <label for="inputSFURate" class="col-sm-2 col-form-label">SFU利用率</label>
  <div class="col-sm-10 input-group">
    <input type="text" class="form-control" id="inputSFURate" placeholder="0">
    <span class="input-group-addon">%</span>
  </div>
  <small class="text-muted">SFUを利用する割合</small>
</div>
<div class="form-group row">
  <label for="inputBroadcastorRate" class="col-sm-2 col-form-label">送信/配信者率</label>
  <div class="col-sm-10 input-group">
    <input type="text" class="form-control" id="inputBroadcastorRate" placeholder="100">
    <span class="input-group-addon">%</span>
  </div>
  <small class="text-muted">映像(または音声)を送信する人の割合(4人での会議で1人しか映像を流さない場合は25%)</small>
</div>

<div class="form-group row">
    <legend class="col-form-legend col-sm-2">通話参加人数分布</legend>
    <div class="col-sm-10 form-row">
      <div class="col-sm-6 input-group">
        <input type="text" class="form-control" id="inputpartyNum0" placeholder="2" value="2">
        <span class="input-group-addon">人</span>
      </div>
      <div class="col-sm-6 input-group">
        <input type="text" class="form-control" id="inputpartyNumDist0" placeholder="50">
        <span class="input-group-addon">%</span>
      </div>
      <div class="col-sm-6 input-group">
        <input type="text" class="form-control" id="inputpartyNum1" placeholder="3" value="3">
        <span class="input-group-addon">人</span>
      </div>
      <div class="col-sm-6 input-group">
        <input type="text" class="form-control" id="inputpartyNumDist1" placeholder="25">
        <span class="input-group-addon">%</span>
      </div>
      <div class="col-sm-6 input-group">
        <input type="text" class="form-control" id="inputpartyNum2" placeholder="4" value="4">
        <span class="input-group-addon">人</span>
      </div>
      <div class="col-sm-6 input-group">
        <input type="text" class="form-control" id="inputpartyNumDist2" placeholder="25">
        <span class="input-group-addon">%</span>
      </div>
      <div class="col-sm-6 input-group">
        <input type="text" class="form-control" id="inputpartyNum3" placeholder="5" value="5">
        <span class="input-group-addon">人</span>
      </div>
      <div class="col-sm-6 input-group">
        <input type="text" class="form-control" id="inputpartyNumDist3" placeholder="0">
        <span class="input-group-addon">%</span>
      </div>
      <div class="col-sm-6 input-group">
        <input type="text" class="form-control" id="inputpartyNum4" placeholder="6" value="6">
        <span class="input-group-addon">人</span>
      </div>
      <div class="col-sm-6 input-group">
        <input type="text" class="form-control" id="inputpartyNumDist4" placeholder="0">
        <span class="input-group-addon">%</span>
      </div>
    </div>
</div>

<div class="form-group row">
  <label for="inputBitRate" class="col-sm-2 col-form-label">BitRate</label>
  <div class="col-sm-10 input-group">
    <input type="text" class="form-control" id="inputBitRate" placeholder="1">
    <span class="input-group-addon">Mbps</span>
  </div>
  <small class="text-muted">HD 1.5Mbps, SD 0.5Mbps, 音声 0.04Mbps</small>
</div>

<div class="form-group row">
  <label for="inputUnitPrice" class="col-sm-2 col-form-label">単価</label>
  <div class="col-sm-10 input-group">
    <input type="text" class="form-control" id="inputUnitPrice" placeholder="40" value="40" readonly>
    <span class="input-group-addon">円/GB</span>
  </div>
</div>


<div class="form-group row">
  <div class="col-sm-10">
    <button id="calculateBtn" class="btn btn-primary">試算する</button>
    <button id="calculateTestBtn" class="btn btn-primary">テストデータ</button>
  </div>
</div>


<div id="Result">
  <div id="calculateResult" style="display:none">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">試算結果</h4>
        <p id="resultConditions" class="card-text"></p>
        <table class="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th class="text-right">利用</th>
              <th class="text-right">単価</th>
              <th class="text-right">料金</th>
            </tr>
          </thead>
          <tbody align="right">
            <tr>
              <th scope="row">Base</th>
              <td id="resultBaseEdition"></td>
              <td>¥100,000</td>
              <td id="resultBasePrice"></td>
            </tr>
            <tr>
              <th scope="row">Signaling</th>
              <td id="resultSignalingUsage"></td>
              <td>¥100,000</td>
              <td id="resultSignalingPrice"></td>
            </tr>
            <tr>
              <th scope="row">TURN</th>
              <td id="resultTURNUsage"></td>
              <td>¥40/GB</td>
              <td id="resultTURNPrice"></td>
            </tr>
            <tr>
              <th scope="row">SFU</th>
              <td id="resultSFUUsage"></td>
              <td>¥40/GB</td>
              <td id="resultSFUPrice"></td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td></td>
              <td id="resultTotalPrice"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


<script src="{{ site.baseurl }}/js/costSimulator.js"></script>

<script>
  var cal = new CostSimulator();

  document.addEventListener('DOMContentLoaded', function() {
    $("#calculateBtn").on("click", function(){
      cal.setParams(getParams());
      cal.calPrice();
    })
    $("#calculateTestBtn").on("click", function(){
      cal.test();
    })

    function getParams(){

      var params = {};

      var edition = $("input[type=radio]:checked").val();
      if(edition) params.edition = edition;

      var frequency = parseInt($("#inputFrequency").val());
      if(frequency) params.frequency = frequency;

      var minutes = parseInt($("#inputMinutes").val());
      if(minutes) params.minutes = minutes;
      
      var TURNRate = parseInt($("#inputTURNRate").val());
      if(TURNRate) params.TURNRate = TURNRate;

      var SFURate = parseInt($("#inputSFURate").val());
      if(SFURate) params.SFURate = SFURate;

      var BroadcastorRate = parseInt($("#inputBroadcastorRate").val());
      if(BroadcastorRate) params.BroadcastorRate = BroadcastorRate;

      var partyNum = [];
      for(var i = 0; i < 5; i++){
        var num = parseInt($("#inputpartyNum"+i).val());
        var dist = parseInt($("#inputpartyNumDist"+i).val());
        if(num && dist) {
          partyNum.push([num, dist]);
        }
      }
      if(partyNum && partyNum.length > 0) params.partyNum = partyNum;

      var BitRate = parseFloat($("#inputBitRate").val());
      if(BitRate) params.BitRate = BitRate;

      return params;
    }
  });
</script>
