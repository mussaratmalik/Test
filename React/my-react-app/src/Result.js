import './App.css';
import React, { useState } from 'react';
function Result(){
    const color="White";
    const [bg, bgSet]=useState(color);
    function showResult(){
        //   let remarks = ''; 
        var smarks= document.getElementById('marks').value;
        var g=document.getElementById("grade");
        // var smarks=parseInt(zmarks);
        if(smarks>=90 && smarks<=100){
            const newbg = "Green";
            bgSet(newbg);
           g.value="Well Done! Keep it Up!";
        }
        else if(smarks>=80 && smarks<90){
            const newbg = "Blue";
            bgSet(newbg);
            g.value="Going Good! Work hard to improve!";
        }
        else if(smarks>=70 && smarks<80){
            const newbg = "Yellow";
            bgSet(newbg);
            g.value="Need Improvement! Work hard!";
        }
        else{
            const newbg = "Red";
            bgSet(newbg);
            g.value="Disappointing Result!";
        }
    
    
        }
        
    return(
        <div>
            <span>Enter your Name: </span><input type="text"></input><br></br>
            <span>Enter your Subject:</span> <input type="text"></input><br></br>
            <span>Enter your Department:</span> <input type="text"></input><br></br>
            <span>Enter Institute:</span> <input type="text"></input><br></br>
            <span>Enter your Grade Marks: </span><input id='marks' type="text"></input><br></br>
            <span>Remrarks for your Grade:</span> <input  id="grade" style={{background:bg}} type="text"></input><br></br>
            <button onClick={showResult} >Show Remarks</button>
        
        </div>
   );

    }
export default Result;