import React from 'react'
import Attendance from './Attendance';
import "./Students.css";
const Students = () => {
  return (
    <div class="s" >
      <h1>Students Attendance</h1>
      <div >
  <div class="s1">
   <h3> Name:K.SaiLaxmanRao</h3>
   <h3> Id:2300090230</h3>
   <h3> Branch:CS & IT</h3>
  <Attendance/>
  </div>
  <table>....</table>
   <table>....</table>

</div>
<div>
  
  <div class="s2">
    <h3>Name:T.K.Chandan</h3>
    <h3>Id:2300033901</h3>
    <h3>Branch: CSE </h3>
    <Attendance/>
  </div>
   <table>....</table>
   <table>....</table> 
</div>

<div class="s3">

  <div>
  <h3>Name:K.Puneeth Reddy</h3>
    <h3>Id:2300030998</h3>
    <h3>Branch: CSE </h3>
    <Attendance/>
  </div>

</div>
<table>....</table>
<table>....</table> 

<div class="s4">
  <div>
  <h3>Name:K.L.Prasad</h3>
    <h3>Id:2300030286</h3>
    <h3>Branch: CSE </h3>
    <Attendance/>
  </div>
</div>
<table>....</table>
<table>....</table> 


<div class="s5">
  <div>
  <h3>Name:B.Shyamsundar</h3>
    <h3>Id:2300040118</h3>
    <h3>Branch: CSE </h3>
    <Attendance/>
  </div>

</div>
<table>....</table>
<table>....</table> 
    </div>
  )
}

export default Students
