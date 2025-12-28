import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Choose from '../components/Choose'
import Work from '../components/Work'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Services/>
        <Choose/>
        <Work/>
    </div>
  )
}

export default HomePage