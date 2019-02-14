import React from 'react';
import './Counter.css';

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div className="main-content">
        <h1>Counter Value  :</h1><h1>{counter}</h1>
        <br/>
        <button type="button" onClick={e => {e.preventDefault(); increment()}}>Increament</button>
        <button type="button" onClick={e => {e.preventDefault(); decrement()}}>Decreament</button>
    </div>
);
}

export default Counter;