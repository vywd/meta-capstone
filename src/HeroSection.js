import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className='herosection'>
        <div className='hero-left'>
            <h1>Littel Lemon</h1>
            <h2>Small family restaurant</h2>
            <Link to="/booking" className='reserv-btn'>Reserve a Table</Link>
        </div>
        <img className='hero-right' src="" alt="" />
    </section>
  )
}

export default HeroSection