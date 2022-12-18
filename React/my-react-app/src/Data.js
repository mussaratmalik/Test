import './App.css';
import React, { useState } from 'react';
// class Example extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         bg: "yellow"
//       };
//     }
// }
function Data(props){
    const color="Yellow";
    const[bg,bgSet]=useState(color);
    function bgchange(){
    const newbg="Red";
    bgSet(newbg);
    
}
    function doubleClickbg(){
        const upbg="Blue";
        bgSet(upbg);
    }
return (<div style={{background:bg, padding:15}}>
    <img alt='PCiture not Found' src={props.imgsrc} style={{width:300, height:250}}></img>
    <p>This is a Card</p>
    <a href={props.link}><button onClick={bgchange} onDoubleClick={doubleClickbg}>Click Here</button></a>
</div>)
}
export default Data; 