import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import TrustedBrands from './components/TrustedBrands/TrustedBrands'
import Hero from './components/Hero/Hero'
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Hero/>
      <TrustedBrands/>
    </>
  )
}

export default App
