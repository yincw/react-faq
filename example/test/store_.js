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
        <button onClick={onDecrement}>-</button>
        <input value={value} />
        <button onClick={onIncrement}>+</button>
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
