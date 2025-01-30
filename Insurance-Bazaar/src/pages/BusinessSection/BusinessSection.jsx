import React, { useEffect } from "react";
import NavBar2 from "../../components/NavBar2/NavBar2";
import Footer2 from "../../components/Footer2/Footer2";
import { useNavigate } from "react-router-dom";
import "./BusinessSection.scss";

const BusinessSection = () => {
    const navigate = useNavigate();
    const sectionColor = "linear-gradient(0deg, rgba(100, 149, 237, 0.4), rgba(255, 255, 255, 0.8))"
    const copyright = "linear-gradient(180deg, rgba(100, 149, 237, 0.4), rgba(100, 149, 237, 0.4))"
    const handleGetQuotes = () => {
        navigate("/form/business");
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <NavBar2 />
            <div className="business-section">
                <div className="container-fluid container_first">
                    <div className="row first_row">
                        <div className="col-xl-4 col-lg-4 col-md-12 col_1">
                            <div className="car_image">
                                <img src="images/business-section/business-image-4.png" alt="Home-image" />
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-12 col_2">
                            <div className="content">
                                <h4>Find the Best Business Insurance in Dubai and UAE with Ease</h4>

                                <div className="para">
                                    <p>
                                        Business insurance is essential for protecting your company against unforeseen risks
                                        and challenges. While not mandatory in all cases, having business insurance ensures
                                        financial stability and safeguards your operations, employees, and assets from
                                        potential losses caused by accidents, lawsuits, or natural disasters.
                                    </p>
                                    <p>
                                        There are various types of business insurance policies, including Property Insurance
                                        and Liability Insurance. Property Insurance protects your physical assets like
                                        buildings, equipment, and inventory, while Liability Insurance covers legal expenses
                                        and compensation in case of claims made by third parties. Together, these policies
                                        provide comprehensive coverage to keep your business secure.
                                    </p>
                                    <p>
                                        Whether you’re a small business owner or managing a large enterprise, selecting the
                                        right business insurance plan tailored to your needs is crucial for minimizing risks
                                        and ensuring uninterrupted operations in the face of unexpected events.
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
                                <h4>What Does Business Insurance Cover in the UAE?</h4>
                                <p>
                                    Business insurance policies in the UAE provide essential protection for your company
                                    against various risks and liabilities. A typical business insurance plan generally
                                    covers risks such as{" "}
                                    <span>
                                        property damage, theft, business interruption, legal liabilities, and
                                        employee-related risks.
                                    </span>
                                    By offering financial support in these situations, business insurance ensures that your
                                    operations can continue with minimal disruption. It’s important to carefully review your
                                    policy and include additional coverage, such as cyber liability or professional
                                    indemnity, depending on your business needs and industry.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col_2">
                            <div className="insurance_image">
                                <img src="images/business-section/business-image-3.png" alt="Business Insurance Image" />
                            </div>
                        </div>
                    </div>

                    <div className="row second_row">
                        <div className="title_section">
                            <h4>What Isn’t Covered by Business Insurance?</h4>
                            <p>
                                While business insurance provides extensive coverage, certain situations or risks may not be
                                covered under standard policies. These exclusions often depend on the type of event or the
                                specific terms of the policy. Below are common examples of what is generally not covered
                                under most business insurance plans:
                            </p>
                        </div>
                        <div className="items">
                            <div className="row items_row">
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Pre-Existing Damages:</strong> Damages or liabilities that existed
                                            before the policy was issued may not be covered.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Fraud or Illegal Activities:</strong> Claims resulting from fraudulent
                                            or illegal activities by the business or its employees are not covered.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Natural Disasters:</strong> Damages caused by events such as earthquakes
                                            or floods are typically excluded unless specifically added to the policy.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Employee Misconduct:</strong> Losses caused by employee dishonesty or
                                            intentional misconduct may not be covered without specific coverage like
                                            fidelity insurance.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Uninsured Risks:</strong> Certain risks, such as cyberattacks or
                                            professional errors, may not be included in standard policies and require
                                            additional coverage.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Loss of Market Value:</strong> Business insurance does not cover a
                                            decline in market value or reputation resulting from operational disruptions.
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
                            <h4>Get Your Insurance In 3 Easy Steps</h4>
                            <p>
                                We’ve simplified the process of getting the right business insurance coverage. With just
                                three easy steps, you can protect your business and enjoy peace of mind. Let us handle the
                                hard work while you focus on what matters most.
                            </p>
                        </div>
                        <div className="row items_row">
                            <div className="col-xl-4 col-lg-4 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-chat"></i>
                                    <h6>Share Your Requirements</h6>
                                    <p>
                                        Tell us your business insurance needs, and we’ll gather all the details to find the
                                        perfect solution for you.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-search-alt-2"></i>
                                    <h6>We Search the Market</h6>
                                    <p>
                                        Our experts compare quotes from trusted insurers to bring you the best options
                                        tailored to your needs.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-envelope"></i>
                                    <h6>You Decide, We Place Cover</h6>
                                    <p>
                                        Once you choose the best quote, we’ll place the cover and email the policy straight
                                        to your inbox.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid container_fourth">
                    <div className="row first_row">
                        <div className="title_section">
                            <h4>InsuranceBasaar Heartfelt Promises</h4>
                            <p>
                                At InsuranceBasaar, we are committed to providing you with the best insurance experience
                                possible. Our heartfelt promises reflect our dedication to ensuring you receive unparalleled
                                service, value, and support. Here’s what makes us stand out:
                            </p>
                        </div>
                        <div className="row items_row">
                            <div className="col-xl-4 col-lg-4 col-md-12 item_col1">
                                <div className="image_section">
                                    <img src="images/business-section/business-image-2.png" alt="InsuranceBasaar Promises" />
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-12 item_col2">
                                <div className="item1">
                                    <p>
                                        <strong>Best Possible Value For Your Money:</strong>
                                        We ensure that you get the best coverage at competitive rates, providing you
                                        exceptional value without compromising on protection.
                                    </p>
                                </div>
                                <div className="item1">
                                    <p>
                                        <strong>Only The Most Reliable Insurance Companies:</strong>
                                        We partner with only the most trusted and dependable insurance providers, giving you
                                        peace of mind and security.
                                    </p>
                                </div>
                                <div className="item1">
                                    <p>
                                        <strong>Passionate Dedication To Claims Service:</strong>
                                        Our team is passionate about assisting you during your claims process, ensuring a
                                        smooth and hassle-free experience.
                                    </p>
                                </div>
                                <div className="item1">
                                    <p>
                                        <strong>Your Own Insurance Advisor To Help You Choose:</strong>
                                        Enjoy personalized guidance from our expert advisors to find the right plan tailored
                                        to your unique needs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row button_row">
                            <div className="col-md-12 button_col">
                                <div className="button_items">
                                    <i className="bx bxs-business"></i>
                                    <h6>Find your perfect business insurance plan in minutes</h6>
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

export default BusinessSection;
