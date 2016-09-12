import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import todoApp from './reducers/index';
// import { loadState, saveState } from './localStorage';

const addLoggingToDispatch = (store) => {
    const rawDispatch = store.dispatch;

    if (!console.group) {
        return rawDispatch;
    }

    return (action) => {
        console.group(action.type);
        console.log('%c prev state', 'color: gray', store.getState());
        console.log('%c action', 'color: blue', action);
        const returnValue = rawDispatch(action);
        console.log('%c next state', 'color: green', store.getState());
        console.groupEnd(action.type);
        return returnValue;
    }
};

const configureStore = () => {

    // const persistedState = loadState();
    // const store = createStore(todoApp, persistedState, window.devToolsExtension && window.devToolsExtension())
    //
    // if (process.env.NODE_ENV !== 'production') {
    //     store.dispatch = addLoggingToDispatch(store);
    // }

    // store.subscribe( throttle(() => {
    //     saveState({
    //         todos: store.getState().todos
    //     });
    // }, 1000));

    // const persistedState = loadState();
    const store = createStore(todoApp, window.devToolsExtension && window.devToolsExtension())

    if (process.env.NODE_ENV !== 'production') {
        store.dispatch = addLoggingToDispatch(store);
    }

    return store;
};

export default configureStore;
