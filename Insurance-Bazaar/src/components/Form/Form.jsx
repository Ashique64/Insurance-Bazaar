import React from "react";
import { useLocation } from "react-router-dom";

const Form = () => {
    const location = useLocation();
    const { title } = location.state || { title: "No Title" };
    return (
        <div className="form-container">
            <h1>{title} Insurance Form</h1>
        </div>
    );
};

export default Form;
