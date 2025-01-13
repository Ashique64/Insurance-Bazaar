import React, { useEffect, useState } from "react";
import { backendAPI } from "../../api/BackendApi";
import { Link } from "react-router-dom";
import "../FormCar/FormCar.scss";

const FormPet = () => {
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

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
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
                                Get your <span>Pet insurance</span> quotes
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
                                        </div>
                                    </div>
                                    <div className="row form_row">
                                        <div className="col-lg-6 item">
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

                                    <div className="row form_row">
                                        <div className="col-lg-4 item">
                                            <select name="petAge" value={formData.petAge} onChange={handleChange} required>
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

                                        <div className="col-lg-4 item">
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

                                    <div className="row form_row">
                                        <div className="col-lg-4 item">
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="neutered"
                                                    checked={formData.neutered}
                                                    onChange={handleChange}
                                                />
                                                My pet is neutered
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
                                                My pet is a mixed breed
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
                                                My pet has ongoing or history of illness/injury
                                            </label>
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

export default FormPet;
