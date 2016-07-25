# Store

# Store 方法：getState(), dispatch() 和 subscribe()

```javascript
import { createStore } from 'redux';


const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
};

const store = createStore(counter);


const render = () => {
    document.body.innerText = store.getState();
};

store.subscribe(render);
render();

document.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
});
```

# 从头开始实现 Store

```javascript
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
};

// createStore()
const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach( listener => listener() );
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listener = listeners.filter( l => l !== listener);
        };
    };

    dispatch({});

    return { getState, dispatch, subscribe };
};

const store = createStore(counter);


const render = () => {
    document.body.innerText = store.getState();
};

store.subscribe(render);
render();

document.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
});
```

## React 计数器示例

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';


const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
};

const Counter = ({ value, onIncrement, onDecrement }) => (
    <div>
        <input value={value} />
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

const store = createStore(counter);


const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() =>
                store.dispatch({
                    type: 'INCREMENT'
                })
            }
            onDecrement={() =>
                store.dispatch({
                    type: 'DECREMENT'
                })
            }
             />,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();
```
