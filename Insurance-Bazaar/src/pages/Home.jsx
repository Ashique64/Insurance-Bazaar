import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import TrustedBrands from "../components/TrustedBrands/TrustedBrands";
import About from "../components/About/About";
import OurServices from "../components/OurServices/OurServices";
import GetInsurance from "../components/GetInsurance/GetInsurance";
import Feedback from "../components/Feedback/Feedback";
import OurBlog from "../components/OurBlog/OurBlog";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <TrustedBrands />
            <About />
            <OurServices />
            <GetInsurance />
            <Feedback />
            <OurBlog />
            <Footer />
        </>
    );
};

export default Home;
