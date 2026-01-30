import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import ServicesPage from "./pages/Services";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
        </Routes>
    )
}
export default App;