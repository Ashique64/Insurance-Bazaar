import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form/Form";
import AboutUs from "./pages/AboutUs";
import AdminLogin from "./pages/AdminLogin";
import "./App.css";
import AdminPanel from "./pages/AdminPanel";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/form" element={<Form />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/admin_login" element={<AdminLogin />} />
                <Route path="/admin_panel" element={<AdminPanel />} />
            </Routes>
        </Router>
    );
}

export default App;
