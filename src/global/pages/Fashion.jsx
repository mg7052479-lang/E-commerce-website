import React from 'react'
import Layout from '../../components/Layout'

const Fashion = () => {
  return (
    <Layout>
        
        <div className=" h-full flex gap-6 ">
           <div className="border w-64 p-6 h-full left-20">
            <h2 className="text-lg font-bold border-0 bg-gray-600 p-2 text-white rounded items text-center" >Filter</h2>
             <div className="flex flex-col gap-4 mt-3 ml-2 p-2 text-xl">
                 <label >
                    <input type="checkbox" /> Men's jakets
                 </label>
                 <label >
                    <input type="checkbox" /> Denims jakets
                 </label>
                  <label >
                    <input type="checkbox" /> Regular jeans
                 </label> 
                 <label >
                    <input type="checkbox" /> Cargo jeans
                 </label>
             </div>
              <h2 className="text-lg font-bold border-0 bg-gray-600 p-2 text-white rounded items text-center mt-4" >Prices</h2>
             <div className="flex flex-col gap-4 mt-3 mb-10 ml-2 p-2 text-xl">
                 <label >
                    <input type="checkbox" /> 500-1000
                 </label>
                 <label >
                    <input type="checkbox" /> 1000-1500
                 </label>
                  <label >
                    <input type="checkbox" /> 1500-2000
                 </label> 
                 <label >
                    <input type="checkbox" /> 2000-2500
                 </label>
                 <label >
                    <input type="checkbox" /> 2500-3000
                 </label>
             </div>
           </div>
           
        </div>
    </Layout>
  )
}

export default Fashion
