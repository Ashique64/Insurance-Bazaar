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
                            <h3 className="title">Our History</h3>
                            <p className="para">
                                Insurancebasar is based in Dubai, the commercial capital of the Arabian Gulf, and is a
                                leading provider of innovative and complex risk solutions across the region and globally.
                                With a strong presence in the Middle East, South and East Asia, and Africa, our expertise
                                spans multiple regions, reflecting our deep understanding of local markets and risks. We
                                have built our reputation on a long history of partnering with clients to meet their
                                evolving risk management needs in an ever-changing global environment. At Insurancebasar, we
                                prioritize our clients' interests and well-being, focusing on building long-term
                                relationships. Our commitment to exceptional service is demonstrated by our ability to
                                provide support six days a week, a rare offering among brokers globally.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;
