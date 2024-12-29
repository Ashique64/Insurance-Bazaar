import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setImages } from "../../Redux/imageSlice";
import "./AdminPanel.scss";

const AdminPanel = () => {
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();
    const images = useSelector((state) => state.images.value);

    const fetchImages = async () => {
        try {
            const response = await axios.get("http://localhost:8000/admins/upload/", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            });
            console.log("Fetched Images for me:", response.data);
            const updatedImages = response.data.map((img) => ({
                ...img,
                image: `http://localhost:8000/${img.image}`,
            }));
            console.log("Fetched Images:", updatedImages);
            dispatch(setImages(updatedImages));
            console.log("Images dispatched to Redux:", updatedImages);
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
                                <div className="show_img" key={index}>
                                    <img src={img.image} alt={`Uploaded ${img.id}`} width="200" />
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
