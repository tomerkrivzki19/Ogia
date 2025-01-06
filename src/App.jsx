import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { fetchProducts } from "../services/shopify";
import MainPage from "./ccomponents/MainPage";

function App() {
  fetchProducts();
  return (
    <Router>
      <Routes>
        {/* <Route path="*" element={<ErroePage />} /> */}
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
