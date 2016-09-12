# HTML `<meta>` 元素

HTML meta 的信息包含很广，有针对 SEO 的，也有针对移动设备的。

## 相关属性

属性 | 说明
---|---
`name` | 设置文档元数据。
`http-equiv` | 设置编译指示。
`content` | 给文档元数据或编译指示的值，当元素用于这些目的。
`charset` | 指定文档使用的字符编码。

```javascript
<meta name="" content="">
<meta http-equiv="" content="">
<meta charset="">
```

## 相关值

> `name` = string

设置文档元数据。

值 | 说明
---|---
`application-name` | 给 Web 应用程序页面的一个名称。
`author` | 给页面的一个作者的名字。【SEO】
`description` | **页面的描述。【SEO】**
`generator` | 标识一个用于生成文档的软件包。
`keywords` | **给页面相关的关键字。【SEO】**
`renderer` | **设置渲染引擎。**
`viewport` | **设置视口设置。【移动设备】**
`robots` | 指定页面搜索引擎索引的方式。通常有如下几种取值：none，noindex，nofollow，all，index 和 follow。【SEO】
`apple-mobile-web-app-title` | 添加到主屏后的标题（IOS 6新增）。【移动设备】
`apple-mobile-web-app-capable` | 是否启用 WebApp 全屏模式。【移动设备】
`apple-mobile-web-app-status-bar-style` | 设置状态栏的颜色，需配合 apple-mobile-web-app-capable 使用。【移动设备】
`msapplication-TileColor` | Windows 8 磁贴颜色。【移动设备】
`msapplication-TileImage` | Windows 8 磁贴图标。【移动设备】
`msapplication-TileImage` | Windows 8 磁贴图标。【移动设备】
`format-detection` | 禁止自动识别数字为电话号码，`<meta name="format-detection" content="telephone=no" />`；禁止 Android 识别邮箱，`<meta name="format-detection" content="email=no" />`。【移动设备】

其他值：

https://wiki.whatwg.org/wiki/MetaExtensions

> `http-equiv` = string

设置编译指示。

值 | 说明
---|---
`content-language` | 设置 pragma-set 默认语言。
`content-type` | 设置字符集属性的另一种形式。
`default-style` 或 `content-style-type` | 设置默认的名称替代样式表设置。
`refresh` | 作为定时定向。
`set-cookie` | 给页面设置 Cookie。
`Allow` | 定义服务器允许的方法(GET、POST 等)。
`Content-Encoding` | 定义了返回的数据的编码类型。
`Content-Length` | 定义返数据的长度。
`Date` | 文件创建日期。
`Expires` | 有效期。
`Last-Modified` | 文档最后修改日期。
`Location` | 绝对 URL 指向该文档。
`X-UA-Compatible` | **指定文档的 IE 兼容模式。**
`Pragma` | 禁止浏览器才能从本地缓存中访问页面内容，`<meta http-equiv="Pragma" content="no-cache">`。
`Cache-Control` | 指定请求和响应遵循的缓存机制，`<meta http-equiv="Cache-Control" content="no-siteapp">`。

其他值：

https://wiki.whatwg.org/wiki/PragmaExtensions

> `content` = string

给文档元数据或编译指示的值，当元素用于这些目的。

> `charset` = string

指定文档使用的字符编码。

## 使用示例

```javascript
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="renderer" content="webkit">
```

## 参考文献

- https://www.w3.org/wiki/HTML/Elements/meta
- https://www.w3.org/TR/html5/document-metadata.html#meta
- https://segmentfault.com/a/1190000002407912
- http://www.w3cfuns.com/notes/16330/8c3d7351f56c9b4d43d7c7bc58db8640.html
- http://www.haorooms.com/post/html_meta_ds
