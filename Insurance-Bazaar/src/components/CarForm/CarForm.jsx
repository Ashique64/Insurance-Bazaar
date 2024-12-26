import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./CarForm.scss";

const CarForm = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const modelYear = [
        2025,
        2024,
        2023,
        2022,
        2021,
        2020,
        2019,
        2018,
        2017,
        2016,
        2015,
        2014,
        2013,
        2012,
        2011,
        2010,
        2009,
        2008,
        2007,
        2006,
        2005,
        2004,
        2003,
        2002,
        2001,
        2000,
        1999,
        "1998 or older",
    ];
    const nationalities = ["American", "Indian", "Canadian", "Australian", "British"];
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

    const [formData, setFormData] = useState({
        carDetails: "",
        modelYear: "",
        fullName: "",
        nationality: "",
        day: "",
        month: "",
        year: "",
        email: "",
        phone: "",
        emirateRegistered: "",
        uaeLicenceHeld: "",
    });

    const emiratesOfRegistration = [
        "Abu Dhabi",
        "Dubai",
        "Sharjah",
        "Ajman",
        "Ras Al Khaimah",
        "Fujairah",
        "Umm Al Quwain",
    ];
    const licenceHeldOptions = ["Less than 1 year", "1-2 years", "2-3 years", "3-5 years", "5-10 years", "10+ years"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form data:", formData);
        setSuccessMessage("Submitting your form...");

        try {
            const response = await fetch("http://127.0.0.1:8000/api/send-email/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccessMessage("Form submitted successfully!");
                setFormData({
                    carDetails: "",
                    modelYear: "",
                    fullName: "",
                    nationality: "",
                    day: "",
                    month: "",
                    year: "",
                    email: "",
                    phone: "",
                    emirateRegistered: "",
                    uaeLicenceHeld: "",
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
        <div className="form">
            <div className="container-fluid">
                <div className="row title_row">
                    <div className="col-12 title_col">
                        <h1>
                            Get your <span>Car insurance</span> quotes
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
                                    <div className="col-lg-8 item">
                                        <input
                                            type="text"
                                            name="carDetails"
                                            placeholder="Enter your Make,Model and Trim"
                                            value={formData.carDetails}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-4 item">
                                        <select
                                            name="modelYear"
                                            value={formData.modelYear}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled selected>
                                                Model year
                                            </option>
                                            {modelYear.map((year, index) => (
                                                <option key={index} value={year}>
                                                    {year}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="row form_row">
                                    <div className="col-lg-6 item">
                                        <input
                                            type="text"
                                            name="fullName"
                                            placeholder="Your full name"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                        />
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
                                    <div className="col-lg-6 item">
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
                                            <select name="month" value={formData.month} onChange={handleChange} required>
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
                                    <div className="col-lg-3 item">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-3 item">
                                        <input
                                            type="text"
                                            name="phone"
                                            placeholder="Your Phone no"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="row form_row">
                                    <div className="col-lg-6 item">
                                        <select
                                            name="emirateRegistered"
                                            value={formData.emirateRegistered}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>
                                                Emirate of registration
                                            </option>
                                            {emiratesOfRegistration.map((item, index) => (
                                                <option key={index} value={item}>
                                                    {item}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-lg-6 item">
                                        <select
                                            name="uaeLicenceHeld"
                                            value={formData.uaeLicenceHeld}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>
                                                UAE licence held for
                                            </option>
                                            {licenceHeldOptions.map((option, index) => (
                                                <option key={index} value={option}>
                                                    {option}
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

export default CarForm;
