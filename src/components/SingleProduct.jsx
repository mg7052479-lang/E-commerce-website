import React from "react";
import Layout from "./Layout";
import { products } from "../data_json.js";
import Listing from "./Listing";

const SingleProduct = () => {
  const relateProduct = products.filter(
    (product) => product.Type === "Electronics",
  );
  const params = useParams();
  console.log(params);

  const product = {
    Id: 1,
    Name: "Boat Airdopes 111",
    Price: 1099,
    Category: "Airdopes",
    Image: [
      "/assets/electronics/boAt Airdopes 111 1.webp",
      "/assets/electronics/boAt Airdopes 111 2.webp",
      "/assets/electronics/boAt Airdopes 111 3.webp",
      "/assets/electronics/boAt Airdopes 111 4.webp",
    ],
    Count: 1,
    Heading:
      "boAt Airdopes 131 with upto 60 hours and ASAP Charge Bluetooth  (Active, True Wireless)",
    Brand: "Boat",
    Type: "Electronics",
    Trending: true,
    Rating: "4.3",
    Description:
      "Experience audio fun endlessly with the Airdopes 181 Pro TWS Earbuds. Tap your feet to your playlist on repeat as 100 hours of massive playtime has got your back",
  };
  return (
    <Layout>
      <div className="mt-24 flex justify-between gap-6 ">
        <div className="flex gap-4 w-1/2 p-4 m-6 mt-4 border-2">
          {/* Small Images */}
          <div className="flex flex-col justify-evenly p-2  gap-3">
            {product.Image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="w-24 h-24 object-cover rounded-lg cursor-pointer border"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="w-[500px] ">
            <img
              src={product.Image[0]}
              alt=""
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl mt-4 font-bold">{product.Heading}</h2>
          <div className="mt-10">
            <p className="text-xl mt-2 text-green-600 font-bold">
              Model: {product.Name}
            </p>

            <p className="text-lime-400 text-lg ">Brand: {product.Brand}</p>
            <p className="text-lg font-extrabold">Price: ₹ {product.Price}</p>
            <p className="font-bold ">
              Rating: {product.Rating}{" "}
              <span className="text-yellow-400">★</span>
            </p>
            <div className="mt-10">
              <p className="text-gray-600 ">{product.Description}</p>
            </div>
            <div className="flex gap-6">
              <button className="bg-green-600 text-white px-4 py-2 rounded mt-6 hover:bg-green-700 transition-colors duration-300">
                Add to Cart
              </button>

              <button className="bg-blue-600 text-white px-4 py-2 rounded mt-6 hover:bg-blue-700 transition-colors duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex ">
        <Listing Productjson={relateProduct} title={"Related Products"} />
      </div>
    </Layout>
  );
};

export default SingleProduct;
