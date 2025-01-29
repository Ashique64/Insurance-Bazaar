import React, { useEffect, useState } from "react";
import { backendAPI } from "../../api/BackendApi";
import { Link } from "react-router-dom";
import "../FormCar/FormCar.scss";
import NavBar2 from "../NavBar2/NavBar2";
import Footer2 from "../Footer2/Footer2";
import LifeFrequentQuestions from "../LifeFrequentQuestions/LifeFrequentQuestions";

const FormLife = () => {
    const [successMessage, setSuccessMessage] = useState("");

    const formBackground = "var(--tp-common-black)";
    const formCopyright = "var(--tp-common-black)";
    const formFontColor = "var(--tp-common-white)";

    const lifeInsuranceType = ["Fixed Term Insurance", "Whole of Life Insurance", "Savings", "Endowment Insurance Plan"];
    const children = ["None", "Expecting Soon!", "1", "2", "3", "4+"];
    const maritalStatus = ["Single", "Married", "Divorced", "Widowed", "Unmarried Partner"];
    const insurancePurpose = [
        "Personal Cover",
        "Family Protection",
        "Mortgage Cover",
        "Keyman Insurance",
        "Partnership Protection",
        "Child Education",
        "Pension",
        "Regular Saving",
        "Others",
    ];

    const tenure = Array.from({ length: 31 }, (_, i) => `${5 + i} years`);

    const [formData, setFormData] = useState({
        lifeInsuranceType: "",
        children: "",
        maritalStatus: "",
        insurancePurpose: "",
        tenure: "",
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
            const response = await fetch(`${backendAPI}/api/life/send-email/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccessMessage("Form submitted successfully!");
                setFormData({
                    lifeInsuranceType: "",
                    children: "",
                    maritalStatus: "",
                    insurancePurpose: "",
                    tenure: "",
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
                                    Get Your <span>Life Insurance</span> Quote Today
                                </h3>
                                <p>
                                    Fill out the form below to help us tailor the perfect life insurance policy for your
                                    needs. By providing accurate details about your health, lifestyle, and coverage
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
                                Get your <span>Life insurance</span> quotes
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
                                        <div className="col-lg-6 item">
                                            <label htmlFor="">Choose Your Coverage Plan 📋</label>
                                            <div className="custom-select-wrapper">
                                                <select
                                                    name="lifeInsuranceType"
                                                    value={formData.lifeInsuranceType}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="" disabled>
                                                        Type of Insurance
                                                    </option>
                                                    {lifeInsuranceType.map((type, index) => (
                                                        <option key={index} value={type}>
                                                            {type}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 item">
                                            <label htmlFor="">No. of Children 👶</label>
                                            <div className="custom-select-wrapper">
                                                <select
                                                    name="children"
                                                    value={formData.children}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="" disabled>
                                                        Children
                                                    </option>
                                                    {children.map((child, index) => (
                                                        <option key={index} value={child}>
                                                            {child}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 item">
                                            <label htmlFor="">Your Relationship Status 💍</label>
                                            <div className="custom-select-wrapper">
                                                <select
                                                    name="maritalStatus"
                                                    value={formData.maritalStatus}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="" disabled>
                                                        Marital Status
                                                    </option>
                                                    {maritalStatus.map((status, index) => (
                                                        <option key={index} value={status}>
                                                            {status}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row form_row">
                                        <div className="col-lg-6 item">
                                            <label htmlFor="">Why Do You Need Coverage? 🤔</label>
                                            <div className="custom-select-wrapper">
                                                <select
                                                    name="insurancePurpose"
                                                    value={formData.insurancePurpose}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="" disabled>
                                                        Purpose of Insurance
                                                    </option>
                                                    {insurancePurpose.map((purpose, index) => (
                                                        <option key={index} value={purpose}>
                                                            {purpose}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 item">
                                            <label htmlFor="">How Long Do You Need Protection? ⏳</label>
                                            <div className="custom-select-wrapper">
                                                <select
                                                    name="tenure"
                                                    value={formData.tenure}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="" disabled>
                                                        Tenure of Cover
                                                    </option>
                                                    {tenure.map((item, index) => (
                                                        <option key={index} value={item}>
                                                            {item}
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
                    <LifeFrequentQuestions/>
                </div>
            </div>
            <Footer2 copyright={formCopyright} background={formBackground} fontColor={formFontColor} />
        </>
    );
};

export default FormLife;
