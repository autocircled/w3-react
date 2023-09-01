import React, { useReducer } from 'react';

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

const Counter = () => {
    // Initial state
    const initialState = { count: 5 };

    // Initializing state and dispatch function using useReducer
    const [state, dispatch] = useReducer(reducer, initialState);

    const handler = (action) => {
        dispatch({ type: action });
    }

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => handler('INCREMENT')}>Increment</button>
            <button onClick={() => handler('DECREMENT')}>Decrement</button>
        </div>
    );
};

export default Counter;
