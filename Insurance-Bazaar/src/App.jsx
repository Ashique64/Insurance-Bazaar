import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import FormCar from "./components/FormCar/FormCar";
import FormBike from "./components/FormBike/FormBike";
import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/form/car" element={<FormCar />} />
                <Route path="/form/bike" element={<FormBike/>}/>
                <Route path="/admin_login" element={<AdminLogin />} />
                <Route path="/admin_panel" element={<AdminPanel />} />
            </Routes>
        </Router>
    );
}

export default App;
