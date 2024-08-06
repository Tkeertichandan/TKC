import React from 'react'
import './Courses.css';
const Courses = () => {
  const myStyles = {
    textAlign: 'center',
    marginTop: '2rem',
    color: 'Red',
  };

  return (
    <div>
      <table className='TKC' >
  <tr>
    <th style={myStyles}>Course Code</th>
    <th style={myStyles}>Course Name</th>
    <th style={myStyles}>Course Structure</th>
    <th style={myStyles}> Course credits </th>
  </tr>
  <tr>
    <td>23CS06EF</td>
    <td>23CS2205A</td>
    <td>23SDCS11R</td>
    <td>23MT2004</td>
  </tr>
  <tr>
    <td> MSWD </td>
    <td> DAA </td>
    <td> Linux Admistration </td>
    <td> MP</td>
  </tr>
  <tr>
    <td>0-0-4-6</td>
    <td>2-4-6-4</td>
    <td>4-2-1-2</td>
    <td> 2-4-0-6</td>
  </tr>
  <tr>
    <td>4</td>
    <td>7</td>
    <td>2</td>
    <td>4</td>
  </tr>
  
  
</table>
<table>...</table>
  <table>...</table>
    </div>
  )
}

export default Courses
