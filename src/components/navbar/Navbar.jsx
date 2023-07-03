import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className="nav-logo">logo</div>
        <div className="nav-items">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Testimonials</a>
            <a href="">Contact</a>
        </div>
    </div>
  )
}

export default Navbar