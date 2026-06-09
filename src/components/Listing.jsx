import React from "react";
import { NavLink } from "react-router-dom";

const Listing = ({ Productjson, title }) => {
  return (
    <div className="w-full px-4 py-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        {title}
      </h2>

      <div className="flex flex-wrap justify-evenly gap-6">
        {Productjson.map((product) => (
          <NavLink
            key={product.Id}
            to={`/single-product/${product.Id}`}
            className="text-decoration-none text-black"
          >
            <div className="w-72 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden">
              <img
                src={product.Image[0]}
                alt={product.Name}
                className="h-72 w-full object-contain p-4"
                onMouseEnter={(e) =>
                  (e.currentTarget.src =
                    product.Image[1] || product.Image[0])
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.src = product.Image[0])
                }
              />

              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">
                  {product.Name}
                </h3>

                <p className="text-green-600 font-bold text-xl mt-2">
                  ₹{product.Price}
                </p>

                <div className="mt-2 text-yellow-400">
                  ★★★★☆
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Listing;