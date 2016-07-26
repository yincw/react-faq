# 使用 node-uuid 避免 id 冲突

Before:

```javascript
let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: (nextTodoId++).toString(),
    text
  }
}
```

After:

```javascript
import { v4 } from 'node-uuid';

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: v4(),
    text
  }
}
```
