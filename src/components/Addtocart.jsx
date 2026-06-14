import React, { useState } from "react";
import Layout from "../components/Layout";

const Addtocart = () => {
  const [cart, setCart] = useState([
    {
      Id: 1,
      Name: "Boat Airdopes 111",
      Description:
        "boAt Airdopes 131 with upto 60 hours and ASAP Charge Bluetooth (Active, True Wireless)",
      Brand: "Boat",
      Category: "Airdopes",
      Price: 1099,
      Discount: 20,
      Quantity: 1,
      Image:
        "https://www.boat-lifestyle.com/cdn/shop/files/AD_131.jpg",
    },
    {
      Id: 2,
      Name: "Noise Buds VS104",
      Description:
        "Noise Buds VS104 Bluetooth Truly Wireless Earbuds",
      Brand: "Noise",
      Category: "Earbuds",
      Price: 1299,
      Discount: 15,
      Quantity: 1,
      Image:
        "https://www.gonoise.com/cdn/shop/products/VS104.jpg",
    },
  ]);

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.Id === id
          ? { ...item, Quantity: item.Quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.Id === id && item.Quantity > 1
          ? { ...item, Quantity: item.Quantity - 1 }
          : item
      )
    );
  };

  const removeProduct = (id) => {
    setCart(cart.filter((item) => item.Id !== id));
  };

  const totalItems = cart.reduce(
    (total, item) => total + item.Quantity,
    0
  );

  const totalAmount = cart.reduce(
    (total, item) => total + item.Price * item.Quantity,
    0
  );

  return (
    <Layout>
      <div className="max-w-7xl mx-auto mt-24 px-4">
        <h1 className="text-3xl font-bold mb-8">
          Shopping Cart ({totalItems} Items)
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Products */}
          <div className="lg:col-span-2">
            {cart.length === 0 ? (
              <div className="border rounded-lg p-10 text-center bg-white">
                <h2 className="text-2xl font-semibold">
                  Your Cart is Empty 🛒
                </h2>
              </div>
            ) : (
              cart.map((product) => (
                <div
                  key={product.Id}
                  className="border bg-white rounded-lg p-4 mb-4 flex flex-col md:flex-row gap-6"
                >
                  {/* Image + Quantity */}
                  <div className="flex flex-col items-center">
                    <img
                      src={product.Image}
                      alt={product.Name}
                      className="w-32 h-32 object-contain"
                    />

                    <div className="flex items-center gap-2 mt-4">
                      <button
                        onClick={() =>
                          decreaseQuantity(product.Id)
                        }
                        className="w-8 h-8 border rounded-full"
                      >
                        -
                      </button>

                      <span className="border px-4 py-1">
                        {product.Quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(product.Id)
                        }
                        className="w-8 h-8 border rounded-full"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <h2 className="font-semibold text-lg">
                      {product.Description}
                    </h2>

                    <p className="mt-2 text-gray-700">
                      {product.Name}
                    </p>

                    <p className="text-gray-600">
                      {product.Brand}
                    </p>

                    <div className="flex gap-3 items-center mt-2">
                      <span className="text-2xl font-bold">
                        ₹{product.Price}
                      </span>

                      <span className="text-green-600 font-semibold">
                        {product.Discount}% Off
                      </span>
                    </div>

                    <p className="text-gray-500 mt-2">
                      {product.Category}
                    </p>

                    <button
                      onClick={() =>
                        removeProduct(product.Id)
                      }
                      className="mt-3 text-red-600 font-medium hover:underline"
                    >
                      REMOVE
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Price Summary */}
          <div className="h-fit border rounded-lg bg-white p-6 shadow-sm sticky top-24">
            <h2 className="text-xl font-bold mb-4">
              PRICE DETAILS
            </h2>

            <div className="flex justify-between mb-3">
              <span>Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="flex justify-between mb-3">
              <span>Total Price</span>
              <span>₹{totalAmount}</span>
            </div>

            <div className="flex justify-between mb-3">
              <span>Delivery</span>
              <span className="text-green-600">
                FREE
              </span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-xl font-bold">
              <span>Total Amount</span>
              <span>₹{totalAmount}</span>
            </div>

            <button className="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Addtocart;