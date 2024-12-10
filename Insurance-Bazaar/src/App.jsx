import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import TrustedBrands from './components/TrustedBrands/TrustedBrands'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import OurServices from './components/OurServices/OurServices'
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Hero/>
      <TrustedBrands/>
      <About/>
      <OurServices/>
    </>
  )
}

export default App
