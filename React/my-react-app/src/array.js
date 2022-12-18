import './App.css';
import React from 'react';
function MultiplyE() {
    const myArray = [5,6,7,8,9,10];
    const Num= 5;
    const myList = myArray.map((item) => <p>{item}</p>)
    // const myListMul = myArray.map((item) => <p>{item*Num}</p>)
  return (
    <div >
      <p>Array is: {myList}</p>
      <button onClick={() => Zaea()}>
        Click me
      </button>
    </div>
  );
  function Zaea(){
    const myListMul = myArray.map((item) => <p>{item*Num}</p>)
    return (
        <div >
          <p>Array is: {myListMul}</p>
          <button onClick={() => Zaea()}>
            Click me
          </button>
        </div>
      );

  }
}
export default MultiplyE;