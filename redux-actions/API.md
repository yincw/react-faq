# redux-actions

方法 | 说明
---|---
createAction(type, payloadCreator = Identity, ?metaCreator) | -
createActions(?actionMap, ?...identityActions) | -
handleAction(type, reducerMap = Identity, defaultState) | -
handleActions(reducerMap, defaultState) | -
combineActions(...types) | -


> `createAction(type, payloadCreator = Identity, ?metaCreator)`

~~Wraps an action creator so that its return value is the payload of a Flux Standard Action.~~

包装一个 action 的创造者，它的返回值是一个 Flux 标准 Action 的 payload。

~~`payloadCreator` must be a function, `undefined`, or `null`. If `payloadCreator` is `undefined` or `null`, the identity function is used.~~

`payloadCreator` 必须是一个函数，`undefined`，或 `null`。如果 `payloadCreator` 是 `undefined` 或 `null`，使用 identity 函数。

~~If the payload is an instance of an Error object, redux-actions will automatically set `action.error` to true.~~

如果 payload 是一个 Error 对象的实例，redux-actions 将自动设置 `action.error` 为 true。

~~`createAction` also returns its `type` when used as type in `handleAction` or `handleActions`.~~

`createAction` 也返回它的 `type`，当使用 type 在 `handleAction` 或 `handleActions` 时。

~~`metaCreator` is an optional function that creates metadata for the payload. It receives the same arguments as the payload creator, but its result becomes the meta field of the resulting action. If `metaCreator` is undefined or not a function, the meta field is omitted.~~

`metaCreator` 是一个可选的函数，创建 payload 元数据。 它接收相同的参数作为 payload 的创造者，但其结果成为生成 action 的 meta 字段。如果 `metaCreator` 是未定义或不是一个函数，meta 字段被省略。

```javascript
import { createAction } from 'redux-actions'
```

> `createActions(?actionMap, ?...identityActions)`

~~Returns an object mapping action types to action creators. The keys of this object are camel-cased from the keys in `actionMap` and the string literals of `identityActions`; the values are the action creators.~~

返回一个映射 action 类型到 action 创建者的对象。在 `actionMap` 中，这个对象的键是驼峰式的，且 `identityActions` 是字符串常量。值是 action 的创建者。

~~`actionMap` is an optional object and a recursive data structure, with action types as keys, and whose values **must** be either~~

`actionMap` 是一个可选的对象和一个递归的数据结构，用 action 类型作为键，且值必须是下列情形之一。

- ~~a function, which is the payload creator for that action~~
- 一个函数，它是 action 的 payload 创造者。
- ~~an array with `payload` and `meta` functions in that order, as in `createAction`~~
- 一个由 `payload` 和 `meta` 功能按顺序组成的数组。如 `createAction` 中。
    - `meta` is **required** in this case (otherwise use the function form above)
    - 在这种情况下，`meta` 是 **必须的**（否则使用上面的函数形式）
- ~~an `actionMap`~~
- 一个 `actionMap`

~~`identityActions` is an optional list of positional string arguments that are action type strings; these action types will use the identity payload creator.~~

`identityActions` 是一个可选的 action 类型字符串的字符串参数位置列表；这些 action 类型将使用一致的 payload 创建者。

```javascript
import { createActions } from 'redux-actions'
```

> `handleAction(type, reducer | reducerMap = Identity, defaultState)`

~~Wraps a reducer so that it only handles Flux Standard Actions of a certain type.~~

包装一个 reducer，它只处理 Flux 标准的 Actions 的某种类型。

~~If a `reducer` function is passed, it is used to handle both normal actions and failed actions. (A failed action is analogous to a rejected promise.) You can use this form if you know a certain type of action will never fail, like the increment example above.~~

如果传递一个 `reducer` 函数，它是用来处理正常 actions 和 失败的 actions。（一个失败的 action 类似于一个被拒绝的 promise。）你可以使用这个表单，如果你知道某种类型的 action 永远不会失败。像上面的增量示例。

~~Otherwise, you can specify separate reducers for `next()` and `throw()` using the `reducerMap` form. This API is inspired by the ES6 generator interface.~~

否则，你可以使用 `reducerMap` 的 `next()` 和 `throw()` 指定单独的 reducers，这个 API 是受 ES6 generator 接口的启发。

~~If either `next()` or `throw()` are `undefined` or `null`, then the identity function is used for that reducer.~~

如果 `next()` 或 `throw()` 的任何一个是 `undefined` 或 `null`，那么 identity 函数将被用于 reducer。

~~If the reducer argument (`reducer` | `reducerMap`) is `undefined`, then the identity function is used.~~

如果 reducer 参数（`reducer` | `reducerMap`） 是 `undefined`，那么 identity 函数将被使用。

~~The third parameter `defaultState` is required, and is used when `undefined` is passed to the reducer.~~

第三个参数 `defaultState` 是必须的，当 `undefined` 被传递给 reducer 时使用。

```javascript
import { handleAction } from 'redux-actions'
```

> `handleActions(reducerMap, defaultState)`

~~Creates multiple reducers using `handleAction()` and combines them into a single reducer that handles multiple actions. Accepts a map where the keys are passed as the first parameter to `handleAction()` (the action type), and the values are passed as the second parameter (either a reducer or reducer map). The map must not be empty.~~

使用 `handleAction()` 创建多个 reducers，并将其合并成一个 reducer 来处理多个 actions。接受一个映射的键作为第一个参数传递给 `handleAction()`（action 类型），和作为第二个参数传递的值（reducer 或 reducer map 其一）。map 必须不能为空。

~~The second parameter `defaultState` is required, and is used when `undefined` is passed to the reducer.~~

第二个参数 `defaultState` 是必须的，且当 `undefined` 被传递到 reducer 时使用。

~~(Internally, `handleActions()` works by applying multiple reducers in sequence using reduce-reducers.)~~

（在内部， `handleActions()` 工作通过使用 reduce-reducers 依次应用多个 reducers）.

```javascript
import { handleActions } from 'redux-actions'
```

> `combineActions(...types)`

~~Combine any number of action types or action creators. `types` is a list of positional arguments which can be action type strings, symbols, or action creators.~~

合并任意数量的 action 类型或 action 创建者。`types` 是一个位置参数的列表，可以是 action 类型字符串，symbols，或 action 创建者。

~~This allows you to reduce multiple distinct actions with the same reducer.~~

这可以减少多个不同的 action 与 相同的 reducer。

```javascript
import { combineActions } from 'redux-actions'
```

## 参考文献

- https://github.com/acdlite/redux-actions
