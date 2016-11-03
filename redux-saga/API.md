# Redux Saga

> "redux-saga": "^0.12.1",

## 推荐阅读

- http://yelouafi.github.io/redux-saga/docs/api/index.html
- http://leonshi.com/redux-saga-in-chinese/docs/api/index.html
- https://zhuanlan.zhihu.com/p/23012870
- https://zhuanlan.zhihu.com/p/21399936
- https://zhuanlan.zhihu.com/p/22405838
- https://www.zhihu.com/question/39456161
- https://www.zhihu.com/question/50124943?from=profile_question_card
- http://wecodetheweb.com/2016/01/23/handling-async-in-redux-with-sagas/

## 中间件 API - Middleware API

方法 | 说明
---|---
**createSagaMiddleware(options)** | 创建一个 Redux 的中间件，将 Sagas 与 Redux Store 建立连接。
**middleware.run(saga, ...args)** | 动态执行 saga。用于 applyMiddleware 阶段之后执行 Sagas。

## Saga 辅助函数 - Saga Helpers

方法 | 说明
---|---
**takeEvery(pattern, saga, ...args)** | 在发起的 action 与 pattern 匹配时派生指定的 saga。
**takeLatest(pattern, saga, ..args)** | 在发起的 action 与 pattern 匹配时派生指定的 saga。并且自动取消之前启动的所有 saga 任务（如果在执行中）。
throttle(ms, pattern, saga, ..args) | -

## Effect 创建器 - Effect creators

方法 | 说明
---|---
**take(pattern)** | 创建一条 Effect 描述信息，指示 middleware 等待 Store 上指定的 action。 Generator 会暂停，直到一个与 pattern 匹配的 action 被发起。【监听且只监听一次 action】
takem(pattern) | -
take(channel) | -
takem(channel) | -
**put(action)** | 创建一条 Effect 描述信息，指示 middleware 发起一个 action 到 Store。**作用与 Redux 中的 dispatch 相同**
put.sync(action) | -
put(channel, action) | -
**call(fn, ...args)** | 创建一条 Effect 描述信息，指示 middleware 调用 fn 函数并以 args 为参数。【阻塞地调用一个函数】
call([context, fn], ...args) | -
apply(context, fn, args) | -
cps(fn, ...args) | -
cps([context, fn], ...args) | -
**fork(fn, ...args)** | 创建一条 Effect 描述信息，指示 middleware 以 无阻塞调用 方式执行 fn。【非阻塞地调用一个函数】
fork([context, fn], ...args) | -
spawn(fn, ...args) | -
spawn([context, fn], ...args) | -
join(task) | -
cancel(task) | -
**select(selector, ...args)** | 创建一条 Effect 描述信息，指示 middleware 调用提供的选择器获取 Store state 上的数据（例如，返回 selector(getState(), ...args) 的结果）。
actionChannel(pattern, [buffer]) | -
flush(channel) | -
cancelled() | -

## Effect 组合器 - Effect combinators

方法 | 说明
---|---
race(effects) | 创建一条 Effect 描述信息，指示 middleware 在多个 Effect 之间执行一个 race（类似 Promise.race([...]) 的行为）。【只处理最先完成的任务】
[...effects] (并行的 effects) | 创建一条 Effect 描述信息，指示 middleware 并行执行多个 Effect，并等待所有 Effect 完成。

## 接口 - Interfaces

方法 | 说明
---|---
Task | -
Channel | -
Buffer | -
SagaMonitor | -

## 外部 API - External API

方法 | 说明
---|---
**runSaga(iterator, options)** | 允许在 Redux middleware 环境外部启动 sagas。当你想将 Saga 连接至外部的输入和输出（译注：即在外部执行 Saga）时，而不是 store 的 action，会很有用。

## 实用工具 - Utils

方法 | 说明
---|---
channel([buffer]) | -
eventChannel(subscribe, [buffer], matcher) | -
buffers | -
**delay(ms, [val])** | 返回一个 Promise，这将在 ms 毫秒之后解决 val。【延迟】
