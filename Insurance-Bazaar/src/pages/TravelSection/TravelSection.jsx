import React, { useEffect } from "react";
import NavBar2 from "../../components/NavBar2/NavBar2";
import Footer2 from "../../components/Footer2/Footer2";
import "./TravelSection.scss";
import { useNavigate } from "react-router-dom";

const TravelSection = () => {
    const navigate = useNavigate();

    const handleGetQuotes = () => {
        navigate("/form/car");
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <NavBar2 />
            <div className="travel-section">
                <div className="container-fluid container_first">
                    <div className="row first_row">
                        <div className="col-xl-4 col-lg-4 col-md-12 col_1">
                            <div className="car_image">
                                <img src="images/travel-section/travel-image-1.png" alt="Car-image" />
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-12 col_2">
                            <div className="content">
                                <h4>Find the Best Travel Insurance in Dubai and UAE with Ease</h4>

                                <div className="para">
                                    <p>
                                        Travel insurance is an essential part of any trip, ensuring that you are covered for
                                        a variety of unexpected situations. Whether you’re planning a vacation, business
                                        trip, or a journey abroad, travel insurance provides you with the peace of mind to
                                        travel without worries. It typically covers medical emergencies, trip cancellations,
                                        lost luggage, and even trip interruptions.
                                    </p>
                                    <p>
                                        In Dubai and across the UAE, travelers are increasingly opting for comprehensive
                                        travel insurance plans. These plans not only cover medical emergencies and trip
                                        delays, but also offer assistance in case of lost passports, flight cancellations,
                                        or emergency evacuations. Securing the right travel insurance can help protect you
                                        from unforeseen financial burdens while traveling.
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
                                <h4>What Does Travel Insurance Cover in the UAE?</h4>
                                <p>
                                    The coverage of your travel insurance policy can vary depending on the plan, but a
                                    typical comprehensive travel insurance plan usually covers a range of unexpected
                                    situations. These include coverage for{" "}
                                    <span>
                                        medical emergencies, trip cancellations, lost luggage, flight delays, emergency
                                        evacuation, and passport loss
                                    </span>
                                    . Ensuring you have the right policy can help protect you financially and provide peace
                                    of mind during your travels, especially in unforeseen circumstances.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col_2">
                            <div className="car_image">
                                <img src="images/travel-section/travel-image-2.png" alt="Travel-image" />
                            </div>
                        </div>
                    </div>

                    <div className="row second_row">
                        <div className="title_section">
                            <h4>What Isn’t Covered by Your Travel Insurance?</h4>
                            <p>
                                While travel insurance offers significant protection, certain events or conditions may fall
                                outside the scope of your coverage. These exclusions are generally specified in the policy
                                and can vary depending on the type of travel insurance you purchase. Here are some common
                                examples of what isn’t covered:
                            </p>
                        </div>
                        <div className="items">
                            <div className="row items_row">
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Pre-Existing Medical Conditions:</strong> Travel insurance may not cover
                                            medical expenses related to pre-existing conditions unless stated in the policy.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>High-Risk Activities:</strong> Injuries sustained during extreme sports
                                            or activities like skydiving, scuba diving, or mountain climbing may not be
                                            covered.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Losses Due to Alcohol or Drug Consumption:</strong> Claims arising from
                                            incidents involving alcohol or drugs (including prescription drugs used
                                            improperly) are usually excluded.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>War, Terrorism, or Natural Disasters:</strong> Unless explicitly
                                            covered, damages or losses incurred due to war, terrorism, or natural disasters
                                            such as earthquakes may not be included.
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
                            <h4>Why Choose InsuranceBasaar for Your Travel Insurance Needs?</h4>
                            <p>
                                At InsuranceBasaar, we prioritize your peace of mind by offering comprehensive and tailored
                                travel insurance solutions. Here's why you should choose InsuranceBasaar for your travel
                                insurance:
                            </p>
                        </div>
                        <div className="row items_row">
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-user"></i>
                                    <h6>Personalized Assistance</h6>
                                    <p>
                                        Our travel insurance experts are here to guide you through the process and help you
                                        choose the right coverage to suit your travel needs.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-shield-alt-2"></i>
                                    <h6>Coverage</h6>
                                    <p>
                                        We offer extensive coverage that includes medical emergencies, trip cancellations,
                                        lost luggage, and more, ensuring you are protected at all times during your travels.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-wallet-alt"></i>
                                    <h6>Affordable Plans</h6>
                                    <p>
                                        Tailored travel insurance plans designed to suit your budget, so you can travel with
                                        confidence without breaking the bank.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-badge-check"></i>
                                    <h6>Global Reach</h6>
                                    <p>
                                        With our international network, you are covered wherever your travels take you,
                                        ensuring protection no matter where you are in the world.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid container_fourth">
                    <div className="row first_row">
                        <div className="title_section">
                            <h4>What Do I Need To Get An Online Travel Insurance Quote?</h4>
                            <p>
                                Securing travel insurance online is quick and easy, but there are a few things you’ll need
                                to provide to get an accurate quote. By gathering the necessary details ahead of time, you
                                can streamline the process and ensure you get the best coverage for your trip. Here’s what
                                you’ll typically need:
                            </p>
                        </div>
                        <div className="row items_row">
                            <div className="col-xl-4 col-lg-4 col-md-12 item_col1">
                                <div className="image_section">
                                    <img src="images/travel-section/travel-image-3.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-12 item_col2">
                                <div className="item1">
                                    <p>
                                        <strong>Your Travel Dates:</strong> Be sure to provide your travel dates, including
                                        both departure and return dates. This ensures that the coverage matches the duration
                                        of your trip.
                                    </p>
                                </div>
                                <div className="item1">
                                    <p>
                                        <strong>Destination Details:</strong> Specify where you’re traveling, including any
                                        layovers or multiple destinations. Different locations may require different
                                        coverage levels or exclusions.
                                    </p>
                                </div>
                                <div className="item1">
                                    <p>
                                        <strong>Personal Information:</strong> You’ll need to provide basic details such as
                                        your age, travel companions (if applicable), and any pre-existing medical
                                        conditions, as these factors may affect your premium or coverage options.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row button_row">
                            <div className="col-md-12 button_col">
                                <div className="button_items">
                                    <i className="bx bxs-plane-alt"></i>
                                    <h6>Get your travel insurance quote in minutes</h6>
                                    <button onClick={handleGetQuotes}>Get quotes</button>
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

export default TravelSection;
