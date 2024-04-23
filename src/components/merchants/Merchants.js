import React from 'react'
import { GoPlus } from "react-icons/go";


const Merchants = () => {
  return (
    <>
   
     <div className="flex justify-between items-center gap-10  ">
            <GoPlus size={25}/>
          <button  className=" ">
           Create merchant
          </button>
       
      </div></>
   
  )
}

export default Merchants