import React, { useContext } from "react";
import Layout from "./Layout";
import { productContext } from "../App";

const Addtocart = () => {
  const { cartProduct, setcartProduct } =
    useContext(productContext);

  const increaseQuantity = (id) => {
    setcartProduct(
      cartProduct.map((item) =>
        item.Id === id
          ? {
              ...item,
              Quantity: (item.Quantity || 1) + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setcartProduct(
      cartProduct.map((item) =>
        item.Id === id &&
        (item.Quantity || 1) > 1
          ? {
              ...item,
              Quantity: item.Quantity - 1,
            }
          : item
      )
    );
  };

  const removeProduct = (id) => {
    setcartProduct(
      cartProduct.filter(
        (item) => item.Id !== id
      )
    );
  };

  const totalItems = cartProduct.reduce(
    (total, item) =>
      total + (item.Quantity || 1),
    0
  );

  const totalAmount = cartProduct.reduce(
    (total, item) =>
      total +
      item.Price * (item.Quantity || 1),
    0
  );

  return (
    <Layout>
      <div className="max-w-7xl mt-20 mx-auto h-200 px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">
          Shopping Cart ({totalItems} Items)
        </h1>

        <div className="grid lg:grid-cols-3 gap-6">
       
          <div className="lg:col-span-2">
            {cartProduct.length === 0 ? (
              <div className="bg-white border rounded-lg p-10 text-center">
                <h2 className="text-2xl font-semibold">
                  Your Cart is Empty 🛒
                </h2>
              </div>
            ) : (
              cartProduct.map((product) => (
                <div
                  key={product.Id}
                  className="bg-white border rounded-lg p-4 mb-4 flex flex-col md:flex-row gap-6"
                >

                  <div className="flex flex-col items-center">
                    <img
  src={
    product.image ||
    product.Image 
  }
  alt={product.Name}
  className="w-32 h-32 object-contain border"
/>

                    <div className="flex items-center gap-2 mt-4">
                      <button
                        onClick={() =>
                          decreaseQuantity(
                            product.Id
                          )
                        }
                        className="w-8 h-8 border rounded-full"
                      >
                        -
                      </button>

                      <span className="px-4 py-1 border">
                        {product.Quantity || 1}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(
                            product.Id
                          )
                        }
                        className="w-8 h-8 border rounded-full"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">
                      {product.Name}
                    </h2>

                    <p className="text-gray-600 mt-2">
                      {product.Description}
                    </p>

                    <p className="mt-2">
                      Brand: {product.Brand}
                    </p>

                    <p>
                      Category:
                      {product.Category}
                    </p>

                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-2xl font-bold">
                        ₹{product.Price}
                      </span>

                      <span className="text-green-600 font-semibold">
                        {product.Discount}% OFF
                      </span>
                    </div>

                    <button
                      onClick={() =>
                        removeProduct(
                          product.Id
                        )
                      }
                      className="mt-4 text-red-600 hover:underline"
                    >
                      REMOVE
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>


          <div className="bg-white border rounded-lg p-6 h-fit">
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

            <button className="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Addtocart;