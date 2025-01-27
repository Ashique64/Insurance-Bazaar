import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import FormCar from "./components/FormCar/FormCar";
import FormBike from "./components/FormBike/FormBike";
import FormLife from "./components/FormLife/FormLife";
import FormBusiness from "./components/FormBusiness/FormBusiness";
import FormPet from "./components/FormPet/FormPet";
import FormHealth from "./components/FormHealth/FormHealth";
import FormHome from "./components/FormHome/FormHome";
import FormTravel from "./components/FormTravel/FormTravel";
import { Provider } from "react-redux";
import store from "../src/Redux/store";
import AddCarData from "./pages/AddCarData/AddCarData";
import { backendAPI } from "./api/BackendApi";
import "./App.css";
import CarSection from "./pages/CarSection/CarSection";
import BikeSection from "./pages/BikeSection/BikeSection";
import HealthSection from "./pages/HealthSection/HealthSection";
import LifeSection from "./pages/LifeSection/LifeSection";
import HomeSection from "./pages/HomeSection/HomeSection";

function RedirectToAdmin() {
    window.location.href = `${backendAPI}/admin/`;
    return null;
}

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/car-service" element={<CarSection />} />
                    <Route path="/bike-service" element={<BikeSection />} />
                    <Route path="/health-service" element={<HealthSection />} />
                    <Route path="/life-service" element={<LifeSection />} />
                    <Route path="/home-service" element={<HomeSection />} />

                    <Route path="/form/car" element={<FormCar />} />
                    <Route path="/form/bike" element={<FormBike />} />
                    <Route path="/form/life" element={<FormLife />} />
                    <Route path="/form/business" element={<FormBusiness />} />
                    <Route path="/form/pet" element={<FormPet />} />
                    <Route path="/form/health" element={<FormHealth />} />
                    <Route path="/form/home" element={<FormHome />} />
                    <Route path="/form/travel" element={<FormTravel />} />
                    <Route path="/admin_login" element={<AdminLogin />} />
                    <Route path="/admin_panel" element={<AdminPanel />} />
                    <Route path="/admin_add_car" element={<AddCarData />} />
                    <Route path="/admin" element={<RedirectToAdmin />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
