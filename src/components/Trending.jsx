import React from 'react'
import { products } from '../data_json.js';
import { NavLink } from 'react-router-dom';
import SingleProduct from './SingleProduct.jsx';

const trendingProducts = products.filter(
  (product) => product.Trending
);

const Trending = () => {
  return (
    <div className='w-full p-4'>

      <h2 className='mb-4'>Trending Products</h2>

      <div className='flex flex-wrap  justify-evenly gap-3'>

        {trendingProducts.map((product) => {
          return (
           <NavLink to={`/single-product/${product.Id}`} key={product.Id} className='text-decoration-none text-black'>
             <div
              key={product.Id}
              className='flex border w-106 h-36 shadow rounded-2xl border-gray-50 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer'
            >

              <div className='w-32 h-32 flex items-center justify-center flex-shrink-0'>
              <img
                        src={product.Image[3]}
                        className='h-full w-full object-contain p-2 rounded-2xl'
                        alt={product.Name}
                  />
              </div>

              <div className='p-2 ml-3 mt-3'>

                <h6 className='text-flow-1'>
                  {product.Heading}
                </h6>

                <div className='flex gap-4 mt-3'>
                  <p className='line-through'>
                    ₹1999
                  </p>

                  <p className='text-green-500 font-bold'>
                    ₹{product.Price}
                  </p>
                </div>

              </div>

            </div>
           </NavLink>
          )
        })}

      </div>

    </div>
  )
}

export default Trending