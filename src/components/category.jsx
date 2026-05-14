import React from 'react'

const Category = () => {
  return (
    <div className='flex justify-start mt-6 ml-6'>

      <div className='w-72 h-24 bg-gray-200 shadow-md rounded-xl flex items-center px-4 gap-6'>

        {/* Image */}
        <img
          src="/assets/electronics/boAt Wave Beat 4.webp"
          alt="watch"
          className='w-16 h-16 cursor-pointer object-contain'
        />

        {/* Text */}
        <div>
          <p className='text-sm text-2xl text-gray-500'>
            Smart Watches
          </p>
        </div>

      </div>

    </div>
  )
}

export default Category