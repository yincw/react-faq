# 使用 React Router

前提：依赖（react-router）都已安装好。

**第一步**：导入 react-router 依赖包。

```jsx
import {
    Router,         // 路由定义容器。
    browserHistory, // 浏览器的路由就不再通过 hash 完成了，而显示正常的路径，背后调用的是浏览器的 History API。
    Route,          // 路由定义。
    IndexRoute,     // 显式指定根路由的子组件，即指定默认情况下加载的子组件。
    Redirect,       // 用于路由的跳转，即用户访问一个路由，会自动跳转到另一个路由。
    IndexRedirect,  // 用于访问根路由的时候，将用户重定向到另一个路由。
    Link,           // 用于取代 `<a>` 元素，生成一个连接，允许用户点击后跳转到另一个路由。
    IndexLink,      // 用于连接到跟路由。
    withRouter      // 高阶组件 (higher-order component)
} from 'react-router'
```

**第二步**：定义路由加载的组件。

```jsx
const Index = (props) => {
    return (
        <div>
            <h1>Index</h1>
            <ul>
                <li><IndexLink to="/" activeStyle={{color: 'red'}}>Index</IndexLink></li>
                <li><Link to="/repos" activeStyle={{color: 'red'}}>Repos</Link></li>
                <li><Link to="/about" activeStyle={{color: 'red'}}>About</Link></li>
            </ul>
            {props.children}
        </div>
    )
}

const Home = (props) => {
    return (
        <div>Home</div>
    )
}

const Repos = (props) => {
    return (
        <div>Repos</div>
    )
}

const About = (props) => {
    return (
        <div>About</div>
    )
}
```

**第三步**：定义路由结构及渲染到真实 DOM。

```jsx
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Index}>
            <IndexRoute component={Home} />
            {/* <IndexRedirect to="/about" /> */}
            {/* <Redirect from="/repos" to="/about" /> */}
            <Route path="/repos" component={Repos} />
            <Route path="/about" component={About} />
        </Route>
    </Router>,
    document.getElementById('app')
)
```
