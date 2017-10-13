---
layout: rightnav
title: ECL API Reference
lang: ja
breadcrumb: [index.md, developer.md]
---

- TOC
{:toc}

# ECL API Reference

The APIs described in this page is only available for Enterprise Edition users.

Before using the APIs, the authentication token must be obtained according to this [procedure](https://ecl.ntt.com/en/documents/api-references/first-step/). Then attach the token in the "X-Auth-Token" header, in the HTTP request.

The API endpoint URL can be found at [here](https://ecl.ntt.com/en/documents/api-references/).

## API List
 
|Description|Method|Endpoint|
|:--|:--|:--|
|Get apps list|GET| `/tenants/{tenant_id}/apps`|
|Create new app|POST| `/tenants/{tenant_id}/apps`|
|Get app|GET| `/tenants/{tenant_id}/apps/{app_id}`|
|Delete app|DELETE| `/tenants/{tenant_id}/apps/{app_id}`|
|Update app|PUT| `/tenants/{tenant_id}/apps/{app_id}`|
|Get app secret key |GET|`/tenants/{tenant_id}/apps/{app_id}/secretkey`|
|Renew app secret key |POST|`/tenants/{tenant_id}/apps/{app_id}/secretkey`|

## Get apps list
{: #get-app-list }

```
GET /tenants/{tenant_id}/apps
```

### Request Parameters

|Name|Type|Description|
|:--|:--|:--|
|expandApps|boolean|Expands the apps array to contain the whole body of the app object (except the secret key) when true. Only returns id, apikey and description when false. True if present, default is false. Can also explicitly set expandApps=true or expandApps=false.|

```
GET /tenants/212dd263522c4e73887212edfc7273e6/apps?expandApps
```

### Response

|Name|Type|Description|
|:--|:--|:--|
|-|Array\<App>|An array of apps belonging to this tenant. Information returned depends on whether expandApps parameter was true or not|

With expandApps set.

```json
[
  {
    "id": "13808fa08f0a8020203820df",
    "apikey": "139fa-021390f-2903a-afae92",
    "description": "First app",
    "domains": [],
    "permissions": [],
    "status": "active",
    "created_at": "2016-12-09T21:50:21Z",
    "updated_at": "2016-12-09T21:50:21Z"
  },
  {
    "id": "808fa2020382008f0a1380df",
    "apikey": "91cf3-2ae929f-3a021-0903af",
    "description": "Second app",
    "domains": ["*.webrtc.ecl.ntt.com", "skyway.github.io"],
    "permissions": ["TURN_ENABLED"],
    "status": "active",
    "created_at": "2016-12-09T22:50:21Z",
    "updated_at": "2016-12-10T23:50:21Z"
  }
]
```

Without expandApps set.

```json
[
  {
    "id": "13808fa08f0a8020203820df",
    "apikey": "139fa-021390f-2903a-afae92",
    "description": "First app"
  },
  {
    "id": "808fa2020382008f0a1380df",
    "apikey": "91cf3-2ae929f-3a021-0903af",
    "description": "Second app"
  }
]
```

## Create new app

```
POST /tenants/{tenant_id}/apps
```

### Request Parameters

|Name|Type|Description|
|:--|:--|:--|
|description|string|Optional. A description of the app. Up to 128 chars. |
|domains|Array\<string>|Optional. The domains permitted for the app|
|permissions|Array\<string>|Optional. The permissions enabled for the app|
|status|string|Optional. The app status. One of `"active"` or `"suspended"`|

```
POST /tenants/212dd263522c4e73887212edfc7273e6/apps
```

```json
{
  "description": "skyway app"
}
```  

### Response


|Name|Type|Description|
|:--|:--|:--|
|id|string|The app id|
|apikey|string|The app apikey|
|description|string|A description of the app.|
|domains|Array\<string>|A list of domains this app is permitted on.|
|permissions|Array\<string>|An list of permissions this app has.|
|status|string|The status of the app.|
|created_at|string|When this app was created.|
|updated_at|string|When this app was last updated.|

```json
{
  "id": "13808fa08f0a8020203820df",
  "apikey": "139fa-021390f-2903a-afae92",
  "description": "skyway app",
  "domains": [],
  "permissions": [],
  "status": "active",
  "created_at": "2016-12-09T21:50:21Z",
  "updated_at": "2016-12-09T21:50:21Z"
}
```

## Get app

```
GET /tenants/{tenant_id}/apps/{app_id}
```

### Request Parameters

none

### Response

|Name|Type|Description|
|:--|:--|:--|
|id|string|The app id|
|apikey|string|The app apikey|
|description|string|A description of the app.|
|domains|Array\<string>|A list of domains this app is permitted on.|
|permissions|Array\<string>|An list of permissions this app has.|
|status|string|The status of the app.|
|created_at|string|When this app was created.|
|updated_at|string|When this app was last updated.|

```json
{
  "id": "13808fa08f0a8020203820df",
  "apikey": "139fa-021390f-2903a-afae92",
  "description": "skyway app",
  "domains": ["*.webrtc.ecl.ntt.com", "skyway.github.io"],
  "permissions": ["TURN_ENABLED"],
  "status": "active",
  "created_at": "2016-12-09T21:50:21Z",
  "updated_at": "2016-12-09T21:50:21Z"
}
```

## Delete app

```
DELETE /tenants/{tenant_id}/apps/{app_id}
```

### Request Parameters

### Response

```json
{}
```

## Update app

```
PUT /tenants/{tenant_id}/apps/{app_id}
```

### Request Parameters

|Name|Type|Description|
|:--|:--|:--|
|description|string|Optional. A description of the app|
|domains|Array\<string>|Optional. The domains permitted for the app|
|permissions|Array\<string>|Optional. The permissions enabled for the app|
|status|string|Optional. The app status. One of `"active"` or `"suspended"`|

```
PUT /tenants/212dd263522c4e73887212edfc7273e6/apps/13808fa08f0a8020203820df
```

```json
{
  "description": "Updated description",
  "status": "active",
  "domains": ["*.skyway.io", "nttcom.github.io"]
}
```

### Response

|Name|Type|Description|
|:--|:--|:--|
|id|string|The app id|
|apikey|string|The app apikey|
|description|string|A description of the app.|
|domains|Array\<string>|A list of domains this app is permitted on.|
|permissions|Array\<string>|An list of permissions this app has.|
|status|string|The status of the app.|
|created_at|string|When this app was created.|
|updated_at|string|When this app was last updated.|

```
{
  "id": "13808fa08f0a8020203820df",
  "apikey": "139fa-021390f-2903a-afae92"
  "description": "Updated description",
  "domains": ["*.webrtc.ecl.ntt.com", "skyway.github.io"],
  "permissions": ["TURN_ENABLED"],
  "status": "active",
  "created_at": "2016-12-09T21:50:21Z",
  "updated_at": "2016-12-09T23:20:21Z"
}
```


## Get an app secret key

```
GET /tenants/{tenant_id}/apps/{app_id}/secretkey
```

### Request Parameters

### Response

|Name|Type|Description|
|:--|:--|:--|
|secretkey|string|The secret key for the app|

```json
{
  "secretkey": "f3Vu9vua9muCMEM82om"
}
```

## Regenerate app secret key

```
POST /tenants/{tenant_id}/apps/{app_id}/secretkey
```

### Request Parameters

### Response


|Name|Type|Description|
|:--|:--|:--|
|secretkey|string|The new secret key for the app|

```json
{
  "secretkey": "f3Vu9vua9muCMEM82om"
}
```

## Permission examples

|Permission name|Description|
|:--|:--|
|TURN|Enables TURN for peers on the app|
|SFU|Enables SFU for peers on the app|
|USER_LIST|Enables the [`listAllPeers()`](https://webrtc.ecl.ntt.com/en/js-reference/Peer.html) function|
|PEER_AUTHENTICATION|Only allows peers authenticated using an access token to connect to this app.|




