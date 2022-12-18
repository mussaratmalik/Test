import './App.css';
import React, { useState } from 'react';
function Student(props){
    const g=props.grade;
    const color="White";
    const [bg, bgSet]=useState(color);
    function remarksFun(){
        if(g>=90){
            const newbg = "Green";
            bgSet(newbg);
            const remarks="Well Done! Keep it Up!";
        }
        else if(g>=80 && g<90){
            const newbg = "Blue";
            bgSet(newbg);
            const remarks="Going Good! Work hard to improve!";
        }
        else if(g>=70 && g<80){
            const newbg = "Yellow";
            bgSet(newbg);
            const remarks="Need Improvement! Work hard!";
        }
        else{
            const newbg = "Red";
            bgSet(newbg);
            const remarks="Disappointing Result!";
        }
    }
    return(<div>
        <table style={{border:5, borderColor:"black", padding:1, background:"white", color:"black"}}>
            <tr>Student Info</tr>
            <tr>
                <td>Name</td>
                <td>{props.name}</td>
            </tr>
            <tr>
                <td>Subject</td>
                <td>{props.subject}</td>
            </tr>
            <tr>
                <td>Department</td>
                <td>{props.dept}</td>
            </tr>
            <tr>
                <td>Institute</td>
                <td>{props.institute}</td>
            </tr>
            <tr>
                <td>Grade</td>
                <td>{props.grade}</td>
            </tr>
            <tr>
                <td>Remarks</td>
                <td style={{background:bg}} onMouseEnter={remarksFun}></td>
            </tr>
        </table>
    </div>)
}

export default Student;