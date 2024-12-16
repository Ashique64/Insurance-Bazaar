import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.scss";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            className={`scroll-to-top ${isVisible ? "visible" : ""}`}
            onClick={scrollToTop}
        >
            <i className='bx bx-chevrons-up'></i>
        </button>
    );
};

export default ScrollToTopButton;
