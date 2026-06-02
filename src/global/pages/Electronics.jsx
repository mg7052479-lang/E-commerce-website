import React from "react";
import Layout from "../../components/Layout";

const Electronics = () => {
  return (
    <Layout>
      <div className="mt-20 flex gap-6 p-4">
        <div className="sticky top-24 self-start w-64 border rounded-lg shadow-sm bg-white p-6 h-fit">
          <h2 className="text-lg font-bold bg-gray-600 p-2  text-white rounded text-center">
            Filter
          </h2>

          <div className="flex flex-col gap-4 mb-4 p-2 mt-3">
            <label>
              <input type="checkbox" />
              Airdops
            </label>

            <label>
              <input type="checkbox" />
              Headphones
            </label>

            <label>
              <input type="checkbox" />
              watches
            </label>

            <label>
              <input type="checkbox" />
              Mobile
            </label>
          </div>

          <h2 className="text-lg font-bold bg-gray-600 p-2 text-white rounded text-center mt-6">
            Prices
          </h2>

          <div className="flex flex-col gap-4 p-2 mt-3">
            <label>
              <input type="checkbox" />
              ₹1000 - 2000
            </label>

            <label>
              <input type="checkbox" />
              ₹2000 - ₹5000
            </label>

            <label>
              <input type="checkbox" />
              ₹5000 - ₹10000
            </label>

            <label>
              <input type="checkbox" />
              ₹10000 - ₹20000
            </label>
          </div>
        </div>
         
         <div className="flex flex-wrap mt-18 justify-evenly gap-6 flex-1">
            <div
              className="w-72 bg-white rounded-xl shadow-md hover:scale-105 transition-all duration-300 p-4"
            >
              <img
                src= "/assets/electronics/boAt Rockerz 558 3.webp"
                alt="product"
                className="w-full h-72 object-contain"
              />

              <h3 className="font-bold mt-2">
                boAt Rockerz 558
              </h3>

          <div className="flex items-center gap-2">
              <p className="line-through font-bold">
                ₹{2000}
              </p>
              <p className="text-lg text-green-600  ">
                ₹{1500}
              </p>
            </div>  
          </div>
</div>
  </div>
    </Layout>
);
};

export default Electronics;
