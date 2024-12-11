import React, { useState } from "react";
import "./GetInsurance.scss";

const GetInsurance = () => {

    const [active, setActive] = useState(null)

    const tabItems = [
        {
            icon: "bx bxs-home-heart",
            title: "Home Insurance",
        },
        {
            icon: "bx bxs-car-crash",
            title: "Car Insurance",
        },
        {
            icon: "bx bxs-heart",
            title: "Health Insurance",
        },
        {
            icon: "bx bxs-book-alt",
            title: "Education Insurance",
        },
    ];

    const handleItemClick = (index) => {
        setActive(index)
    }

    return (
        <div className="get-insurance">
            <div className="container">
                <div className="row insurance_row">
                    <div className="col-xl-6 col-lg-6 col-md-12 item1">
                        <div className="title_section">
                            <h3 className="title">
                                Get an Insurance Quote <span>to get started!</span>
                            </h3>
                        </div>

                        <div className="insurance_tab_section">
                            <div className="tabs">
                                <div className="items">
                                    <ul>
                                        {tabItems.map((item, index) => (
                                            <li key={index} className={active === index ? "active" : ""} onClick={() => handleItemClick(index)}>
                                                <div className="item">
                                                    <i className={item.icon}></i>
                                                    <span>{item.title}</span>
                                                </div>
                                                <i className="bx bxs-chevron-right-circle"></i>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 item2"></div>
                </div>
            </div>
        </div>
    );
};

export default GetInsurance;
