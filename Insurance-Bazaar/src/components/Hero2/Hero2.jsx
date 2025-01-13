import React, { useEffect, useState } from "react";
import "../Hero/Hero.scss";

const Hero2 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [timer, setTimer] = useState(null);

    // Static list of images stored locally
    const slides = [
        {
            image: "/images/slider/slider-bg.jpg", // Replace with your actual image paths
        },
        {
            image: "/images/slider/slider-bg-2.jpg", // Replace with your actual image paths
        },
        {
            image: "/images/slider/slider-bg-3.jpg", // Replace with your actual image paths
        },
    ];

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const goToPrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        // Set up the timer for auto-slide
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        // Clear the timer on unmount
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div id="home" className="hero">
            <div className="carousel">
                <div className="carousel-inner">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === currentSlide ? "active" : ""}`}
                            style={{
                                backgroundImage: `url(${slide.image})`,
                            }}
                        >
                            <div className="content">
                                <h2>Insurance that protects your family</h2>
                                <p>
                                    We offers an investment opportunity with your life insurance policy at no
                                    additional cost.
                                </p>
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
                <button className="carousel-control next" onClick={goToNext}>
                    <div className="arrow">&#10095;</div>
                </button>
            </div>
            <div className="slider_shape">
                <img src="/images/slider/slider-shape-1.png" alt="" />
            </div>
        </div>
    );
};

export default Hero2;
