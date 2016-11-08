# Redux Auth Wrapper

> "redux-auth-wrapper": "^0.8.0",

## 推荐阅读

- https://github.com/mjrussell/redux-auth-wrapper#api

## 动机

首先，在 React-Router 和 Redux 中处理验证和授权视乎很容易。毕竟，我们有一个 onEnter 方法。我们不应该使用它吗？

`onEnter` 是伟大的，在某些情况下很有用。然而，这里有一些常见的身份验证和授权的问题， `onEnter` 并不能解决：

- 从 redux 存储数据中解决认证/授权（有一些 [方法](https://github.com/CrocoDillon/universal-react-redux-boilerplate/blob/master/src/routes.jsx#L8)）
- 如果 store 更新后重新检查认证/授权（但不是当前路由）
- 如果在一个受保护的路由中改变一个子路由时重新检查认证/授权（React Router 2.0 现在支持 `onChange`）

另一种方法是使用高阶组件。

> A higher-order component is just a function that takes an existing component and returns another component that wraps it

Redux-auth-wrapper 提供高阶组件，易于阅读和应用身份验证和授权约束到你的组件。

## UserAuthWrapper(configObject)(DecoratedComponent)

> 配置对象键 - Config Object Keys

键值对 | 类型 | 说明
---|---|---
`authSelector(state, [ownProps], [isOnEnter]): authData` | Function | 选择身份验证数据。就像 `mapToStateProps`。 如果 isOnEnter 为 true，ownProps 将是 null 。因为 onEnter 钩子不能接收组件属性。不使用 onEnter 时可以忽略。
`authenticatingSelector(state, [ownProps]): Bool` | Function | 如果用户目前正在进行身份验证，状态选择器指示。就像 `mapToStateProps`。 用于异步会话加载。
`LoadingComponent` | Component | 当 `authenticatingSelector` 为 `true` 时，渲染的一个 React 组件。将所有属性传递到包装组件，包括 `children`.
`FailureComponent` | Component | 当 `authenticatingSelector` 为 `false` 时，渲染的一个 React 组件。如果指定，包装器不会重定向。当用户未被认证/授权时，可以设置为 `null` 来显示什么。
`[failureRedirectPath]` | String / (state, [ownProps]): String | 可选，在一个错误的检查时重定向浏览器的路径。默认为 `/login`。也可以是一个 state 的函数和返回字符串的 ownProps。
`[redirectQueryParamName]` | String |  可选，当 `allowRedirectBack` 为 `true` 时，查询参数的名称。默认为 `redirect`。
`[redirectAction]` | Function | 可选，redux action 创建者来重定向用户。如果不存在，将使用 React-Router 路由器上下文来执行转换。
`[wrapperDisplayName]` | String | 可选，描述这种身份验证或授权检查的名称。它将显示在 React-devtools。默认为 `UserAuthWrapper`。
`[predicate(authData): Bool]` | Function | 可选，通过 `authSelector` 返回的参数的函数。如果它的求值为 false，浏览器将被重定向到 `failureRedirectPath`，否则将渲染 `DecoratedComponent` 。默认情况下，如果 `authData` 为 {} 或 null，它返回 false。
`[allowRedirectBack]` | Bool | 可选， 是否应用 `redirect` 查询参数到 `failureRedirectPath` 的布尔值。默认为 `true`。

使用实例：

```
// 默认重定向到 /login
const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user, // 如何获取用户状态
  redirectAction: routerActions.replace, // 重定向时派发的 redux action
  wrapperDisplayName: 'UserIsAuthenticated' // 这个身份检查的一个很好听的名字
})
```

> 返回 - Returns

应用 configObject 之后， `UserAuthWrapper` 返回一个函数，可用于身份验证和授权检查的包装组件。函数也有额外的如下属性：

键值对 | 类型 | 说明
---|---|---
`onEnter(store, nextState, replace)` | Function | 一个可选的，在 route 上使用的 onEnter 属性的函数。

> 组件参数 - Component Parameter

键值对 | 类型 | 说明
---|---|---
`DecoratedComponent` | React Component | 被包裹在身份验证检查中的组件。它将返回的所有属性给组件，以及 `authData` 属性， 这是 `authSelector` 返回的结果。组件不会被修改，所有静态属性被挂载到返回的组件上。
