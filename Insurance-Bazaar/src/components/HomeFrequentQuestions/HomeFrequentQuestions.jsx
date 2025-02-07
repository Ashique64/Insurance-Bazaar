import React from "react";
import "./HomeFrequentQuestions.scss";

const HomeFrequentQuestions = () => {
    return (
        <div className="home-question-section">
            <div className="row question-row">
                <div className="col-12 question-col">
                    <div className="question-content">
                        <div className="title">
                            <i className="bx bx-home-circle"></i>
                            <h2>Home Insurance - Frequently Asked Questions</h2>
                        </div>
                        <div className="item">
                            <div className="title">
                                <i className="bx bx-chevron-down"></i>
                                <h3>What Does Home Insurance Cover?</h3>
                            </div>
                            <p>
                                Home insurance typically covers damages caused by fire, theft, natural disasters, and
                                liability for injuries occurring on your property. Some policies may also include coverage
                                for temporary living expenses if your home becomes uninhabitable.
                            </p>
                        </div>
                        <div className="item">
                            <div className="title">
                                <i className="bx bx-chevron-down"></i>
                                <h3>Is Home Insurance Mandatory in the UAE?</h3>
                            </div>
                            <p>
                                Home insurance is not legally required in the UAE, but it is highly recommended. If you have
                                a mortgage, your lender may require you to have a policy in place to protect their
                                investment.
                            </p>
                        </div>
                        <div className="item">
                            <div className="title">
                                <i className="bx bx-chevron-down"></i>
                                <h3>What Factors Affect Home Insurance Premiums?</h3>
                            </div>
                            <p>
                                <ul>
                                    <li>
                                        <strong>Property Type:</strong> Villas and apartments have different risk
                                        assessments.
                                    </li>
                                    <li>
                                        <strong>Location:</strong> Homes in high-risk areas may have higher premiums.
                                    </li>
                                    <li>
                                        <strong>Security Measures:</strong> Homes with security systems may qualify for
                                        discounts.
                                    </li>
                                    <li>
                                        <strong>Coverage Amount:</strong> Higher coverage leads to higher premiums.
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div className="item">
                            <div className="title">
                                <i className="bx bx-chevron-down"></i>
                                <h3>Can I Customize My Home Insurance Policy?</h3>
                            </div>
                            <p>
                                Yes, most insurance providers allow customization. You can add coverage for high-value
                                items, home office equipment, and even accidental damage.
                            </p>
                        </div>
                        <div className="item">
                            <div className="title">
                                <i className="bx bx-chevron-down"></i>
                                <h3>How Do I File a Home Insurance Claim?</h3>
                            </div>
                            <p>
                                To file a claim, contact your insurance provider, provide necessary documents (police
                                reports, photos, proof of ownership), and follow their assessment process. Claims are
                                usually settled within a specified period depending on the insurer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeFrequentQuestions;
