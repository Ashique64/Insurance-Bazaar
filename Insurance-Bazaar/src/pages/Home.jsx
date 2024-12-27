import React, { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import TrustedBrands from "../components/TrustedBrands/TrustedBrands";
import About from "../components/About/About";
import OurServices from "../components/OurServices/OurServices";
import GetInsurance from "../components/GetInsurance/GetInsurance";
import Feedback from "../components/Feedback/Feedback";
import OurBlog from "../components/OurBlog/OurBlog";
import Footer from "../components/Footer/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";
import WhatsAppButton from "../components/WhatsappButton/WhatsappButton";

const Home = () => {

    useEffect(() => {
        if (window.location.hash === "#service") {
            const serviceSection = document.getElementById("service");
            if (serviceSection) {
                serviceSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);

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
            <ScrollToTopButton/>
            <WhatsAppButton/>
        </>
    );
};

export default Home;
