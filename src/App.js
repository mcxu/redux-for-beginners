import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { adjustCounter } from './actions';

function App() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    return (
        <div className='App' >
            <h1>Counter { counter }</h1>
            <button onClick={() => dispatch(adjustCounter('INCREMENT', 5))}>+</button>
            <button onClick={() => dispatch(adjustCounter('DECREMENT', 5))}>-</button>
            {
                isLogged ? 
                <h3>Valuable information I shouldn't see: { isLogged }</h3> : ''
            }
            
        </div>
    );
}

export default App;
