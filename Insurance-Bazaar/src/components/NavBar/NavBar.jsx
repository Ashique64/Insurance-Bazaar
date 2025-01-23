import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = ({ page }) => {
    const [menuIcon, setMenuicon] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const handleMenuIcon = () => {
        setMenuicon(!menuIcon);
    };

    const closeMenu = () => {
        setMenuicon(false);
    };

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
        <div className={`navbars ${isSticky ? "sticky" : ""} ${page === "about" ? "blue-bg" : ""}`}>
            <div className="container-fluid">
                <div className="row nav_row">
                    <div className="col-xl-2 col-lg-2 col-6 nav_col1">
                        <div className="logo">
                            <a href="">
                                <img src="/images/logo/InsuranceLogo2.png" style={{ transform: "scale(1.1)" }} alt="Logo" />
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-8 nav_col2">
                        <div id="mobile_menu">
                            <ul className={menuIcon ? "show" : ""}>
                                <li>
                                    <Link
                                        to="/"
                                        onClick={() => {
                                            window.scrollTo({ top: 0, behavior: "smooth" });
                                            closeMenu();
                                        }}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <a onClick={closeMenu} href="#about">About us</a>
                                </li>
                                <li>
                                    <a onClick={closeMenu} href="#service">service</a>
                                </li>
                                <li>
                                    <a onClick={closeMenu} href="#get_insurance">contact us</a>
                                </li>
                                <i className={menuIcon ? "bx bx-x" : ""} onClick={handleMenuIcon}></i>
                            </ul>
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
                                    <button>get started</button>
                                </a>
                            </div>
                            <div
                                className="mobile_icon"
                                onClick={handleMenuIcon}
                                role="button"
                                aria-label="Toggle menu"
                                tabindex="0"
                            >
                                <i className={menuIcon ? "" : "bx bx-menu"}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
