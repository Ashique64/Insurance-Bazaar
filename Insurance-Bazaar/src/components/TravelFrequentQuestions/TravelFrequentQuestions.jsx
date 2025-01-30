import React from "react";
import "./TravelFrequentQuestions.scss";

const TravelFrequentQuestions = () => {
    return (
        <div className="travel-question-section">
            <div className="row question-row">
                <div className="col-12 question-col">
                    <div className="question-content">
                        <div className="title">
                            <i className="bx bxs-plane-alt"></i>
                            <h2>Travel Insurance - Frequently Asked Questions</h2>
                        </div>
                        <div className="item">
                            <h3>
                                <i className="bx bx-chevron-down"></i>What Does Travel Insurance Cover?
                            </h3>
                            <p>
                                Travel insurance typically covers medical emergencies, trip cancellations, lost baggage, and
                                flight delays. Some policies also include coverage for COVID-19-related issues.
                            </p>
                        </div>
                        <div className="item">
                            <h3>
                                <i className="bx bx-chevron-down"></i>Is Travel Insurance Mandatory for Visiting the UAE?
                            </h3>
                            <p>
                                Travel insurance is not mandatory for all visitors, but some visa categories require it. It
                                is highly recommended for international travelers to cover unexpected medical expenses and
                                trip disruptions.
                            </p>
                        </div>
                        <div className="item">
                            <h3>
                                <i className="bx bx-chevron-down"></i>How Much Does Travel Insurance Cost?
                            </h3>
                            <p>
                                The cost of travel insurance varies based on the destination, duration, and level of
                                coverage. On average, plans range from AED 50 to AED 500, depending on the provider and
                                benefits.
                            </p>
                        </div>
                        <div className="item">
                            <h3>
                                <i className="bx bx-chevron-down"></i>Does Travel Insurance Cover Pre-existing Conditions?
                            </h3>
                            <p>
                                Some travel insurance policies cover pre-existing conditions, but this is not standard. You
                                may need to declare your condition and purchase additional coverage for medical expenses
                                related to it.
                            </p>
                        </div>
                        <div className="item">
                            <h3>
                                <i className="bx bx-chevron-down"></i>How Do I File a Travel Insurance Claim?
                            </h3>
                            <p>
                                To file a claim, contact your insurer, submit required documents (medical reports, receipts,
                                police reports), and follow their claim process. Most claims are processed within a few
                                weeks.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelFrequentQuestions;
