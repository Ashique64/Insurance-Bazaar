import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminPanel.scss";

const AdminPanel = () => {
    const [images, setImages] = useState([]);
    const [file, setFile] = useState(null);

    const fetchImages = async () => {
        try {
            const response = await axios.get("http://localhost:8000/admins/upload/", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            });
            const updatedImages = response.data.images.map(img => `http://localhost:8000${img}`);
            console.log(response.data.images);
            setImages(updatedImages);
        } catch (error) {
            console.error("You are not authorized to access this page.");
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
            await axios.post("http://localhost:8000/admins/upload/", formData, {
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

    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <div className="admin-panel">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Welcome Admin "AdminName"</h2>
                        <div className="image_upload">
                            <input type="file" onChange={handleFileChange} />
                            <button onClick={uploadFile}>Upload</button>
                        </div>
                        <div className="uploaded_images">
                            <h3>Uploaded Images</h3>
                            {images.map((img, index) => (
                                <div key={index} className="show_img">
                                    <img src={img} alt={`Slide ${index + 1}`} width="200" />
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
