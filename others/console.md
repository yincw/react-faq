# console

https://my.oschina.net/u/1866821/blog/471802

> 显示（提示）类

属性 | 说明
---|---
debug() | 显示调试信息 【√】
log() | 显示日志信息
info() | 显示信息 【√】
warn() | 显示警告信息 【√】
error() | 显示错误信息 【√】
dir() | 显示对象的信息
dirxml() | 显示网页中某个节点（node）所包含的 html/xml 代码

```javascript
console.debug();
console.log();

console.info();
console.warn();
console.error();

console.dir();
console.dirxml();
```

上述命令中，支持 **占位符**：字符（%s）、整数（%d或%i）、浮点数（%f）和对象（%o）

```javascript
console.log('%d年%d月%d日',2011,3,26);
```

> 展示（排版）类

属性 | 说明
---|---
group() | 信息分组 【√】
groupCollapsed() | 收缩的信息分组
groupEnd() | 结束信息分组 【√】

```javascript
console.group('第一组信息');
    console.log();
    console.log();
console.groupEnd();
console.group('第二组信息');
    console.log();
    console.log();
console.groupEnd();
```

> 统计类

属性 | 说明
---|---
count() | 计数 【√】
timeStamp() | 时间戳
time() | 时间（用来显示代码的运行时间）
timeEnd() | 结束时间（用来显示代码的运行时间）
markTimeline() | 标记时间线（弃用）
timeline() | 时间线（弃用）
timelineEnd() | 结束时间线（弃用）

> 功能类

属性 | 说明
---|---
clear() | 清除控制台
debugger | 断点

> 帮助类

属性 | 说明
---|---
assert() | 断言（用来判断一个表达式或变量是否为真，如果结构为假，则在控制台输出一条相应的信息，并且抛出一个异常。）
trace() | 追溯（用来追踪函数的调用轨迹）
profile() | 轮廓开始（用来统计代码执行时间，性能分析）
profileEnd() | 轮廓完成（用来统计代码执行时间，性能分析）
table() | 表格
memory | 内存
