import React from "react";
import "./NavBar.scss";

const NavBar = () => {
    return (
        <div className="navbars">
            <div className="container-fluid">
                <div className="row nav_row">
                    <div className="col-xl-2 col-lg-2 col-md-6 nav_col1">
                        <div className="logo">
                            <a href="">
                                LOGO
                                <img src="" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-8 d-none d-lg-block nav_col2">
                        <div className="nav_menu">
                            <div id="mobile_menu">
                                <ul>
                                    <li>
                                        <a href="">Home</a>
                                    </li>
                                    <li>
                                        <a href="">service</a>
                                    </li>
                                    <li>
                                        <a href="">companies</a>
                                    </li>
                                    <li>
                                        <a href="">About us</a>
                                    </li>
                                    <li>
                                        <a href="">privacy policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-2 col-md-6 nav_col3">
                        <div className="items">
                            <div className="call_us">
                                <i className="bx bxs-phone-call"></i>
                                <p>+91 1234567890</p>
                            </div>
                            <div className="nav_button">
                                <button>get started</button>
                            </div>
                            <div className="mobile_icon">
                                <a href="">
                                    <i className="bx bx-menu"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
