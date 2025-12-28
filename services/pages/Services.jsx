import React from 'react'
import Navbar from '../src/components/Navbar'
import CTA from '../src/components/CTA'
import Footer from '../src/components/Footer'
import Website from '../src/components/Website'
import AppDev from '../src/components/AppDev'
import Custom from '../src/components/Custom'
import UI from '../src/components/UI'
import ECommerce from '../src/components/E-commerce'
import HeroPage from '../src/components/HeroPage'

const Services = () => {
  return (
    <div>
        <Navbar/>
        <HeroPage/>
        <Website/>
        <AppDev/>
        <Custom/>
        <UI/>
        <ECommerce/>
        <CTA/>
        <Footer/>
    </div>
  )
}

export default Services