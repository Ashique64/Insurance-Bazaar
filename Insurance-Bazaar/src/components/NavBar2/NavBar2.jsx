import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './NavBar2.scss'

const NavBar2 = () => {
    const navigate = useNavigate()
    const [isSticky, setIsSticky] = useState(false);


    const handleNavigateHome = () => {
        navigate('/');
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`navbars ${isSticky ? "sticky" : ""}`}>
            <div className="container-fluid">
                <div className="row nav_row">
                    <div className="col-xl-2 col-lg-2 col-6 nav_col1">
                        <div className="logo">
                            <a href="">
                                <img src="/images/logo/InsuranceLogo2.png" style={{ transform: "scale(1.1)" }} alt="Logo" />
                            </a>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-2 col-6  nav_col3">
                        <div className="items">
                            <div className="call_us">
                                <i className="bx bxs-phone-call"></i>
                                <a href="tel:+971566900471">+971 56 690 0471</a>
                            </div>
                            <div className="nav_button">
                                <a href="#service">
                                    <i onClick={handleNavigateHome} className="bx bxs-home-heart"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar2
