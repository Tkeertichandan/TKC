import React from 'react'
import './Faculty.css';
const Faculty = () => {

  const myStyles = {
    textAlign: 'center',
    marginTop: '2rem',
    color: 'orange',
  };
  return (
    <div >

      
      <table className="SDL">
  <tr >
    <th style={myStyles}>FacultyName</th>
    <th style={myStyles}>Designation</th>
    <th style={myStyles}>Department</th>
  </tr>
  <tr>
    <td>V.Murali Mohan</td>
    <td>Professor</td>
    <td>CSE-Honors</td>
  </tr>
  <tr>
    <td>Ch.Anil</td>
    <td>Asst Professor</td>
    <td>CSE-Honors</td>
  </tr>
  <tr>
    <td>B.Ashokh</td>
    <td>Professor</td>
    <td>CSE-Regulars</td>
  </tr>
  
  
</table>
<table>...</table>
<table>...</table>
    </div>
  )
}

export default Faculty
