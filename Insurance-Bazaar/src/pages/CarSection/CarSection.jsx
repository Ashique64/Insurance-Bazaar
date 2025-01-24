import React, { useEffect } from "react";
import "./CarSection.scss";
import { useNavigate } from "react-router-dom";
import NavBar2 from "../../components/NavBar2/NavBar2";

const CarSection = () => {
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
            <div className="car-section">
                <div className="container container_one">
                    <div className="row first_row">
                        <div className="col-xl-4 col-lg-4 col-md-12 col_1">
                            <div className="car_image">
                                <img src="images/car-section/car-image-1.avif" alt="Car-image" />
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
                                <img src="images/car-section/car-image-2-removebg.png" alt="Car-image" />
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
                                            <strong>Intentional Damage or Negligence:</strong> Any damage caused intentionally by the owner
                                            or due to gross negligence, such as deliberately ignoring a mechanical fault.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Driving Without a Valid License:</strong> Accidents caused while driving without a valid
                                            driver’s license, or with an expired or invalid license, will not be covered.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Damage During Unauthorized Use:</strong> If the vehicle is used for activities not
                                            specified in the policy, such as commercial purposes when insured for personal
                                            use only, it won’t be covered.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Damage During War or Natural Disasters:</strong> Unless specified, damages caused by acts
                                            of war, nuclear risks, or certain natural calamities (like earthquakes) may be
                                            excluded.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CarSection;
