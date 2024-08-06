import React from 'react'
import logo from './logo.png';
import './Header.css'
const Header = () => {
  return (
    <div className='head'> 
      <h1> KL university </h1>
      <img src={logo} alt="KLU Logo" />
    </div>
  )
}

export default Header
