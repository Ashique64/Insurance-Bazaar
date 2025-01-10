import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendAPI } from "../../api/BackendApi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setImages } from "../../Redux/imageSlice";
import "./AdminPanel.scss";

const AdminPanel = () => {
    const [file, setFile] = useState(null);
    const [adminName, setAdminName] = useState("");
    const dispatch = useDispatch();
    const images = useSelector((state) => state.images.value);
    const navigate = useNavigate();

    const fetchImages = async () => {
        try {
            const response = await axios.get(`${backendAPI}/admins/upload/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            });
            console.log("Fetched Images for me:", response.data);
            const updatedImages = response.data.map((img) => ({
                ...img,
                image: `${backendAPI}/${img.image}`,
            }));

            dispatch(setImages(updatedImages));
        } catch (error) {
            console.error("You are not authorized to access this page.");
            navigate("/admin_login");
        }
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const uploadFile = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append("image", file);

        try {
            await axios.post(`${backendAPI}/admins/upload/`, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            setFile(null);
            fetchImages();
        } catch (error) {
            console.error("Error uploading file.");
        }
    };

    const fetchAdminName = async () => {
        try {
            const response = await axios.get(`${backendAPI}/admins/admin_panel/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            });
            setAdminName(response.data.message);
        } catch (error) {
            console.error("Error fetching admin name", error);
            navigate("/admin_login");
        }
    };

    const deleteImage = async (id) => {
        try {
            await axios.delete(`${backendAPI}/admins/delete/${id}/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            });
            fetchImages();
        } catch (error) {
            console.error("Error deleting the image.", error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        navigate("/admin_login");
    };
    const handleAddCar = () => {
        navigate("/admin_add_car");
    };

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        if (!token) {
            navigate("/admin_login");
        } else {
            fetchImages();
            fetchAdminName();
        }
    }, [navigate]);

    return (
        <div className="admin-panel">
            <div className="container">
                <div className="row admin-panel-row">
                    <div className="col-12">
                        <h2>{adminName}</h2>
                        <div className="nav_buttons">
                            <button onClick={handleAddCar} className="add_car">
                                Add Car Data
                            </button>
                            <button onClick={handleLogout} className="logout">
                                Logout
                            </button>
                        </div>
                        <div className="image_upload">
                            <input type="file" onChange={handleFileChange} />
                            <button onClick={uploadFile}>Upload</button>
                        </div>
                        <div className="uploaded_images">
                            <h3>Uploaded Images</h3>
                            {images.map((img, index) => (
                                <div className="show_img" key={index}>
                                    <img src={img.image} alt={`Uploaded ${img.id}`} width="200" />
                                    <button onClick={() => deleteImage(img.id)}>Delete</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
