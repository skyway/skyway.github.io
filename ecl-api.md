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

# API List
{: .h2 }

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

### Request

#### Request URL

```
GET /tenants/{tenant_id}/apps
```


#### Request Parameters

|Name|Type|Description|
|:--|:--|:--|
|expandApps|boolean|Expands the apps array to contain the whole body of the app object (except the secret key) when true. Only returns id, apikey and description when false. True if present, default is false. Can also explicitly set expandApps=true or expandApps=false.|

#### Request Format

None

### Response

#### Response Codes

|Code|Condition|
|:--|:--|
|200|Normal end|
|403|Not authenticated|
|-|Tenant is suspended|
|-|Tenant is Deleted|

#### Response Parameters

|Name|Type|Description|
|:--|:--|:--|
|-|Array\<App>|An array of apps belonging to this tenant. Information returned depends on whether expandApps parameter was true or not.|

#### Response Format

With expandApps set.

```json
[
  {
    "id": "{tenant_id}",
    "apikey": "{apikey_id}",
    "description": "<description>",
    "domains": [],
    "permissions": [],
    "status": "<status>",
    "created_at": "2016-12-09T21:50:21Z",
    "updated_at": "2016-12-09T21:50:21Z"
  },
  {
    "id": "{tenant_id}",
    "apikey": "{apikey_id}",
    "description": "<description>",
    "domains": ["<domain1>", "<domain2>"],
    "permissions": ["<permission>"],
    "status": "<status>",
    "created_at": "2016-12-09T22:50:21Z",
    "updated_at": "2016-12-10T23:50:21Z"
  }
]
```

Without expandApps set.

```json
[
  {
    "id": "{tenant_id}",
    "apikey": "{apikey_id}",
    "description": "<description>"
  },
  {
    "id": "{tenant_id}",
    "apikey": "{apikey_id}",
    "description": "<description>"
  }
]
```

## Create new app

### Request

#### Request URL

```
POST /tenants/{tenant_id}/apps
```

#### Request Parameters

|Name|Type|Description|
|:--|:--|:--|
|description|string|Optional. A description of the app. Up to 128 chars.|
|domains|Array\<string>|Optional. The domains permitted for the app.|
|permissions|Array\<string>|Optional. The permissions enabled for the app. "TURN", "SFU", "USER_LIST", and "PEER_AUTHENTICATION" can be set.|
|status|string|Optional. The app status. One of `"active"` or `"suspended"`.|

#### Request Format

```json
{
  "description": "<description>"
}
```  

### Response

#### Response Parameters

|Name|Type|Description|
|:--|:--|:--|
|id|string|The app id|
|apikey|string|The app apikey|
|description|string|A description of the app|
|domains|Array\<string>|A list of domains this app is permitted on.|
|permissions|Array\<string>|An list of permissions this app has.|
|status|string|The status of the app|
|created_at|string|When this app was created.|
|updated_at|string|When this app was last updated.|

#### Response Codes

|Code|Condition|
|:--|:--|
|200|Normal end|
|400|Description exceeding the maximum length|
|-|Domain exceeding the maximum length|
|-|Invalid domain format|
|-|Invalid status|
|-|Invalid permissions|
|403|Not authenticated|
|-|Tenant is suspended|

#### Response Format

```json
{
  "id": "{tenant_id}",
  "apikey": "{apikey_id}",
  "description": "<description>",
  "domains": [],
  "permissions": [],
  "status": "active",
  "created_at": "2016-12-09T21:50:21Z",
  "updated_at": "2016-12-09T21:50:21Z"
}
```

## Get app

### Request

#### Request URL

```
GET /tenants/{tenant_id}/apps/{app_id}
```

#### Request Parameters

None

#### Request Format

None

### Response

#### Response Parameters

|Name|Type|Description|
|:--|:--|:--|
|id|string|The app id|
|apikey|string|The app apikey|
|description|string|A description of the app|
|domains|Array\<string>|A list of domains this app is permitted on.|
|permissions|Array\<string>|An list of permissions this app has.|
|status|string|The status of the app|
|created_at|string|When this app was created.|
|updated_at|string|When this app was last updated.|

#### Response Codes

|Code|Condition|
|:--|:--|
|200|Normal end|
|403|Not authenticated|
|-|Tenant is suspended|
|-|Tenant is Deleted|

#### Response Format

```json
{
  "id": "{tenant_id}",
  "apikey": "{apikey_id}",
  "description": "<description>",
  "domains": ["<domain1>", "<domain2>"],
  "permissions": ["<permission>"],
  "status": "<status>",
  "created_at": "2016-12-09T21:50:21Z",
  "updated_at": "2016-12-09T21:50:21Z"
}
```

## Delete app

### Request

#### Request URL

```
DELETE /tenants/{tenant_id}/apps/{app_id}
```

#### Request Parameters

None

#### Request Format

None

### Response

#### Response Parameters

None

#### Response Codes

|Code|Condition|
|:--|:--|
|200|Normal end|
|403|App doesn't exist|
|-|Not authenticated|
|-|Tenant is suspended|
|-|Tenant is Deleted|

#### Response Format

```json
{}
```

## Update app

### Request

#### Request URL

```
PUT /tenants/{tenant_id}/apps/{app_id}
```

#### Request Parameters

|Name|Type|Description|
|:--|:--|:--|
|description|string|Optional. A description of the app|
|domains|Array\<string>|Optional. The domains permitted for the app|
|permissions|Array\<string>|Optional. The permissions enabled for the app. "TURN", "SFU", "USER_LIST", and "PEER_AUTHENTICATION" can be set.|
|status|string|Optional. The app status. One of `"active"` or `"suspended"`|

#### Request Format

```json
{
  "description": "<description>",
  "status": "<status>",
  "domains": ["<domain1>", "<domain2>"]
}
```

### Response

#### Response Parameters


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

#### Response Codes

|Code|Condition|
|:--|:--|
|200|Normal end|
|400|Description exceeding the maximum length|
|-|Domain exceeding the maximum length|
|-|Invalid domain format|
|-|Invalid status|
|-|Invalid permissions|
|403|Not authenticated|
|-|Tenant is suspended|
|-|App doesn't exist|


#### Response Format

```
{
  "id": "{tenant_id}",
  "apikey": "{apikey_id}"
  "description": "<description>",
  "domains": ["<domain1>", "<domain2>"],
  "permissions": ["<permission>"],
  "status": "<status>",
  "created_at": "2016-12-09T21:50:21Z",
  "updated_at": "2016-12-09T23:20:21Z"
}
```


## Get an app secret key

### Request

#### Request URL

```
GET /tenants/{tenant_id}/apps/{app_id}/secretkey
```

#### Request Parameters

None

#### Request Format

### Response

#### Response Parameters

|Name|Type|Description|
|:--|:--|:--|
|secretkey|string|The secret key for the app|

#### Response Codes

|Code|Condition|
|:--|:--|
|200|Normal end|
|403|Not authenticated|
|-|App doesn't exist|
|-|Tenant is suspended|
|-|Tenant is Deleted|

#### Response Format

```json
{
  "secretkey": "<secretkey>"
}
```

## Regenerate app secret key

### Request

#### Request URL

```
POST /tenants/{tenant_id}/apps/{app_id}/secretkey
```

#### Request Parameters

None

#### Request Format

None

### Response

#### Response Parameters

|Name|Type|Description|
|:--|:--|:--|
|secretkey|string|The new secret key for the app|

#### Response Codes

|Code|Condition|
|:--|:--|
|200|Normal end|
|403|Not authenticated|
|-|App doesn't exist|
|-|Tenant is suspended|
|-|Tenant is Deleted|

#### Response Format

```json
{
  "secretkey": "<secretkey>"
}
```
