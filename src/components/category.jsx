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

    <div className='flex gap-4 sm:gap-5 overflow-x-auto justify-start sm:justify-evenly mt-6 px-4 sm:ml-6 pb-2'>

      {uniqueProducts.map((product) => (

        <div
          key={product.Id}
          className='w-60 sm:w-72 h-24 bg-gray-200 flex-shrink-0 shadow-md rounded-xl flex items-center px-4 gap-4 sm:gap-6'
        >
          <img
            src={product.Image[2]}
            alt={product.Name}
            className='w-14 h-14 sm:w-16 sm:h-16 cursor-pointer object-contain'
          />
          <div>
            <p className='text-lg sm:text-xl text-black font-semibold'>
              {product.Name}
            </p>
          </div>

        </div>

      ))}

    </div>
  )
}

export default Category