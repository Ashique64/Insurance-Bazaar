import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.scss";

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const response = await axios.post("http://localhost:8000/admins/admin_login", { username, password });
            localStorage.setItem("access_token", response.data.access);
            localStorage.setItem("refresh_token", response.data.refresh);
            setLoading(false);
            navigate("/admin_panel");
        } catch (error) {
            setLoading(false);
            setError("Invalid username or password. Please try again.");
        }
    };

    return (
        <div className="admin_login">
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login" onSubmit={handleLogin}>
                            <div className="login__field">
                                <i className="login__icon bx bx-user"></i>
                                <input
                                    type="text"
                                    className="login__input"
                                    placeholder="User name"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="login__field">
                                <i className="login__icon bx bx-lock"></i>
                                <input
                                    type="password"
                                    className="login__input"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button className="button login__submit" type="submit" disabled={loading}>
                                {loading ? (
                                    <span className="spinner"></span>
                                ) : (
                                    <>
                                        <span className="button__text">Log In Now</span>
                                        <i className="button__icon bx bxs-chevron-right"></i>
                                    </>
                                )}
                            </button>
                            {error && <div className="error-message">{error}</div>}
                        </form>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
