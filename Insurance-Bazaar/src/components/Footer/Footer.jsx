import React from "react";
import "./Footer.scss";

const Footer = () => {

    const socialIcons = [
        {
            icon: "bx bxl-facebook",
            link: "https://www.facebook.com/",
        },
        {
            icon: "bx bxl-twitter",
            link: "https://twitter.com/",
        },
        {
            icon: "bx bxl-instagram",
            link: "https://www.instagram.com/",
        },
        {
            icon: "bx bxl-youtube",
            link: "https://www.youtube.com/",
        },
        {
            icon: "bx bxl-linkedin",
            link: "https://www.linkedin.com/",
        },
    ]
    return (
        <div className="footer">
            <div className="footer-shape">
                <img src="/images/slider/02_Shape.png" alt=""></img>
            </div>
            <div className="container">
                <div className="row logo_row">
                    <div className="col-12 logo_col">
                        <div className="logo_items">
                            <div className="logo">
                                <a href="">
                                    Logo
                                    <img src="" alt="" />
                                </a>
                            </div>
                            <div className="social">
                                {socialIcons.map((item, index) => (
                                    <a href={item.link} key={index}>
                                        <i className={item.icon}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
