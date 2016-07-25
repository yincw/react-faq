# Redux DevTools 应用

## Chrome 扩展

1. 安装 Chrome 扩展
2. 在 createStore 方法中添加第二个参数（代码如下）

```javascript
ReactDOM.render(
    <Provider store={ createStore(todoApp, window.devToolsExtension && window.devToolsExtension()) }>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);
```

其他高级应用：

* https://github.com/zalmoxisus/redux-devtools-extension

## 手动调用

* https://github.com/gaearon/redux-devtools/blob/master/docs/Walkthrough.md
