# 坚持本地存储持久化状态

```javascript
import { createStore } from 'redux';
import todoApp from './reducers/index';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(todoApp, persistedState);

store.subscribe( () => {
    saveState( store.getState() );
});
```

localStorage.js

```javascript
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        // Ignore write errors;
    }
};
```
