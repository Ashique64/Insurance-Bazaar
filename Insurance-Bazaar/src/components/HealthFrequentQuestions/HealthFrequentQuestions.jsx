import React from "react";
import "./HealthFrequentQuestions.scss";

const HealthFrequentQuestions = () => {
    return (
        <div className="health-question-section">
            <div className="row question-row">
                <div className="col-12 question-col">
                    <div className="question-content">
                        <div className="title">
                            <i className="bx bx-help-circle"></i>
                            <h2>Frequently Asked Questions about Health Insurance</h2>
                        </div>
                        <div className="item">
                            <h3>
                                <i className="bx bx-chevron-down"></i>What Is Health Insurance and How Does It Work?
                            </h3>
                            <p>
                                Health insurance helps cover the costs of medical care, including doctor visits, hospital
                                stays, medications, and preventive services. It can be provided by employers or purchased
                                individually.
                            </p>
                        </div>
                        <div className="item">
                            <h3>
                                <i className="bx bx-chevron-down"></i>What Are the Different Types of Health Insurance
                                Plans?
                            </h3>
                            <p>
                                There are several types of health insurance plans:
                                <ul>
                                    <li>
                                        <strong>Health Maintenance Organization (HMO):</strong> Requires you to choose a
                                        primary care physician.
                                    </li>
                                    <li>
                                        <strong>Preferred Provider Organization (PPO):</strong> Offers more flexibility to
                                        see specialists and out-of-network providers.
                                    </li>
                                    <li>
                                        <strong>Exclusive Provider Organization (EPO):</strong> Requires using network
                                        providers, except in emergencies.
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div className="item">
                            <h3>
                                <i className="bx bx-chevron-down"></i>What Is the Difference Between In-Network and
                                Out-of-Network Providers?
                            </h3>
                            <p>
                                In-network providers are those who have agreements with your insurance company to offer
                                services at a reduced cost. Out-of-network providers do not have such agreements, which
                                typically results in higher out-of-pocket costs for you.
                            </p>
                        </div>
                        <div className="item">
                            <h3>
                                <i className="bx bx-chevron-down"></i>What Are Premiums, Deductibles, and Copayments?
                            </h3>
                            <p>
                                <ul>
                                    <li>
                                        <strong>Premium:</strong> The monthly payment you make for your health insurance.
                                    </li>
                                    <li>
                                        <strong>Deductible:</strong> The amount you pay out-of-pocket for health care before
                                        your insurance starts covering costs.
                                    </li>
                                    <li>
                                        <strong>Copayment:</strong> A fixed amount you pay for a covered health care service,
                                        typically at the time of service.
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div className="item">
                            <h3>
                                <i className="bx bx-chevron-down"></i>How Can I Lower My Health Insurance Costs?
                            </h3>
                            <p>
                                You can lower your health insurance costs by:
                                <ul>
                                    <li>Choosing a higher deductible plan with lower premiums.</li>
                                    <li>Using in-network providers.</li>
                                    <li>Utilizing preventative care services to avoid high medical costs later.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthFrequentQuestions;
