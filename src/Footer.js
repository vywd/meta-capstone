import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <img src="./icons_assets/icon2.jpg" alt="" className='footerLogo' />
        <div className='doormatNav'>
            <ul className='footer-nav'>
                <li>Doormat Navigation</li>
                <li><Link to="/" className='footer-el'>Home</Link></li>
                <li><a className='footer-el' href="">About</a></li>
                <li><a className='footer-el' href="">Menu</a></li>
                <li><Link to="/booking" className='footer-el'>Reservations</Link></li>
                <li><a className='footer-el' href="">Order online</a></li>
                <li><a className='footer-el' href="">Login</a></li>
          </ul>
        </div>
        <div className='contactNav'>
            <ul className='footer-cont'>
                <li>Contact</li>
                <li><a className='contact-el' href="">Address</a></li>
                <li><a className='contact-el' href="">Phone number</a></li>
                <li><a className='contact-el' href="">E-mail</a></li>
            </ul>
        </div>
        <div className='socmedNav'>
            <ul className='footer-soc'>
                <li>Contact</li>
                <li><a className='soc-el' href="">Facebook</a></li>
                <li><a className='soc-el' href="">Instagram</a></li>
                <li><a className='soc-el' href="">Twitter</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer