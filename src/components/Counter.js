import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({ counter = 0, increment, decrement }) => (
  <div className="main-content">
    <h1>Counter Value  :</h1>
    <h1>{counter}</h1>
    <br />
    <button type="button" onClick={(e) => { e.preventDefault(); increment(); }}>Increament</button>
    <button type="button" onClick={(e) => { e.preventDefault(); decrement(); }}>Decreament</button>
  </div>
);

Counter.propTypes = {
  counter: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};
export default Counter;
