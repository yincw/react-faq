# 使用 lodash throttle 创建一个压制函数，定义多少毫秒内函数只会被调用一次

```javascript
import throttle from 'lodash/throttle';

store.subscribe( throttle(() => {
    saveState({
        todos: store.getState().todos
    });
}, 1000));
```
