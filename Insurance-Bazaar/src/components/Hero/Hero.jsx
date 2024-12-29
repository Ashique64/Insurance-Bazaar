import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Hero.scss";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slides, setSlides] = useState([]);

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const goToPrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const fetchImages = async () => {
        try {
            const response = await axios.get("http://localhost:8000/admins/image_list/");
            console.log("Fetched Images: for me", response.data);
            const updatedImages = response.data.map((img) => ({
                ...img,
                image: `http://localhost:8000/${img.image}`,
            }));
            console.log("Updated Images:", updatedImages); 
            setSlides(updatedImages);
        } catch (error) {
            console.error("Failed to fetch images:", error);
        }
    };

    useEffect(() => {
        console.log("Slides:", slides);
        fetchImages();
        const timer = setInterval(goToNext, 5000);
        return () => clearInterval(timer);
    }, []);

    if (slides.length === 0) {
        return <p>Loading images...</p>;
    }

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
                                    Only our company gives you an investment with your life insurance policy at no extra
                                    cost.
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

export default Hero;
