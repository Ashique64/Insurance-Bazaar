import React from "react";
import "./AboutContent.scss";

const AboutContent = () => {
    const listItem = [
        {
            item: "We are Award Winning Company",
        },
        {
            item: "Refreshing to get such a personal touch.",
        },
        {
            item: "Easy and first process",
        },
        {
            item: "Save your money",
        },
    ];
    return (
        <div className="about_content">
            <div className="container">
                <div className="row about_content_row">
                    <div className="col-md-6 item1">
                        <div className="content_section">
                            <h3>Creating a better future for your loved once</h3>
                            <div className="paragraphs">
                                <p className="para1">
                                    We always put our clients’ interests and welfare first and give priority to forming
                                    long-term relationships. Our commitment is exemplified by the fact that we are one of
                                    the very few brokers in the world who can provide a six day a week service.
                                </p>
                                <p className="para2">
                                    The company’s roots are within the PWS Group. It was founded by Messrs. Pearson, Webb,
                                    and Springbett in London in 1964 as a Lloyd’s reinsurance broker; the company name was
                                    later shortened to PWS during the 1980s. Continued organic growth lead to the opening of
                                    further companies.
                                </p>
                            </div>
                        </div>

                        <div className="content_list">
                            <ul>
                                {listItem.map((item, index) => (
                                    <li key={index}>
                                        <i className="bx bx-check"></i>
                                        {item.item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 item2">
                        <div className="content_image">
                            <div className="image1">
                                <img src="/images/about/ab-me-1.jpg" alt="" />
                            </div>
                            <div className="image2">
                                <img src="/images/about/ab-me-sm-1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;
