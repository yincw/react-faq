import { createStore, combineReducers, bindActionCreators } from 'redux';

// Flux: 首先定义一个改变数据的简单函数，成为 reducer
// function count (state, action) {
//     var defaultState = {
//         year: 2015
//     };
//
//     state = state || defaultState;
//
//     switch (action.type) {
//         case 'add':
//             return {
//                 year: state.year + 1
//             };
//             break;
//
//         case 'sub':
//             return {
//                 year: state.year - 1
//             };
//             break;
//
//         default:
//             return state;
//     }
// }

// Redux: 创建两个reducer: count year
function count(state, action) {
    state = state || {
        count: 1
    }
    switch (action.type) {
        default: return state;
    }
}

function year(state, action) {
    state = state || {
        year: 2015
    }
    switch (action.type) {
        default: return state;
    }
}

// Redux: 将多个reducer合并成一个
var rootReducer = combineReducers({
  count: count,
  year: year
});

// Flux: 创建 store
// var store = createStore(count);
// Redux
var store = createStore(rootReducer);

// console.log(require('util').inspect(store, { depth: null }));
// { dispatch: [Function: dispatch],
//   subscribe: [Function: subscribe],
//   getState: [Function: getState],
//   replaceReducer: [Function: replaceReducer] }


// store 里面的数据发生改变时，触发的回调函数
store.subscribe(function () {
    console.log('the year is: ', store.getState().year);
});

// action：触发 state 改变的唯一方法
var action1 = {type: 'add'};
var action2 = {type: 'add'};
var action3 = {type: 'sub'};

// 改变 store 里面的方法
// store.dispatch(action1); // the year is: 2016
// store.dispatch(action2); // the year is: 2017
// store.dispatch(action3); // the year is: 2016

// 可以在具体的应用框架隐式进行该过程(例如react-redux的connect组件中)
bindActionCreators(action1);
bindActionCreators(action2);
bindActionCreators(action3);
