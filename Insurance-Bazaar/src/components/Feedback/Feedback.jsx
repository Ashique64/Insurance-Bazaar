import React from "react";
import "./Feedback.scss";

const Feedback = () => {
    const cardItems = [
        {
            para: "We transact both direct insurance and reinsurance for clients in specific fields. ",
        },
        {
            para: "We employ a multinational team with more than 100 years combined experience in the region. "
        },
        {
            para: "Our main focus is the provision of insurance or reinsurance programmes for the marine industrial, construction, financial institutions and jewellery industries. "
        },
    ];

    return (
        <div className="feedback">
            <div className="feedback_shape1">
                <img src="/images/slider/02_Shape.png" alt="" />
            </div>
            <div className="feedback_shape2">
                <img src="/images/slider/03_Shape.png" alt="" />
            </div>

            <div className="container">
                <div className="row feedback_row1">
                    <div className="col-md-12 title_col">
                        <div className="title_section">
                            <h4 className="subtitle">What We Do</h4>
                            <h3 className="title">Our focus is delivering high <br />
                            <span> quality services.</span></h3>
                        </div>
                    </div>
                </div>

                <div className="row feedback_row2">
                    {cardItems.map((item, index) => (
                        <div key={index} className=" col-12 card_section">
                            <div className="card">
                            <i className="bx bxs-star"></i>
                                <p>
                                    {item.para}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feedback;
