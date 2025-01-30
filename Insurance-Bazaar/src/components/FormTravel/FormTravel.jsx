import React, { useEffect, useState } from "react";
import { backendAPI } from "../../api/BackendApi";
import { Link } from "react-router-dom";
import "../FormCar/FormCar.scss";
import NavBar2 from "../NavBar2/NavBar2";
import Footer2 from "../Footer2/Footer2";
import TravelFrequentQuestions from "../TravelFrequentQuestions/TravelFrequentQuestions";

const FormTravel = () => {
    const [successMessage, setSuccessMessage] = useState("");

    const formBackground = "var(--tp-common-black)";
    const formCopyright = "var(--tp-common-black)";
    const formFontColor = "var(--tp-common-white)";

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
                                    Get Your <span>Travel Insurance</span> Quote Today
                                </h3>
                                <p>
                                    Whether you're traveling for leisure or business, ensure you're covered for unexpected
                                    situations. Fill out the form below to get a customized travel insurance plan that
                                    includes medical emergencies, trip cancellations, lost baggage, and more. Safe travels
                                    start with the right protection!
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-12 image_col">
                            <div className="image_section">
                                <img src="/images/travel-section/travel-image-10.png" alt="Travel Insurance" />
                            </div>
                        </div>
                    </div>

                    {/* <div className="row title_row">
                    <div className="col-12 title_col">
                        <h1>
                            Get your <span>Travel insurance</span> quotes
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
                                            <label>Your journey's starting point 🚀</label>
                                            <div className="custom-select-wrapper">
                                                <select
                                                    name="journeyType"
                                                    value={formData.journeyType}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="" disabled>
                                                        {" "}
                                                        Your journey take you{" "}
                                                    </option>
                                                    {journeyTypes.map((type, index) => (
                                                        <option key={index} value={type}>
                                                            {type}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        {formData.journeyType === "You are travelling from the UAE" && (
                                            <div className="col-lg-6 item">
                                                <label>Your travel destination awaits ✈️</label>
                                                <div className="custom-select-wrapper">
                                                    <select
                                                        name="travelDestination"
                                                        value={formData.travelDestination}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="" disabled>
                                                            {" "}
                                                            Travel Destination{" "}
                                                        </option>
                                                        {nationalities.map((nation, index) => (
                                                            <option key={index} value={nation}>
                                                                {nation}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        )}
                                        {formData.journeyType === "You are travelling to the UAE" && (
                                            <div className="col-lg-6 item">
                                                <label>Where are you departing from? 🌍</label>
                                                <div className="custom-select-wrapper">
                                                    <select
                                                        name="departingFrom"
                                                        value={formData.departingFrom}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="" disabled>
                                                            {" "}
                                                            Departing From{" "}
                                                        </option>
                                                        {nationalities.map((nation, index) => (
                                                            <option key={index} value={nation}>
                                                                {nation}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="row form_row">
                                        <div className="col-lg-6 item">
                                            <label>Your full name as on passport 🛂</label>
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
                                            <label>Stay connected! Your phone number 📞</label>
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
                                            <label>Your best contact email 📩</label>
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
                                            <label>Where are you from? 🏳️</label>
                                            <div className="custom-select-wrapper">
                                                <select
                                                    name="nationality"
                                                    value={formData.nationality}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="" disabled>
                                                        {" "}
                                                        Your nationality{" "}
                                                    </option>
                                                    {nationalities.map((nation, index) => (
                                                        <option key={index} value={nation}>
                                                            {nation}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 item">
                                            <label>How do you identify? ⚧️</label>
                                            <div className="custom-select-wrapper">
                                                <select
                                                    name="gender"
                                                    value={formData.gender}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="" disabled>
                                                        {" "}
                                                        Your Gender{" "}
                                                    </option>
                                                    {Genders.map((gender, index) => (
                                                        <option key={index} value={gender}>
                                                            {gender}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
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
                    <TravelFrequentQuestions/>
                </div>
            </div>
            <Footer2 copyright={formCopyright} background={formBackground} fontColor={formFontColor} />
        </>
    );
};

export default FormTravel;
