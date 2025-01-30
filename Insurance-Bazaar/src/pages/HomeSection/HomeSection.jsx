import React, { useEffect } from "react";
import NavBar2 from "../../components/NavBar2/NavBar2";
import Footer2 from "../../components/Footer2/Footer2";
import { useNavigate } from "react-router-dom";
import "./HomeSection.scss";

const HomeSection = () => {
    const navigate = useNavigate();
    const sectionColor = "linear-gradient(0deg, rgba(100, 149, 237, 0.4), rgba(255, 255, 255, 0.8))"
    const copyright = "linear-gradient(180deg, rgba(100, 149, 237, 0.4), rgba(100, 149, 237, 0.4))"
    const handleGetQuotes = () => {
        navigate("/form/home");
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <NavBar2 />
            <div className="home-section">
                <div className="container-fluid container_first">
                    <div className="row first_row">
                        <div className="col-xl-4 col-lg-4 col-md-12 col_1">
                            <div className="car_image">
                                <img src="images/home-section/home-image-2.png" alt="Home-image" />
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-12 col_2">
                            <div className="content">
                                <h4>Find the Best Home Insurance in Dubai and UAE with Ease</h4>

                                <div className="para">
                                    <p>
                                        Home insurance is a vital tool in safeguarding your property and belongings against
                                        unexpected events. While not legally required in Dubai or the UAE, having home
                                        insurance provides peace of mind and ensures that your home remains protected in
                                        case of unforeseen circumstances such as fire, theft, or natural disasters.
                                    </p>
                                    <p>
                                        There are different types of home insurance policies, including Building Insurance
                                        and Contents Insurance. Building Insurance protects the structure of your home,
                                        including walls, roof, and fixtures, while Contents Insurance covers your personal
                                        belongings like furniture, electronics, and valuables. Together, these policies
                                        offer comprehensive coverage to protect both your property and possessions.
                                    </p>
                                    <p>
                                        Whether you're a homeowner or a tenant, choosing the right home insurance policy
                                        tailored to your needs is essential for protecting your home and ensuring financial
                                        stability in the event of a loss.
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
                                <h4>What Does Home Insurance Cover in the UAE?</h4>
                                <p>
                                    Home insurance policies in the UAE provide protection for your home and personal
                                    belongings against various risks. A typical home insurance plan generally covers risks
                                    such as{" "}
                                    <span>
                                        fire, theft, vandalism, accidental damage, and liability for injuries that occur on
                                        your property.
                                    </span>
                                    By offering financial support in these situations, home insurance ensures that you can
                                    repair or replace damaged property and continue your daily life with minimal disruption.
                                    It’s important to carefully review your policy and include additional coverage, such as
                                    for valuables or specific risks, depending on your needs.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col_2">
                            <div className="insurance_image">
                                <img src="images/home-section/home-image-3.png" alt="Home Insurance Image" />
                            </div>
                        </div>
                    </div>

                    <div className="row second_row">
                        <div className="title_section">
                            <h4>What Isn’t Covered by Home Insurance?</h4>
                            <p>
                                While home insurance provides substantial coverage, certain situations or risks may not be
                                covered under standard policies. These exclusions are often based on the type of event or
                                the specific terms of the policy. Below are common examples of what is generally not covered
                                under most home insurance plans:
                            </p>
                        </div>
                        <div className="items">
                            <div className="row items_row">
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Pre-Existing Damages:</strong> Damages or defects in the home that
                                            existed prior to the policy’s issuance may not be covered.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Floods or Earthquakes:</strong> Unless specifically included, damages
                                            caused by natural events such as floods or earthquakes may not be covered.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Negligence or Lack of Maintenance:</strong> Damages resulting from
                                            neglect, improper maintenance, or failure to repair the property may be
                                            excluded.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Intentional Damage:</strong> Claims for damages caused by intentional
                                            acts or vandalism by the insured are typically not covered.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Unoccupied Homes:</strong> Homes that are left unoccupied for an
                                            extended period may not be covered for certain types of damage, especially
                                            theft.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Loss of Income:</strong> Home insurance generally does not cover loss of
                                            income or business-related expenses in the event of a claim.
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
                            <h4>Why Choose InsuranceBasaar for Your Home Insurance Needs?</h4>
                            <p>
                                At InsuranceBasaar, we understand the importance of safeguarding your home and belongings.
                                That's why we offer tailored and comprehensive home insurance plans designed to provide you
                                with peace of mind. Here’s why InsuranceBasaar is the trusted choice for your home insurance
                                needs:
                            </p>
                        </div>
                        <div className="row items_row">
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-home"></i>
                                    <h6>Full Protection</h6>
                                    <p>
                                        Protection for your home, personal belongings, and liabilities, ensuring you're
                                        financially secure in the event of damage or loss.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-lock-alt"></i>
                                    <h6>Reliable Protection</h6>
                                    <p>
                                        We offer dependable coverage that guards against theft, fire, vandalism, and
                                        accidental damage, so you can rest easy knowing your home is secure.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-wallet"></i>
                                    <h6>Affordable Premiums</h6>
                                    <p>
                                        Get affordable home insurance plans without compromising on the quality of
                                        protection, providing you value for your money.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-trophy"></i>
                                    <h6>Exclusive Benefits</h6>
                                    <p>
                                        Enjoy additional perks such as discounts on home security systems, coverage for
                                        natural disasters, and priority claims processing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid container_fourth">
                    <div className="row first_row">
                        <div className="title_section">
                            <h4>HERE'S HOW YOU CAN DETERMINE THE VALUE</h4>
                            <p>
                                Determining the right value for your home and contents insurance is crucial to ensure that
                                you’re not under-insured or overpaying for coverage. By understanding how to assess the
                                value of your property and possessions, you can make informed decisions and secure the right
                                protection for your needs. Below are the key aspects to consider when calculating the value
                                for your home insurance:
                            </p>
                        </div>
                        <div className="row items_row">
                            <div className="col-xl-4 col-lg-4 col-md-12 item_col1">
                                <div className="image_section">
                                    <img src="images/home-section/home-image-1.png" alt="Life Insurance Tips" />
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-12 item_col2">
                                <div className="item1">
                                    <p>
                                        <strong>BUILDING VALUE (VILLA/APARTMENT):</strong> When completing the proposal
                                        form, always value your building based on its re-build cost and not its market
                                        value. Insurers use the re-build cost as the basis for your coverage. In the event
                                        of a claim, you’ll be covered for the cost to rebuild your property, not its current
                                        market value. The good news is that the re-build value is often much lower than the
                                        market value, which can help you save money on your premiums!
                                    </p>
                                </div>
                                <div className="item1">
                                    <p>
                                        <strong>CONTENTS VALUE:</strong> Contents refer to the items inside your home, such
                                        as furniture, appliances, electronics, and other personal possessions. Even if
                                        you’re unsure about the exact value of each item, it’s important to provide an
                                        approximate total value. This ensures that your insurance covers the replacement or
                                        repair of items in the event of damage or loss.
                                    </p>
                                </div>
                                <div className="item1">
                                    <p>
                                        <strong>PERSONAL POSSESSIONS:</strong> Personal possessions are items you typically
                                        carry with you, whether at home, while traveling, or overseas. These include
                                        valuable items such as jewelry, watches, laptops, and mobile phones. If you're
                                        unsure of the exact value, it's okay to provide an approximate figure at the time of
                                        your quote. However, make sure that you have adequately insured these items to
                                        prevent any surprises later.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row button_row">
                            <div className="col-md-12 button_col">
                                <div className="button_items">
                                    <i className="bx bxs-home"></i>
                                    <h6>Find your perfect home insurance plan in minutes</h6>
                                    <button onClick={handleGetQuotes}>Get Quotes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer2 copyright={copyright} background={sectionColor}/>
        </>
    );
};

export default HomeSection;
