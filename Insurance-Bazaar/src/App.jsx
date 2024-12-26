import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import CarForm from "./components/CarForm/CarForm";
import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/form/car" element={<CarForm />} />
                <Route path="/admin_login" element={<AdminLogin />} />
                <Route path="/admin_panel" element={<AdminPanel />} />
            </Routes>
        </Router>
    );
}

export default App;
