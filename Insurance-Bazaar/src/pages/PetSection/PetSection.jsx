import React, { useEffect } from "react";
import NavBar2 from "../../components/NavBar2/NavBar2";
import Footer2 from "../../components/Footer2/Footer2";
import { useNavigate } from "react-router-dom";
import "./PetSection.scss";

const PetSection = () => {
    const navigate = useNavigate();
    const handleGetQuotes = () => {
        navigate("/form/pet");
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <NavBar2 />
            <div className="health-section">
                <div className="container-fluid container_first">
                    <div className="row first_row">
                        <div className="col-xl-4 col-lg-4 col-md-12 col_1">
                            <div className="car_image">
                                <img src="images/pet-section/pet-image-1.png" alt="Car-image" />
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-12 col_2">
                            <div className="content">
                                <h4>Protect Your Furry Friends with the Best Pet Insurance in the UAE</h4>

                                <div className="para">
                                    <p>
                                        You’ve probably heard it said, “Pets are family,” right? It’s true—our furry
                                        companions bring joy, love, and companionship into our lives. While you can’t
                                        prevent unexpected health issues, you can ensure they get the best care with
                                        reliable pet insurance.
                                    </p>
                                    <p>
                                        At InsuranceBasaar.com, we make finding the right pet insurance in the UAE simple
                                        and hassle-free. From tailored plans to suit your budget to comprehensive coverage
                                        for vet bills, accidents, and illnesses, we’re here to help you protect your pets.
                                        Because their health and happiness mean everything to you—and to us!
                                    </p>
                                </div>

                                <div onClick={handleGetQuotes} className="get_quotes_button">
                                    <button>Get quotes </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid third_container">
                    <div className="row first_row">
                        <div className="title_section">
                            <h4>What Type of Pet Insurance Is Available in the UAE?</h4>
                            <p>
                                Pet Insurance in the UAE generally covers the two most popular furry friends: cats and dogs,
                                and provides their owners with peace of mind coverage against the most common concerns for
                                pet owners, such as sudden and unforeseen medical expenses and any injury or damage their
                                pet may cause to others. Policy features include:
                            </p>
                        </div>
                        <div className="row items_row">
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-cat"></i>
                                    <h6>Available for Cats and Dogs</h6>
                                    <p>
                                        Coverage tailored for the two most beloved pets, ensuring their health and
                                        well-being.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bx-plus-medical"></i>
                                    <h6>Coverage for Veterinary Bills</h6>
                                    <p>
                                        Get coverage for veterinary bills up to AED 30,000, offering financial support for
                                        unexpected medical needs.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-shield"></i>
                                    <h6>Third Party Liability</h6>
                                    <p>
                                        Protect yourself from liability in case your pet causes injury or damage to others.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-search-alt-2"></i>
                                    <h6>Advertising and Rewards</h6>
                                    <p>Coverage for advertising and offering rewards if your pet is lost or stolen.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid container_two">
                    <div className="row first_row">
                        <div className="col-xl-8 col-lg-8 col-md-12 col_1">
                            <div className="content">
                                <h4>What Does Pet Insurance Cover in the UAE?</h4>
                                <p>
                                    Pet insurance in the UAE offers coverage for the most common medical and accidental
                                    needs of your furry friends. A typical pet insurance policy may include coverage for{" "}
                                    <span>
                                        veterinary consultations, diagnostic tests, surgeries, emergency treatments,
                                        vaccinations, and hospitalization
                                    </span>
                                    . Additionally, some plans offer coverage for theft or loss of pets, third-party
                                    liability, and even advertising costs to help find your lost pet. With the right policy,
                                    you can ensure the health and safety of your beloved pet while reducing the financial
                                    burden of unexpected expenses!
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col_2">
                            <div className="car_image">
                                <img src="images/pet-section/pet-image-2.png" alt="Pet-Insurance" />
                            </div>
                        </div>
                    </div>

                    <div className="row second_row">
                        <div className="title_section">
                            <h4>What Isn’t Covered by Pet Insurance?</h4>
                            <p>
                                While pet insurance provides significant support for medical and accidental situations,
                                certain exclusions are common across policies. These exclusions depend on the type of plan
                                and may require additional coverage. Here are some examples of what typically isn’t covered
                                under standard pet insurance policies:
                            </p>
                        </div>
                        <div className="items">
                            <div className="row items_row">
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Pre-Existing Conditions:</strong> Any medical conditions or illnesses
                                            your pet had before the start of the policy are usually excluded unless
                                            specifically covered.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Elective or Cosmetic Procedures:</strong> Non-essential treatments like
                                            tail docking, ear cropping, or other cosmetic surgeries are not covered.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Breeding-Related Costs:</strong> Expenses related to breeding,
                                            pregnancy, or whelping are generally excluded unless stated in the policy.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Routine and Preventative Care:</strong> Regular check-ups, vaccinations,
                                            flea/tick treatments, or deworming are not covered unless part of a special
                                            plan.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Behavioral Issues:</strong> Training or treatments for behavioral
                                            problems such as aggression or anxiety are not included in most plans.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Injuries Due to Owner Negligence:</strong> Injuries or illnesses
                                            resulting from neglect, abuse, or lack of care by the owner are excluded from
                                            coverage.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid container_fourth">
                    <div className="row first_row">
                        <div className="title_section">
                            <h4>Why Choose Pet Insurance With InsuranceBasaar.com</h4>
                            <p>
                                Pets are cherished members of our families, and their health is just as important.
                                InsuranceBasaar.com offers tailored pet insurance solutions to provide peace of mind and
                                financial support for your furry friends. From routine check-ups to unexpected emergencies,
                                our plans ensure your pet receives the best care possible. Here’s why pet insurance with
                                InsuranceBasaar.com is a smart choice:
                            </p>
                        </div>
                        <div className="row items_row">
                            <div className="col-xl-4 col-lg-4 col-md-12 item_col1">
                                <div className="image_section">
                                    <img src="images/pet-section/pet-image-3.png" alt="Pet Insurance" />
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-12 item_col2">
                                <div className="item1">
                                    <p>
                                        <strong>Comprehensive Coverage:</strong> From accidents to illnesses, our plans
                                        cover a wide range of treatments, including surgeries, medications, and diagnostic
                                        tests.
                                    </p>
                                </div>
                                <div className="item1">
                                    <p>
                                        <strong>Routine Care Benefits:</strong> Ensure your pet stays healthy with coverage
                                        for routine check-ups, vaccinations, and preventive care.
                                    </p>
                                </div>
                                <div className="item1">
                                    <p>
                                        <strong>Financial Security During Emergencies:</strong> Be prepared for unexpected
                                        situations like accidents or sudden illnesses without worrying about expensive
                                        veterinary bills.
                                    </p>
                                </div>
                                <div className="item1">
                                    <p>
                                        <strong>Flexible Plans to Suit Your Needs:</strong> Choose from a variety of
                                        customizable plans designed to fit your budget and your pet’s unique healthcare
                                        needs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row button_row">
                            <div className="col-md-12 button_col">
                                <div className="button_items">
                                    <i className="bx bxs-cat"></i>
                                    <h6>Get quotes in less than a minute</h6>
                                    <button onClick={handleGetQuotes}>get quotes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer2 />
        </>
    );
};

export default PetSection;
