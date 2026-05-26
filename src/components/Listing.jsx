import React from "react";
import { products } from "../data_json.js";

const Listing = ( { Productjson , title } ) => {

  console.log(Productjson);

  return (
    <div className="w-full p-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
        {title}
      </h2>

      <div className="flex flex-wrap justify-center sm:justify-evenly gap-6 mt-12">

        {Productjson.map((product) => {
          return (
            <div
              className="flex flex-col border w-full sm:w-80 md:w-86 h-auto shadow rounded-2xl items-center border-gray-50"
              key={product.Id}
            >
              <img
                src={product.Image[0]}
                alt={product.Name}
                className="h-72 sm:h-96 w-full sm:w-86 mb-3 cursor-pointer object-contain transition-all duration-200 hover:scale-95 mt-3"
                onMouseEnter={(e) =>
                  (e.currentTarget.src = product.Image[1])
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.src = product.Image[0])
                }
              />

              <div className="font-semibold text-center text-xl sm:text-2xl p-4 m-0">
                <p>{product.Name}</p>

                <p>₹{product.Price}</p>

                <div>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default Listing;