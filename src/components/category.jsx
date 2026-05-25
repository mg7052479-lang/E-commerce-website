import React from 'react'
import { products } from '../data_json.js';

const Category = () => {

  const uniqueCategories = [
    ...new Set(products.map((product) => product.Category))
  ];

  const uniqueProducts = uniqueCategories.map((category) => {
    return products.find(
      (product) => product.Category === category
    );
  });

 
  return (

    <div className='flex gap-5  overflow-x-scroll  justify-evenly mt-6 ml-6'>

      {uniqueProducts.map((product) => (

        <div
          key={product.Id}
          className='w-72 h-24 bg-gray-200 flex-shrink-0 shadow-md rounded-xl flex items-center px-4 gap-6'
        >

          {/* Image */}
          <img
            src={product.Image[2]}
            alt={product.Name}
            className='w-16 h-16 cursor-pointer object-contain'
          />

          {/* Text */}
          <div>
            <p className='text-xl text-black font-semibold'>
              {product.Name}
            </p>
          </div>

        </div>

      ))}

    </div>
  )
}

export default Category