import React, { useState } from "react";
import { backendAPI } from "../../api/BackendApi";
import "./GetInsurance.scss";

const GetInsurance = () => {
    const [active, setActive] = useState(0);
    const [formTitle, setFormTitle] = useState("Home Insurance");
    const [successMessage, setSuccessMessage] = useState("");

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
    });

    const tabItems = [
        {
            icon: "bx bxs-home-heart",
            title: "Home Insurance",
        },
        {
            icon: "bx bxs-car-crash",
            title: "Car Insurance",
        },
        {
            icon: "bx bxs-heart",
            title: "Health Insurance",
        },
        {
            icon: "bx bx-cycling",
            title: "Bike Insurance",
        },
    ];

    const handleItemClick = (index) => {
        setActive(index);
        setFormTitle(tabItems[index].title);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form data:", formData);
        setSuccessMessage("Submitting your form...");

        try {
            const response = await fetch(`${backendAPI}/api/contact/send-email/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccessMessage("Form submitted successfully!");
                setFormData({
                    fullName: "",
                    email: "",
                    phoneNumber: "",
                    message: "",
                });
            } else {
                const errorData = await response.json();
                setSuccessMessage(`Error: ${errorData.error}`);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setSuccessMessage("Something went wrong!");
        } finally {
            setTimeout(() => setSuccessMessage(""), 3000);
        }
    };

    const getMessageClass = () => {
        if (successMessage.includes("Submitting")) return "warning";
        if (successMessage.includes("successfully")) return "success";
        if (successMessage.includes("Error") || successMessage.includes("wrong")) return "error";
        return "";
    };

    return (
        <div id="get_insurance" className="get-insurance">
            <div className="container">
                <div className="row insurance_row">
                    <div className="col-xl-6 col-lg-6 col-md-12 item1">
                        <div className="title_section">
                            <h3 className="title">
                            Instant Quote with<span> One Click!</span>
                            </h3>
                        </div>

                        <div className="insurance_tab_section">
                            <div className="tabs">
                                <div className="items">
                                    <ul>
                                        {tabItems.map((item, index) => (
                                            <li
                                                key={index}
                                                className={active === index ? "active" : ""}
                                                onClick={() => handleItemClick(index)}
                                            >
                                                <div className="item">
                                                    <i className={item.icon}></i>
                                                    <span>{item.title}</span>
                                                </div>
                                                <i className="bx bxs-chevron-right-circle"></i>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 item2">
                        <div className="form_section">
                            <div className="tabs_form">
                                <div className="title_section">
                                    <h4 className="title">{formTitle}</h4>
                                </div>

                                <p className={`success-message ${successMessage ? `show ${getMessageClass()}` : ""}`}>
                                    {successMessage || " "}
                                </p>

                                <div className="contact_form">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form_input">
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                placeholder="Enter Name"
                                                required
                                            />
                                        </div>
                                        <div className="form_input">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Enter Mail"
                                                required
                                            />
                                        </div>
                                        <div className="form_input">
                                            {/* <select
                                                name="insuranceType"
                                                value={formData.insuranceType}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="" disabled selected>
                                                    Type of Insurance
                                                </option>
                                                {tabItems.map((type, index) => (
                                                    <option key={index} value={type.title}>
                                                        {type.title}
                                                    </option>
                                                ))}
                                            </select> */}
                                            <input
                                                type="text"
                                                name="phoneNumber"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                                placeholder="Enter Phone Number"
                                                required
                                            />
                                        </div>
                                        <div className="form_textarea">
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={3}
                                                placeholder="Enter Message"
                                                id=""
                                            ></textarea>
                                        </div>
                                        <div className="form_button">
                                            <button type="submit"> get a quote now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetInsurance;
