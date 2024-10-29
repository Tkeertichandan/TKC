import React from 'react'
import "./Feedback.css" ;

const Feedback = ({data1}) => {
  
  return (
    
  <div className='fb' >
    
    {
      data1.map((items,index)=>(
        
        <div key={index} >
          <table > 
            <tr bgcolor="orange"> 
        <th> {items.Fname}</th>
        <th>{items.Cname}</th>
        <th> {items.CkSkills}</th>
        <th> {items.Remarks} </th>
        </tr>
          </table>
        </div>
      
      ))
    } 
    
    </div>
  )
}

export default Feedback