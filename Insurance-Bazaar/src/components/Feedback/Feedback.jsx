import React from "react";
import "./Feedback.scss";

const Feedback = () => {
    const cardItems = [
        {
            img: "/images/testimonial/testi-1.png",
            name: "Emma Wilson",
            position: "Graphic Designer",
        },
        {
            img: "/images/testimonial/testi-2.png",
            name: "Sophia Martinez",
            position: "Marketing Specialist",
        },
        {
            img: "/images/testimonial/testi-3.png",
            name: "Olivia Johnson",
            position: "UI/UX Designer",
        },
    ];

    return (
        <div className="feedback">
            <div className="feedback_shape1">
                <img src="/images/slider/02_Shape.png" alt="" />
            </div>
            <div className="feedback_shape2">
                <img src="/images/slider/03_Shape.png" alt="" />
            </div>

            <div className="container">
                <div className="row feedback_row1">
                    <div className="col-md-12 title_col">
                        <div className="title_section">
                            <h4 className="subtitle">Our client feedback</h4>
                            <h3 className="title">
                                Client's give us many{" "}
                                <span>
                                    {" "}
                                    <br /> reviews for us.
                                </span>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="row feedback_row2">
                    {cardItems.map((item, index) => (
                        <div key={index} className="col-xl-4 col-lg-6 col-md-12 card_section">
                            <div className="card">
                                <div className="icons">
                                    <span>
                                        <i className="bx bxs-star"></i>
                                    </span>
                                    <span>
                                        <i className="bx bxs-star"></i>
                                    </span>
                                    <span>
                                        <i className="bx bxs-star"></i>
                                    </span>
                                    <span>
                                        <i className="bx bxs-star"></i>
                                    </span>
                                    <span>
                                        <i className="bx bxs-star"></i>
                                    </span>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptatibus,
                                    aliquid accusamus repellat alias quos reprehenderit eum deleniti.
                                </p>
                                <div className="user">
                                    <img src={item.img} alt="" />
                                    <div className="user_details">
                                        <h4>{item.name}</h4>
                                        <span> {item.position} </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feedback;
