import React from 'react'

const Student = () => {
  const myStyles = {
    textAlign: 'center',
    marginTop: '2rem',
    color: 'blue',
  };

  return (
    <div>
      <table className='student'>
  <tr>
    <th style={myStyles}>StudentName</th>
    <th style={myStyles}>Year</th>
    <th style={myStyles}>Department</th>
  </tr>
  <tr>
    <td>K.SaiLaxmanRao</td>
    <td>2023</td>
    <td>CS&IT</td>
  </tr>
  <tr>
    <td>T.K.Chanadn</td>
    <td>2023</td>
    <td>CSE</td>
  </tr>
  <tr>
    <td>K.Puneeth</td>
    <td>2022</td>
    <td>CSE</td>
  </tr>
  </table>
  <table>...</table>
  <table>...</table>
    </div>
  )
}

export default Student
