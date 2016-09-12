# Fetch API

- fetch()
- Request
- Response
- Headers

用于发起获取资源的请求。它返回一个 promise。

## 使用示例

### fetch()

```javascript
fetch(url, options).then(function (response) {
    // handle HTTP response
}, function (error) {
    // handle network error
})
```

更全面的示例。

```javascript
fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
    credentials: "same-origin"
}).then(function (response) {
    response.status     //=> number 100–599
    response.statusText //=> String
    response.headers    //=> Headers
    response.url        //=> String

    response.text().then(function(responseText) { ... })
}, function (error) {
    error.message //=> String
})
```

> 示例：请求（GET）一个 json 数据

```javascript
fetch('/posts.json').then(function (response) {
    return response.json();
}).catch(function (error) {
    console.log(error);
});
```

> 示例：提交（POST）一个表单（序列化为 JSON）信息

```javascript
fetch('/submit.php', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
    credentials: "same-origin"
}).then(function (response) {
    if (response.ok) {
        console.log('Success');
    } else {
        console.log('error');
    }
}).catch(function (error) {
    console.log(error);
});
```

> 示例：提交（POST）一个表单信息

```javascript
fetch('/submit.php', {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "firstName=Nikhil&favColor=blue&password=easytoguess"
}).then(function (response) {
    if (response.ok) {
        console.log('Success');
    } else {
        console.log('error');
    }
}).catch(function (error) {
    console.log(error);
});
```

### Request

Request 定义了 HTTP 请求获取资源的 request 格式，接受两个参数: url、options，实际中往往不需要手动 new 一个 request 对象，通过其他操作会返回一个request对象:

```javascript
new Request(url, options)
```

> url

- url (String or Request) - 要获取资源的 URL。

> options

相对于 XHR 方式，Request 对象可以很方便、明确地显示是否允许跨域(mode)、是否需要携带 cookie (credentials) 等。

- method (String) - HTTP 请求使用的方法。 默认: "GET"
- body (String, Blob, FormData...) - HTTP 请求的 body 信息。注意 GET 或 HEAD 方法的请求不能包含 body 信息。
- headers (Object, Headers) - 请求的头信息。默认: {}
- credentials (String) - 身份验证凭证模式。 默认: "omit"
    - "omit" - 省略，不包括身份验证凭证(e.g. cookies)的请求
    - "same-origin" - 同源，包括凭证请求相同的网站
    - "include" - 包括，包括凭证请求所有网站
- mode (String) - 请求的模式。
    - "cors"
    - "no-cors"
    - "same-origin"
- cache (String) - 请求的 cache 模式。
    - "default"
    - "no-store"
    - "reload"
    - "no-cache"
    - "force-cache"
    - "only-if-cached"

### Response

Response 对应 HTTP 的响应，里面包含了服务相应的相关信息，除了在service worker 中，是不需要显示创建。

> 属性

- status (number) - HTTP 响应码，在 100–599 之间
- statusText (String) - 服务器状态文本报告
- ok (boolean) - 当 status 为 2xx 是为 true
- headers (Headers) - 响应头信息
- url (String)
- body - 存储响应的内容
- type - 指明 HTTP 请求是否跨域、错误等信息

> Body 方法

无论Request还是Response，里面均存在body属性，该属性存储请求的内容，由于javascript里面数据类型的复杂性: ArrayBuffer、Blob、string、URLSearchParam、FormData，所以fetch提供了mixin类Body，用于处理不同类型的数据。

Body除了具有相关数据类型的处理方法外，还有一个字段bodyUsed，用于标示该body是否已经被读取。因为body是stream，只能被读取一次。

那么如何要多次读取body里面的内容，就需要首先进行clone。

- text() - yields the response text as String
- json() - yields the result of JSON.parse(responseText)
- blob() - yields a Blob
- arrayBuffer() - yields an ArrayBuffer
- formData() - yields FormData that can be forwarded to another request

> 其他 response 方法

- clone()
- Response.error()
- Response.redirect()

### Headers

```javascript
new Headers(hash)
```

- has(name) (boolean) - 获取
- get(name) (String) - 获取
- getAll(name) (Array) - 获取
- set(name, value) - 设置
- append(name, value) - 增加
- delete(name) - 删除
- forEach(function(value, name){ ... }, [thisContext]) - 遍历

## 功能检测

Fetch API 的支持情况，可以通过检测 Request、Response、Headers 或 fetch() 是否在 Window 或 Worker 作用域中。

## 浏览器兼容性

IE | Edge | Firefox | Chrome | Safari | Opera
---|---|---|---|---|---
- | 14+ | 39+ | 42+ | - | 29+

### 第三方 Polyfill

Fetch polyfill | IE | Edge | Firefox | Chrome | Safari | Opera
---|---|---|---|---|---|---
[fetch](https://github.com/github/fetch) | 10+ | Latest | Latest | Latest | 6.1+ | Latest
[isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) | 9+ | Latest | Latest | Latest | 6.1+ | Latest
[react-refetch](https://github.com/heroku/react-refetch) | 9+ | Latest | Latest | Latest | Latest | Latest
[fetch-ie8](https://github.com/camsong/fetch-ie8) | 8+ | Latest | Latest | Latest | 6.1+ | Latest
[natty-fetch](https://github.com/Jias/natty-fetch) | 8+ | Latest | Latest | Latest | Latest | Latest

## 参考文献

- https://fetch.spec.whatwg.org/
- http://caniuse.com/#feat=fetch
- ♥ https://github.github.io/fetch/
- ♥ https://github.com/camsong/blog/issues/2
- http://www.w3ctech.com/topic/854
- https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API
- https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
- http://bubkoo.com/2015/05/08/introduction-to-fetch/
- http://zhenhua-lee.github.io/http/fetch.html
