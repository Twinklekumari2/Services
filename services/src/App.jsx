import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import About from '../pages/About';


const App = () => {
  return (
    <div>
       <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about-us' element={<About/>}/>
       </Routes>
    </div>
  )
}

export default App