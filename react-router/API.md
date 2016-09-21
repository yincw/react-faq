# React Router

> "react-router": "^2.6.1"

* `<Router>`
* `<Route>`
* `<IndexRoute>`
* `<Redirect>`
* `<IndexRedirect>`
* `<Link>`
* `<IndexLink>`
* `withRouter()`

## `<Router>`

路由定义容器。

属性 | 说明
--- | ---
history | 用来监听浏览器地址栏的变化，并将 URL 解析成一个地址对象，供 React Router 匹配。
routes | 定义子路由

> history

history 属性，一共可以设置三种值。

值 | 说明 | 示例
--- | --- | ---
hashHistory | 路由将通过 URL 的 hash 部分（#）切换。 | `example.com/#/some/path`
browserHistory | 浏览器的路由就不再通过 hash 完成了，而显示正常的路径，背后调用的是浏览器的 History API。但是，这种情况需要对服务器改造，否则用户直接向服务器请求某个子路由，或显示网页找不到的 404 错误。 | `example.com/some/path`
createMemoryHistory | 主要用于服务器渲染。它创建一个内存中的 history 对象，不与浏览器 URL 互动。 | -

## `<Route>`

路由定义。

属性 | 说明
--- | ---
path | 指定路由的匹配规则。这个属性可以省略，省略的话，不管路径是否匹配，总是会加载指定的组件。
component | 加载的组件
this.props.children | 定义子组件
this.props.params.paramName | 获取 URL 中的 paramName 参数
this.props.location.query.bar | 获取 URL 的查询字符串 `?bar=baz` bar 的值
onEnter | 用户进入该路由时触发
onLeave | 用户离开该路由时触发

> path

path 属性可以使用通配符，通配符规则如下：

通配符 | 说明
--- | ---
`:paramName` | 匹配 URL 的一个部分，直到遇到下一个 `/`、`?`、`#` 为止。这个路径参数可以通过 `this.props.params.paramName` 取出。
`()` | 表示 URL 的这个部分是可选的。
`*` | 匹配任意字符，直到模式里面的下一个字符为止。匹配方式是非贪婪模式。
`**` | 匹配任意字符，直到下一个 `/`、`?`、`#` 为止。匹配方式是贪婪模式。

```javascript
<Route path="/hello/:name" />
// 匹配 /hello/michael
// 匹配 /hello/ryan

<Route path="/hello(/:name)" />
// 匹配 /hello
// 匹配 /hello/michael
// 匹配 /hello/ryan

<Route path="/files/*.*" />
// 匹配 /files/hello.jpg
// 匹配 /files/hello.html

<Route path="/files/*" />
// 匹配 /files/
// 匹配 /files/a
// 匹配 /files/a/b

<Route path="/**/*.jpg" />
// 匹配 /files/path/to/file.jpg
// 匹配 /files/hello.jpg
```

path 属性也可以使用相对路径（不以 `/` 开头），匹配时就会相对于父组件的路径。嵌套路由如果想摆脱这个规则，可以使用绝对路径。

路由匹配规则是从上到下执行，一旦发现匹配，就不再执行其余的规则了。因此，带参数的路径一般要写在路由规则底部。

此外，URL 的查询字符串 `/foo?bar=baz`，可以用 `this.props.location.query.bar` 获取。

## `<IndexRoute>`

显式指定根路由的子组件，即指定默认情况下加载的子组件。可以把 `<IndexRoute>` 想象成某个路径的 `index.html`。

属性 | 说明
--- | ---
component | 加载的组件
onEnter | 用户进入该路由时触发
onLeave | 用户离开该路由时触发

注意， `<IndexRoute>` 组件没有路径参数 path。

## `<Redirect>`

用于路由的跳转，即用户访问一个路由，会自动跳转到另一个路由。

属性 | 说明
--- | ---
from | 访问的路由匹配
to | 跳转到的路由匹配
onEnter | 用户进入该路由时触发
onLeave | 用户离开该路由时触发

## `<IndexRedirect>`

用于访问根路由的时候，将用户重定向到另一个路由。

属性 | 说明
--- | ---
to | 重定向的路由匹配
onEnter | 用户进入该路由时触发
onLeave | 用户离开该路由时触发

---

## `<Link>`

用于取代 `<a>` 元素，生成一个连接，允许用户点击后跳转到另一个路由。它基本上就是 `<a>` 元素的 React 版本，可以接收 Router 的状态。

属性 | 说明
--- | ---
to | 跳转到的路由匹配
activeStyle | 设置当前路由的样式，使用 style 属性
activeClassName | 设置当前路由的样式，使用 class 属性
onlyActiveOnIndex | 设置是否精确匹配，布尔值
onEnter | 用户进入该路由时触发
onLeave | 用户离开该路由时触发

在 Router 组件之外，导航到路由页面，可以使用浏览器的 History API，像下面这样写。

```javascript
import { browserHistory } from 'react-router';
browserHistory.push('/some/path');
```

## `<IndexLink>`

用于连接到跟路由。不要使用 `<Link>`，这是因为对于跟路由来说，`activeStyle` 和 `activeClassName` 会失效，或者说总是生效，因为 `/` 会匹配任何子路由。而 `<IndexLink>` 组件会使用路径的精确匹配。

属性 | 说明
--- | ---
to | 跳转到的路由匹配
activeStyle | 设置当前路由的样式，使用 style 属性
activeClassName | 设置当前路由的样式，使用 class 属性
onEnter | 用户进入该路由时触发
onLeave | 用户离开该路由时触发

实际上，`<IndexLink>` 就是对 `<link>` 组件的 `onlyActiveOnIndex` 属性的包装。

## `withRouter()`

https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.4.0.md

## 参考

* http://www.ruanyifeng.com/blog/2016/05/react_router.html
* https://github.com/reactjs/react-router-tutorial
* http://react-guide.github.io/react-router-cn/index.html
* http://stackoverflow.com/questions/32833068/react-router-appending-query-to-url
* https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.0.0.md#using-history-with-router
