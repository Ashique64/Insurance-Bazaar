import React from "react";
import { useLocation } from "react-router-dom";
import "./Form.scss";

const Form = () => {
    const location = useLocation();
    const { title } = location.state || { title: "No Title" };

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
    const genders = ["Male", "Female", "Other"];

    return (
        <div className="form">
            <div className="container-fluid">
                <div className="row title_row">
                    <div className="col-12 title_col">
                        <h1>
                            Get your <span>{title} insurance</span> quotes
                        </h1>
                    </div>
                </div>
                <div className="form_section">
                    <div className="form_content">
                        <div className="form_title">
                            <i className="bx bx-info-circle"></i>
                            <h4>Tell us about yourself</h4>
                        </div>
                        <div className="container">
                            <form>
                                <div className="row form_row">
                                    <div className="col-lg-6 item">
                                        <input type="text" placeholder="Your full name" />
                                    </div>
                                    <div className="col-lg-6 item">
                                        <select>
                                            <option value="" disabled selected>
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
                                            <select>
                                                <option value="" disabled selected>
                                                    Day
                                                </option>
                                                {days.map((day, index) => (
                                                    <option key={index} value={day}>
                                                        {day}
                                                    </option>
                                                ))}
                                            </select>
                                            <select>
                                                <option value="" disabled selected>
                                                    Month
                                                </option>
                                                {months.map((month, index) => (
                                                    <option key={index} value={month}>
                                                        {month}
                                                    </option>
                                                ))}
                                            </select>
                                            <select>
                                                <option value="" disabled selected>
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
                                    <div className="col-lg-6 item">
                                        <input type="text" placeholder="Your email" />
                                    </div>
                                </div>
                                <div className="row form_row">
                                    <div className="col-lg-6 item">
                                        <input type="text" placeholder="Your Phone no" />
                                    </div>
                                    <div className="col-lg-6 item">
                                        <select>
                                            <option value="" disabled selected>
                                                Gender
                                            </option>
                                            {genders.map((gender, index) => (
                                                <option key={index} value={gender}>
                                                    {gender}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="row form_row">
                                    <div className="col-xl-2 col-lg-3 col-12 item">
                                        <button>Submit</button>
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

export default Form;
