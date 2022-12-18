import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function Inc() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [decount, DeSet] = useState(0);

  return (
    <div >
      <p>You clicked {count} {decount} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me to Add
      </button>
      <button onClick={() => DeSet(decount - 1)}>
        Click me to Subtract
      </button>
    </div>
  );
}
export default Inc;