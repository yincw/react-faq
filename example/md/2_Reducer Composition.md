# Reducer 的组成

* 与数组
* 与对象 :thumbsup:
* 与 combineReducers() :100:

## Reducer 的组成与数组

```javascript
import { createStore } from 'redux';


const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            };

            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

const store = createStore(todos);

console.log('Initial state:');
console.log(store.getState());
console.log('----------------');

console.info('Dispatching ADD_TODO.');
store.dispatch({
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
});

console.log('Current state:');
console.log(store.getState());
console.log('----------------');

console.info('Dispatching ADD_TODO.');
store.dispatch({
    type: 'ADD_TODO',
    id: 1,
    text: 'Go shopping'
});

console.log('Current state:');
console.log(store.getState());
console.log('----------------');

console.info('Dispatching TOGGLE_TODO.');
store.dispatch({
    type: 'TOGGLE_TODO',
    id: 0
});

console.log('Current state:');
console.log(store.getState());
console.log('----------------');
```

## Reducer 的组成与对象

```javascript
import { createStore } from 'redux';


const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            };

            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

const todoApp = (state = {}, action) => {
    return {
        todos: todos(
            state.todos,
            action
        ),
        visibilityFilter: visibilityFilter(
            state.visibilityFilter,
            action
        )
    };
};


const store = createStore(todoApp);

console.log('Initial state:');
console.log(store.getState());
console.log('----------------');

console.info('Dispatching ADD_TODO.');
store.dispatch({
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
});

console.log('Current state:');
console.log(store.getState());
console.log('----------------');

console.info('Dispatching ADD_TODO.');
store.dispatch({
    type: 'ADD_TODO',
    id: 1,
    text: 'Go shopping'
});

console.log('Current state:');
console.log(store.getState());
console.log('----------------');

console.info('Dispatching TOGGLE_TODO.');
store.dispatch({
    type: 'TOGGLE_TODO',
    id: 0
});

console.log('Current state:');
console.log(store.getState());
console.log('----------------');

console.info('Dispatching SET_VISIBILITY_FILTER');
store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPLETED'
});

console.log('Current state: ');
console.log(store.getState());
console.log('----------------');
```

## Reducer 的组成与 combineReducers()

```javascript
import { createStore, combineReducers } from 'redux';


const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            };

            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

const todoApp = combineReducers({
    todos,
    visibilityFilter
});


const store = createStore(todoApp);

console.log('Initial state:');
console.log(store.getState());
console.log('----------------');

console.info('Dispatching ADD_TODO.');
store.dispatch({
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
});

console.log('Current state:');
console.log(store.getState());
console.log('----------------');

console.info('Dispatching ADD_TODO.');
store.dispatch({
    type: 'ADD_TODO',
    id: 1,
    text: 'Go shopping'
});

console.log('Current state:');
console.log(store.getState());
console.log('----------------');

console.info('Dispatching TOGGLE_TODO.');
store.dispatch({
    type: 'TOGGLE_TODO',
    id: 0
});

console.log('Current state:');
console.log(store.getState());
console.log('----------------');

console.info('Dispatching SET_VISIBILITY_FILTER');
store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPLETED'
});

console.log('Current state: ');
console.log(store.getState());
console.log('----------------');
```

## 从头开始实现 combineReducers()

```javascript
// combineReducers()
const combineReducers = (reducers) => {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce(
            (nextState, key) => {
                nextState[key] = reducers[key]( state[key], action );
                return nextState;
            }, {}
        );
    };
};
```
