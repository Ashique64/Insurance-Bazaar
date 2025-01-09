import React from "react";
import "./AboutUsSection.scss";

const AboutUsSection = () => {
    return (
        <div className="about-us-section">
            <div className="container">
                <div className="row about_section_row">
                    <div className="col-md-6 item1">
                        <div className="about_section_image">
                            <img src="/images/about/about-2-1.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 item2">
                        <div className="about_section_content">
                            <h4 className="subtitle">About us</h4>
                            <h3 className="title">
                                Our History
                            </h3>
                            <p className="para">
                                Insurance Basaar was founded in Dubai in 1998 and is able to efficiently transact a broad range of
                                insurance and reinsurance classes in addition to the traditional Property and Casualty
                                classes. Having hired a team of dedicated professionals, we are committed to always ensuring
                                a high standard of service for our clients. In addition, although we transact reinsurance
                                business, we also have developed relationships with direct clients particularly in the
                                Marine, Contracting, and Financial Institutions fields.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;
