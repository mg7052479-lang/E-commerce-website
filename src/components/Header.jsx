import React from 'react'
import { NavLink } from 'react-router-dom'
import Addtocart from './Addtocart'

const Header = () => {
  return (
    <header className='w-full fixed top-0 left-0 z-50 h-20 bg-gradient-to-r from-slate-900 via-gray-900 to-black shadow-lg px-8 flex items-center justify-between'>

      <div>
        <h1 className='text-3xl font-extrabold text-white tracking-wide cursor-pointer'>
          SHOPIX
        </h1>
      </div>

      <nav>
        <ul className='flex gap-10 items-center mb-0'>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-semibold transition-all duration-300 !no-underline ${
                isActive
                  ? 'text-green-400'
                  : 'text-white hover:text-green-300'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/fashion"
            className={({ isActive }) =>
              `text-lg font-semibold transition-all duration-300 !no-underline ${
                isActive
                  ? 'text-green-400'
                  : 'text-white hover:text-green-300'
              }`
            }
          >
            Fashion
          </NavLink>

          <NavLink
            to="/electronics"
            className={({ isActive }) =>
              `text-lg font-semibold transition-all duration-300 !no-underline ${
                isActive
                  ? 'text-green-400'
                  : 'text-white hover:text-green-300'
              }`
            }
          >
            Electronics
          </NavLink>

        </ul>
      </nav>


      <div className='flex gap-8 text-2xl text-white'>

       <NavLink to={"/Addtocart"}>
         <button className='hover:text-green-400  transition-all duration-300 hover:scale-110 '>
          <i className="fa-solid fa-cart-shopping"></i>
        </button>

       </NavLink>
        <button className='hover:text-red-400 transition-all duration-300 hover:scale-110'>
          <i className="fa-solid fa-heart"></i>
        </button>

      </div>

    </header>
  )
}

export default Header