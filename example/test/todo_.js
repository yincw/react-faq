import {
    createStore,
    combineReducers
} from 'redux';

// const todos = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_TODO':
//             return [
//                 ...state,
//                 {
//                     id: action.id,
//                     text: action.text,
//                     completed: false
//                 }
//             ];
//         case 'TOGGLE_TODO':
//             return state.map( todo => {
//                 if (todo.id !== action.id) {
//                     return todo;
//                 };
//
//                 return {
//                     ...todo,
//                     completed: !todo.completed
//                 };
//             });
//         default:
//             return state;
//     }
// };

/////////////////////////////////
// with Arrays

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

/////////////////////////////////
// with Objects

// const todoApp = (state = {}, action) => {
//     return {
//         todos: todos(
//             state.todos,
//             action
//         ),
//         visibilityFilter: visibilityFilter(
//             state.visibilityFilter,
//             action
//         )
//     };
// };

/////////////////////////////////
// with combineReducers()

// const { combineReducers } from 'redux';

// const combineReducers = (reducers) => {
//     return (state = {}, action) => {
//         return Object.keys(reducers).reduce(
//             (nextState, key) => {
//                 nextState[key] = reducers[key]( state[key], action );
//                 return nextState;
//             }, {}
//         );
//     };
// };

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

/////////////////////////////////

// const store = createStore(todos);

const store = createStore(todoApp);

/////////////////////////////////

console.log('----------------------------------');
console.log('Initial state:');
console.log(store.getState());
console.log('----------------------------------');

console.info('Dispatching ADD_TODO.');
store.dispatch({
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
});

console.log('==================================');
console.log('Current state:');
console.log(store.getState());
console.log('----------------------------------');

console.info('Dispatching ADD_TODO.');
store.dispatch({
    type: 'ADD_TODO',
    id: 1,
    text: 'Go shopping'
});

console.log('==================================');
console.log('Current state:');
console.log(store.getState());
console.log('----------------------------------');

console.info('Dispatching TOGGLE_TODO.');
store.dispatch({
    type: 'TOGGLE_TODO',
    id: 0
});

console.log('==================================');
console.log('Current state:');
console.log(store.getState());
console.log('----------------------------------');

console.info('Dispatching SET_VISIBILITY_FILTER');
store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPLETED'
});

console.log('==================================');
console.log('Current state:');
console.log(store.getState());
console.log('----------------------------------');
