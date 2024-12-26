import React, { useState } from "react";
import "../FormCar/FormCar.scss";

const FormBusiness = () => {
    const insuranceTypes = [
        "I need several insurances for my business",
        "Office Insurance Package",
        "Property",
        "Public Liability (Premises, Third Party, Products and/or Pollution)",
        "Group Medical",
        "Group Life",
        "Group Travel",
        "Professional Indemnity",
        "Car Fleet (or Multiple Car Discount Scheme)",
        "Marine Cargo (individual shipment) insurance",
        "Marine Hull (Yacht, Boat or Vessel)",
        "Business Interruption or Consequential Loss",
        "Machinery Breakdown",
        "Contractors All Risks",
        "Erection All Risks",
        "Trade Credit Insurance",
        "Jewellers Block",
        "Medical Malpractices",
        "Kidnap & Ransom",
        "Directors & Officers Liability",
        "Defence Based Act (DBA)",
        "Extended Warranties",
        "Drone Insurance",
        "Bancassurance",
        "Cyber Insurance",
        "Workmens Compensation & Employers Liability",
        "Photographers Insurance",
        "Event Insurance",
        "SME Insurance",
        "Money Insurance",
        "Livestock Insurance",
        "Marine Cargo - Open Cover",
        "Holiday Homes",
        "Fidelity Guarantee",
        "Goods In Transit",
    ];

    const [successMessage, setSuccessMessage] = useState("");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        phoneNumber: "",
        insuranceType: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form data:", formData);
        setSuccessMessage("Submitting your form...");

        try {
            const response = await fetch("http://127.0.0.1:8000/api/business/send-email/", {
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
                            Get your <span>Business insurance</span> quotes
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
                                            placeholder="First Name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-4 item">
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-4 item">
                                        <input
                                            type="text"
                                            name="companyName"
                                            placeholder="Company Name"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="row form_row">
                                    <div className="col-lg-5 item">
                                        <input
                                            type="text"
                                            name="phoneNumber"
                                            placeholder="Phone Number"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-7 item">
                                        <select
                                            name="insuranceType"
                                            value={formData.insuranceType}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>
                                                Type of Insurance
                                            </option>
                                            {insuranceTypes.map((type, index) => (
                                                <option key={index} value={type}>
                                                    {type}
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

export default FormBusiness;
