import React from "react";
import { useLocation } from "react-router-dom";
import "./Form.scss";

const Form = () => {
    const location = useLocation();
    const { title } = location.state || { title: "No Title" };
    return (
        <>
            <div className="form">
                <div className="container-fluid">
                    <div className="row title_row">
                        <div className="col-12 title_col">
                            <h1>
                                Get your <span>{title} insurance </span> quotes
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
                                <form action="">
                                    <div className="row form_row">
                                        <div className="col-xl-6 col-lg-6 col-12 item">
                                            <input type="text" placeholder="Your full name" />
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-12 item">
                                            <select name="" id="" placeholder="Your full name">
                                                <option value="" disabled selected>
                                                    Your nationality
                                                </option>
                                                <option value=""></option>
                                                <option value=""></option>
                                                <option value=""></option>
                                                <option value=""></option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row form_row">
                                        <div className="col-xl-6 col-lg-6 col-12 item">
                                            <div className="birth">
                                                <select name="" id="" placeholder="Your full name">
                                                    <option value="" disabled selected>
                                                        Day
                                                    </option>
                                                    <option value=""></option>
                                                    <option value=""></option>
                                                    <option value=""></option>
                                                    <option value=""></option>
                                                </select>
                                                <select name="" id="" placeholder="Your full name">
                                                    <option value="" disabled selected>
                                                        Month
                                                    </option>
                                                    <option value=""></option>
                                                    <option value=""></option>
                                                    <option value=""></option>
                                                    <option value=""></option>
                                                </select>
                                                <select name="" id="" placeholder="Your full name">
                                                    <option value="" disabled selected>
                                                        Year
                                                    </option>
                                                    <option value=""></option>
                                                    <option value=""></option>
                                                    <option value=""></option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-12 item">
                                            <input type="text" placeholder="Your email" />
                                        </div>
                                    </div>
                                    <div className="row form_row">
                                        <div className="col-xl-6 col-lg-6 col-12 item">
                                            <input type="text" placeholder="Your Phone no" />
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-12 item">
                                            <select name="" id="" placeholder="Your full name">
                                                <option value="" disabled selected>
                                                    Gender
                                                </option>
                                                <option value=""></option>
                                                <option value=""></option>
                                                <option value=""></option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row form_row">
                                        <div className="col-12 item">
                                            <button>Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form;
