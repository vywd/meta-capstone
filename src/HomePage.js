import React from 'react'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import Specials from './Specials'
import CustomersSay from './CustomersSay'
import Chicago from './Chicago'
import Footer from './Footer'

const HomePage = () => {
  return (
    <main>
        <NavBar/>
        <HeroSection/>
        <Specials/>
        <CustomersSay/>
        <Chicago/>
        <Footer/>
    </main>
  )
}

export default HomePage
