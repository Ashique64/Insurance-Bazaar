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
                                Change the way but
                                <br />
                                life Insurance
                            </h3>
                            <p className="para">
                                Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem
                                insitamconse quat.Exerci tation ullamcorper suscipit loborti excommodo habent claritatem
                                insitamconse quat.Exerci tationlobortis nisl aliquip ex ea commodo n ullamcorper suscipit
                                loborti excommodo
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;
