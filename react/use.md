# 使用 React

前提：开发 React 应用所需环境（Webpack、Babel）、依赖（react、react-dom）都已安装好。

**第一步**：导入 react 和 react-dom 依赖包。

> 写法一：CommonJS 规范写法

```jsx
var React = require('react');
var ReactDOM = require('react-dom');
```

> 写法二（**推荐**）：ES6 Modules 规范写法

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
```

> 写法三：ES6 Modules 规范写法

```jsx
import React, { Component } from 'react'
import { render } from 'react-dom'
```

**第二步**：定义 React 组件。

> 写法一：CommonJS 写法

```jsx
var Demo = React.createClass({
    getDefaultProps: function () {
        return {
        };
    },

    getInitialState: function () {
        return {
        };
    },

    render: function() {
        const { props } = this.props;

        return (
            <div>...</div>
        );
    }

});
```

> 写法二：ES6 写法

```jsx
const Demo = React.createClass({
    getDefaultProps () {
        return {
        };
    },

    getInitialState () {
        return {
        };
    },

    render () {
        const { props } = this.props;

        return (
            <div>...</div>
        );
    }
})
```

**推荐**写法。

```jsx
const Demo = (props) => {
    return (
        <div>...</div>
    )
}
```

```jsx
const Demo = (props) => (
    <div>...</div>
)
```

> 写法三（**推荐**）：ES6 Class 写法

```jsx
class Demo extends React.Component {
    constructor (props) {
        super(props)
        // ...
    }

    render () {
        const { props } = this.props;

        return (
            <div>...</div>
        );
    }
}
```

```jsx
// 依赖第一步写法三
class Demo extends Component {
    constructor (props) {
        super(props)
        // ...
    }

    render () {
        const { props } = this.props;

        return (
            <div>...</div>
        );
    }
}
```

**第三步**：渲染 React 组件到真实 DOM。

> 写法一（**推荐**）

```jsx
ReactDOM.render(
    <Demo />,
    document.getElementById('app')
)
```

> 写法二：ES6 写法

```jsx
// 依赖第一步写法三
render(
    <Demo />,
    document.getElementById('app')
)
```
