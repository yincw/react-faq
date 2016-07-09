# TOC

## React Fundamentals - React 基本原理

-  |  English  |  Chinese
---|---|---
01  |  Development Environment Setup  |  开发环境设置
02  |  Hello World - First Component  |  第一个组件（Hello World）
03  |  The Render Method  |  Render 方法
04  |  Introduction to Properties  |  介绍属性
05  |  State Basics  |  状态基础
06  |  Owner Ownee Relationship  |  owner-ownee 关系
07  |  Using Refs to Access Components  |  使用 Refs 访问组件
08  |  Accessing Child Properties  |  访问子属性
09  |  Component Lifecycle - Mounting Basics  |  组件生命周期（Mounting 基础）
10  |  Component Lifecycle - Mounting Usage  |  组件生命周期（Mounting 使用）
11  |  Component Lifecycle - Updating  |  组件生命周期（更新）
12  |  Higher Order Components (replaces Mixins)  |  高阶组件（替代 Mixins）
13  |  Composable Components  |  可组合的组件
14  |  Dynamically Generated Components  |  动态生成的组件
15  |  Build a JSX Live Compiler  |  构建一个生动的 JSX 编译器
16  |  JSX Deep Dive  |  JSX 深入浅出
17  |  Precompile JSX   |  预编译 JSX
18  |  Developer Tools  |  开发工具


## Getting Started with Redux - 开始使用 Redux

-  |  English  |  Chinese
---|---|---
01  |  The Single Immutable State Tree  |  单一不变的状态树
02  |  Describing State Changes with Actions  |  用动作描述状态的改变
03  |  Pure and Impure Functions  |  纯的和不纯的函数
04  |  The Reducer Function  |  Reducer 函数
05  |  Writing a Counter Reducer with Tests  |  写一个计数器 Reducer 用于测试
06  |  Store Methods: getState(), dispatch() and subscribe()  |  Store 方法：getState(), dispatch() 和 subscribe()
07  |  Implementing Store from Scratch  |  从头开始实现 Store
08  |  React Counter Example  |  React 计数器示例
09  |  Avoiding Array Mutations with concat(), slice() and ...spread  |  用 concat(), slice() 和 ...展开符规避数组冲突
10  |  Avoiding Object Mutations with Object.assign() and ...spread  |  用 Object.assign() 和 ...展开符规避对象冲突
11  |  Writing a Todo List Reducer (Adding a Todo)  |  编写一个 Todo 列表 Reducer（添加一个 Todo）
12  |  Writing a Todo List Reducer (Toggling a Todo)  |  编写一个 Todo 列表 Reducer（切换一个 Todo）
13  |  Reducer Composition with Arrays  |  Reducer 的组成与数组
14  |  Reducer Composition with Objects  |  Reducer 的组成与对象
15  |  Reducer Composition with combineReducers()  |  Reducer 的组成与 combineReducers()
16  |  Implementing combineReducers() from Scratch  |  从头开始实现 combineReducers()
17  |  React Todo List Example (Adding a Todo)  |  React Todo 列表示例（添加一个 Todo）
18  |  React Todo List Example (Toggling a Todo)  |  React Todo 列表示例（切换一个 Todo）
19  |  React Todo List Example (Filtering Todos)  |  React Todo 列表示例（过滤一个 Todo）
20  |  Extracting Presentational Components (Todo, TodoList)  |  提取展示组件（Todo, TodoList）
21  |  Extracting Presentational Components (AddTodo, Footer, FilterLink)  |  提取展示组件（AddTodo, Footer, FilterLink）
22  |  Extracting Container Components (FilterLink)  |  提取容器组件（FilterLink）
23  |  Extracting Container Components (VisibleTodoList, AddTodo)  |  提取容器组件（VisibleTodoList, AddTodo）
24  |  Passing the Store Down Explicitly via Props  |  通过 Props 显式的向下传递 Store
25  |  Passing the Store Down Implicitly via Context  |  通过 Context 隐式的向下传递 Store
26  |  Passing the Store Down with `<Provider>` from React Redux  |  从 React Redux `<Provider>` 向下传递 Store
27  |  Generating Containers with connect() from React Redux (VisibleTodoList)  |  用 connect() 从 React Redux 生成容器（VisibleTodoList）
28  |  Generating Containers with connect() from React Redux (AddTodo)  |  用 connect() 从 React Redux 生成容器（AddTodo）
29  |  Generating Containers with connect() from React Redux (FooterLink)  |  用 connect() 从 React Redux 生成容器（FooterLink）
30  |  Extracting Action Creators  |  提取动作创造者


## Building React Applications with Idiomatic Redux - 用惯用的 Redux 构建 React 应用

-  |  English  |  Chinese
---|---|---
01  |  Simplifying the Arrow Functions  |  简化箭头函数
02  |  Supplying the Initial State  |  提供初始状态
03  |  Persisting the State to the Local Storage  |  坚持本地存储持久化状态
04  |  Refactoring the Entry Point  |  重构入口点
05  |  Adding React Router to the Project  |  添加 React Router 到项目
06  |  Navigating with React Router `<Link>`  |  用 React Router `<Link>` 导航
07  |  Filtering Redux State with React Router Params  |  用 React Router 参数过滤 Redux 状态
08  |  Using withRouter() to Inject the Params into Connected Components  |  使用 withRouter() 注入参数到连接组件
09  |  Using mapDispatchToProps() Shorthand Notation  |   使用 mapDispatchToProps() 速记符号
10  |  Colocating Selectors with Reducers  |  用 Reducers 控制选择器
11  |  Normalizing the State Shape  |  正常化状态形状
12  |  Wrapping dispatch() to Log Actions  |  包装 dispatch() 到日志动作
13  |  Adding a Fake Backend to the Project  |  添加一个假后端到项目
14  |  Fetching Data on Route Change  |  在路由改变的时候获取数据
15  |  Dispatching Actions with the Fetched Data  |  用获取的数据调度动作
16  |  Wrapping dispatch() to Recognize Promises  |  包装 dispatch() 到识别承诺
17  |  The Middleware Chain  |  中间件链
18  |  Applying Redux Middleware  |  应用 Redux 中间件
19  |  Updating the State with the Fetched Data  |  用获取的数据更新状态
20  |  Refactoring the Reducers  |  重构 Reducers
21  |  Displaying Loading Indicators  |  显示加载指示器
22  |  Dispatching Actions Asynchronously with Thunks  |  用 Thunks 调度异步动作
23  |  Avoiding Race Conditions with Thunks  |  用 Thunks 规避竞态条件
24  |  Displaying Error Messages  |  显示错误消息
25  |  Creating Data on the Server  |  在服务器上创建数据
26  |  Normalizing API Responses with normalizr  |  用 normalizr 正常化 API 响应回应
27  |  Updating Data on the Server  |  在服务器上更新数据
