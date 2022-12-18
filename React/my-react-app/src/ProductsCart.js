import './App.css';
// import React, { useState } from 'react';

const displayprice = event => {
    console.log(event.currentTarget.id);
    console.log(event.currentTarget.value);
var element = event.currentTarget;

console.log(element);

var prod_value="{props.id}".valueOf;
var prod_id = event.currentTarget.value;

console.log(prod_id);

element.setAttribute('id', prod_id);

var p_id = event.target.parentElement.id;

console.log(p_id);

var displayp=document.getElementById('displayproductdetails');
//var main_div=document.getElementById('one');

// var pid=props.id;
// alert(pid);
// console.log(prod_value);
if(p_id==="one"){
    alert("in-one");
   //console.log("main");
    if(prod_id === "black"){
        let price=5000;
        console.log(prod_value);
        console.log(displayp);
        displayp.innerHTML = price;
    }
    else if(prod_id === "white"){
        let price=9000;
        console.log(prod_value);
        displayp.innerHtml=price;
    }
    else if(prod_id === "blue"){
        let price=5500;
        console.log(prod_value);
        displayp.innerHtml=price;
    }
   
}
else if(p_id==="two"){
    alert('2');
    if(prod_id === "black"){
        let price=5000;
        console.log(prod_value);
        console.log(displayp);
        displayp.innerHTML = price;
    }
    else if(prod_id === "white"){
        let price=9000;
        console.log(prod_value);
        displayp.innerHtml=price;
    }
    else if(prod_id === "blue"){
        let price=5500;
        console.log(prod_value);
        displayp.innerHtml=price;
    }
   
}
else if(p_id==="three")
{
    if(prod_id === "black"){
        let price=5000;
        console.log(prod_value);
        console.log(displayp);
        displayp.innerHTML = price;
    }
    else if(prod_id === "white"){
        let price=9000;
        console.log(prod_value);
        displayp.innerHtml=price;
    }
    else if(prod_id === "blue"){
        let price=5500;
        console.log(prod_value);
        displayp.innerHtml=price;
    }
   
}

};


function ProductCart(props){
    
    
    
return (<div id={props.id}>
   <img alt='Picture not Found' src={props.imgsrc} style={{width:300, height:250}}></img>
    <p id="para_id">{props.name}</p>
    <select onChange={displayprice}>
        <option id="black" className="selectproduct" value="black">Black</option>
        <option id="white" className="selectproduct" value="white">White</option>
        <option id="blue" className="selectproduct" value="blue">Blue</option>
    </select>
    <p id="displayproductdetails"></p>
    <button>Click Here</button>
</div>);
}
export default ProductCart; 