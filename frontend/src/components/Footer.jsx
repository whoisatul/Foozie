import '../index.css';
import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='bg-[#232324]  text-white h-[460px] '>
        <div className=' flex justify-between gap-x-20 px-[50px] py-15 '>
            <div className="flex-[2] ml-[80px] ">
            <div className="font-semibold text-white text-[40px] mb-[10px]">logo</div>
            <p className='w-[400px] text-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium quasi reprehenderit magni fuga impedit officia dolorem modi, maxime sunt pariatur culpa iusto omnis blanditiis minus illum ipsum unde similique sed.</p>
           <div className="flex space-x-4 mt-4"> <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" /></div>
            </div>
            <div className="flex-1">
                <h2 className="font-semibold text-white text-[25px] mb-[10px] mt-[15px]">COMPANY</h2>
                <ul className="space-y-1">
                    <li className='text-gray-300'>Home</li>
                    <li className='text-gray-300'>About us</li>
                    <li className='text-gray-300'>Delivery policy</li>
                    <li className='text-gray-300'>Privacy policy</li>
                </ul>
            </div>
            <div className="flex-1  " >
                <h2 className='font-semibold text-white text-[25px] mb-[10px] mt-[15px]'>GET IN TOUCH</h2>
                <ul className="space-y-1">
                    <li className='text-gray-300'>1800-454-545</li>
                    <li className='text-gray-300'>Foozie@support.in</li>
                </ul>
            </div>
        </div>  
        <hr className='ml-[80px] mr-[80px] text-gray-400'/>
        <p className='py-[40px] pl-[550px] text-gray-400'>Copyright 2025 @ Foozie.in - All Right Reserved.</p>  
    </div>
  )
}

export default Footer