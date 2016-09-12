# Redux

> 相关概念

* Store
* Action
* Reducers
* Middleware

> API

* `createStore(reducer, [initialState])` 创建 store
* `combineReducers(reducers)` 将多个 reducer 合并成一个 rootReducer
* `bindActionCreators(actionCreators, dispatch)` 自动完成 dispatch
* `applyMiddleware(...middlewares)` 定制 dispatch 及执行的时机
* `compose(...functions)`

### `createStore(reducer, [initialState])`

http://cn.redux.js.org/docs/api/createStore.html

 方法 | 说明
 --- | ---
`getState()` | 获取 state；读取 store 里面的 state
`dispatch(action)` | 更新 state；用于 action 的分发，改变 store 里面的 state
`subscribe(listener)` | 注册监听器，返回的函数注销监听器；store 里面 state 发生改变后，执行该 listener
`replaceReducer(nextReducer)` | 替换 reducer，改变 state 修改的逻辑

http://cn.redux.js.org/docs/api/Store.html

### `combineReducers(reducers)`

http://cn.redux.js.org/docs/api/combineReducers.html

### `bindActionCreators(actionCreators, dispatch)`

http://cn.redux.js.org/docs/api/bindActionCreators.html

### `applyMiddleware(...middlewares)`

http://cn.redux.js.org/docs/api/applyMiddleware.html

### `compose(...functions)`

http://cn.redux.js.org/docs/api/compose.html
