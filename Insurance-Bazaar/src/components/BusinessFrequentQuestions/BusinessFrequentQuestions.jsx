import React from "react";
import "./BusinessFrequentQuestions.scss";

const BusinessFrequentQuestions = () => {
    return (
        <div className="business-question-section">
            <div className="row question-row">
                <div className="col-12 question-col">
                    <div className="question-content">
                        <div className="title">
                            <i className="bx bx-help-circle"></i>
                            <h2>Frequently Asked Questions about Business Insurance</h2>
                        </div>
                        <div className="item">
                            <h3>
                                <i className="bx bx-chevron-down"></i>What Is Business Insurance?
                            </h3>
                            <p>
                                Business insurance is designed to protect companies from financial losses caused by risks
                                such as accidents, natural disasters, lawsuits, and theft. It helps businesses stay
                                financially stable during unexpected events.
                            </p>
                        </div>
                        <div className="item">
                            <h3>
                                <i className="bx bx-chevron-down"></i>What Are the Types of Business Insurance?
                            </h3>
                            <p>
                                The common types of business insurance include:
                                <ul>
                                    <li>
                                        <strong>General Liability Insurance:</strong> Covers legal claims and damages from
                                        accidents or injuries.
                                    </li>
                                    <li>
                                        <strong>Property Insurance:</strong> Covers damage to physical assets like
                                        buildings, equipment, etc.
                                    </li>
                                    <li>
                                        <strong>Workers' Compensation Insurance:</strong> Provides coverage for employees
                                        injured on the job.
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div className="item">
                            <h3>
                                <i className="bx bx-chevron-down"></i>How Much Does Business Insurance Cost?
                            </h3>
                            <p>
                                The cost of business insurance varies based on factors such as the size of the business, the
                                type of coverage required, and the industry. On average, small businesses pay between $500
                                and $3,000 annually for basic coverage. Additional coverage for specific risks will increase
                                the cost.
                            </p>
                        </div>
                        <div className="item">
                            <h3>
                                <i className="bx bx-chevron-down"></i>Is Business Insurance Mandatory?
                            </h3>
                            <p>
                                While business insurance is not mandatory in all cases, certain types of coverage are
                                legally required in many states. For example, workers' compensation insurance is mandatory
                                if you have employees. Similarly, vehicle insurance is required if your business uses
                                vehicles for operations.
                            </p>
                        </div>
                        <div className="item">
                            <h3>
                                <i className="bx bx-chevron-down"></i>How Do I Choose the Right Business Insurance?
                            </h3>
                            <p>
                                To choose the right business insurance, assess the specific risks your business faces.
                                Consider factors like industry, location, size, and employee numbers. It’s also advisable to
                                consult with an insurance broker who can help you tailor a policy to suit your needs and
                                budget.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessFrequentQuestions;
