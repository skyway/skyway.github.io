---
layout: default
title: Migration
lang: en
breadcrumb: [en/index.md, en/developer.md]
---

# Migration

<div id="accordion" role="tablist">
  <!-- controller -->
  <div class="row card-row">
    <div class="col-lg-6">
      <div class="card">
        <div class="card-body" role="tab" id="headingOne">
          <h3 class="card-title">Customers using SkyWay</h3>
          <p class="card-text">SkyWay is terminated as of March, 2018. How to migrate from Skyway to ECLWebRTC is explained.（Reference: <a href="https://github.com/nttcom/skyway-sdk-migration-docs" target="_blank">SDK difference and how to migrate)</a></p>
            <a class="btn btn-outline-primary collapsed" data-toggle="collapse" href="#toECLWebRTC" aria-expanded="true" aria-controls="toECLWebRTC">
              Confirm how to migrate
            </a>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card">
        <div class="card-body" role="tab" id="headingTwo">
          <h3 class="card-title">Customers using ECLWebRTC</h3>
          <p class="card-text">How to migrate from Community Edition to Enterprise Edition is explained.</p>
          <a class="btn btn-outline-primary collapsed" data-toggle="collapse" href="#toEnterprise" aria-expanded="false" aria-controls="toEnterprise">
            Confirm how to migrate
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- content -->
  <div class="card card-borderless">
    <div id="toECLWebRTC" class="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
        <h2>About migration from SkyWay to ECLWebRTC</h2>
        <p>SkyWay is terminated as of March, 2018. How to migrate from Skyway to ECLWebRTC is explained.Customers who are using SkyWay are requested to migrate to the succeeding service “ECLWebRTC”, which is an advanced version of SkyWay.(Reference: <a href="https://support.skyway.io/hc/en-us/articles/115012186787" target="_blank">What is the difference between ECLWebRTC and SkyWay)</a></p>
        <p>Migrate according to following procedure.</p>
        <h3>1. Registration of ECLWebRTC</h3>
        <p>
          Please make a new registration of ECLWebRTC on the <a href="./signup.html">Registration page</a>.
          The Community Edition can be used for free. Please refer to <a href="./pricing.html">Pricing page</a> for details.
          The following procedure is the same even if you <a href="./contactus.html">registration the Enterprise Edition</a>.
        </p>
        <a href="./signup.html" class="btn btn-primary">Registration for Free</a>
        <h3>2. Generate APIKey</h3>
        <p>
          API Key used in SkyWay is not allowed to use in ECLwebRTC.<br>
          Generate new APIKey on the Dashboard and change the APIKey at the next step <a href="#3-Replace-SDK">3. Replace SDK</a>.
        </p>
        <h3 id="3-Replace-SDK">3. Replace SDK</h3>
        <p>
          As some differences exist in API of the SDK, please modify the program by referencing to the following document.
        </p>
        <p><a href="https://github.com/nttcom/skyway-sdk-migration-docs" target="_blank" class="btn btn-primary">SDK difference and how to migrate</a></p>
        <div class="alert alert-info" role="alert">
            The SDK of SkyWay and the SDK of ECLWebRTC cannot be interconnected.<br>
            The SDK of ECLWebRTC accepts APIKey generated only by the Community Edition or the Enterprise Edition of ECLWebRTC.
        </div>
      </div>
    </div>
  </div>
  <div class="card card-borderless">
    <div id="toEnterprise" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
        <h2>How to migrate from the Community Edition to the Enterprise Edition</h2>
        <h3>1. Registration Enterprise Edition</h3>
        Please make a <a href="./contactus.html">registration</a> for the Enterprise Edition.
        </p>
        <a href="./contactus.html" class="btn btn-primary">Registration Enterprise Edition</a>
        <h3>2. Migration from Community Edition</h3>
        <p>
          Function to succeed APIKey from the Community Edition to the Enterprise Edition will be available soon. Until the function becomes available, please generate a new APIKey on the Dashboard screen and replace the APIKey.
        </p>
        <h4>Migration Timing to the Enterprise Edition</h4>
        <p>
          A function to check monthly usage on the Dashboard of the Community Edition will be available soon. Among the customers who used SkyWay, those who reached the use limit are contacted separately. If you do not need supports or SLA, please consider the use of the Community Edition first.
        </p>
      </div>
    </div>
  </div>
</div>
