import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Support = () => {
  return (
    <>
    <div className='text-lg font-bold'>
        <h1>Support</h1>
    </div>
     <div className="flex  items-center gap-5 p-3 my-5 ">
            <MdOutlineMessage size={20}/>
            <MdOutlineMail size={20}/>
            <FaTelegramPlane size={20}/>

       
      </div>
      <div className='my-8 '>
        <hr className='border-t border-gray-400' />
        </div>
      
      <div className='text-lg font-bold'>
        <h1>Our social media</h1>
    </div>
     <div className="flex  items-center gap-5 p-3 my-5 ">
            <FaTelegramPlane size={20}/>
            <FaXTwitter size={20}/>
            <FaYoutube size={20}/>
            <FaFacebook size={20}/>
            <FaLinkedin size={20}/>

       
      </div>
      </>
  )
}

export default Support