import React from "react";
import Home from "./global/pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fashion from "./global/pages/Fashion";
import Electronics from "./global/pages/Electronics";
import SingleProduct from "./components/SingleProduct";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fashion" element={<Fashion />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />
      </Routes>
    </Router>
  );
};

export default App;