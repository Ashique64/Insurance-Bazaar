import React from "react";
import "./AboutUsExpert.scss";

const AboutUsExpert = () => {
    const cardItems = [
        {
            img: "/images/team/team-1.jpg",
            name: "Guy Hawkins",
            position: "Ux Designer",
        },
        {
            img: "/images/team/team-2.jpg",
            name: "Brooklyn Simmons",
            position: "Developer",
        },
        {
            img: "/images/team/team-3.jpg",
            name: "Alextina Ditarson",
            position: "Ux Designer",
        },
    ];
    return (
        <div className="about-us-expert">
            <div className="container">
                <div className="row about_expert_title_row">
                    <div className="col-xl-8 title_col">
                        <div className="title_content">
                            <h4 className="subtitle">OUR EXPERTS</h4>
                            <h3 className="title">Meet our team</h3>
                        </div>
                    </div>
                </div>

                <div className="row about_expert_content_row">
                    {cardItems.map((item, index) => (
                        <div key={index} className="col-xl-4 col-lg-6 col-md-6 card_col">
                            <div className="card_section">
                                <div className="items">
                                    <div className="card_image">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="card_content">
                                        <h4>{item.name}</h4>
                                        <span>{item.position}</span>
                                    </div>

                                    <div className="card_icons">
                                        <i className="bx bxs-envelope icon1"></i>
                                        <i className="bx bxs-share-alt icon2"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUsExpert;
