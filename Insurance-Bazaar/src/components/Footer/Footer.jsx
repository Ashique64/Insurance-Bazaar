import React from "react";
import "./Footer.scss";

const Footer = () => {
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
                                <a href="">
                                    <i className="bx bxl-facebook"></i>
                                </a>
                                <a href="">
                                    <i className="bx bxl-twitter"></i>
                                </a>
                                <a href="">
                                    <i className="bx bxl-instagram"></i>
                                </a>
                                <a href="">
                                    <i className="bx bxl-youtube"></i>
                                </a>
                                <a href="">
                                    <i className="bx bxl-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
