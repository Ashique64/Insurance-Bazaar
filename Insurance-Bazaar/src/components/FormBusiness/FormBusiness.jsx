import React, { useEffect, useState } from "react";
import { backendAPI } from "../../api/BackendApi";
import { Link } from "react-router-dom";
import "../FormCar/FormCar.scss";
import NavBar2 from "../NavBar2/NavBar2";
import Footer2 from "../Footer2/Footer2";

const FormBusiness = () => {
    const formBackground = "var(--tp-common-black)";
    const formCopyright = "var(--tp-common-black)";
    const formFontColor = "var(--tp-common-white)";

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

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (name === "phoneNumber") validatePhone(value);
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

        validatePhone(formData.phoneNumber);

        if (Object.keys(errors).length > 0) {
            setSuccessMessage("Please fix the errors before submitting.");
            return;
        }

        console.log("Form data:", formData);
        setSuccessMessage("Submitting your form...");

        try {
            const response = await fetch(`${backendAPI}/api/business/send-email/`, {
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
                                    Get Your <span>Business Insurance</span> Quote Today
                                </h3>
                                <p>
                                    Fill out the form below to help us tailor the perfect business insurance policy for your
                                    needs. By providing accurate details about your business type, industry, and coverage
                                    preferences, we can offer you the best options at competitive prices. It's quick,
                                    secure, and hassle-free!
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
                                Get your <span>Business insurance</span> quotes
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
                                            <label htmlFor="">What's Your First Name? 📝</label>
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
                                            <label htmlFor="">And Your Last Name? ✏️</label>
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
                                            <label htmlFor="">What Is Your Company Name? 🏢</label>
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
                                            <label htmlFor="">Best Contact Number to Reach You 📞</label>
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
                                            <label htmlFor="">Choose Your Coverage Type 📑</label>
                                            <div className="custom-select-wrapper">
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
            <Footer2 copyright={formCopyright} background={formBackground} fontColor={formFontColor} />
        </>
    );
};

export default FormBusiness;
