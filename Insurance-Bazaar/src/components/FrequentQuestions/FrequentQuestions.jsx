import React from "react";
import "./FrequentQuestions.scss";

const FrequentQuestions = () => {
    return (
        <div className="question-section">
            <div className="row question-row">
                <div className="col-12 question-col">
                    <div className="question-content">
                        <div className="title">
                            <i className="bx bx-help-circle"></i>
                            <h2>Frequently Asked Questions</h2>
                        </div>
                        <div className="item">
                            <div className="title">
                                <i className="bx bx-chevron-down"></i>
                                <h3>Is Car Insurance Transferable in Dubai?</h3>
                            </div>
                            <p>
                                Yes, in Dubai, car insurance is typically transferable when selling a vehicle. The new owner
                                must provide their details, such as name and contact information, to the insurance company
                                to transfer the policy. If the car is gifted or donated, the new owner must also update
                                their information with the insurer to maintain coverage under the existing policy.
                            </p>
                        </div>
                        <div className="item">
                            <div className="title">
                                <i className="bx bx-chevron-down"></i>
                                <h3>Key Factors to Consider When Buying a Car Insurance Policy</h3>
                            </div>
                            <p>
                                When purchasing car insurance, keep these important factors in mind:
                                <ul>
                                    <li>
                                        <strong>Type of Car:</strong> Luxury or high-performance cars often have higher
                                        insurance costs.
                                    </li>
                                    <li>
                                        <strong>Driving History:</strong> A clean driving record can reduce premiums.
                                    </li>
                                    <li>
                                        <strong>Coverage Needs:</strong> Evaluate whether you need basic or comprehensive
                                        coverage.
                                    </li>
                                    <li>
                                        <strong>Budget: </strong> Shop for a policy that provides adequate protection
                                        without exceeding your budget. Compare options for the best deal.
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div className="item">
                            <div className="title">
                                <i className="bx bx-chevron-down"></i>
                                <h3>How Much Does Comprehensive Car Insurance Cost in the UAE?</h3>
                            </div>
                            <p>
                                The cost of comprehensive car insurance in the UAE ranges from AED 500 to AED 2,000
                                annually. The exact cost depends on factors like the insurance provider, level of coverage,
                                driver’s age, and driving history. To save money, request quotes from multiple insurers and
                                inquire about available discounts, such as safe driving rewards or memberships in
                                professional organizations.
                            </p>
                        </div>
                        <div className="item">
                            <div className="title">
                                <i className="bx bx-chevron-down"></i>
                                <h3>Do You Need Car Insurance to Renew Vehicle Registration in Dubai?</h3>
                            </div>
                            <p>
                                Yes, car insurance is mandatory for renewing vehicle registration in Dubai. Without
                                insurance, you cannot renew your registration, and your car will be classified as
                                unregistered, making it illegal to drive on public roads. To avoid fines and legal issues,
                                ensure your car insurance is up to date before attempting to renew your registration.
                            </p>
                        </div>
                        <div className="item">
                            <div className="title">
                                <i className="bx bx-chevron-down"></i>
                                <h3>What Documents Are Required to Get Car Insurance in Dubai?</h3>
                            </div>
                            <p>
                                To obtain car insurance in Dubai, you will typically need the following documents:
                                <ul>
                                    <li>
                                        <strong>Emirates ID</strong>
                                    </li>
                                    <li>
                                        <strong>Driver's license</strong>
                                    </li>
                                    <li>
                                        <strong>Vehicle registration </strong>(Mulkiya)
                                    </li>
                                    <li>
                                        <strong>Proof of previous insurance </strong>(if applicable): <br />
                                        These documents help insurers verify your eligibility and determine the appropriate
                                        policy for your vehicle. Always keep your documents ready for a smooth insurance
                                        application process.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrequentQuestions;
