import React, { useEffect } from "react";
import NavBar2 from "../../components/NavBar2/NavBar2";
import { useNavigate } from "react-router-dom";
import Footer2 from "../../components/Footer2/Footer2";
import "../CarSection/CarSection.scss";

const BikeSection = () => {
    const navigate = useNavigate();
    const handleGetQuotes = () => {
        navigate("/form/bike");
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <NavBar2 />
            <div className="car-section">
                <div className="container-fluid container_first">
                    <div className="row first_row">
                        <div className="col-xl-4 col-lg-4 col-md-12 col_1">
                            <div className="car_image">
                                <img src="images/bike-section/bike-image-1.png" alt="Car-image" />
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-12 col_2">
                            <div className="content">
                                <h4>Find the Best Bike Insurance in Dubai and UAE with Ease</h4>

                                <div className="para">
                                    <p>
                                        Bike insurance acts as your essential safety net in case of unforeseen accidents.
                                        While it’s mandatory to have insurance for your motorcycle, choosing the right
                                        provider is entirely up to you. That’s why making an informed decision is vital.
                                        Across Dubai and the UAE, federal law mandates that all motorcycle riders carry at
                                        least Third Party Liability Insurance to cover damages to others and their property.
                                    </p>
                                    <p>
                                        Although some riders stick to the basic legal requirements, many prefer
                                        Comprehensive Bike Insurance. This type of policy not only covers third-party
                                        liabilities but also protects your own bike against risks like accidents, theft, and
                                        natural disasters, offering you greater peace of mind on the road.
                                    </p>
                                </div>

                                <div onClick={handleGetQuotes} className="get_quotes_button">
                                    <button>Get quotes </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid container_two">
                    <div className="row first_row">
                        <div className="col-xl-8 col-lg-8 col-md-12 col_1">
                            <div className="content">
                                <h4>What Does Bike Insurance Cover in the UAE?</h4>
                                <p>
                                    The coverage of your bike insurance policy depends on its type, but a typical
                                    Comprehensive bike insurance plan generally protects against a variety of risks. These
                                    include damages or injuries caused by {" "}
                                    <span>
                                        accidents, storms, floods, fire, theft, vandalism, explosions, lightning, and
                                        malicious damage
                                    </span>
                                    . While adhering to policy terms and conditions is crucial for a successful claim, it’s
                                    comforting to know that most unexpected situations are covered, giving you peace of mind
                                    every time you hit the road!
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col_2">
                            <div className="car_image">
                                <img src="images/bike-section/bike-image-3.png" alt="Car-image" />
                            </div>
                        </div>
                    </div>

                    <div className="row second_row">
                        <div className="title_section">
                            <h4>What Isn’t Covered by Your Bike Insurance?</h4>
                            <p>
                                While bike insurance strives to offer comprehensive protection, certain risks or situations
                                fall outside its scope. These exclusions often arise due to the nature of the risk, which
                                may require specialized coverage or be deemed ineligible. Here are some common examples of
                                what isn’t covered under standard bike insurance policies:
                            </p>
                        </div>
                        <div className="items">
                            <div className="row items_row">
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Intentional Damage or Recklessness:</strong> Any damage caused
                                            intentionally by the bike owner or due to reckless behavior, such as stunt
                                            riding or ignoring safety warnings, will not be covered.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Riding Without a Valid License:</strong> Accidents or damages caused
                                            while riding without a valid or appropriate license for the bike’s type are
                                            excluded from coverage.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Damage During Unauthorized Usage:</strong> If the bike is used for
                                            purposes not specified in the policy, such as delivery services when insured for
                                            personal use, the damages will not be covered.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Damage During Racing or Off-Roading:</strong> Damages caused while
                                            participating in professional races, competitions, or off-road biking are not
                                            included unless explicitly covered.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Acts of War or Natural Disasters:</strong> Damages resulting from acts
                                            of war, nuclear risks, or certain natural disasters (like landslides or volcanic
                                            eruptions) are typically excluded unless otherwise stated.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Unapproved Modifications:</strong> Damages resulting from unauthorized
                                            or unapproved modifications to the bike, such as altering the engine or exhaust
                                            system, are not covered under standard policies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid third_container">
                    <div className="row first_row">
                        <div className="title_section">
                            <h4>Why Choose InsuranceBasaar for Your Bike Insurance Needs?</h4>
                            <p>
                                At InsuranceBasaar, we prioritize your satisfaction by offering a seamless and rewarding
                                bike insurance experience. Here's why you should trust InsuraceBasaar:
                            </p>
                        </div>
                        <div className="row items_row">
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bx-cycling"></i>
                                    <h6>Specialized Expertise</h6>
                                    <p>
                                        Experienced advisors who understand your biking needs, ensuring you receive the
                                        perfect insurance coverage for your bike.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-shield"></i>
                                    <h6>Reliable Protection</h6>
                                    <p>
                                        Comprehensive support and a dependable claims team to ensure your bike stays
                                        protected when it matters the most.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-dollar-circle"></i>
                                    <h6>Cost-Effective Plans</h6>
                                    <p>
                                        Affordable bike insurance solutions tailored to your budget, offering excellent
                                        value without compromising on coverage.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-gift"></i>
                                    <h6>Exclusive Rewards</h6>
                                    <p>
                                        Unlock benefits such as cashback offers and biking accessories discounts, making
                                        your insurance plan even more rewarding.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid container_fourth">
                    <div className="row first_row">
                        <div className="title_section">
                            <h4>How to Save Money on Your Vehicle Insurance in the UAE</h4>
                            <p>
                                Getting affordable car insurance doesn’t have to be a challenge. By taking a strategic
                                approach and avoiding common mistakes, you can secure a policy that balances affordability
                                and coverage. Here are some practical tips InsuranceBasaar recommends:
                            </p>
                        </div>
                        <div className="row items_row">
                            <div className="col-xl-4 col-lg-4 col-md-12 item_col1">
                                <div className="image_section">
                                    <img src="images/bike-section/bike-image-2.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-12 item_col2">
                                <div className="item1">
                                    <p>
                                        <strong>Start Early and Plan Ahead:</strong> Avoid last-minute decisions! Begin your
                                        search for insurance well before your current policy expires. This gives you time to
                                        research, compare options, and choose the coverage that fits your needs and budget.
                                        A rushed decision could lead to overspending or insufficient coverage.
                                    </p>
                                </div>
                                <div className="item1">
                                    <p>
                                        <strong>Leverage Expert Assistance:</strong> Searching for the best deal on your own
                                        can be overwhelming. Trust professionals to help! At InsuranceMarket.ae, our expert
                                        advisors do the heavy lifting, helping you find the best policies at competitive
                                        prices. With no extra cost and minimal effort on your part, it’s a win-win!
                                    </p>
                                </div>
                                <div className="item1">
                                    <p>
                                        <strong>Don’t Sacrifice Coverage for Cost:</strong> A cheaper policy isn’t always
                                        better. Ensure your coverage meets your needs so that you’re protected in the event
                                        of a claim. At InsuranceBasaar.com , we help you strike the perfect balance between
                                        cost and coverage to ensure you get the most value for your money.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row button_row">
                            <div className="col-md-12 button_col">
                                <div className="button_items">
                                    <i className="bx bx-cycling"></i>
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

export default BikeSection;
