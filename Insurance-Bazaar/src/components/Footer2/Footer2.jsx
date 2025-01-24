import React from "react";
import "./Footer2.scss";

const Footer2 = () => {
    const footerItems = [
        {
            title: "Our company",
            items: [
                // { name: "Our Story", link: "#our-story" },
                // { name: "News & Blog", link: "#news-blog" },
                // { name: "Careers", link: "#careers" },
                { name: "Customer support", link: "#get_insurance" },
                { name: "Contact us", link: "#get_insurance" },
            ],
        },
        {
            title: "Our offer",
            items: [
                { name: "Insurance Plans", link: "#service" },
                // { name: "Special Discounts", link: "#special-discounts" },
                // { name: "Customer Testimonials", link: "#testimonials" },
                // { name: "Partners", link: "#partners" },
                // { name: "FAQs", link: "#faqs" },
            ],
        },
        {
            title: "Contact info",
            items: [
                { name: "Email Us", link: "mailto:salesinsurancebasaar@gmail.com" },
                { name: "Call Support", link: "tel:+971566900471" },
                { name: "Find Us", link: "https://wa.me/971566900471" },
                // { name: "Working Hours", link: "#working-hours" },
                // { name: "Feedback", link: "#feedback" },
            ],
        },
    ];

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
        // {
        //     icon: "bx bxl-youtube",
        //     link: "https://www.youtube.com/",
        // },
        // {
        //     icon: "bx bxl-linkedin",
        //     link: "https://www.linkedin.com/",
        // },
    ];
    return (
        <>
            <div className="footer2">
                {/* <div className="footer-shape">
                    <img src="/images/slider/02_Shape.png" alt=""></img>
                </div> */}
                <div className="container">
                    <div className="row logo_row">
                        <div className="col-12 logo_col">
                            <div className="logo_items">
                                <div className="logo">
                                    <a href="">
                                        <img style={{transform: "scale(1.2)"}} src="/images/logo/InsuranceLogo2.png" alt="" />
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

                    <div className="footer_content">
                        <div className="row footer_content_row">
                            {footerItems.map((item, index) => (
                                <div key={index} className="col-lg-3 col-md-4 footer_content_col">
                                    <div className="items">
                                        <div className="title">
                                            <h4>{item.title}</h4>
                                        </div>
                                        <div className="item_list">
                                            <ul>
                                                {item.items.map((listItem, index) => (
                                                    <li key={index}>
                                                        <a href={listItem.link} rel="noopener noreferrer">{listItem.name}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy_right2">
                <div className="container">
                    <div className="col-xl-12 copy_col">
                        <div className="copy_content">
                            <div className="item">
                                <span>© 2025 Insurance website. All Rights Reserved.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer2;
