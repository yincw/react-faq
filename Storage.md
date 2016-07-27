# Storage

客户端存储。

特性 | Cookie | localStorage | sessionStorage
---|---|---|---
数据的生命期 | 一般由服务器生成，可设置失效时间。如果在浏览器端生成 Cookie，默认是关闭浏览器后失效 | 除非被清除，否则永久保存 | 仅在当前会话下有效，关闭页面或浏览器后被清除
存放数据大小 | 4K 左右 | 一般为 5MB | 同 localStorage
与服务器端通信 | 每次都会携带在 HTTP 头中，如果使用 Cookie 保存过多数据会带来性能问题 | 仅在客户端（即浏览器）中保存，不参与和服务器的通信 | 同 localStorage
易用性 | 需要开发者自己封装，原生的 Cookie 接口不友好 | 原生接口可以接受，亦可再次封装对 Object 和 Array 有更好的支持 | 同 localStorage

## Web Storage

### Local Storage - 本地存储（localStorage）

> 特点

* 有同源（相同的域名、协议和端口）限制
* 永久存储（除非手动清除）
* 可跨窗口（或标签页）共享
* 存储大小限制达 5M 或以上

> 浏览器兼容性

IE | Firefox | Chrome | Safari | Opera
---|---|---|---|---
8+ | 3.5+ | 4+ | 4+ | 11.5+

> API

方法 | 说明
---|---
getItem(name) | 获取项
setItem(name, value) | 设置项
removeItem(name) | 移除项
clear() | 清除全部
key(index) | 得到某个索引的 key
length |
toLocaleString() |
toString() |
valueOf() |

### Session Storage - 会话存储（sessionStorage）

> 特点

* 有同源限制
* 退出浏览器自动清除
* 不可跨窗口（或标签页）共享
* 存储大小限制达 5M 左右或以上

> 浏览器兼容性

IE | Firefox | Chrome | Safari | Opera
---|---|---|---|---
8+ | 3.5+ | 4+ | 4+ | 11.5+

> API

方法 | 说明
---|---
getItem(name) | 获取项
setItem(name, value) | 设置项
removeItem(name) | 移除项
clear() | 清除全部
key(index) | 得到某个索引的  key
length |
toLocaleString() |
toString() |
valueOf() |

## Cookies

Cookie 需要开发者自己封装 setCookie，getCookie 等方法。但是 Cookie 也是不可或缺的。
Cookie 用于与服务器进行交互，作为 HTTP 规范的一部分存在，而 Web Storage 仅仅是为了在本地“存储”数据而生。

> 特点

* 有同源限制
* 始终在同源的 HTTP 请求中携带
* 永久存储（除非设置过期时间）
* 可跨窗口（Tab 页）共享
* 存储大小限制不超过 4k 左右
* 支持限制在某个路径（path）下

> 浏览器兼容性

IE | Firefox | Chrome | Safari | Opera
---|---|---|---|---
6+ | 3+ | 1+ | 4+ | 10+

> API

Cookie 作为 HTTP 规范的一部分存在，无原生 JS API 供使用。可使用如下一些第三方开源库获取 Cookie 信息。

* [jquery.cookie](https://github.com/carhartl/jquery-cookie)
* [store.js](https://github.com/marcuswestin/store.js)
* [Cookies](https://github.com/ScottHamper/Cookies)

```javascript
// 设置一个 cookie 值
Cookies.set('key', 'value');

// 链式调用
Cookies.set('key', 'value').set('hello', 'world');

// 可以额外设置一些参数
Cookies.set('key', 'value', { domain: 'www.example.com', secure: true });

// 设置缓存时间
Cookies.set('key', 'value', { expires: 600 }); // 10 分钟内到期
Cookies.set('key', 'value', { expires: '01/01/2012' });
Cookies.set('key', 'value', { expires: new Date(2012, 0, 1) });
Cookies.set('key', 'value', { expires: Infinity });

// 获取
Cookies.get('key');
```

## 参考

* [html5离线存储](http://www.tuicool.com/articles/ie6zmmf)
* [【JavaScript】Cookie and Web Storage](http://blog.csdn.net/xiaozhuxmen/article/details/51945856)
* [HTML5 本地存储](http://www.cnblogs.com/-5012/p/5631893.html)
* [HTML5教程之本地存储SessionStorage](http://jingyan.baidu.com/article/414eccf6478bb66b421f0a60.html)
* [Web存储(Web Storage)介绍](http://www.wtoutiao.com/p/2971mRm.html)
