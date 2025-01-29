import React from "react";
import "./LifeFrequentQuestions.scss";

const LifeFrequentQuestions = () => {
    return (
        <div className="life-question-section">
            <div className="row question-row">
                <div className="col-12 question-col">
                    <div className="question-content">
                        <div className="title">
                            <i className="bx bx-help-circle"></i>
                            <h2>Frequently Asked Questions about Life Insurance</h2>
                        </div>
                        <div className="item">
                            <h3>
                                <i className="bx bx-chevron-down"></i>What Is Life Insurance and How Does It Work?
                            </h3>
                            <p>
                                Life insurance provides financial protection to your beneficiaries in case of your death. It
                                ensures that your loved ones are financially supported, covering living expenses, debts, and
                                other financial obligations.
                            </p>
                        </div>
                        <div className="item">
                            <h3>
                                <i className="bx bx-chevron-down"></i>What Are the Types of Life Insurance?
                            </h3>
                            <p>
                                The main types of life insurance are:
                                <ul>
                                    <li>
                                        <strong>Term Life Insurance:</strong> Provides coverage for a set period, typically
                                        10-30 years.
                                    </li>
                                    <li>
                                        <strong>Whole Life Insurance:</strong> Provides lifelong coverage and includes a
                                        savings component.
                                    </li>
                                    <li>
                                        <strong>Universal Life Insurance:</strong> Offers flexible premiums and death
                                        benefits.
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div className="item">
                            <h3>
                                <i className="bx bx-chevron-down"></i>How Do I Choose the Right Life Insurance?
                            </h3>
                            <p>
                                To choose the right life insurance, evaluate your financial obligations, the number of
                                dependents, and the duration of coverage you need. Term life insurance is ideal for
                                temporary needs, while whole or universal life insurance is suitable for long-term coverage
                                and building savings.
                            </p>
                        </div>
                        <div className="item">
                            <h3>
                                <i className="bx bx-chevron-down"></i>What Is the Cost of Life Insurance?
                            </h3>
                            <p>
                                The cost of life insurance varies depending on factors like age, health, coverage amount,
                                and policy type. On average, term life insurance is cheaper than whole life insurance. It is
                                recommended to get quotes from different insurers to compare rates.
                            </p>
                        </div>
                        <div className="item">
                            <h3>
                                <i className="bx bx-chevron-down"></i>Can I Change My Life Insurance Policy After Purchase?
                            </h3>
                            <p>
                                Yes, depending on the policy type, you may be able to make changes such as increasing the
                                coverage amount, converting a term policy to a permanent one, or adjusting beneficiaries.
                                However, some changes may affect the premium rates.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LifeFrequentQuestions;
