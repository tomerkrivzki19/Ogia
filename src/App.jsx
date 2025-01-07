import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { fetchProducts } from "../services/shopify";
import MainPage from "./components/MainPage";
import NavContainer from "./components/NavContainer";
import ContanctMe from "./components/ContanctMe";
import QandAComponent from "./components/QandAComponent ";
import Takanon from "./components/Takanon";

function App() {
  fetchProducts();
  return (
    <Router>
      <NavContainer />
      <Routes>
        {/* <Route path="*" element={<ErroePage />} /> */}
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<ContanctMe />} />
        <Route path="/faq" element={<QandAComponent />} />
        <Route path="/takanon" element={<Takanon />} />
      </Routes>
    </Router>
  );
}

export default App;
