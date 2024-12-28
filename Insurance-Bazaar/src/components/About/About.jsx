import React from "react";
import "./About.scss";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    const handleAbout = () => {
        navigate("/about");
    };

    return (
        <div id="about" className="about">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 item1">
                        <div className="about_image">
                            <img src="/images/about/about-big-1.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 item2">
                        <div className="about_contents">
                            <h4 className="subtitle">About Us</h4>
                            <h3 className="title">
                                Change the way but
                                <span>
                                    <br />
                                    life Insurance
                                </span>
                            </h3>
                            <p className="para1">
                                With our main office located in the commercial capital of the Arabian Gulf, Dubai, PWS Gulf
                                delivers innovative and complex risk solutions across the region and elsewhere.
                            </p>
                            <p className="para2">
                                Our expertise in the Middle East and beyond is reflected in our own geographical
                                distribution of clients in the Middle East, South and East Asia and Africa.
                            </p>
                        </div>
                        <div className="about_button">
                            <button onClick={handleAbout}>ABOUT US</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
