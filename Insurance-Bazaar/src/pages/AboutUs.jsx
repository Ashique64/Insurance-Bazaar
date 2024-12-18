import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import AboutHero from '../components/AboutHero/AboutHero'
import AboutContent from '../components/AboutContent/AboutContent'
import AboutUsSection from '../components/AboutUsSection/AboutUsSection'

const AboutUs = () => {
  return (
    <>
    <NavBar page="about" />
    <AboutHero/>
    <AboutContent/>
    <AboutUsSection/>
    {/* <Footer/> */}
    </>
  )
}

export default AboutUs
