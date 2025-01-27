import React, { useEffect } from "react";
import NavBar2 from "../../components/NavBar2/NavBar2";
import Footer2 from "../../components/Footer2/Footer2";
import { useNavigate } from "react-router-dom";
import "./LifeSection.scss";

const LifeSection = () => {
    const navigate = useNavigate();
    const handleGetQuotes = () => {
        navigate("/form/life");
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
                                <img src="images/life-section/life-image-1.png" alt="Life-image" />
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-12 col_2">
                            <div className="content">
                                <h4>Find the Best Life Insurance in Dubai and UAE with Ease</h4>

                                <div className="para">
                                    <p>
                                        Life insurance serves as a critical financial safeguard for your loved ones in times
                                        of uncertainty. While it is not legally mandatory in Dubai or the UAE, securing a
                                        life insurance policy is a wise decision to ensure financial stability and peace of
                                        mind for your family.
                                    </p>
                                    <p>
                                        There are two main types of life insurance policies available: Term Life Insurance
                                        and Whole Life Insurance. Term Life Insurance provides coverage for a specified
                                        period, offering financial protection for your family if something happens to you
                                        within the term. Whole Life Insurance, on the other hand, offers lifelong coverage
                                        with added benefits like savings and investment opportunities, making it a
                                        comprehensive financial tool.
                                    </p>
                                    <p>
                                        Whether you're looking to protect your family’s future, secure your child’s
                                        education, or plan for retirement, choosing the right life insurance policy tailored
                                        to your needs is a crucial step.
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
                                <h4>What Does Life Insurance Cover in the UAE?</h4>
                                <p>
                                    Life insurance policies in the UAE offer financial protection to your loved ones in case
                                    of unforeseen events. A typical life insurance plan generally covers risks such as{" "}
                                    <span>
                                        loss of life due to natural causes, accidental death, terminal illness, permanent
                                        disability, and critical illnesses
                                    </span>
                                    . By providing a financial safety net, life insurance ensures your family can maintain
                                    financial stability, covering expenses like education, household needs, or outstanding
                                    debts. It's crucial to carefully review your policy terms and conditions to ensure you
                                    choose the right coverage for your needs.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col_2">
                            <div className="insurance_image">
                                <img src="images/life-section/life-image-2.png" alt="Life Insurance Image" />
                            </div>
                        </div>
                    </div>

                    <div className="row second_row">
                        <div className="title_section">
                            <h4>What Isn’t Covered by Life Insurance?</h4>
                            <p>
                                While life insurance is designed to provide comprehensive protection, certain situations or
                                risks fall outside the scope of standard policies. These exclusions are often based on the
                                nature of the event or specific policy terms. Here are some common examples of what isn’t
                                covered under standard life insurance policies:
                            </p>
                        </div>
                        <div className="items">
                            <div className="row items_row">
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Pre-Existing Medical Conditions:</strong> Claims related to deaths or
                                            illnesses caused by pre-existing medical conditions not disclosed during policy
                                            issuance may be excluded.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Death Due to Self-Inflicted Harm:</strong> Deaths caused by suicide or
                                            self-inflicted injuries within a specific period after policy issuance are
                                            typically not covered.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Participation in Hazardous Activities:</strong> Deaths or injuries
                                            resulting from high-risk activities, such as extreme sports, unless explicitly
                                            covered, are excluded.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Acts of War or Terrorism:</strong> Claims related to deaths or injuries
                                            caused by acts of war, terrorism, or civil unrest are generally excluded unless
                                            stated otherwise.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Fraud or Misrepresentation:</strong> Claims denied due to false
                                            information provided at the time of purchasing the policy, including health or
                                            lifestyle details.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Death Under the Influence of Alcohol or Drugs:</strong> Claims related
                                            to deaths occurring while the insured was under the influence of alcohol or
                                            unprescribed drugs are typically excluded.
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
                            <h4>Why Choose InsuranceBasaar for Your Life Insurance Needs?</h4>
                            <p>
                                At InsuranceBasaar, we are committed to providing you with peace of mind by offering
                                personalized and secure life insurance plans. Here’s why InsuranceBasaar is the trusted
                                choice for your life insurance needs:
                            </p>
                        </div>
                        <div className="row items_row">
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-user-check"></i>
                                    <h6>Tailored Solutions</h6>
                                    <p>
                                        Customized life insurance plans designed to meet your unique financial goals and
                                        future aspirations for you and your loved ones.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-shield"></i>
                                    <h6>Trusted Security</h6>
                                    <p>
                                        Reliable coverage that ensures your family’s financial stability and security during
                                        life’s uncertainties.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-dollar-circle"></i>
                                    <h6>Affordable Plans</h6>
                                    <p>
                                        Budget-friendly life insurance options that provide comprehensive protection without
                                        straining your finances.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-gift"></i>
                                    <h6>Exclusive Benefits</h6>
                                    <p>
                                        Enjoy additional perks such as tax benefits, health check-ups, and loyalty rewards
                                        to make your insurance experience more rewarding.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid container_fourth">
                    <div className="row first_row">
                        <div className="title_section">
                            <h4>How to Save Money on Your Life Insurance Plan</h4>
                            <p>
                                Securing affordable life insurance doesn’t have to be complicated. By making informed
                                decisions and avoiding common pitfalls, you can find a policy that provides excellent
                                coverage without exceeding your budget. Here are some practical tips from InsuranceBasaar to
                                help you save:
                            </p>
                        </div>
                        <div className="row items_row">
                            <div className="col-xl-4 col-lg-4 col-md-12 item_col1">
                                <div className="image_section">
                                    <img src="images/life-section/life-image-3.png" alt="Life Insurance Tips" />
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-12 item_col2">
                                <div className="item1">
                                    <p>
                                        <strong>Start Early and Lock in Lower Rates:</strong> The younger and healthier you
                                        are, the lower your premiums will be. Don’t wait until later in life to secure a
                                        policy—locking in early ensures more affordable rates that last for years.
                                    </p>
                                </div>
                                <div className="item1">
                                    <p>
                                        <strong>Compare Policies and Providers:</strong> Don’t settle for the first option
                                        you find! Take time to compare policies from different insurers. At InsuranceBasaar,
                                        our experts help you explore multiple plans, ensuring you get the best deal without
                                        the hassle.
                                    </p>
                                </div>
                                <div className="item1">
                                    <p>
                                        <strong>Choose Coverage That Fits Your Needs:</strong> Avoid overpaying for
                                        unnecessary coverage or underinsuring yourself. Analyze your financial goals and
                                        family’s future needs to select a policy that provides the perfect balance of
                                        affordability and protection.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row button_row">
                            <div className="col-md-12 button_col">
                                <div className="button_items">
                                    <i className="bx bxs-group"></i>
                                    <h6>Find your perfect life insurance plan in minutes</h6>
                                    <button onClick={handleGetQuotes}>Get Quotes</button>
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

export default LifeSection;
