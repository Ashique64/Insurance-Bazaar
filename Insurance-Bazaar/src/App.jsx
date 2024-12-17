import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form/Form";
import AboutUs from "./pages/AboutUs";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/form" element={<Form />} />
                <Route path="/about" element={<AboutUs/>} />
            </Routes>
        </Router>
    );
}

export default App;
