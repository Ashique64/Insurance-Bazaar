import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar2 from "../../components/NavBar2/NavBar2";
import Footer2 from "../../components/Footer2/Footer2";
import "./CarSection.scss";

const CarSection = () => {
    const navigate = useNavigate();
    const sectionColor = "linear-gradient(190deg, #e3bbbb2f, #ffd9007c)"

    const handleGetQuotes = () => {
        navigate("/form/car");
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
                                <img src="images/car-section/car-image-2-removebg.png" alt="Car-image" />

                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-12 col_2">
                            <div className="content">
                                <h4>Find the Best Car Insurance in Dubai and UAE with Ease</h4>

                                <div className="para">
                                    <p>
                                        Car insurance serves as your ultimate safeguard in the unfortunate event of an
                                        accident. While having car insurance is mandatory, choosing the right provider is
                                        entirely up to you. That’s why making an informed decision is crucial. In Dubai and
                                        across the UAE, federal law requires all drivers to hold at least Third Party
                                        Liability Insurance to cover damages to others and their property.
                                    </p>
                                    <p>
                                        Though some prefer to stick with the minimum legal requirement, many drivers opt for
                                        Comprehensive Motor Insurance. This enhanced coverage not only protects third-party
                                        liabilities but also safeguards your own vehicle, giving you greater peace of mind
                                        on the road.
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
                                <h4>What Does Car Insurance Cover in the UAE?</h4>
                                <p>
                                    The coverage of your car insurance policy depends on its type, but a typical
                                    Comprehensive car insurance plan usually protects against a wide range of risks. These
                                    include damages or injuries resulting from{" "}
                                    <span>
                                        accidents, storms, floods, fire, theft, vandalism, explosions, lightning, and
                                        malicious damage
                                    </span>
                                    . While adhering to policy terms and conditions is essential for a successful claim,
                                    it’s reassuring to know that most unforeseen circumstances are covered, offering peace
                                    of mind on the road!
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col_2">
                            <div className="car_image">
                                <img src="images/car-section/car-image-1.png" alt="Car-image" />
                            </div>
                        </div>
                    </div>

                    <div className="row second_row">
                        <div className="title_section">
                            <h4>What Isn’t Covered by Your Car Insurance?</h4>
                            <p>
                                While car insurance aims to provide extensive protection, certain scenarios or risks fall
                                outside the scope of coverage. These exclusions are typically due to their nature, which may
                                require a different type of insurance or be entirely ineligible. Here are some common
                                examples of what isn’t covered under standard car insurance policies:
                            </p>
                        </div>
                        <div className="items">
                            <div className="row items_row">
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Intentional Damage or Negligence:</strong> Any damage caused
                                            intentionally by the owner or due to gross negligence, such as deliberately
                                            ignoring a mechanical fault.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Driving Without a Valid License:</strong> Accidents caused while driving
                                            without a valid driver’s license, or with an expired or invalid license, will
                                            not be covered.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Damage During Unauthorized Use:</strong> If the vehicle is used for
                                            activities not specified in the policy, such as commercial purposes when insured
                                            for personal use only, it won’t be covered.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Damage During War or Natural Disasters:</strong> Unless specified,
                                            damages caused by acts of war, nuclear risks, or certain natural calamities
                                            (like earthquakes) may be excluded.
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
                            <h4>Why Choose InsuranceBasaar for Your Car Insurance Needs?</h4>
                            <p>
                                At InsuranceBasaar, we prioritize your satisfaction by offering a seamless and rewarding car
                                insurance experience. Here's why you should trust InsuraceBasaar:
                            </p>
                        </div>
                        <div className="row items_row">
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-user"></i>
                                    <h6>Expert Guidance</h6>
                                    <p>
                                        Knowledgeable advisors to simplify your car insurance journey, ensuring you get the
                                        best coverage for your needs.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-shield-alt-2"></i>
                                    <h6>Dependable Service</h6>
                                    <p>
                                        Always by your side with a dependable claims team, providing peace of mind and
                                        timely support during critical moments.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-wallet-alt"></i>
                                    <h6>Affordable Plans</h6>
                                    <p>
                                        Budget-friendly plans tailored to your requirements, giving you top-notch coverage
                                        without stretching your finances.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-badge-check"></i>
                                    <h6>Exclusive Benefits</h6>
                                    <p>
                                        Enjoy perks like discount vouchers and value-added services that go beyond your
                                        insurance policy, helping you save more.
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
                                    <img src="images/car-section/car-image-4.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-12 item_col2">
                                <div className="item1">
                                    <p>
                                        <strong>Start Early and Plan Ahead:</strong> Avoid last-minute decisions! Begin your search for
                                        insurance well before your current policy expires. This gives you time to research,
                                        compare options, and choose the coverage that fits your needs and budget. A rushed
                                        decision could lead to overspending or insufficient coverage.
                                    </p>
                                </div>
                                <div className="item1">
                                    <p>
                                        <strong>Leverage Expert Assistance:</strong> Searching for the best deal on your own can be
                                        overwhelming. Trust professionals to help! At InsuranceMarket.ae, our expert
                                        advisors do the heavy lifting, helping you find the best policies at competitive
                                        prices. With no extra cost and minimal effort on your part, it’s a win-win!
                                    </p>
                                </div>
                                <div className="item1">
                                    <p>
                                        <strong>Don’t Sacrifice Coverage for Cost:</strong> A cheaper policy isn’t always better. Ensure your
                                        coverage meets your needs so that you’re protected in the event of a claim. At
                                        InsuranceBasaar.com , we help you strike the perfect balance between cost and coverage
                                        to ensure you get the most value for your money.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row button_row">
                            <div className="col-md-12 button_col">
                                <div className="button_items">
                                    <i className="bx bx-car"></i>
                                    <h6>Get quotes in less than a minute</h6>
                                    <button onClick={handleGetQuotes}>get quotes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer2 background={sectionColor} />
        </>
    );
};

export default CarSection;
