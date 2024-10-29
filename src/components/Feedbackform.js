import React, { useState } from "react";
import Feedback from "./Feedback";
import "./Feedbackform.css";

const Feedbackform = () => {
    const [data,Setdata]=useState([])
  return (
   <div >
<form onSubmit={(e)=>{
        e.preventDefault();
    }}>

      <table className="fm"> 
     <tr>  <input type="text" id="1" placeholder="Faculty Name"/> </tr>
     <tr>  <input type="text" id="2" placeholder="Course Name"/> </tr>
    <tr>   <input type="text" id="3" placeholder="CkSkills"/> </tr>
    <tr> <input type="text" id="4" placeholder="Remarks"/></tr>
      </table>

      
      <input onSubmit={(e)=>{
        e.preventDefault();
      }} 
      onClick={
        ()=>{
            const Fname =document.getElementById("1").value
            const Cname =document.getElementById("2").value
            const CkSkills =document.getElementById("3").value
            const Remarks =document.getElementById("4").value
            Setdata([...data,{Fname,Cname,CkSkills,Remarks}])

        }
      } type="submit"/> 
    </form>
    
    <Feedback data1={data} />
   </div>
    
   
  );
};

export default Feedbackform;
