import React from "react";
import Layout from "../../components/Layout";
import { products } from "../../data_json.js";
import { useState } from "react";
const Fashion = () => {
   const [selectedFilters, setSelectedFilters] = useState([]);

   const handlefliler = (filter)=> {
    if (seclectedFilters.includes(Category)) {
      setSelectedFilters(prevFilters => prevFilters.filter(item => item !== Category));
    } else {
      setSelectedFilters(prevFilters => [...prevFilters, Category]);
    } 
   }
    

  const FashionProducts = products.filter(
    (product) => product.Type === "Fashion"
  );

  return (
    <Layout>
      <div className="flex gap-6 p-4">
        <div className="sticky top-24 self-start w-64 border rounded-lg shadow-sm bg-white p-6 h-fit">
          <h2 className="text-lg font-bold bg-gray-600 p-2 text-white rounded text-center">
            Filter
          </h2>

          <div className="flex flex-col gap-4 mt-3 ml-2 p-2 text-lg">
            <label>
              <input type="checkbox"
              onChange={()=> handlefliler("Men's Jackets")}
              className="mr-2" />
              Men's Jackets
            </label>

            <label>
              <input type="checkbox" 
              className="mr-2" />
              Denim Jackets
            </label>

            <label>
              <input type="checkbox"  className="mr-2" />
              Regular Jeans
            </label>

            <label>
              <input type="checkbox" className="mr-2" />
              Cargo Jeans
            </label>
          </div>

          <h2 className="text-lg font-bold bg-gray-600 p-2 text-white rounded text-center mt-6">
            Prices
          </h2>

          <div className="flex flex-col gap-4 mt-3 ml-2 p-2 text-lg">
            <label>
              <input type="checkbox" className="mr-2" />
              ₹500 - ₹1000
            </label>

            <label>
              <input type="checkbox" className="mr-2" />
              ₹1000 - ₹1500
            </label>

            <label>
              <input type="checkbox" className="mr-2" />
              ₹1500 - ₹2000
            </label>

            <label>
              <input type="checkbox" className="mr-2" />
              ₹2000 - ₹2500
            </label>

            <label>
              <input type="checkbox" className="mr-2" />
              ₹2500 - ₹3000
            </label>
          </div>
        </div>

        <div className="flex flex-wrap justify-evenly gap-6 mt-22 flex-1">

          {FashionProducts.map((product) => (
            <div
              key={product.Id}
              className="w-72 bg-white rounded-2xl shadow-md p-4 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <img
                src={product.Image[0]}
                alt={product.Name}
                className="w-full h-72 object-contain rounded-xl"
              />

              <div className="mt-2">
                <i className="fa-solid fa-star text-yellow-500"></i>
                <i className="fa-solid fa-star text-yellow-500"></i>
                <i className="fa-solid fa-star text-yellow-500"></i>
                <i className="fa-solid fa-star text-yellow-500"></i>
                <i className="fa-solid fa-star text-yellow-500"></i>
              </div>

              <h3 className="font-bold text-lg mt-2">
                {product.Heading}
              </h3>

              <div className="flex items-center gap-2 mt-1">
                <p className="line-through text-gray-500">
                  ₹{product.Price + 500}
                </p>

                <p className="text-green-600 text-xl font-bold">
                  ₹{product.Price}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </Layout>
  );
};

export default Fashion;