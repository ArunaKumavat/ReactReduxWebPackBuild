import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import except from 'except';


/// Reducer function
/// Specify the  initial state

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter);

// You can use subscribe() to update the UI in response to state changes.
// Normally you’d use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.
const Counter = ({
    value,
    onIncrement,
    onDecrement
    }) => (
    <div className="counter">
        <h1>{value}</h1>
        <button className="btn" onClick={onIncrement}>+</button>
        <button className="btn" onClick={onDecrement}>-</button>
    </div>
);

const render = () => {
    ReactDOM.render(
        <Counter value = {store.getState()}
                 onIncrement = {() =>
                  store.dispatch({
                    type: 'INCREMENT'
                   })
                 }
                 onDecrement = {() =>
                 store.dispatch({
                    type: 'DECREMENT'
                 })
                 }
                 />,
        document.getElementById('hello')
    );
};


store.subscribe(render);
render();

