import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import TrustedBrands from './components/TrustedBrands/TrustedBrands'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import OurServices from './components/OurServices/OurServices'
import './App.css'
import GetInsurance from './components/GetInsurance/GetInsurance'
import Feedback from './components/Feedback/Feedback'
import OurBlog from './components/OurBlog/OurBlog'

function App() {

  return (
    <>
      <NavBar />
      <Hero/>
      <TrustedBrands/>
      <About/>
      <OurServices/>
      <GetInsurance/>
      <Feedback/>
      <OurBlog/>
    </>
  )
}

export default App
