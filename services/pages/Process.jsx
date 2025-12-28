import React from 'react'
import Navbar from '../src/components/Navbar'
import CTA from '../src/components/CTA'
import Footer from '../src/components/Footer'
import Planning from '../src/components/Planning'
import Desgin from '../src/components/Desgin'
import Testing from '../src/components/Testing'
import Support from '../src/components/Support'

const Process = () => {
  return (
    <div>
        <Navbar/>
        <Planning/>
        <Desgin/>
        <Testing/>
        <Support/>
        <CTA/>
        <Footer/>
    </div>
  )
}

export default Process