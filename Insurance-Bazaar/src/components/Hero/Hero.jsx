import React, { useEffect, useState } from "react";
import "./Hero.scss";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            img: "/images/slider/slider-bg.jpg",
            alt: "Slide 1",
        },
        {
            img: "/images/slider/slider-bg-2.jpg",
            alt: "Slide 2",
        },
        {
            img: "/images/slider/slider-bg-3.jpg",
            alt: "Slide 3",
        },
    ];

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const goToPrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const timer = setInterval(goToNext, 4000);
        return () => clearInterval(timer);
    }, []);



    return (
        <div id="home" className="hero">
            <div className="carousel">
                <div className="carousel-inner">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === currentSlide ? "active" : ""}`}
                            style={{
                                backgroundImage: `url(${slide.img})`,
                            }}
                        >
                            <div className="content">
                                <h2>Insurance that protect your family</h2>
                                <p>Only our company gives you aninvestment with your life insurance  policy at no extracost</p>
                                <div className="content_btn">
                                    <button className="btn1">GET STARTED</button>
                                    <button className="btn2">CONTACT US TODAY</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control prev" onClick={goToPrev}>
                    <div className="arrow">&#10094;</div>
                </button>
                <button className="carousel-control next"  onClick={goToNext}>
                    <div className="arrow">&#10095;</div>
                </button>
            </div>
            <div className="slider_shape">
                <img src="/images/slider/slider-shape-1.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;
