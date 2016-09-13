# 数据接口 - 约定

> 请求方法

"Method": "GET"

- GET    【查】获取
- POST   【增】提交
- PUT    【改】更新
- DELETE 【删】删除

> 请求内容类型及数据格式

"Content-Type": "application/json"

```javascript
{
    "Status": "",
    "Position": "",
    "ErrorCode": "",
    "Data": [
        {},
        {},
    ],
    // "Message": "",

    // "PageNumber": "",
    // "PageSize": "",

    // "": ""
}
```

> 请求携带信息 - Request Headers

Cookie（产品环境）

- token: ''   登录信息（加密，服务端使用）
- isAuthenticated: true/false  是否认证（客户端使用）

> 接口形式

- /服务/方法（/productApp/linkService, GET，POST） √
- /服务/方法/查询值/查询值（/productApp/linkService/val1/val2， GET，PUT，DELETE）
- /服务/方法?查询字符串&查询字符串（/productApp/linkService?arg1=val1&arg2=val2，GET） √

> 状态码规则 - Status

HTTP 状态码（3位） + 代码位置编码（4位） + 具体错误编码（3位）

- HTTP 状态码
    - 主要为 5xx 的服务器错误状态码
- 代码位置编码
    - 前两位代表服务位置，后两位代表方法位置
- 具体错误编码
    - 前一位代表业务线编码
    - 后两位代表具体业务错误编码

eg: 5000101001

```javascript
{
    "Status": "500",
    "Position": "0101",
    "ErrorCode": "001",
}
```

## Fetch 配置

```javascript
// ./utils/FL.js
...
FETCH: {
    GET: {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
    },
    POST: {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
    },
    FORM: {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        credentials: 'same-origin',
    },
},
...
```

## Fetch 请求

```javascript
import { FL } from './utils/FL'
import fetch from 'isomorphic-fetch'

// GET 请求
fetch('/productApp/linkService', FL.FETCH.GET).then(function (response) {
    response.json();
}).catch(function (error) {
    console.log(error);
});

// POST 请求
fetch('/productApp/linkService?name=kamen&id=1', {...FL.FETCH.POST, body: JSON.stringify(data)}).then(function (response) {
    response.json();
}).catch(function (error) {
    console.log(error);
});

// POST 请求（表单）
fetch('/productApp/linkService?name=kamen&id=1', {...FL.FETCH.FORM, body: JSON.stringify(data)}).then(function (response) {
    response.json();
}).catch(function (error) {
    console.log(error);
});
```
