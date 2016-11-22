# Reselect

> "reselect": "^2.5.4",

- Selectors can compute derived data, allowing Redux to store the minimal possible state.
- 选择器可以计算派生数据, 允许 Redux 的 store 最小可能的 state。
- Selectors are efficient. A selector is not recomputed unless one of its arguments change.
- 选择器是有效的。选择器不重新计算，除非改变它其中的一个参数。
- Selectors are composable. They can be used as input to other selectors.
- 选择器是可组合的。他们可以用作输入其他选择器。

## 使用目的

- 数据的过滤和筛选
- reselect：store 的 select 方案，用于提取数据的筛选逻辑，让组件保持简单，选 reselect 看重的是 **可组合性** 和 **缓存机制**。
- reselect 这个项目提供了带 cache 功能的 selector。如果 Store/State 和构造 view 的参数没有变化，那么每次 Component 获取的数据都将来自于上次调用/计算的结果。得益于 Store/State Immutable 的本质，状态变化的检测是非常高效的。

## 推荐阅读

- https://github.com/reactjs/reselect#api
- http://www.jianshu.com/p/3334467e4b32
- https://github.com/sorrycc/blog/issues/1?utm_source=tuicool&utm_medium=referral
- https://zhuanlan.zhihu.com/p/22405838
- https://segmentfault.com/a/1190000006120707
- https://segmentfault.com/a/1190000003811803

## API

- createSelector(...inputSelectors | [inputSelectors], resultFunc)
- defaultMemoize(func, equalityCheck = defaultEqualityCheck)
- createSelectorCreator(memoize, ...memoizeOptions)
- createStructuredSelector({inputSelectors}, selectorCreator = createSelector)

### createSelector(...inputSelectors | [inputSelectors], resultFunc)

Takes one or more selectors, or an array of selectors, computes their values and passes them as arguments to `resultFunc`.

需要一个或多个选择器，或一组选择器，计算它们的值并将它们作为参数传递到 `resultFunc`。

`createSelector` determines if the value returned by an input-selector has changed between calls using reference equality (`===`). Inputs to selectors created with `createSelector` should be immutable.

`createSelector` 通过输入选择器之间的调用，使用全等号（`===`），决定了返回值的变化。用 `createSelector` 创建的输入选择器应该是不可变的。

Selectors created with `createSelector` have a cache size of 1. This means they always recalculate when the value of an input-selector changes, as a selector only stores the preceding value of each input-selector.

用 `createSelector` 创建的选择器有一个大小为 1 的缓存。这意味着当输入选择器的值发生改变时他们总是重新计算。作为一个选择器，只存储每个输入选择器之前的值。

```
const mySelector = createSelector(
  state => state.values.value1,
  state => state.values.value2,
  (value1, value2) => value1 + value2
)

// You can also pass an array of selectors
// 你也可以通过一组选择器
const totalSelector = createSelector(
  [
    state => state.values.value1,
    state => state.values.value2
  ],
  (value1, value2) => value1 + value2
)
```

It can be useful to access the props of a component from within a selector. When a selector is connected to a component with `connect`, the component props are passed as the second argument to the selector:

它可以用于从内部组件的选择器访问 props。当用 `connect` 连接一个选择器到组件时，组件的 props 作为第二个参数传递给选择器：

```
const abSelector = (state, props) => state.a * props.b

// props only (ignoring state argument)
// 只有 props（忽略 state 参数）
const cSelector =  (_, props) => props.c

// state only (props argument omitted as not required)
// 只有 state（props 参数省略，不是必须的）
const dSelector = state => state.d

const totalSelector = createSelector(
  abSelector,
  cSelector,
  dSelector,
  (ab, c, d) => ({
    total: ab + c + d
  })
)
```

### defaultMemoize(func, equalityCheck = defaultEqualityCheck)

`defaultMemoize` memoizes the function passed in the func parameter. It is the memoize function used by `createSelector`.

`defaultMemoize` 键通过 func 参数传递函数。这是由使用 `createSelector` 的键函数。

`defaultMemoize` has a cache size of 1. This means it always recalculates when the value of an argument changes.

`defaultMemoize` 缓存大小为 1。这意味着它总是当一个参数的值变化时重新计算。

`defaultMemoize` determines if an argument has changed by calling the `equalityCheck` function. As `defaultMemoize` is designed to be used with immutable data, the default `equalityCheck` function checks for changes using reference equality:

`defaultMemoize` 如果通过调用 `equalityCheck` 函数时，决定了一个参数的变化。`defaultMemoize` 是设计用于不可变数据的，默认情况下，`equalityCheck` 函数使用全等号检查改变：

```
function defaultEqualityCheck(currentVal, previousVal) {
  return currentVal === previousVal
}
```

`defaultMemoize` can be used with `createSelectorCreator` to customize the `equalityCheck` function.

`defaultMemoize` 可以用 `createSelectorCreator` 定制 `equalityCheck` 功能。

### createSelectorCreator(memoize, ...memoizeOptions)

`createSelectorCreator` can be used to make a customized version of `createSelector`.

`createSelectorCreator` 可以用来构建一个自定义版本的 `createSelector`.

The `memoize` argument is a memoization function to replace `defaultMemoize`.

`memoize` 参数是一个记忆功能，用来代替 `defaultMemoize`。

The `...memoizeOptions` rest parameters are zero or more configuration options to be passed to `memoizeFunc`. The selectors `resultFunc` is passed as the first argument to `memoize` and the `memoizeOptions` are passed as the second argument onwards:

`...memoizeOptions` 扩展参数把零个或多个配置选项传递给 `memoizeFunc`。选择器 `resultFunc` 作为第一个参数传递给 `memoize` 和 `memoizeOptions` 作为第二个参数传递在开始：

```
const customSelectorCreator = createSelectorCreator(
  customMemoize, // 函数用于 memoize resultFunc
  option1, // option1 将作为第二个参数传递给 customMemoize
  option2, // option2 将作为第三个参数传递给 customMemoize
  option3 // option3 将作为第四个参数传递给 customMemoize
)

const customSelector = customSelectorCreator(
  input1,
  input2,
  resultFunc // resultFunc 将作为第一个参数传递给 customMemoize
)
```

Internally `customSelector` calls the memoize function as follows:

在内部， `customSelector` 调用 memoize 函数如下：

```
customMemoize(resultFunc, option1, option2, option3)
```

Here are some examples of how you might use `createSelectorCreator`:

这里有一些关于使用 `createSelectorCreator` 的例子：

Customize `equalityCheck` for `defaultMemoize`

为 `defaultMemoize` 定制 `equalityCheck`

```
import { createSelectorCreator, defaultMemoize } from 'reselect'
import isEqual from 'lodash.isEqual'

// create a "selector creator" that uses lodash.isEqual instead of ===
// 使用 lodash.isEqual 代替 === 创建一个 "selector creator"
const createDeepEqualSelector = createSelectorCreator(
  defaultMemoize,
  isEqual
)

// use the new "selector creator" to create a selector
// 使用新的 "selector creator" 来创建一个选择器
const mySelector = createDeepEqualSelector(
  state => state.values.filter(val => val < 5),
  values => values.reduce((acc, val) => acc + val, 0)
)
```

Use memoize function from lodash for an unbounded cache

为一个无限缓存使用 lodash 的 memoize 函数

```
import { createSelectorCreator } from 'reselect'
import memoize from 'lodash.memoize'

let called = 0
const hashFn = (...args) => args.reduce(
  (acc, val) => acc + '-' + JSON.stringify(val),
  ''
)
const customSelectorCreator = createSelectorCreator(memoize, hashFn)
const selector = customSelectorCreator(
  state => state.a,
  state => state.b,
  (a, b) => {
    called++
    return a + b
  }
)
```

### createStructuredSelector({inputSelectors}, selectorCreator = createSelector)

`createStructuredSelector` is a convenience function for a common pattern that arises when using Reselect. The selector passed to a `connect` decorator often just takes the values of its input-selectors and maps them to keys in an object:

`createStructuredSelector` 是一个方便的函数，当使用 Reselect 时一个常见模式。选择器传递给 `connect` 装饰器时通常只需要输入选择器的值和一个将它们映射到键的对象：

```
const mySelectorA = state => state.a
const mySelectorB = state => state.b

// The result function in the following selector
// is simply building an object from the input selectors
// 结果函数在下面的选择器
// 仅仅是从输入选择器构建一个对象
const structuredSelector = createSelector(
   mySelectorA,
   mySelectorB,
   mySelectorC,
   (a, b, c) => ({
     a,
     b,
     c
   })
)
```

`createStructuredSelector` takes an object whose properties are input-selectors and returns a structured selector. The structured selector returns an object with the same keys as the `inputSelectors` argument, but with the selectors replaced with their values.

`createStructuredSelector` 需要一个对象，属性是输入选择器，并返回一个结构化的选择器。结构化选择器返回一个与`inputSelectors` 具有相同键参数的对象，但是紧跟着选择器替换了他们的值。

```
const mySelectorA = state => state.a
const mySelectorB = state => state.b

const structuredSelector = createStructuredSelector({
  x: mySelectorA,
  y: mySelectorB
})

const result = structuredSelector({ a: 1, b: 2 }) // 将会产生 { x: 1, y: 2 }
```

Structured selectors can be nested:

结构选择器可以嵌套：

```
const nestedSelector = createStructuredSelector({
  subA: createStructuredSelector({
    selectorA,
    selectorB
  }),
  subB: createStructuredSelector({
    selectorC,
    selectorD
  })
})
```
