import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import About from '../pages/About';
import Services from '../pages/Services';
import Process from '../pages/Process';


const App = () => {
  return (
    <div>
       <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about-us' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/process' element={<Process/>}/>
       </Routes>
    </div>
  )
}

export default App