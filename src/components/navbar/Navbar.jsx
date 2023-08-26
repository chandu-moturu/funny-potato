import React from 'react'
import './navbar.css'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  return (
    <div className='nav'>
        <a href=""><img src={logo} alt="" style={{width:'80px',borderRadius:'50%'}}/></a>
        <div className="nav-items">
            <a href="">Home</a>
            <a href="">Project</a>
            <a href="">Team</a>
        </div>
        <a href="" className='contact'>Contact</a>
    </div>
  )
}

export default Navbar