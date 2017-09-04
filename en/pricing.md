---
layout: default
title: Pricing
lang: en
main_visual:
  main_copy: Start Innovating!
  sub_copy: ECLWebRTC offers a free Community Edition.
  links: <p><a class="btn btn-light" href="signup.html" role="button">Register for free</a></p>
  copy_position: ["after"]
  image_file_name: 
  font_color: "#fff"
  background_color: rgb(0, 67, 134)
breadcrumb: [en/index.md]
---

## Pricing

You can start using ECLWebRTC as soon as you sign up.
Start innovating with developers around the world.
Community Edition is completely free of charge!

### Basic Charge

<p>
  ECLWebRTC is available without initial cost.<br>
  <small class="text-muted">There is no limit on the use of STUN, the number of calls, or the number of rooms created.</small>
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
        <th scope="row">Basic Charge</th>
        <td class="td-badge"><span class="badge badge-community">community</span> Free </td>
        <td class="td-badge"><span class="badge badge-enterprise">enterprise</span> ¥100,000 per month </td>
      </tr>
      <tr>
        <th scope="row">Support</th>
        <td class="td-badge"><span class="badge badge-community">community</span> FAQ, Technical Forum</td>
        <td class="td-badge"><span class="badge badge-enterprise">enterprise</span> Ticket（24/7）</td>
      </tr>
      <tr>
        <th scope="row">SLA</th>
        <td class="td-badge"><span class="badge badge-community">community</span> N/A</td>
        <td class="td-badge"><span class="badge badge-enterprise">enterprise</span> 99.99% availability guaranteed.</td>
    </tr>
  </tbody>
</table>

### Number of connections

<p>
  Charges are based on the number of connections to the signaling server per month. <br>
  <small class="text-muted">There is no limit on the connection time or the number of calls per connection. <span class="d-none d-md-inline"><br></span>The number of connections is counted per API key. Limits and charges are calculated on a per API key basis.</small>
</p>

<table class="table table-sm pricing-table">
<thead>
  <tr>
    <th class="d-none d-md-table-cell"></th>
    <th>Number of connections</th>
    <th class="text-right">Community Edition</th>
    <th class="text-right">Enterprise Edition</th>
  </tr>
</thead>
<tbody align="right">
  <tr>
    <th scope="row" class="hidden-sm">Signaling<span class="badge badge-pill badge-info" data-toggle="tooltip" data-placement="top" title="Signaling: When communication is made between terminals, information such as each IP address and codec is exchanged via a signaling server.">i</span></th>
    <td class="td-header" align="left">
      ~500,000<span class="d-sm-none">times/month</span>
    </td>
    <td class="td-badge"><span class="badge badge-community">community</span> ¥0</td>
    <td class="td-badge"><span class="badge badge-enterprise">enterprise</span> ¥0</td>
  </tr>
  <tr>
    <th scope="row" class="d-none d-md-table-cell"></th>
    <td class="td-header" align="left">
      ~1,000,000<span class="d-sm-none">times/month</span>
    </td>
    <td class="td-badge"><span class="badge badge-community">community</span> unavailable </td>
    <td class="td-badge"><span class="badge badge-enterprise">enterprise</span> ¥0</td>
  </tr>
  <tr>
    <th scope="row" class="d-none d-md-table-cell"></th>
    <td class="td-header" align="left">
      1,000,001~<span class="d-sm-none">times/month</span>
    </td>
    <td></td>
    <td class="td-badge"><span class="badge badge-enterprise">enterprise</span> ¥100,000</td>
  </tr>
</tbody>
</table>


### TURN/SFU Usage

<p>
  Charges are based on the monthly traffic to/from the TURN and SFU servers.<br>
  <small class="text-muted">
    There is no restriction on the connection time or the number of calls, per connection. <span class="d-none d-md-inline"><br></span>
    The server traffic is counted per API Key, separately for TURN and SFU.  Limits and charges are calculated on a per API key basis. All network traffic in and out of the servers is counted.
  </small>
</p>

<table class="table table-sm pricing-table">
<thead>
  <tr>
    <th class="d-none d-md-table-cell"></th>
    <th>The amount of traffic</th>
    <th class="text-right">Community Edition</th>
    <th class="text-right">Enterprise Edition</th>
  </tr>
</thead>
<tbody align="right">
  <tr>
    <!-- for PC -->
    <th scope="row" class="d-none d-md-table-cell">TURN<span class="badge badge-pill badge-info" data-toggle="tooltip" data-placement="top" title="TURN: In an environment where Peer to Peer communication cannot be established, NAT traversal is realized by relaying TURN server.">i</span></th>
    <!-- for smartphone-->
    <th scope="row" class="d-sm-none">TURN / SFU</th> 
    <td class="td-header" align="left">~500GB</td>
    <td class="td-badge"><span class="badge badge-community">community</span> ¥0</td>
    <td class="td-badge"><span class="badge badge-enterprise">enterprise</span> ¥40/GB</td>
  </tr>
  <tr>
    <th scope="row" class="d-none d-md-table-cell"></th>
    <td class="td-header" align="left">501GB~</td>
    <td class="td-badge"><span class="badge badge-community">community</span> unavailable </td>
    <td class="td-badge"><span class="badge badge-enterprise">enterprise</span> ¥40/GB</td>
  </tr>
  <tr class="hidden-xs hidden-sm">
    <th scope="row">SFU<span class="badge badge-pill badge-info" data-toggle="tooltip" data-placement="top" title="SFU: By using SFU servers to smartly relay video data, network and cpu load of client machines can be reduced, greatly increasing the quality of conferences with many users.">i</span></th>
    <td align="left">~500GB</td>
    <td>¥0</td>
    <td>¥40/GB</td>
  </tr>
  <tr class="hidden-xs hidden-sm">
    <th scope="row"></th>
    <td align="left">501GB~</td>
    <td>limit</td>
    <td>¥40/GB</td>
  </tr>
</tbody>
</table>


#### Usage estimates

These are an estimate of the call times until you hit the TURN usage limit for the Community Edition, and the estimated cost for the Enterprise Edition.

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
        Estimate of possible call times until TURN usage limit is hit.<br>
        <small class="text-muted">Peer-to-Peer communication is possible even if you are past the TURN usage limit. <br>The usage rate of TURN varies significantly among end users. <br>In general, it is 20% for companies, 10% for individuals and 1% for smartphones. <br>Time in case of one caller.</small>
        <table class="pricing-sample-table table table-sm">
        <thead>
          <tr>
            <th class="w-25"></th>
            <th class="w-25 text-right"><font class="d-none d-md-inline">Web service for </font>companies</th>
            <th class="w-25 text-right"><font class="d-none d-md-inline">Web service for </font>individuals</th>
            <th class="w-25 text-right"><font class="d-none d-md-inline">Application for </font>smartphones</th>
          </tr>
        </thead>
        <tbody align="right">
          <tr>
            <th scope="row">1:1 voice chat<br><small>40Kbps</small></th>
            <td><span>69,444</span><wbr><span><small class="text-muted">hrs</small></span><span><br>2,893</span><wbr><span><small class="text-muted">days</small></span></td>
            <td><span>138,888</span><wbr><span><small class="text-muted">hrs</small></span><span><br>5,787</span><wbr><span><small class="text-muted">days</small></span></td>
            <td><span>1,388,888</span><wbr><span><small class="text-muted">hrs</small></span><span><br>57,870</span><wbr><span><small class="text-muted">days</small></span></td>
          </tr>
          <tr>
            <th scope="row">1:1 video chat (SD)<br><small>500Kbps</small></th>
            <td><span>5,555</span><wbr><span><small class="text-muted">hrs</small></span><span><br>231</span><wbr><span><small class="text-muted">days</small></span></td>
            <td><span>11,111</span><wbr><span><small class="text-muted">hrs</small></span><span><br>462</span><wbr><span><small class="text-muted">days</small></span></td>
            <td><span>111,111</span><wbr><span><small class="text-muted">hrs</small></span><span><br>4,629</span><wbr><span><small class="text-muted">days</small></span></td>
          </tr>
          <tr>
            <th scope="row">1:1 video chat (HD)<br><small>1.5Mbps</small></th>
            <td><span>1,851</span><wbr><span><small class="text-muted">hrs</small></span><span><br>77.1</span><wbr><span><small class="text-muted">days</small></span></td>
            <td><span>3,703</span><wbr><span><small class="text-muted">hrs</small></span><span><br>154</span><wbr><span><small class="text-muted">days</small></span></td>
            <td><span>37,037</span><wbr><span><small class="text-muted">hrs</small></span><span><br>1,543</span><wbr><span><small class="text-muted">days</small></span></td>
          </tr>
          <tr>
            <th scope="row">4 person video conference (SD)<br><small>1.5Mbps</small></th>
            <td><span>1,851</span><wbr><span><small class="text-muted">hrs</small></span><span><br>77.1</span><wbr><span><small class="text-muted">days</small></span></td>
            <td><span>3,703</span><wbr><span><small class="text-muted">hrs</small></span><span><br>154</span><wbr><span><small class="text-muted">days</small></span></td>
            <td><span>37,037</span><wbr><span><small class="text-muted">hrs</small></span><span><br>1,543</span><wbr><span><small class="text-muted">days</small></span></td>
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
        Estimated charge when TURN is used.<br>
        <small class="text-muted">The usage rate of TURN varies significantly among end users. <br>In general, it is 20% for companies, 10% for individuals and 1% for smartphones. <br>Time in case of one caller.</small>
        <table class="pricing-sample-table table table-sm">
        <thead>
          <tr>
            <th class="w-25"></th>
            <th class="w-25 text-right"><font class="d-none d-md-inline">Web service for </font>companies</th>
            <th class="w-25 text-right"><font class="d-none d-md-inline">Web service for </font>individuals</th>
            <th class="w-25 text-right"><font class="d-none d-md-inline">Application for </font>smartphones</th>
          </tr>
        </thead>
        <tbody align="right">
          <tr>
            <th scope="row">1:1 voice chat<br><small>40Kbps</small></th>
            <td><span>¥0.0096</span><wbr><span><small class="text-muted">/min</small></span><span><br>¥0.576</span><wbr><span><small class="text-muted">/hrs</small></span></td>
            <td><span>¥0.0048</span><wbr><span><small class="text-muted">/min</small></span><span><br>¥0.288</span><wbr><span><small class="text-muted">/hrs</small></span></td>
            <td><span>¥0.0005</span><wbr><span><small class="text-muted">/min</small></span><span><br>¥0.0288</span><wbr><span><small class="text-muted">/hrs</small></span></td>
          </tr>
          <tr>
            <th scope="row">1:1 video chat (SD)<br><small>500Kbps</small></th>
            <td><span>¥0.12</span><wbr><span><small class="text-muted">/min</small></span><span><br>¥7.2</span><wbr><span><small class="text-muted">/hrs</small></span></td>
            <td><span>¥0.06</span><wbr><span><small class="text-muted">/min</small></span><span><br>¥3.6</span><wbr><span><small class="text-muted">/hrs</small></span></td>
            <td><span>¥0.006</span><wbr><span><small class="text-muted">/min</small></span><span><br>¥0.36</span><wbr><span><small class="text-muted">/hrs</small></span></td>
          </tr>
          <tr>
            <th scope="row">1:1 video chat (HD)<br><small>1.5Mbps</small></th>
            <td><span>¥0.36</span><wbr><span><small class="text-muted">/min</small></span><span><br>¥21.6</span><wbr><span><small class="text-muted">/hrs</small></span></td>
            <td><span>¥0.18</span><wbr><span><small class="text-muted">/min</small></span><span><br>¥10.8</span><wbr><span><small class="text-muted">/hrs</small></span></td>
            <td><span>¥0.018</span><wbr><span><small class="text-muted">/min</small></span><span><br>¥1.08</span><wbr><span><small class="text-muted">/hrs</small></span></td>
          </tr>
          <tr>
            <th scope="row">4 person video conference (SD)<br><small>1.5Mbps</small></th>
            <td><span>¥0.36</span><wbr><span><small class="text-muted">/min</small></span><span><br>¥21.6</span><wbr><span><small class="text-muted">/hrs</small></span></td>
            <td><span>¥0.18</span><wbr><span><small class="text-muted">/min</small></span><span><br>¥10.8</span><wbr><span><small class="text-muted">/hrs</small></span></td>
            <td><span>¥0.018</span><wbr><span><small class="text-muted">/min</small></span><span><br>¥1.08</span><wbr><span><small class="text-muted">/hrs</small></span></td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

## About Pricing

Please refer to the [FAQ]() for details.
If you need detailed estimation of the cost, please use the [Cost Simulator]().

## Start Innovating!

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

