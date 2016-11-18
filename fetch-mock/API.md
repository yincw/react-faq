# Fetch Mock

> "fetch-mock": "^5.5.0",

## 推荐阅读

- https://github.com/wheresrhys/fetch-mock

## API

### `.mock([matcher], [response], options)`

替换 `fetch()` 在一个存根的调用记录，按路由分组，和可选的返回一个模拟的 `Response` 对象或通过绕过 `fetch()` 调用。可以链式调用 `.mock()`。

#### `matcher`

条件选择模拟接受下列哪些请求。

类型 | 说明
---|---
`string` | 任意一个：一个精确的 url 匹配；如果一个字符串以 `^` 开始，则 `^` 后面必须是一个 url；`*` 匹配任何 url.
`RegExp` | 一个正则表达式
`Function(url, opts)` | 一个函数（返回布尔值），这是通过 url 和 opts 调用 `fetch()` 与（或者，如果 `fetch()` 调用一次 `Request` 实例 ）

#### `response`

在 mock 中配置 http 响应的返回。可以采用以下值（或其中任何一个的 `Promise`，允许完全控制在测试竞争条件等等）

类型 | 说明
---|---
`Response` | 一个 `Response` 实例 - 将使用未改变的
`number` | 创建一个响应的状态
`string` | 创建一个 200 响应，字符串作为响应的主体
`object` | 只要对象不包含下面的任何属性，转换为一个json字符串，返回响应的主体在一个 200 的响应。如果使用下面的任何属性配置定义 `Response` 对象
`Function(url, opts)` | A function that is passed the url and opts `fetch()` is called with and that returns any of the responses listed above (or a `Promise` for any of them)

`Response` 对象：

- `body`: Set the response body (`string` or `object`)
- `status`: Set the response status (default `200`)
- `headers`: Set the response headers. (`object`)
- `throws`: If this property is present then a `Promise` rejected with the value of `throws` is returned
- `sendAsJson`: This property determines whether or not the request body should be JSON.stringified before being sent (defaults to true).

#### `options`

键 | 说明
---|---
`name` | 一个唯一的字符串命名路由，用于之后的检索调用，分组的名称。如果没有指定，默认值是 `matcher.toString()`。注意：如果没有提供一个唯一的名称就会抛出错误（因为名称是可选的，所以自动生成的会冲突）
`method` | 匹配 http 方法
`headers` | 匹配 headers 中的 键/值 映射
`matcher` | 正如上面指定的
`response` | 正如上面指定的
`times` | 一个整数，`n` 限制 matcher 可以使用的次数。如果路由已经被调用了 `n` 次，这个路由将被忽略。绕过其他的路由定义对 `fetch()` 的调用将失败（这可能最终导致一个错误，如果没有匹配）

使用示例：

```
import fetchMock from 'fetch-mock'

fetchMock.mock([matcher], [response], options)
fetchMock.once([matcher], [response])
fetchMock.get([matcher], [response])
fetchMock.restore()
fetchMock.called([matcher])
fetchMock.configure(opts)
```

> 快捷方法

方法 | 说明
---|---
`.once()` | `mock()`的速记写法，这限制了只能被调用一次。
`.get()` | `mock()`的速记写法，限定在一个特定的方法。
`.post()` | `mock()`的速记写法，限定在一个特定的方法。
`.put()` | `mock()`的速记写法，限定在一个特定的方法。
`.delete()` | `mock()`的速记写法，限定在一个特定的方法。
`.head()` | `mock()`的速记写法，限定在一个特定的方法。
`.patch()` | `mock()`的速记写法，限定在一个特定的方法。
`.getOnce()` | `mock()`的速记写法，限定在一个特定的方法，只能被调用一次。
`.postOnce()` | `mock()`的速记写法，限定在一个特定的方法，只能被调用一次。
`.putOnce()` | `mock()`的速记写法，限定在一个特定的方法，只能被调用一次。
`.deleteOnce()` | `mock()`的速记写法，限定在一个特定的方法，只能被调用一次。
`.headOnce()` | `mock()`的速记写法，限定在一个特定的方法，只能被调用一次。
`.patchOnce()` | `mock()`的速记写法，限定在一个特定的方法，只能被调用一次。
`.catch(response)` | 这是用于定义如何响应任何不匹配的 fetch 调用时定义 mock。它接受与 `.mock(matcher, response)` 中 response 相同的类型，作为一个正常调用。它也可以在不匹配调用时用一个任意的函数完全定制行为。这是可链的和在调用之前或之后调用其它 `.mock()`，如果 `.catch()` 调用没有任何参数，然后每一个不匹配的调用将收到一个 200 的响应。
`.spy()` | 类似于 `catch()`，这个调用历史记录不匹配的调用。但相反响应的是一个存根的 response，这个请求通过绕过原生的 `fetch()` 和允许通过网络交流。

> 销毁方法

方法 | 说明
---|---
`.restore()` | 可链方法，恢复 `fetch()` 到原生实现和清除所有调用的数据记录
`.reset()` | 可链方法，清除所有调用 `fetch()` 的数据记录（重置调用历史）

> 分析方法

分析你的 mock 调用。

方法 | 说明
---|---
`.called(matcherName)` | 返回一个布尔值，表示是否获取到匹配的路由，如果匹配特定的路由，指定 matcherName 只返回 true。
`.done(matcherName)` | 返回一个布尔值，表示是否获取被称为预期的次数（或者至少一次路由定义的期望是没有确定的路由）。如果没有通过 matcherName 返回 true，每个 route 被视为预期的次数。
`.calls(matcherName)` | 返回一个包含所有调用 fetch 的数组对象 `{matched: [], unmatched: []}` ，按是否 fetch-mock 匹配它们分组。如果指定 matcherName ，将只按匹配的这种路线返回并调用 fetch
`.lastCall(matcherName)` | 返回最后一个匹配的参数调用 fetch
`.lastUrl(matcherName)` | 返回最后一个匹配的 url 调用 fetch
`.lastOptions(matcherName)` | 返回最后一个匹配的选项调用 fetch

> 实用工具

`.configure(opts)` | 设置一些全局配置选项

其中包括：

属性 | 默认值 | 说明
---|---|---
`sendAsJson` | true | 默认情况下，fetchMock 在发送之前会将对象转换为 JSON。这是覆盖每个调用。但对于一些场景，当处理大量 array buffers 的时候，可以设置默认值为 false。
