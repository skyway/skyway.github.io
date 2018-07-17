---
layout: rightnav
title: ECL API チュートリアル
lang: ja
breadcrumb: [index.md, developer.md]
---

- TOC
{:toc}

# ECL API チュートリアル

Enterprise Editionをご利用の方は、Enterprise Cloud 2.0 API（以下、ECL API）を利用して、ダッシュボードの操作が可能です。このチュートリアルでは、ECL APIを利用したアプリケーション作成と利用データ量取得を例に、ECL APIの使い方について理解を深めます。

このチュートリアルで紹介していないECL APIの情報は、[ECL API リファレンス](./ecl-api.html)をご覧ください。


## 利用前の準備
{: #preparation }

ECL APIの利用に必要な情報を収集します。

|必要な情報|項目の説明|参照できる場所|
|:--|:--|:--|
|テナントID|Enterprise Editionのコントロールパネルを利用する際に作成したテナントのIDです。|[各種情報の確認 - テナントIDの確認](https://ecl.ntt.com/documents/tutorials/rsts/CustomerPortal/user_parameter.html#how-to-check-tenantid){:target="_blank"}|
|API鍵|ECL APIにアクセスするためのAPI鍵情報です。SkyWayのAPIキーとは異なります。|[各種情報の確認 - ユーザー情報の確認](https://ecl.ntt.com/documents/tutorials/rsts/CustomerPortal/user_parameter.html#how-to-check-userid){:target="_blank"}|
|API秘密鍵|ECL APIにアクセスするためのAPI鍵情報です。SkyWayのシークレットキーとは異なります。|[各種情報の確認 - ユーザー情報の確認](https://ecl.ntt.com/documents/tutorials/rsts/CustomerPortal/user_parameter.html#how-to-check-userid){:target="_blank"}|
|KeystoneエンドポイントURL|ECL APIにアクセスするために必要な認証Tokenを取得するためのエンドポイントURLです。テナント作成時に選択したリージョン毎にURLが異なります。<br><br>`https://keystone-[region_name]-ecl.api.ntt.com/v3/auth/tokens`<br><br>2018/07 現在の選択可能リージョン: jp1, jp2, jp5, us1, uk1, de1, sg1, hk1, au1<br>例: [https://keystone-jp2-ecl.api.ntt.com/v3/auth/tokens](https://keystone-jp2-ecl.api.ntt.com/v3/auth/tokens){:target="_blank"}|[APIリファレンス - エンドポイントの一覧](https://ecl.ntt.com/documents/api-references/)|
|WebRTCエンドポイントURL|SkyWayが提供するECL APIにアクセスするためのエンドポイントURLです。テナント作成時に選択したリージョン毎にURLが異なります。<br><br>`https://webrtc-[region name]-ecl.api.ntt.com`<br><br>2018/07 現在の選択可能リージョン: jp1, jp2, jp5, us1, uk1, de1, sg1, hk1, au1<br> 例: [https://webrtc-jp2-ecl.api.ntt.com](https://webrtc-jp2-ecl.api.ntt.com){:target="_blank"}|[APIリファレンス - エンドポイントの一覧](https://ecl.ntt.com/documents/api-references/)|

## 認証Tokenの取得
{: #get-auth-token }

はじめに、ECL APIにアクセスする際に必要な認証Tokenを取得します。

curlでリクエストを送る例場合は以下のようにします。

*curlで認証Tokenを取得（jp2リージョンの場合）*
{: .lang }

```sh
curl -s -i -H "Content-Type: application/json" -d '{  
  "auth": {
      "identity": {
          "methods": [
              "password"
          ],
          "password": {
              "user": {
                  "domain": {
                      "id": "default"
                  },
                  "name": "API密鍵",
                  "password": "API秘密鍵"
              }
          }
       },
          "scope": {
              "project": {
                  "id": "テナントID"
              }
          }

  }
}' https://keystone-jp2-ecl.api.ntt.com/v3/auth/tokens | grep X-Subject-Token | awk '{print $2}'
```

*レスポンス（例）*
{: .lang }

```sh
91e2b4d9f3e641b397db7053903c490f
```

認証トークンの有効期限は発行から1時間です。レスポンスのボディにも記載されています。

*有効期限（例）*
```sh
"expires_at":"2018-07-13T08:22:37.523381Z"
```

## アプリケーションの作成
{: #create-app }

認証トークンを利用してアプリケーションを作成します。アプリケーション作成時のパラメーターは以下の通りとします。

|項目|説明|
|:--|:--|
|description(アプリケーションの説明)|api-test|
|domains(利用可能ドメイン)|localhost|
|permissions(権限)|TURNを利用する<BR>SFUを利用する<BR>listAllPeers APIを利用する|
|status(ステータス)|利用する|

```sh
curl -s -X POST -i \
  -H "X-Auth-Token: 91e2b4d9f3e641b397db7053903c490f" \
  -H "Content-Type: application/json" -d '{
    "description": "api-test",
    "domains": ["localhost"],
    "permissions": ["TURN", "SFU", "USER_LIST"],
    "status": "active"
}' https://webrtc-jp2-ecl.api.ntt.com/tenants/374044ae291f48dca124f63c10eaec7b/apps
```

*レスポンス（例）*
{: .lang }

```sh
HTTP/1.1 200 OK
Date: Fri, 13 Jul 2018 07:53:11 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 353
Connection: keep-alive
Set-Cookie: SkyWay-API_FLASH=; Path=/; HttpOnly
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-Xss-Protection: 1; mode=block
ECL-Transaction-ID: d72c29c1-1be4-4bf7-8628-278e7f4bb5fe
Set-Cookie: TS0183560f=0197064f7905adc51ea1141b1117dba60240c3fe410ef17ff45192e5b99ffc8bf03561de036bcc04dca7824d1a56501bfaf2bc0ec3; Path=/

{"id":3700,"apikey":"8a973529-85b3-4c32-9f30-d89a8c9bc8d1","description":"api-test","domains":["localhost"],"permissions":["SFU","TURN","USER_LIST"],"usage_summary":{"2018/06":{"signaling":0,"turn":0,"sfu":0},"2018/07":{"signaling":0,"turn":0,"sfu":0}},"status":"active","created_at":"2018-07-13T16:53:09+09:00","updated_at":"2018-07-13T16:53:09+09:00"}
```

これで作成完了です。作成したアプリケーションはダッシュボードのGUIからも確認ができます。

<figure class="figure">
  <img src="{{ site.baseurl }}/images/ecl-api-tutorial-sc.png"
    class="figure-img img-fluid rounded" alt="ECL APIでアプリケーションを作成したところ">
  <figcaption class="figure-caption">ECL APIでアプリケーションを作成したところ</figcaption>
</figure>



## 利用データ量の取得
{: #get-usage }


```sh
curl -s -i \
  -H "X-Auth-Token: 91e2b4d9f3e641b397db7053903c490f" \
 https://webrtc-us1-ecl.api.ntt.com/tenants/374044ae291f48dca124f63c10eaec7b/apps/3700
```

```sh
HTTP/1.1 200 OK
Date: Fri, 13 Jul 2018 08:15:24 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 353
Connection: keep-alive
Set-Cookie: SkyWay-API_FLASH=; Path=/; HttpOnly
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-Xss-Protection: 1; mode=block
ECL-Transaction-ID: 2502ccbb-0909-4cda-b87c-13e658d9fa9d
Set-Cookie: TS0183560f=0197064f79dba6bcb0497434a01913f150960a937360eea49aa428a54540a949ffda0aa6be12eea1b7dadf1288b6971fd30b463add; Path=/

{"id":3700,"apikey":"8a973529-85b3-4c32-9f30-d89a8c9bc8d1","description":"api-test","domains":["localhost"],"permissions":["SFU","TURN","USER_LIST"],"usage_summary":{"2018/06":{"signaling":0,"turn":0,"sfu":0},"2018/07":{"signaling":0,"turn":0,"sfu":0}},"status":"active","created_at":"2018-07-13T16:53:09+09:00","updated_at":"2018-07-13T16:53:09+09:00"}
```