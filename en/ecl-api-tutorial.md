---
layout: rightnav
title: ECL API tutorial
lang: en
breadcrumb: [en/index.md, en/developer.md]
---

- TOC
{:toc}

# ECL API チュートリアル

Enterprise Editionをご利用の方は、Enterprise Cloud 2.0 API（以下、ECL API）を利用して、ダッシュボードで実施しているリソース管理が可能です。このチュートリアルでは、ECL APIを利用したアプリケーション作成と利用量取得を例に、ECL APIの使い方について理解を深めます。

このチュートリアルで紹介していないECL APIの情報は、[ECL API リファレンス（英語のみ）](./ecl-api.html)をご覧ください。


## 利用前の準備
{: #preparation }

ECL APIの利用に必要な情報を収集します。

|必要な情報|項目の説明|確認方法|
|:--|:--|:--|
|テナントID|Enterprise Editionのコントロールパネルを利用する際に作成したテナントのIDです。|[各種情報の確認 - テナントIDの確認](https://ecl.ntt.com/documents/tutorials/rsts/CustomerPortal/user_parameter.html#how-to-check-tenantid){:target="_blank"}|
|API鍵|ECL APIにアクセスするためのAPI鍵情報です。SkyWayのAPIキーとは異なります。|[各種情報の確認 - ユーザー情報の確認](https://ecl.ntt.com/documents/tutorials/rsts/CustomerPortal/user_parameter.html#how-to-check-userid){:target="_blank"}|
|API秘密鍵|ECL APIにアクセスするためのAPI秘密鍵情報です。SkyWayのシークレットキーとは異なります。|[各種情報の確認 - ユーザー情報の確認](https://ecl.ntt.com/documents/tutorials/rsts/CustomerPortal/user_parameter.html#how-to-check-userid){:target="_blank"}|
|KeystoneエンドポイントURL|ECL APIにアクセスするために必要な認証Tokenを取得するためのエンドポイントURLです。テナント作成時に選択したリージョン毎にURLが異なります。<br><br>例: jp2の場合: [https://keystone-jp2-ecl.api.ntt.com/v3/auth/tokens](https://keystone-jp2-ecl.api.ntt.com/v3/auth/tokens){:target="_blank"}|[APIリファレンス - エンドポイントの一覧](https://ecl.ntt.com/documents/api-references/)|
|WebRTCエンドポイントURL|SkyWayが提供するECL APIにアクセスするためのエンドポイントURLです。テナント作成時に選択したリージョン毎にURLが異なります。<br><br>例: jp2の場合: [https://webrtc-jp2-ecl.api.ntt.com](https://webrtc-jp2-ecl.api.ntt.com){:target="_blank"}|[APIリファレンス - エンドポイントの一覧](https://ecl.ntt.com/documents/api-references/)|

## 認証Tokenの取得
{: #get-auth-token }

利用前の準備で収集した情報を利用して、ECL APIの利用に必要な認証Tokenを取得します。

### リクエスト

`テナントID`、`API鍵`、`API秘密鍵`はリクエストボディに記載し、`KeystoneエンドポイントURL`に対してリクエストを行います。curlでリクエストを送る場合は、以下のようにします。

*curlで認証Tokenを取得（jp2リージョンの場合）*
{: .lang }

```sh
curl -s -X POST -i \
  -H "Content-Type: application/json" -d '{  
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
                  "name": "API鍵",
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

### レスポンス

レスポンスヘッダの`X-Subject-Token`に認証Tokenが記載されています。

*レスポンス（例）*
{: .lang }

```sh
91e2b4d9f3e641b397db7053903c490f
```

認証トークンの有効期限は発行から1時間です。レスポンスボディにも記載されています。

*有効期限（例）*
{: .lang }

```sh
"expires_at":"2018-07-13T08:22:37.523381Z"
```

## アプリケーションの作成
{: #create-app }

取得した認証Tokenを利用してアプリケーションを作成します。

### リクエスト

認証Tokenは`X-Auth-Token`ヘッダに記述します。また、アプリケーション作成時のパラメーターは以下の通りとし、JSON形式でリクエストボディに記述します。

|アプリケーション作成時のパラメーター|値 (補足説明)|
|:--|:--|
|description|api-test|
|domains|localhost|
|permissions|TURN (TURNを利用する)<BR>SFU (SFUを利用する)<BR>USER_LIST (listAllPeers APIを利用する)|
|status|active (利用する)|

リクエストURLにはテナントIDを含める必要があります。

`https://webrtc-jp2-ecl.api.ntt.com/tenants/テナントID/apps`

curlでリクエストを送る場合は、以下のようにします。

*curlでアプリケーションの作成（jp2リージョンの場合）*
{: .lang }

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

### レスポンス

リクエストが成功するとアプリケーションが作成され、アプリケーションの情報がレスポンスボディで返却されます。`id`(以後、アプリケーションID)はこれ以降、ECL APIを利用する際に、アプリケーションを特定するためのIDになります。

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

{"id":1000,"apikey":"8a973529-85b3-4c32-9f30-d89a8c9bc8d1","description":"api-test","domains":["localhost"],"permissions":["SFU","TURN","USER_LIST"],"usage_summary":{"2018/06":{"signaling":0,"turn":0,"sfu":0},"2018/07":{"signaling":0,"turn":0,"sfu":0}},"status":"active","created_at":"2018-07-13T16:53:09+09:00","updated_at":"2018-07-13T16:53:09+09:00"}
```

作成したアプリケーションはダッシュボードのGUIからも確認ができます。

<figure class="figure">
  <img src="{{ site.baseurl }}/images/ecl-api-tutorial-sc.png"
    class="figure-img img-fluid rounded" alt="ECL APIでアプリケーションを作成したところ">
  <figcaption class="figure-caption">ECL APIでアプリケーションを作成したところ</figcaption>
</figure>


## 利用量の取得
{: #get-usage }

作成したアプリケーションの利用量を取得します。

### リクエスト

取得した認証Tokenは`X-Auth-Token`ヘッダに記述します。リクエストURLにはテナントIDと対象のアプリケーションIDを含める必要があります。

`https://webrtc-jp2-ecl.api.ntt.com/tenants/テナントID/apps/アプリケーションID`

アプリケーションIDは、アプリケーション作成のレスポンスボディで返却されるidの他に、[Get apps list API](/ecl-api.html#get-apps-list)で作成済みアプリケーション一覧を取得した際にも入手できます。

curlでリクエストを送る場合は、以下のようにします。

*curlで利用データ量の取得（jp2リージョンの場合）*
{: .lang }

```sh
curl -s -i \
  -H "X-Auth-Token: 91e2b4d9f3e641b397db7053903c490f" \
 https://webrtc-jp2-ecl.api.ntt.com/tenants/374044ae291f48dca124f63c10eaec7b/apps/1000
```

### レスポンス

リクエストが成功すると、アプリケーションの情報がレスポンスボディで返却されます。

*レスポンス（例）*
{: .lang }

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

{"id":1000,"apikey":"8a973529-85b3-4c32-9f30-d89a8c9bc8d1","description":"api-test","domains":["localhost"],"permissions":["SFU","TURN","USER_LIST"],"usage_summary":{"2018/06":{"signaling":0,"turn":0,"sfu":0},"2018/07":{"signaling":0,"turn":0,"sfu":0}},"status":"active","created_at":"2018-07-13T16:53:09+09:00","updated_at":"2018-07-13T16:53:09+09:00"}
```

レスポンスボディから直近二ヶ月分の利用量が確認できます。この利用量はダッシュボードのGUIで確認できる値と同じものです。

*利用量（例）*
{: .lang }

```sh
"usage_summary":
    "2018/06":
        "signaling":0,
        "turn":0,
        "sfu":0,
    "2018/07":
        "signaling":0,
        "turn":0,
        "sfu":0
```

この利用量情報を使えば、毎月一定量を超えると通知を出す等の運用ツールが簡単に開発できます。

このチュートリアルで紹介していないECL APIの情報は、[ECL API リファレンス(英語のみ)](./ecl-api.html)をご覧ください。