import React from 'react'
import Navbar from '../src/components/Navbar'
import HeroSection from '../src/components/HeroSection'
import Services from '../src/components/Services'
import Choose from '../src/components/Choose'
import Work from '../src/components/Work'
import Testimonial from '../src/components/Testimonial'
import TechStack from '../src/components/TechStack'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Services/>
        <Choose/>
        <Work/>
        <Testimonial/>
        <TechStack/>
    </div>
  )
}

export default HomePage