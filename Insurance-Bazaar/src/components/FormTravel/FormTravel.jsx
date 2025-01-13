import React, { useEffect, useState } from "react";
import { backendAPI } from "../../api/BackendApi";
import { Link } from "react-router-dom";
import "../FormCar/FormCar.scss";

const FormTravel = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const journeyTypes = ["You are travelling from the UAE", "You are travelling to the UAE"];
    const Genders = ["Male", "Female", "Other"];
    const nationalities = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo (Congo-Brazzaville)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czechia (Czech Republic)",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini (fmr. 'Swaziland')",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Holy See",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea (North)",
        "Korea (South)",
        "Kosovo",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar (formerly Burma)",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Macedonia (formerly Macedonia)",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine State",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syria",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States of America",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe",
    ];

    const [formData, setFormData] = useState({
        journeyType: "You are travelling from the UAE",
        travelDestination: "",
        departingFrom: "",
        fullName: "",
        email: "",
        phoneNumber: "",
        nationality: "",
        gender: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

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
            setErrors((prev) => ({
                ...prev,
                phoneNumber: "Phone number must start with +91 or +971 and have a valid format.",
            }));
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
            const response = await fetch(`${backendAPI}/api/travel/send-email/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccessMessage("Form submitted successfully!");
                setFormData({
                    journeyType: "You are travelling from the UAE",
                    travelDestination: "",
                    departingFrom: "",
                    fullName: "",
                    email: "",
                    phoneNumber: "",
                    nationality: "",
                    gender: "",
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
                            Get your <span>Travel insurance</span> quotes
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
                                        <select
                                            name="journeyType"
                                            value={formData.journeyType}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>
                                                Your journey take you
                                            </option>
                                            {journeyTypes.map((type, index) => (
                                                <option key={index} value={type}>
                                                    {type}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {formData.journeyType === "You are travelling from the UAE" && (
                                        <div className="col-lg-6 item">
                                            <select
                                                name="travelDestination"
                                                value={formData.travelDestination}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="" disabled>
                                                    Travel Destination
                                                </option>
                                                {nationalities.map((nation, index) => (
                                                    <option key={index} value={nation}>
                                                        {nation}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    )}
                                    {formData.journeyType === "You are travelling to the UAE" && (
                                        <div className="col-lg-6 item">
                                            <select
                                                name="departingFrom"
                                                value={formData.departingFrom}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="" disabled>
                                                    Departing From
                                                </option>
                                                {nationalities.map((nation, index) => (
                                                    <option key={index} value={nation}>
                                                        {nation}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    )}
                                </div>

                                <div className="row form_row">
                                    <div className="col-lg-6 item">
                                        <input
                                            type="text"
                                            name="fullName"
                                            placeholder="Name as per passport"
                                            value={formData.fullName}
                                            onChange={handleChange}
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
                                    <div className="col-lg-4 item">
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder="Your E-mail"
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
                                    <div className="col-lg-4 item">
                                        <select
                                            name="nationality"
                                            value={formData.nationality}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>
                                                Your nationality
                                            </option>
                                            {nationalities.map((nation, index) => (
                                                <option key={index} value={nation}>
                                                    {nation}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-lg-4 item">
                                        <select name="gender" value={formData.gender} onChange={handleChange} required>
                                            <option value="" disabled>
                                                Your Gender
                                            </option>
                                            {Genders.map((gender, index) => (
                                                <option key={index} value={gender}>
                                                    {gender}
                                                </option>
                                            ))}
                                        </select>
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
    );
};

export default FormTravel;
