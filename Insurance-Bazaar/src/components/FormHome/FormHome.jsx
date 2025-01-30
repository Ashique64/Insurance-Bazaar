import React, { useEffect, useState } from "react";
import { backendAPI } from "../../api/BackendApi";
import { Link } from "react-router-dom";
import "../FormCar/FormCar.scss";
import NavBar2 from "../NavBar2/NavBar2";
import Footer2 from "../Footer2/Footer2";

const FormHome = () => {
    const [successMessage, setSuccessMessage] = useState("");

    const formBackground = "var(--tp-common-black)";
    const formCopyright = "var(--tp-common-black)";
    const formFontColor = "var(--tp-common-white)";

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

        // if (name === "email") validateEmail(value);
        // if (name === "phoneNumber") validatePhone(value);
    };

    // const validateEmail = (email) => {
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     if (!emailRegex.test(email)) {
    //         setErrors((prev) => ({ ...prev, email: "Invalid email address" }));
    //     } else {
    //         setErrors((prev) => {
    //             const { email, ...rest } = prev;
    //             return rest;
    //         });
    //     }
    // };

    // const validatePhone = (phone) => {
    //     const phoneRegex = /^(?:\+971|971)\d{7,8}$/;

    //     if (!phoneRegex.test(phone)) {
    //         setErrors((prev) => ({
    //             ...prev,
    //             phone: "Phone number must start with +971 or 971 and contain only digits and max 8 digits",
    //         }));
    //     } else {
    //         setErrors((prev) => {
    //             const { phone, ...rest } = prev;
    //             return rest;
    //         });
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // validateEmail(formData.email);
        // validatePhone(formData.phoneNumber);

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
        <>
        <NavBar2/>
            <div className="form">
                <div className="container-fluid">
                    {/* <div className="back_button">
                        <Link to="/#service">
                            <button>back</button>
                        </Link>
                    </div> */}

                    <div className="row image_row">
                        <div className="col-xl-7 col-lg-7 col-12 content_col">
                            <div className="content">
                                <h3>
                                    Get Your <span>Home Insurance</span> Quote Today
                                </h3>
                                <p>
                                    Protect your home and belongings with the right insurance policy. Fill out the form
                                    below to provide details about your property, coverage needs, and location. Our tailored
                                    options will ensure financial security against unforeseen events, giving you peace of
                                    mind. It's simple, fast, and reliable!
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-12 image_col">
                            <div className="image_section">
                                <img src="/images/home-section/home-image-11.png" alt="Home Insurance" />
                            </div>
                        </div>
                    </div>

                    {/* <div className="row title_row">
                        <div className="col-12 title_col">
                            <h1>
                                Get your <span>Home insurance</span> quotes
                            </h1>
                        </div>
                    </div> */}
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
                                            <label>Who are you? (Select your role) 🧑‍💼</label>
                                            <div className="custom-select-wrapper">
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
                                        </div>
                                        <div className="col-lg-6 item">
                                            <label>Where do you call home? 🏡</label>
                                            <div className="custom-select-wrapper">
                                                <select
                                                    name="liveIn"
                                                    value={formData.liveIn}
                                                    onChange={handleChange}
                                                    required
                                                >
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
                                    </div>

                                    {formData.i_Am === "A landlord" && (
                                        <div className="row form_row">
                                            <div className="col-lg-4 item">
                                                <label>Protect your belongings? 📦</label>
                                                <input
                                                    type="checkbox"
                                                    name="contents"
                                                    checked={formData.contents}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            {formData.contents && (
                                                <div className="col-lg-4 item">
                                                    <label>Cover personal items too? 🎒</label>
                                                    <input
                                                        type="checkbox"
                                                        name="personal"
                                                        checked={formData.personal}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            )}
                                            <div className="col-lg-4 item">
                                                <label>Ensure your building's safety? 🏗️</label>
                                                <input
                                                    type="checkbox"
                                                    name="building"
                                                    checked={formData.building}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {formData.i_Am === "tenant" && (
                                        <div className="row form_row">
                                            <div className="col-lg-4 item">
                                                <label>Protect your belongings? 📦</label>
                                                <input
                                                    type="checkbox"
                                                    name="contents"
                                                    checked={formData.contents}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            {formData.contents && (
                                                <div className="col-lg-4 item">
                                                    <label>Cover personal items too? 🎒</label>
                                                    <input
                                                        type="checkbox"
                                                        name="personal"
                                                        checked={formData.personal}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {(formData.contents || formData.building) && (
                                        <div className="row form_row">
                                            {formData.contents && (
                                                <div className="col-lg-4 item">
                                                    <label>Contents Value(AED) 💰</label>
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
                                            {formData.personal && (
                                                <div className="col-lg-4 item">
                                                    <label>Personal Belongings Value(AED) 💼</label>
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
                                            {formData.building && (
                                                <div className="col-lg-4 item">
                                                    <label>Building Value(AED) 🏢</label>
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
                                            <label>What’s your first name? 👤</label>
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
                                            <label>And your last name? 👤</label>
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
                                            <label>Your best email for updates? 📧</label>
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
                                            <label>Where can we reach you? 🏠</label>
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
                                            <label>Your contact number? 📞</label>
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
                                            <button type="submit">Submit 📤</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer2 copyright={formCopyright} background={formBackground} fontColor={formFontColor}/>
        </>
    );
};

export default FormHome;
