import React, { useEffect, useState } from "react";
import { backendAPI } from "../../api/BackendApi";
import { Link } from "react-router-dom";
import "../FormCar/FormCar.scss";
import NavBar2 from "../NavBar2/NavBar2";
import Footer2 from "../Footer2/Footer2";

const FormPet = () => {
    const formBackground = "var(--tp-common-black)";
    const formCopyright = "var(--tp-common-black)";
    const formFontColor = "var(--tp-common-white)";

    const petTypes = ["Dog", "Cat", "Other"];
    const petGenders = ["Male", "Female"];
    const petAges = ["Less than 1 year old"];
    for (let i = 1; i <= 10; i++) {
        petAges.push(`${i} year${i > 1 ? "s" : ""} old`);
    }

    const [successMessage, setSuccessMessage] = useState("");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        petType: "",
        petAge: "",
        petBreed: "",
        petGender: "",
        neutered: false,
        mixedBreed: false,
        injury: false,
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

    const validatePhone = (phone) => {
        const phoneRegex = /^(?:\+971|971)\d{7,8}$/;

        if (!phoneRegex.test(phone)) {
            setErrors((prev) => ({
                ...prev,
                phone: "Phone number must start with +971 or 971 and contain only digits and max 8 digits",
            }));
        } else {
            setErrors((prev) => {
                const { phone, ...rest } = prev;
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
            const response = await fetch(`${backendAPI}/api/pet/send-email/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccessMessage("Form submitted successfully!");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
                    petType: "",
                    petAge: "",
                    petBreed: "",
                    petGender: "",
                    neutered: false,
                    mixedBreed: false,
                    injury: false,
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
            <NavBar2 />
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
                                    Get Your <span>Pet Insurance</span> Quote Today
                                </h3>
                                <p>
                                    Fill out the form below to help us tailor the perfect pet insurance policy for your
                                    furry friend. By providing accurate details about your pet’s breed, age, and health
                                    history, we can offer you the best options at competitive prices. It's quick, secure,
                                    and hassle-free!
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-12 image_col">
                            <div className="image_section">
                                <img src="/images/bike-section/bike-image-10.png" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* <div className="row title_row">
                        <div className="col-12 title_col">
                            <h1>
                                Get your <span>Pet insurance</span> quotes
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
                                <h4>We’re Almost There! Just a Few Details Needed</h4>
                            </div>
                            <div className="container">
                                <form onSubmit={handleSubmit}>
                                    <div className="row form_row">
                                        <div className="col-lg-4 item">
                                            <label>Enter your first name 🏷️</label>
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
                                            <label>Enter your last name 🏷️</label>
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
                                            <label>Your email address 📧</label>
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
                                            <label>Your contact number 📱</label>
                                            <input
                                                type="text"
                                                name="phoneNumber"
                                                placeholder="Phone Number"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-6 item">
                                            <label>Select the type of pet 🐕🐈</label>
                                            <div className="custom-select-wrapper">
                                                <select
                                                    name="petType"
                                                    value={formData.petType}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="" disabled>
                                                        Type of Pet
                                                    </option>
                                                    {petTypes.map((type, index) => (
                                                        <option key={index} value={type}>
                                                            {type}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row form_row">
                                        <div className="col-lg-4 item">
                                            <label>Choose your pet's age 🎉</label>
                                            <div className="custom-select-wrapper">
                                                <select
                                                    name="petAge"
                                                    value={formData.petAge}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="" disabled>
                                                        Age of Pet
                                                    </option>
                                                    {petAges.map((type, index) => (
                                                        <option key={index} value={type}>
                                                            {type}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 item">
                                            <label>Enter your pet's breed 🐾</label>
                                            <input
                                                type="text"
                                                name="petBreed"
                                                placeholder="Breed of Pet"
                                                value={formData.petBreed}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-lg-4 item">
                                            <label>Select your pet's gender 💕</label>
                                            <div className="custom-select-wrapper">
                                                <select
                                                    name="petGender"
                                                    value={formData.petGender}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="" disabled>
                                                        Pet's Gender
                                                    </option>
                                                    {petGenders.map((gender, index) => (
                                                        <option key={index} value={gender}>
                                                            {gender}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row form_row">
                                        <div className="col-lg-4 item">
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="neutered"
                                                    checked={formData.neutered}
                                                    onChange={handleChange}
                                                />
                                                My pet is neutered 🐾
                                            </label>
                                        </div>
                                        <div className="col-lg-4 item">
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="mixedBreed"
                                                    checked={formData.mixedBreed}
                                                    onChange={handleChange}
                                                />
                                                My pet is a mixed breed 🦴
                                            </label>
                                        </div>
                                        <div className="col-lg-4 item">
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="injury"
                                                    checked={formData.injury}
                                                    onChange={handleChange}
                                                />
                                                My pet has ongoing or history of illness/injury 🏥
                                            </label>
                                        </div>
                                    </div>

                                    <div className="row form_row">
                                        <div className="col-xl-2 col-lg-3 col-12 item">
                                            <button type="submit">Submit 📥</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer2 copyright={formCopyright} background={formBackground} fontColor={formFontColor} />
        </>
    );
};

export default FormPet;
