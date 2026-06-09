import React, { useState } from "react";
import Layout from "../../components/Layout";
import { products } from "../../data_json.js";
import { NavLink } from "react-router-dom";
import SingleProduct from "../../components/SingleProduct.jsx";
const Fashion = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);

  const FashionProducts = products.filter(
    (product) => product.Type === "Fashion"
  );

  const handleFilter = (category) => {
    setSelectedFilters((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handlePriceFilter = (range) => {
    setSelectedPrices((prev) =>
      prev.includes(range)
        ? prev.filter((item) => item !== range)
        : [...prev, range]
    );
  };

  const filteredProducts = FashionProducts.filter((product) => {
    const categoryMatch =
      selectedFilters.length === 0 ||
      selectedFilters.includes(product.Category);

    const priceMatch =
      selectedPrices.length === 0 ||
      selectedPrices.some((range) => {
        const [min, max] = range.split("-").map(Number);

        return (
          product.Price >= min &&
          product.Price <= max
        );
      });

    return categoryMatch && priceMatch;
  });

  return (
    <Layout>
      <div className="flex gap-6  p-4">

        <div className="sticky top-24 self-start w-64 border rounded-lg shadow-sm bg-white p-6 h-fit">

          <h2 className="text-lg font-bold bg-gray-600 p-2  text-white rounded text-center">
            Filter
          </h2>

          <div className="flex flex-col gap-4 mb-4 p-2 mt-3">

            <label>
              <input
                type="checkbox"
                onChange={() => handleFilter("Jacket")}
              />
              Men's Jackets
            </label>

            <label>
              <input
                type="checkbox"
                onChange={() => handleFilter("Denim")}
              />
              Denim Jackets
            </label>

            <label>
              <input
                type="checkbox"
                onChange={() => handleFilter("Jeans")}
              />
              Regular Jeans
            </label>

            <label>
              <input
                type="checkbox"
                onChange={() => handleFilter("Cargo")}
              />
              Cargo Jeans
            </label>

          </div>

          <h2 className="text-lg font-bold bg-gray-600 p-2 text-white rounded text-center mt-6">
            Prices
          </h2>

          <div className="flex flex-col gap-4 p-2 mt-3">

            <label>
              <input
                type="checkbox"
                onChange={() =>
                  handlePriceFilter("500-1000")
                }
              />
              ₹500 - ₹1000
            </label>

            <label>
              <input
                type="checkbox"
                onChange={() =>
                  handlePriceFilter("1000-1500")
                }
              />
              ₹1000 - ₹1500
            </label>

            <label>
              <input
                type="checkbox"
                onChange={() =>
                  handlePriceFilter("1500-2000")
                }
              />
              ₹1500 - ₹2000
            </label>

            <label>
              <input
                type="checkbox"
                onChange={() =>
                  handlePriceFilter("2000-2500")
                }
              />
              ₹2000 - ₹2500
            </label>

            <label>
              <input
                type="checkbox"
                onChange={() =>
                  handlePriceFilter("2500-3000")
                }
              />
              ₹2500 - ₹3000
            </label>

          </div>
        </div>
      <div className="flex flex-wrap mt-18 justify-evenly gap-6 flex-1">
  {filteredProducts.map((product) => (
    <NavLink
      key={product.Id}
      to={`/single-product/${product.Id}`}
      className="text-decoration-none text-black"
    >
      <div
        className="w-72 bg-white rounded-xl shadow-md hover:scale-105 transition-all duration-300 p-4"
      >
        <img
          src={product.Image[0]}
          alt={product.Name}
          className="w-full h-72 object-contain"
        />

        <h3 className="font-bold mt-2">
          {product.Heading}
        </h3>

        <div className="flex items-center gap-2">
          <p className="line-through font-bold">
            ₹{product.Price + 500}
          </p>

          <p className="text-lg text-green-600">
            ₹{product.Price}
          </p>
        </div>
      </div>
    </NavLink>
  ))}
</div>
      </div>
    </Layout>
  );
};

export default Fashion;