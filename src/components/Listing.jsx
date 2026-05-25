import React from "react";
import { products } from "../data_json.js";

const FashionProducts = products.filter(
    (product) => product.Type === "Fashion" 
)
console.log(FashionProducts);

const Listing = () => {
  return (
    <div className="w-full p-4">
      <h2>Product Listing</h2>

      <div className="flex flex-wrap  justify-evenly gap-3   mt-12">
        <div className="flex flex-col broder w-86 h-146 shadow rounded-2xl items-center border-gray-50 ">
          <img
            src="/assets/fashion/WhiteGrayJacket-1.webp"
            alt="name "
            className="h-96 w-86 mb-3 cursor-pointer object-contain transition-all duration-200 hover:scale-95 mt-3"
            onMouseEnter={(e) =>
              (e.currentTarget.src = "/assets/fashion/WhiteGrayJacket-2.webp")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.src = "/assets/fashion/WhiteGrayJacket-1.webp")
            }
          />
          <div className="font-semibold text-center text-2xl p-4 m-0 ">
            <p>Mens Wear black jacket</p>
            <p >₹1999</p>
            <div>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
