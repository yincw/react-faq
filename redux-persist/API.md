# Redux Persist

> "redux-persist": "^4.0.0-beta1",

## 推荐阅读

- https://github.com/rt2zz/redux-persist#api

## API

### persistStore(store [,config, callback])

> store

redux store，被持久化的存储。

> config

对象

键 | 值类型 | 说明
---|---|---
blacklist | array | 黑名单，需要忽略的键（读取：reducers）。
whitelist | array | 白名单，需要持久化的键（读取：reducers），如果设置，所有其它的键集将被忽略。
storage | object | 一个符合标准的存储引擎。
transforms | array | transforms 应用于在 storage 期间 和在 rehydration 期间。
debounce | integer | 防抖动间隔，应用于 storage 调用。
keyPrefix | string | 改变 localstorage 默认键 (默认：reduxPersist:)

> callback

函数，将在 rehydration 完成之后调用。

### autoRehydrate(config)

- 这个 store 的增强剂会自动为每个键浅合并持续状态。此外，队列的任何动作会在 rehydration 完成之前派出。并直到 rehydration 结束之后为止。
