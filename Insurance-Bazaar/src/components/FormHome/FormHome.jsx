import React, { useEffect, useState } from "react";
import { backendAPI } from "../../api/BackendApi";
import { Link } from "react-router-dom";
import "../FormCar/FormCar.scss";

const FormHome = () => {
    const [successMessage, setSuccessMessage] = useState("");

    const i_Am_Types = ["A landlord", "tenant"];
    const liveInTypes = ["An apartment", "A villa", "Shared accommodation"];

    const [formData, setFormData] = useState({
        i_Am: "",
        liveIn: "",
        contents: false,
        personal: false,
        building: false,
        contentsPrice: "None",
        personalPrice: "None",
        buildingPrice: "None",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));

        if (name === "email") validateEmail(value);
        if (name === "phoneNumber") validatePhone(value);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrors((prev) => ({ ...prev, email: "Invalid email address" }));
        } else {
            setErrors((prev) => {
                const { email, ...rest } = prev;
                return rest;
            });
        }
    };

    const validatePhone = (phoneNumber) => {
        const phoneRegex = /^(?:\+91|91|\+971|971)\d{7,10}$/;
        if (!phoneRegex.test(phoneNumber)) {
            setErrors((prev) => ({ ...prev, phoneNumber: "Phone number must start with +91 or +971 and have a valid format." }));
        } else {
            setErrors((prev) => {
                const { phoneNumber, ...rest } = prev;
                return rest;
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        validateEmail(formData.email);
        validatePhone(formData.phoneNumber);

        if (Object.keys(errors).length > 0) {
            setSuccessMessage("Please fix the errors before submitting.");
            return;
        }
        console.log("Form data:", formData);
        setSuccessMessage("Submitting your form...");

        try {
            const response = await fetch(`${backendAPI}/api/home/send-email/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccessMessage("Form submitted successfully!");
                setFormData({
                    i_Am: "",
                    liveIn: "",
                    contents: false,
                    personal: false,
                    building: false,
                    contentsPrice: "",
                    personalPrice: "",
                    buildingPrice: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
                    address: "",
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

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <div>
            <div className="form">
                <div className="container-fluid">
                    <div className="back_button">
                        <Link to="/#service">
                            <button>back</button>
                        </Link>
                    </div>
                    <div className="row title_row">
                        <div className="col-12 title_col">
                            <h1>
                                Get your <span>Home insurance</span> quotes
                            </h1>
                        </div>
                    </div>
                    <p className={`success-message ${successMessage ? `show ${getMessageClass()}` : ""}`}>
                        {successMessage || " "}
                    </p>

                    <div className="form_section">
                        <div className="form_content">
                            <div className="form_title">
                                <i className="bx bx-info-circle"></i>
                                <h4>Tell us about yourself</h4>
                            </div>
                            <div className="container">
                                <form onSubmit={handleSubmit}>
                                    <div className="row form_row">
                                        <div className="col-lg-6 item">
                                            <select name="i_Am" value={formData.i_Am} onChange={handleChange} required>
                                                <option value="" disabled>
                                                    I am
                                                </option>
                                                {i_Am_Types.map((type, index) => (
                                                    <option key={index} value={type}>
                                                        {type}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-lg-6 item">
                                            <select name="liveIn" value={formData.liveIn} onChange={handleChange} required>
                                                <option value="" disabled>
                                                    I live in
                                                </option>
                                                {liveInTypes.map((type, index) => (
                                                    <option key={index} value={type}>
                                                        {type}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {formData.i_Am === "A landlord" && (
                                        <div className="row form_row">
                                            <div className="col-lg-4 item">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="contents"
                                                        checked={formData.contents}
                                                        onChange={handleChange}
                                                    />
                                                    Contents
                                                </label>
                                            </div>
                                            {formData.contents === true && (
                                                <div className="col-lg-4 item">
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            name="personal"
                                                            checked={formData.personal}
                                                            onChange={handleChange}
                                                        />
                                                        Personal belongings
                                                    </label>
                                                </div>
                                            )}
                                            <div className="col-lg-4 item">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="building"
                                                        checked={formData.building}
                                                        onChange={handleChange}
                                                    />
                                                    Building
                                                </label>
                                            </div>
                                        </div>
                                    )}

                                    {formData.i_Am === "tenant" && (
                                        <div className="row form_row">
                                            <div className="col-lg-4 item">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="contents"
                                                        checked={formData.contents}
                                                        onChange={handleChange}
                                                    />
                                                    Contents
                                                </label>
                                            </div>
                                            {formData.contents === true && (
                                                <div className="col-lg-4 item">
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            name="personal"
                                                            checked={formData.personal}
                                                            onChange={handleChange}
                                                        />
                                                        Personal belongings
                                                    </label>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {(formData.contents === true || formData.building === true) && (
                                        <div className="row form_row">
                                            {formData.contents === true && (
                                                <div className="col-lg-4 item">
                                                    <input
                                                        type="text"
                                                        name="contentsPrice"
                                                        placeholder="Contents(AED)"
                                                        value={formData.contentsPrice}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            )}
                                            {formData.personal === true && (
                                                <div className="col-lg-4 item">
                                                    <input
                                                        type="text"
                                                        name="personalPrice"
                                                        placeholder="Personal belongings(AED)"
                                                        value={formData.personalPrice}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            )}
                                            {formData.building === true && (
                                                <div className="col-lg-4 item">
                                                    <input
                                                        type="text"
                                                        name="buildingPrice"
                                                        placeholder="Building(AED)"
                                                        value={formData.buildingPrice}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <div className="row form_row">
                                        <div className="col-lg-4 item">
                                            <input
                                                type="text"
                                                name="firstName"
                                                placeholder="Your First Name"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-4 item">
                                            <input
                                                type="text"
                                                name="lastName"
                                                placeholder="Your Last Name"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-4 item">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="E-mail"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                            {errors.email && (
                                                <p className="error-message" style={{ color: "red" }}>
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="row form_row">
                                        <div className="col-lg-6 item">
                                            <textarea
                                                name="address"
                                                placeholder="Your Address"
                                                value={formData.address}
                                                onChange={handleChange}
                                                rows={4}
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-6 item">
                                            <input
                                                type="text"
                                                name="phoneNumber"
                                                placeholder="Phone Number"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                                required
                                            />
                                            {errors.phoneNumber && (
                                                <p className="error-message" style={{ color: "red" }}>
                                                    {errors.phoneNumber}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="row form_row">
                                        <div className="col-xl-2 col-lg-3 col-12 item">
                                            <button type="submit">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormHome;
