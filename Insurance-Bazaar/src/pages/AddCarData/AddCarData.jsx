import React, { useState } from "react";
import axios from "axios";
import { backendAPI } from "../../api/BackendApi";
import "./AddCarData.scss";

const AddCarData = () => {
    const [newCarData, setNewCarData] = useState({
        "Make Name": "",
        "Model Name": "",
        "Trim Name": "",
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCarData({ ...newCarData, [name]: value });
    };

    const addCarData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post(`${backendAPI}/admins/add_car/`, newCarData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                    "Content-Type": "application/json",
                },
            });
            alert("Car data added successfully.");
            setNewCarData({ "Make Name": "", "Model Name": "", "Trim Name": "" });
        } catch (error) {
            console.error("Error adding car data:", error);

            if (error.response) {
                alert(`Error: ${error.response.status} - ${error.response.data.error}`);
            } else {
                alert("Unexpected error occurred.");
            }
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="add-car-form">
            <div className="container">
                <div className="row add_car_row">
                    <div className="add_car_form">
                        <h3>Add New Car</h3>
                        <input
                            type="text"
                            name="Make Name"
                            placeholder="Make Name"
                            value={newCarData["Make Name"]}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            name="Model Name"
                            placeholder="Model Name"
                            value={newCarData["Model Name"]}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            name="Trim Name"
                            placeholder="Trim Name"
                            value={newCarData["Trim Name"]}
                            onChange={handleInputChange}
                        />
                        <button onClick={addCarData} disabled={isLoading}>
                            {isLoading ? (
                                <span className="spinner"></span>
                            ) : (
                                "Add Car"
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCarData;
