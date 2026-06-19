import React, { useContext, useEffect, useState } from "react";
import Layout from "./Layout";
import { products } from "../data_json.js";
import Listing from "./Listing";
import { useParams } from "react-router-dom";
import { productContext } from "../App.jsx";
import { NavLink } from "react-router-dom";
import Addtocart from "./Addtocart.jsx";
import { useNavigate } from "react-router-dom";


const SingleProduct = () => {
  const navigate = useNavigate();
  const relateProduct = products.filter(
    (product) => product.Type === "Electronics",
  );
  const { id } = useParams();

  const { cartProduct, setcartProduct } = useContext(productContext);
  const [ isAvailableToCart, setisAvailableToCart ] = useState(false);
      
  const handleAddToCart = () => {
    const isAddedToCart = cartProduct.filter(
      (product) => product.id == singleData.i,
    );
    if (isAddedToCart.length > 0) {
      setisAvailableToCart(true);
      return null;
    }
    setcartProduct([...cartProduct, singleData]);
  };

  const singleData = products.find((product) => product.Id === Number(id));

  if (!singleData) {
    return <h1>Product Not Found</h1>;
  }
  const sugestedProduct = products.filter(
    (sugproduct) => sugproduct.Category === singleData.Category,
  );
  useEffect(()=> {
    const isAddedToCart = cartProduct.filter(
      (product) => product.id == singleData.id,
    );
    if (isAddedToCart.length > 0) {
      setisAvailableToCart(true);
    }  

  },[cartProduct])
  return (
    <Layout>
      <div className="mt-24 flex justify-between gap-6 ">
        <div className="flex gap-4 w-1/2 p-4 m-6 mt-4 rounded-2xl border shadow-sm bg-white">
          <div className="flex flex-col justify-evenly p-2  gap-3">
            {singleData.Image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="w-24 h-24 object-cover rounded-lg cursor-pointer border"
              />
            ))}
          </div>

          <div className="w-[500px] ">
            <img
              src={singleData.Image[0]}
              alt=""
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl mt-4 font-bold">{singleData.Heading}</h2>
          <div className="mt-10">
            <p className="text-xl mt-2 text-green-600 font-bold">
              Model: {singleData.Name}
            </p>

            <p className="text-lime-400 text-lg ">Brand: {singleData.Brand}</p>
            <p className="text-lg font-extrabold">
              Price: ₹ {singleData.Price}
            </p>
            <p className="font-bold ">
              Rating: {singleData.Rating}{" "}
              <span className="text-yellow-400">★</span>
            </p>
            <div className="mt-10">
              <p className="text-gray-600 ">{singleData.Description}</p>
            </div>
            <div className="flex gap-6 items-center ">
         {isAvailableToCart ? (
  <button
    onClick={() => navigate("/Addtocart")}
    className="bg-green-600 text-white px-4 py-2 rounded mt-6 hover:bg-green-700 transition-colors duration-300"
  >
    Go to Cart
  </button>
) : (
  <button
    onClick={handleAddToCart}
    className="bg-green-600 text-white px-4 py-2 rounded mt-6 hover:bg-green-700 transition-colors duration-300"
  >
    Add to Cart
  </button>
)}

            
              <button className="bg-blue-600 text-white px-4 py-2 rounded mt-6 hover:bg-blue-700 transition-colors duration-300">
                Buy Now
              </button>

            </div>
          </div>
        </div>
      </div>
      <div className="flex ">
        <Listing Productjson={sugestedProduct} title={"Related Products"} />
      </div>
    </Layout>
  );
};

export default SingleProduct;
