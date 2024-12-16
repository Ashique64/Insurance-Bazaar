import React, { useState } from "react";
import "./NavBar2.scss";

const NavBar2 = () => {
    const [menuIcon, setMenuicon] = useState(false);
    const [activeItem, setActiveItem] = useState("home");

    const handleMenuIcon = () => {
        setMenuicon(!menuIcon);
    };

    const handleScroll = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (sectionId) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setActiveItem(sectionId);
    };

    return (
        <div className="nav">
            <a className="logo" href="">
                ASHIQUE
            </a>
            <div>
                <ul id="navbar-items" className={menuIcon ? "show" : ""}>
                    <li>
                        <a
                            className={activeItem === "home" ? "active" : ""}
                            href="#home"
                            onClick={(e) => handleScroll(e, "home")}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className={activeItem === "about" ? "active" : ""}
                            href="#about"
                            onClick={(e) => handleScroll(e, "about")}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            className={activeItem === "services" ? "active" : ""}
                            href="#services"
                            onClick={(e) => handleScroll(e, "services")}
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            className={activeItem === "portfolio" ? "active" : ""}
                            href="#portfolio"
                            onClick={(e) => handleScroll(e, "portfolio")}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a
                            className={activeItem === "contact" ? "active" : ""}
                            href="#contact"
                            onClick={(e) => handleScroll(e, "contact")}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
            <div id="mobile" onClick={handleMenuIcon}>
                <i id="bar" className={menuIcon ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        </div>
    );
};

export default NavBar2;