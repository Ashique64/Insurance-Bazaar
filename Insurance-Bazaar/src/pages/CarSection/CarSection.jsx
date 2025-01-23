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
                <div className="container">
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

                    <div className="row second_row"></div>
                </div>
            </div>
        </>
    );
};

export default CarSection;
