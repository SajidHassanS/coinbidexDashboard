import React from 'react'
import { GoPlus } from "react-icons/go";


const Merchants = () => {
  return (
    <>
    <div className='text-lg font-bold'>
        <h1>Merchants</h1>
    </div>
     <div className="flex justify-center items-center gap-3 p-3 bg-white-100 rounded-lg my-5 ">
            <GoPlus size={25}/>
          <button  className="     ">
           Create merchant
          </button>
       
      </div></>
   
  )
}

export default Merchants