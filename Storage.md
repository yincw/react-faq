# Storage

客户端存储。

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
key(index) | 得到某个索引的ke
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
key(index) | 得到某个索引的ke
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

## Web SQL Database

### Web SQL

### IndexedDB

## 参考

* [html5离线存储](http://www.tuicool.com/articles/ie6zmmf)
* [【JavaScript】Cookie and Web Storage](http://blog.csdn.net/xiaozhuxmen/article/details/51945856)
* [HTML5 本地存储](http://www.cnblogs.com/-5012/p/5631893.html)
* [HTML5教程之本地存储SessionStorage](http://jingyan.baidu.com/article/414eccf6478bb66b421f0a60.html)
* [Web存储(Web Storage)介绍](http://www.wtoutiao.com/p/2971mRm.html)
