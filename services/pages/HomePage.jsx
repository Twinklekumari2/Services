import React from 'react'
import Navbar from '../src/components/Navbar'
import HeroSection from '../src/components/HeroSection'
import Services from '../src/components/Services'
import Choose from '../src/components/Choose'
import Work from '../src/components/Work'
import Testimonial from '../src/components/Testimonial'
import TechStack from '../src/components/TechStack'
import CTA from '../src/components/CTA'
import Footer from '../src/components/Footer'

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
        <CTA/>
        <Footer/>
    </div>
  )
}

export default HomePage