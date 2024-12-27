import React, { useState } from "react";

const FormHealth = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const categories = ["Individual", "Family", "Group of Employees"];
    const residentTypes = [
        "Investor or Partner",
        "Golden visa",
        "Self-employed or Freelancer",
        "Domestic worker",
        "Dependent spouse",
        "Dependent child",
        "Dependent parent",
        "Dependent sibling or Other relatives",
        "Employee with salary AED 4000 and below",
        "Employee with salary above AED 4000",
    ];

    const emirateVisa = ["Ajman", "Dubai", "Fujairah", "Ras Al Khaimah", "Sharjah", "Umm Al Quwain", "Abu Dhabi"];
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

    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i).filter((year) => year <= currentYear - 18);

    const Genders = ["Male", "Female", "Other"];

    const [category, setCategory] = useState("Individual");

    const [formData, setFormData] = useState({
        residentType: "",
        emirateVisa: "",
        nationality: "",
        day: "",
        month: "",
        year: "",
        gender: "",
    });
    const [familyFormData, setFamilyFormData] = useState({
        firstName: "",
        lastName: "",
        nationality: "",
        emirateVisa: "",
        relationToSponser: "",
        day: "",
        month: "",
        year: "",
        gender: "",
    });

    const [groupFormData, setGroupFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        companyName: "",
        employeesNumber: "",
    });

    const formattedDate = `${formData.day} ${formData.month} ${formData.year}`;
    const formattedFamilyDate = `${familyFormData.day} ${familyFormData.month} ${familyFormData.year}`;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFamilyFormChange = (e) => {
        const { name, value } = e.target;
        setFamilyFormData({ ...familyFormData, [name]: value });
    };

    const handleGroupFormChange = (e) => {
        const { name, value } = e.target;
        setGroupFormData({ ...groupFormData, [name]: value });
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let dataToSubmit;

        if (category === "Individual") {
            dataToSubmit = { ...formData, category, birthDate: formattedDate };
        } else if (category === "Family") {
            dataToSubmit = { ...familyFormData, category, birthDate: formattedFamilyDate };
        } else if (category === "Group of Employees") {
            dataToSubmit = { ...groupFormData, category };
        }

        // const dataToSubmit = { ...formData, category, birthDate: formattedDate };
        console.log("Form data:", formData);
        console.log("Form data:", dataToSubmit);
        setSuccessMessage("Submitting your form...");

        try {
            const response = await fetch("http://127.0.0.1:8000/api/health/send-email/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSubmit),
            });

            if (response.ok) {
                setSuccessMessage("Form submitted successfully!");
                if (category === "Individual") {
                    setFormData({
                        residentType: "",
                        emirateVisa: "",
                        nationality: "",
                        day: "",
                        month: "",
                        year: "",
                        gender: "",
                    });
                } else if (category === "Family") {
                    setFamilyFormData({
                        firstName: "",
                        lastName: "",
                        nationality: "",
                        emirateVisa: "",
                        relationToSponser: "",
                        day: "",
                        month: "",
                        year: "",
                        gender: "",
                    });
                } else if (category === "Group of Employees") {
                    setGroupFormData({
                        firstName: "",
                        lastName: "",
                        phoneNumber: "",
                        email: "",
                        companyName: "",
                        employeesNumber: "",
                    });
                }
                setCategory("Individual");
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
        <div className="form">
            <div className="container-fluid">
                <div className="row title_row">
                    <div className="col-12 title_col">
                        <h1>
                            Get your <span>Health insurance</span> quotes
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
                            {category === "Individual" && (
                                <form onSubmit={handleSubmit}>
                                    <div className="row form_row">
                                        <div className="col-lg-6 item">
                                            <select
                                                name="category"
                                                value={category}
                                                onChange={handleCategoryChange}
                                                required
                                            >
                                                <option value="" disabled selected>
                                                    Select your category
                                                </option>
                                                {categories.map((item, index) => (
                                                    <option key={index} value={item}>
                                                        {item}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-lg-6 item">
                                            <select
                                                name="residentType"
                                                value={formData.residentType}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="" disabled selected>
                                                    Types of Resident
                                                </option>
                                                {residentTypes.map((type, index) => (
                                                    <option key={index} value={type}>
                                                        {type}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row form_row">
                                        <div className="col-lg-6 item">
                                            <select
                                                name="emirateVisa"
                                                value={formData.emirateVisa}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="" disabled selected>
                                                    Emirate of Visa
                                                </option>
                                                {emirateVisa.map((type, index) => (
                                                    <option key={index} value={type}>
                                                        {type}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-lg-6 item">
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
                                    </div>
                                    <div className="row form_row">
                                        <div className="col-lg-8 item">
                                            <div className="birth">
                                                <select name="day" value={formData.day} onChange={handleChange} required>
                                                    <option value="" disabled>
                                                        Day
                                                    </option>
                                                    {days.map((day, index) => (
                                                        <option key={index} value={day}>
                                                            {day}
                                                        </option>
                                                    ))}
                                                </select>
                                                <select
                                                    name="month"
                                                    value={formData.month}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="" disabled>
                                                        Month
                                                    </option>
                                                    {months.map((month, index) => (
                                                        <option key={index} value={month}>
                                                            {month}
                                                        </option>
                                                    ))}
                                                </select>
                                                <select name="year" value={formData.year} onChange={handleChange} required>
                                                    <option value="" disabled>
                                                        Year
                                                    </option>
                                                    {years.map((year, index) => (
                                                        <option key={index} value={year}>
                                                            {year}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
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
                            )}
                            {/* -------------------------------------------------------------------------------------------------------- */}
                            {/* ======================================================================================================= */}
                            {category === "Family" && (
                                <form onSubmit={handleSubmit}>
                                    <div className="row form_row">
                                        <div className="col-lg-6 item">
                                            <select
                                                name="category"
                                                value={category}
                                                onChange={handleCategoryChange}
                                                required
                                            >
                                                <option value="" disabled selected>
                                                    Select your category
                                                </option>
                                                {categories.map((item, index) => (
                                                    <option key={index} value={item}>
                                                        {item}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-lg-6 item">
                                            <input
                                                type="text"
                                                name="firstName"
                                                placeholder="First Name"
                                                value={familyFormData.firstName}
                                                onChange={handleFamilyFormChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="row form_row">
                                        <div className="col-lg-6 item">
                                            <input
                                                type="text"
                                                name="lastName"
                                                placeholder="Last Name"
                                                value={familyFormData.lastName}
                                                onChange={handleFamilyFormChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-6 item">
                                            <select
                                                name="nationality"
                                                value={familyFormData.nationality}
                                                onChange={handleFamilyFormChange}
                                                required
                                            >
                                                <option value="" disabled>
                                                    Nationality
                                                </option>
                                                {nationalities.map((nation, index) => (
                                                    <option key={index} value={nation}>
                                                        {nation}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row form_row">
                                        <div className="col-lg-6 item">
                                            <select
                                                name="emirateVisa"
                                                value={familyFormData.emirateVisa}
                                                onChange={handleFamilyFormChange}
                                                required
                                            >
                                                <option value="" disabled selected>
                                                    Emirate of Visa
                                                </option>
                                                {emirateVisa.map((type, index) => (
                                                    <option key={index} value={type}>
                                                        {type}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-lg-6 item">
                                            <select
                                                name="relationToSponser"
                                                value={familyFormData.relationToSponser}
                                                onChange={handleFamilyFormChange}
                                                required
                                            >
                                                <option value="" disabled selected>
                                                    Relation to sponser
                                                </option>
                                                {residentTypes.map((nation, index) => (
                                                    <option key={index} value={nation}>
                                                        {nation}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row form_row">
                                        <div className="col-lg-8 item">
                                            <div className="birth">
                                                <select
                                                    name="day"
                                                    value={familyFormData.day}
                                                    onChange={handleFamilyFormChange}
                                                    required
                                                >
                                                    <option value="" disabled>
                                                        Day
                                                    </option>
                                                    {days.map((day, index) => (
                                                        <option key={index} value={day}>
                                                            {day}
                                                        </option>
                                                    ))}
                                                </select>
                                                <select
                                                    name="month"
                                                    value={familyFormData.month}
                                                    onChange={handleFamilyFormChange}
                                                    required
                                                >
                                                    <option value="" disabled>
                                                        Month
                                                    </option>
                                                    {months.map((month, index) => (
                                                        <option key={index} value={month}>
                                                            {month}
                                                        </option>
                                                    ))}
                                                </select>
                                                <select
                                                    name="year"
                                                    value={familyFormData.year}
                                                    onChange={handleFamilyFormChange}
                                                    required
                                                >
                                                    <option value="" disabled>
                                                        Year
                                                    </option>
                                                    {years.map((year, index) => (
                                                        <option key={index} value={year}>
                                                            {year}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 item">
                                            <select
                                                name="gender"
                                                value={familyFormData.gender}
                                                onChange={handleFamilyFormChange}
                                                required
                                            >
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
                            )}

                            {/* ======================================================================================================================= */}

                            {category === "Group of Employees" && (
                                <form onSubmit={handleSubmit}>
                                    <div className="row form_row">
                                        <div className="col-lg-6 item">
                                            <select
                                                name="category"
                                                value={category}
                                                onChange={handleCategoryChange}
                                                required
                                            >
                                                <option value="" disabled selected>
                                                    Select your category
                                                </option>
                                                {categories.map((item, index) => (
                                                    <option key={index} value={item}>
                                                        {item}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-lg-6 item">
                                            <input
                                                type="text"
                                                name="firstName"
                                                placeholder="First Name"
                                                value={groupFormData.firstName}
                                                onChange={handleGroupFormChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="row form_row">
                                        <div className="col-lg-6 item">
                                            <input
                                                type="text"
                                                name="lastName"
                                                placeholder="Last Name"
                                                value={groupFormData.lastName}
                                                onChange={handleGroupFormChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-6 item">
                                            <input
                                                type="text"
                                                name="companyName"
                                                placeholder="Company Name"
                                                value={groupFormData.companyName}
                                                onChange={handleGroupFormChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="row form_row">
                                        <div className="col-lg-4 item">
                                            <input
                                                type="text"
                                                name="employeesNumber"
                                                placeholder="No. of employees"
                                                value={groupFormData.employeesNumber}
                                                onChange={handleGroupFormChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-4 item">
                                            <input
                                                type="text"
                                                name="phoneNumber"
                                                placeholder="Phone Number"
                                                value={groupFormData.phoneNumber}
                                                onChange={handleGroupFormChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-4 item">
                                            <input
                                                type="text"
                                                name="email"
                                                placeholder="E-mail"
                                                value={groupFormData.email}
                                                onChange={handleGroupFormChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="row form_row">
                                        <div className="col-xl-2 col-lg-3 col-12 item">
                                            <button type="submit">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormHealth;