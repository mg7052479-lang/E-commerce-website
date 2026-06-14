import React, { useContext , useState} from "react";
import Home from "./global/pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fashion from "./global/pages/Fashion";
import Electronics from "./global/pages/Electronics";
import SingleProduct from "./components/SingleProduct";
import Addtocart from "./components/Addtocart";
import { createContext } from "react";

const productContext = createContext(); 


const App = () => {
  const [cartProduct, setcartProduct] = useState([])
  return (
    <productContext.Provider value={{cartProduct, setcartProduct}}>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fashion" element={<Fashion />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />
        <Route path="/Addtocart" element={<Addtocart/>} />
      </Routes>
    </Router>
    </productContext.Provider>
  );
};

export default App;
export  {productContext};