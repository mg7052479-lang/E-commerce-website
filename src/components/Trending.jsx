import React from 'react'

const Trending = () => {
  return (
    <div className='w-full bg-gray-100 py-10 px-6'>
      
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        
        {/* Card */}
        <div className='bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden'>
          
          {/* Image */}
          <div className='bg-gray-200 flex justify-center items-center p-6'>
            <img
              src="/assets/electronics/boAt Airdopes 201 4.webp"
              alt="product"
              className='h-52 object-contain hover:scale-105 transition duration-300'
            />
          </div>

          {/* Content */}
          <div className='p-5 flex flex-col gap-3'>
            
            <h2 className='text-lg font-semibold text-gray-800'>
              boAt Airdopes 201
            </h2>

            <p className='text-sm text-gray-500'>
              Wireless earbuds with immersive sound quality.
            </p>

            {/* Price */}
            <div className='flex items-center gap-3'>
              <span className='text-xl font-bold text-black'>
                ₹1999
              </span>

              <span className='text-sm line-through text-gray-400'>
                ₹2999
              </span>
            </div>

            {/* Button */}
            <button className='bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition'>
              Add To Cart
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Trending