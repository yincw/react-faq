# Redux DevTools 使用

1. 安装 Chrome 扩展
2. 在 createStore 添加第二个参数

```javascript
ReactDOM.render(
    <Provider store={ createStore(todoApp, window.devToolsExtension && window.devToolsExtension()) }>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);
```

* https://github.com/gaearon/redux-devtools/blob/master/docs/Walkthrough.md
* https://github.com/zalmoxisus/redux-devtools-extension
