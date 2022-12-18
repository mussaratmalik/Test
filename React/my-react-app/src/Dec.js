import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function Dec() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  if(count<0){
    alert("Dont click");
  }

  return (
    <div >
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count - 1)}>
        Click me
      </button>
    </div>
  );
}
export default Dec;