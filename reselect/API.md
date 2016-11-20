# Reselect

> "reselect": "^2.5.4",

- Selectors can compute derived data, allowing Redux to store the minimal possible state.
- 选择器可以计算派生数据, 允许 Redux 的 store 最小可能的 state。
- Selectors are efficient. A selector is not recomputed unless one of its arguments change.
- 选择器是有效的。选择器不重新计算，除非改变它的一个参数。
- Selectors are composable. They can be used as input to other selectors.
- 选择器是可组合的。他们可以用作输入其他选择器。

## 推荐阅读

- https://github.com/reactjs/reselect#api

## API

### createSelector(...inputSelectors | [inputSelectors], resultFunc)

Takes one or more selectors, or an array of selectors, computes their values and passes them as arguments to `resultFunc`.

需要一个或多个选择器，或一组选择器，计算它们的值并将它们作为参数传递到 `resultFunc`。

`createSelector` determines if the value returned by an input-selector has changed between calls using reference equality (`===`). Inputs to selectors created with `createSelector` should be immutable.

`createSelector` 确定如果由一个输入选择器使用引用等号（`===`）改变了之间的调用返回的值， 用 `createSelector` 创建的输入选择器应该是不可变的。

Selectors created with `createSelector` have a cache size of 1. This means they always recalculate when the value of an input-selector changes, as a selector only stores the preceding value of each input-selector.

```
const mySelector = createSelector(
  state => state.values.value1,
  state => state.values.value2,
  (value1, value2) => value1 + value2
)

// You can also pass an array of selectors
const totalSelector = createSelector(
  [
    state => state.values.value1,
    state => state.values.value2
  ],
  (value1, value2) => value1 + value2
)
```

It can be useful to access the props of a component from within a selector. When a selector is connected to a component with `connect`, the component props are passed as the second argument to the selector:

```
const abSelector = (state, props) => state.a * props.b

// props only (ignoring state argument)
const cSelector =  (_, props) => props.c

// state only (props argument omitted as not required)
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

`defaultMemoize` has a cache size of 1. This means it always recalculates when the value of an argument changes.

`defaultMemoize` determines if an argument has changed by calling the `equalityCheck` function. As `defaultMemoize` is designed to be used with immutable data, the default `equalityCheck` function checks for changes using reference equality:

```
function defaultEqualityCheck(currentVal, previousVal) {
  return currentVal === previousVal
}
```

`defaultMemoize` can be used with `createSelectorCreator` to customize the `equalityCheck` function.

### createSelectorCreator(memoize, ...memoizeOptions)

`createSelectorCreator` can be used to make a customized version of `createSelector`.

The `memoize` argument is a memoization function to replace `defaultMemoize`.

The `...memoizeOptions` rest parameters are zero or more configuration options to be passed to `memoizeFunc`. The selectors `resultFunc` is passed as the first argument to `memoize` and the `memoizeOptions` are passed as the second argument onwards:

```
const customSelectorCreator = createSelectorCreator(
  customMemoize, // function to be used to memoize resultFunc
  option1, // option1 will be passed as second argument to customMemoize
  option2, // option2 will be passed as third argument to customMemoize
  option3 // option3 will be passed as fourth argument to customMemoize
)

const customSelector = customSelectorCreator(
  input1,
  input2,
  resultFunc // resultFunc will be passed as first argument to customMemoize
)
```

Internally `customSelector` calls the memoize function as follows:

```
customMemoize(resultFunc, option1, option2, option3)
```

Here are some examples of how you might use `createSelectorCreator`:

Customize `equalityCheck` for `defaultMemoize`

```
import { createSelectorCreator, defaultMemoize } from 'reselect'
import isEqual from 'lodash.isEqual'

// create a "selector creator" that uses lodash.isEqual instead of ===
const createDeepEqualSelector = createSelectorCreator(
  defaultMemoize,
  isEqual
)

// use the new "selector creator" to create a selector
const mySelector = createDeepEqualSelector(
  state => state.values.filter(val => val < 5),
  values => values.reduce((acc, val) => acc + val, 0)
)
```

Use memoize function from lodash for an unbounded cache

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

```
const mySelectorA = state => state.a
const mySelectorB = state => state.b

// The result function in the following selector
// is simply building an object from the input selectors
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

```
const mySelectorA = state => state.a
const mySelectorB = state => state.b

const structuredSelector = createStructuredSelector({
  x: mySelectorA,
  y: mySelectorB
})

const result = structuredSelector({ a: 1, b: 2 }) // will produce { x: 1, y: 2 }
```

Structured selectors can be nested:

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
