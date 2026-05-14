import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className=" flex h-16 w-full bg-green-500 items-center justify-between ">
            <h1 className="flex  font-bold text-black text-2xl">
        LOGO
      </h1>
          <ul className='flex  gap-10 cursor-pointer  items-center justify-center'>
            <NavLink to="/" className='flex  text-black font-bold  items-center mt-2.5  !no-underline text-xl'>Home</NavLink>
            <NavLink to="/fishon" className='flex  text-black font-bold  items-center mt-2.5 !no-underline text-xl'>Fishon</NavLink>
            <NavLink to="/electronics" className='flex  text-black font-bold  items-center mt-2.5 !no-underline text-xl'>Electronics</NavLink>
          </ul>
       
        <div className='flex gap-8 text-2xl mr-10'> 
          <div>
            <i className="fa-solid fa-cart-arrow-down"></i>
          </div>
          <div>
            <i className="  fa-solid fa-heart"></i>
          </div>
        </div>
    </div>
     </div>
  )
}

export default Header
