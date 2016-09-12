# Redux Saga

## Middleware API

方法 | 说明
---|---
createSagaMiddleware(options) | 创建一个 Redux 中间件，将 Sagas 与 Redux Store 建立连接。
middleware.run(saga, ...args) | 动态执行 saga。用于 applyMiddleware 阶段之后执行 Sagas。

> createSagaMiddleware(options)

创建一个 Redux 中间件，将 Sagas 与 Redux Store 建立连接。

* http://yelouafi.github.io/redux-saga/docs/api/index.html#createsagamiddlewareoptions
* http://leonshi.com/redux-saga-in-chinese/docs/api/index.html#createsagamiddlewaresagas

> middleware.run(saga, ...args)

动态执行 saga。用于 applyMiddleware 阶段之后执行 Sagas。

* saga: Function: 一个 Generator 函数
* args: Array: 提供给 saga 的参数 (除了 Store 的 getState 方法)

* http://yelouafi.github.io/redux-saga/docs/api/index.html#middlewarerunsaga-args
* http://leonshi.com/redux-saga-in-chinese/docs/api/index.html#middlewarerunsaga-args

## Saga 辅助函数（Helpers）

方法 | 说明
---|---
takeEvery(pattern, saga, ...args) | 在发起的 action 与 pattern 匹配时派生指定的 saga。
takeLatest(pattern, saga, ..args) | 在发起的 action 与 pattern 匹配时派生指定的 saga。并且自动取消之前启动的所有 saga 任务（如果在执行中）。

> takeEvery(pattern, saga, ...args)

在发起的 action 与 pattern 匹配时派生指定的 saga。

takeEvery 允许处理并发的 action。

takeEvery 不会对多个任务的响应返回进行排序，并且也无法保证任务将会按照启动的顺序结束。如果要对响应进行排序，可以关注以下的 takeLatest。

> takeLatest(pattern, saga, ..args)

在发起的 action 与 pattern 匹配时派生指定的 saga。并且自动取消之前启动的所有 saga 任务（如果在执行中）。

## Effect 创建器（creators）

方法 | 说明
---|---
take(pattern) | 创建一条 Effect 描述信息，指示 middleware 等待 Store 上指定的 action。 Generator 会暂停，直到一个与 pattern 匹配的 action 被发起。
takem(pattern) |
take(channel) |
takem(channel) |
put(action) |  创建一条 Effect 描述信息，指示 middleware 发起一个 action 到 Store。
put(channel, action) |
call(fn, ...args) | 创建一条 Effect 描述信息，指示 middleware 调用 fn 函数并以 args 为参数。
call([context, fn], ...args) | 类似 call(fn, ...args)，但支持为 fn 指定 this 上下文。用于调用对象的方法。
apply(context, fn, args) | 类似 call([context, fn], ...args)
cps(fn, ...args) | 创建一条 Effect 描述信息，指示 middleware 以 Node 风格调用 fn 函数。
cps([context, fn], ...args) | 支持为 fn 指定 this 上下文（调用对象方法）。
fork(fn, ...args) | 创建一条 Effect 描述信息，指示 middleware 以 无阻塞调用 方式执行 fn。
fork([context, fn], ...args) | 支持为 fn 指定 this 上下文（调用对象方法）。
spawn(fn, ...args) |
spawn([context, fn], ...args) |
join(task) | 创建一条 Effect 描述信息，指示 middleware 等待之前的 fork 任务返回结果。
cancel(task) | 创建一条 Effect 描述信息，指示 middleware 取消之前的 fork 任务。
select(selector, ...args) | 创建一条 Effect 描述信息，指示 middleware 调用提供的选择器获取 Store state 上的数据（例如，返回 selector(getState(), ...args) 的结果）。
actionChannel(pattern, [buffer]) |
cancelled() |

## Effect 组合器（combinators）

方法 | 说明
---|---
race(effects) | 创建一条 Effect 描述信息，指示 middleware 在多个 Effect 之间执行一个 race（类似 Promise.race([...]) 的行为）。
[...effects] (并行的 effects) | 创建一条 Effect 描述信息，指示 middleware 并行执行多个 Effect，并等待所有 Effect 完成。

## 接口（Interfaces）

方法 | 说明
---|---
Task |
Channel |
Buffer |
SagaMonitor |

## External API

方法 | 说明
---|---
runSaga(iterator, options) |

## Utils

方法 | 说明
---|---
channel([buffer]) |
eventChannel(subscribe, [buffer], matcher) |
buffers |
delay(ms, [val]) |
