import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Portfolio from '../components/Portfolio/Portfolio'
import Contact from '../components/Contact/Contact'

const Routing = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/services" element={<Services />}/>
    <Route path="/portfolio" element={<Portfolio />}/>
    <Route path="/contact" element={<Contact />}/>
    
  </Routes>
  )
}

export default Routing