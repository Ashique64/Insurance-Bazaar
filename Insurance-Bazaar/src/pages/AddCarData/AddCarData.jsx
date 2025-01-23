import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendAPI } from "../../api/BackendApi";
import { useNavigate } from "react-router-dom";
import "./AddCarData.scss";

const AddCarData = () => {

    const navigate = useNavigate()
    const [newCarData, setNewCarData] = useState({
        "Make Name": "",
        "Model Name": "",
        "Trim Name": "",
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isListing, setIsListing] = useState(false);
    const [carList, setCarList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const fetchCarData = async () => {
        setIsListing(true);
        try {
            const response = await axios.get(`${backendAPI}/admins/recent_cars/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            });
            setCarList(response.data);
        } catch (error) {
            console.error("Error fetching recent car data:", error);
            alert("Failed to fetch recent car data.");
        } finally {
            setIsListing(false);
        }
    };

    useEffect(() => {
        fetchCarData();
    }, []);

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
            setSuccessMessage("Car data added successfully.");
            setNewCarData({ "Make Name": "", "Model Name": "", "Trim Name": "" });
            fetchCarData();

            setTimeout(() => {
                setSuccessMessage("");
            }, 3000);
        } catch (error) {
            console.error("Error adding car data:", error);

            if (error.response) {
                setSuccessMessage(`Error: ${error.response.status} - ${error.response.data.error}`);
            } else {
                setSuccessMessage("Unexpected error occurred.");
            }

            setTimeout(() => {
                setSuccessMessage("");
            }, 3000);
        } finally {
            setIsLoading(false);
        }
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setNewCarData({ ...carList[index], id: carList[index].id });
    };

    const handleUpdate = async () => {
        setIsLoading(true);
        try {
            const response = await axios.put(`${backendAPI}/admins/edit_car/${newCarData.id}/`, newCarData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                    "Content-Type": "application/json",
                },
            });
            setSuccessMessage("Car data updated successfully.");
            setNewCarData({ "Make Name": "", "Model Name": "", "Trim Name": "" });
            setEditIndex(null);
            fetchCarData();

            setTimeout(() => {
                setSuccessMessage("");
            }, 3000);
        } catch (error) {
            console.error("Error updating car data:", error);
            setSuccessMessage("Failed to update car data");

            setTimeout(() => {
                setSuccessMessage("");
            }, 3000);
        } finally {
            setIsLoading(false);
        }
    };

    const handleBackNavigate = () => {
        navigate("/admin_panel");
    }

    return (
        <div className="add-car-form">
            <i onClick={handleBackNavigate} className="bx bx-left-arrow-alt"></i>
            <div className="container">
                <p className={successMessage ? "show" : "unshow"}>{successMessage}</p>
                <div className="row add_car_row">
                    <div className="col-12 add_car_form">
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
                        <button onClick={editIndex !== null ? handleUpdate : addCarData} disabled={isLoading}>
                            {isLoading ? <span className="spinner"></span> : editIndex !== null ? "Update Car" : "Add Car"}
                        </button>
                    </div>
                </div>

                <div className="row carlist_row">
                    <div className="col-12 carlist_col">
                        <h3>Recently Added Cars</h3>
                        {isListing ? (
                            <span className="islist"></span>
                        ) : (
                            <div className="list">
                                <ul>
                                    {carList.map((car, index) => (
                                        <li key={car.id}>
                                            <h5>
                                                {car["Make Name"]} {car["Model Name"]} {car["Trim Name"]}
                                            </h5>
                                            <button onClick={() => handleEdit(index)}>Edit</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCarData;
