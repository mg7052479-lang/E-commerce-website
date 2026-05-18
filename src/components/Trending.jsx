import React from 'react'

const Trending = () => {
  return (
    <div className=' w-full p-4'>
        <h2 className='mb-4'>Trending Products</h2>
        <div className='flex border w-106 h-36 shadow rounded-2xl border-gray-50 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer '>
          <div className='w-32 h-32 flex items-center justify-center flex-shrink-0 border-gray-50'>
  <img
    src="/assets/electronics/boAt Airdopes 111 4.webp"
    className='cursor-pointer h-32 w-32 p-2 rounded-2xl'
    alt="ted1"
  />
</div>

           <div  className='p-2 ml-3 mt-3 '>
            <div  className='flex flex-col gap-2'>
                <h6 className='text-flow-1' >Lorem, ipsum dolor sit amet 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, non in. Velit quod assumenda facilis autem dignissimos neque repellat eveniet accusantium nulla, laudantium .</h6>

            </div>
            <div className='flex gap-4 mt-3'>
                <p className='flex line-through '>$19.99</p>
                <p >
                    <span className='text-green-500 font-bold'>$9.99</span>
                </p>
            </div>
           </div>
        </div>
      
    </div>
  )
}

export default Trending
