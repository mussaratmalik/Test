import './App.css';
import React, { useState,useEffect } from 'react';
function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
      useEffect(() => {
      fetch("http://api.weatherapi.com/v1/current.json?key=7d0161c8fdd7406e97055143221012&q=pakistan&aqi=no")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        // <ul>
        //   {items.map(item => (
        //     <li key={item.id}>
        //       {item.name} {item.price}
        //     </li>
        //   ))}
        // </ul>
        <div>
            {items.location.name}
            {items.current.temp_c}
            {items.location.localtime}
            <p>{items.current.condition.text}</p>
            <img src={items.current.condition.icon} alt='not found'></img>
        </div>
      );
    }
  }
  export default MyComponent;