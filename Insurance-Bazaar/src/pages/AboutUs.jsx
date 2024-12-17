import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import AboutHero from '../components/AboutHero/AboutHero'
import AboutContent from '../components/AboutContent/AboutContent'

const AboutUs = () => {
  return (
    <>
    <NavBar page="about" />
    <AboutHero/>
    <AboutContent/>
    {/* <Footer/> */}
    </>
  )
}

export default AboutUs
