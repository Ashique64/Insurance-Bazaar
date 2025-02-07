import React from "react";
import "./PetFrequentQuestions.scss";

const PetFrequentQuestions = () => {
    return (
        <div className="pet-question-section">
            <div className="row question-row">
                <div className="col-12 question-col">
                    <div className="question-content">
                        <div className="title">
                            <i className="bx bx-help-circle"></i>
                            <h2>Frequently Asked Questions about Pet Insurance</h2>
                        </div>
                        <div className="item">
                            <div className="title">
                                <i className="bx bx-chevron-down"></i>
                                <h3>What Is Pet Insurance and Why Do You Need It?</h3>
                            </div>
                            <p>
                                Pet insurance helps cover medical expenses for your pets, including accidents, illnesses,
                                and preventive care. It ensures that your pets receive the necessary care without worrying
                                about expensive vet bills.
                            </p>
                        </div>
                        <div className="item">
                            <div className="title">
                                <i className="bx bx-chevron-down"></i>
                                <h3>What Does Pet Insurance Cover?</h3>
                            </div>
                            <p>
                                Pet insurance typically covers:
                                <ul>
                                    <li>
                                        <strong>Accident and Illness:</strong> Medical treatment for accidents and diseases.
                                    </li>
                                    <li>
                                        <strong>Preventive Care:</strong> Vaccinations, flea control, and routine check-ups.
                                    </li>
                                    <li>
                                        <strong>Emergency Care:</strong> Treatment for emergencies like surgeries or
                                        hospital stays.
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div className="item">
                            <div className="title">
                                <i className="bx bx-chevron-down"></i>
                                <h3>How Much Does Pet Insurance Cost?</h3>
                            </div>
                            <p>
                                The cost of pet insurance varies based on factors like the age, breed, and health of your
                                pet, as well as the level of coverage you choose. On average, it can range from $20 to $50
                                per month for dogs, and $10 to $30 per month for cats.
                            </p>
                        </div>
                        <div className="item">
                            <div className="title">
                                <i className="bx bx-chevron-down"></i>
                                <h3>Are Pre-Existing Conditions Covered by Pet Insurance?</h3>
                            </div>
                            <p>
                                Most pet insurance policies do not cover pre-existing conditions. However, some insurers may
                                offer limited coverage for pre-existing conditions if they have been cured or are in
                                remission.
                            </p>
                        </div>
                        <div className="item">
                            <div className="title">
                                <i className="bx bx-chevron-down"></i>
                                <h3>How Do I File a Pet Insurance Claim?</h3>
                            </div>
                            <p>
                                To file a pet insurance claim, you'll typically need to submit a claim form along with your
                                pet’s medical records and receipts from the veterinary office. Some insurers allow online
                                claim submission through their website or mobile app.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetFrequentQuestions;
