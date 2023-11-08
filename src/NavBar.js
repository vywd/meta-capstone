import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul className='nav-menu'>
          <li><a className='nav-el' href=""></a></li>
          <li><Link to="/" className='nav-el'>Home</Link></li>
          <li><a className='nav-el' href="#">About</a></li>
          <li><a className='nav-el' href="#">Menu</a></li>
          <li><Link to="/booking" className='nav-el'>Reservations</Link></li>
          <li><a className='nav-el' href="#">Order online</a></li>
          <li><a className='nav-el' href="#">Login</a></li>
      </ul>
    </nav>
  )
}

export default NavBar