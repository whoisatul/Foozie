import '../index.css';
import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div  style={ { backgroundColor: '#0d0e0c', color: '#FAF3E0' } }>
        <div className=' flex justify-between gap-x-20 px-[50px] py-15 '>
            <div className="flex-[2] ml-[80px] ">
            <div className={`w-30 h-18 bg-[url('/logo.svg')] bg-cover bg-center z-50 ml-[5px]`}></div>
            <p className='w-[400px] ml-[17px] ' style={ { color: '#fcfaf2' } }>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium quasi reprehenderit magni fuga impedit officia dolorem modi, maxime sunt pariatur culpa iusto omnis blanditiis minus illum ipsum unde similique sed.</p>
           <div className="flex space-x-4 mt-4 ml-[17px]"> <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" /></div>
            </div>
            <div className="flex-1">
                <h2 className="font-semibold text-[25px] mb-[10px] mt-[15px]">COMPANY</h2>
                <ul className="space-y-1">
                    <li style={ { color: '#fcfaf2' } }>Home</li>
                    <li style={ { color: '#fcfaf2' } }>About us</li>
                    <li style={ { color: '#fcfaf2' } }>Delivery policy</li>
                    <li style={ { color: '#fcfaf2' } }>Privacy policy</li>
                </ul>
            </div>
            <div className="flex-1  " >
                <h2 className='font-semibold  text-[25px] mb-[10px] mt-[15px]' style={ { color: '#faf3e0' } }>GET IN TOUCH</h2>
                <ul className="space-y-1">
                    <li style={ { color: '#fcfaf2' } }>+91-7817945894</li>
                    <li style={ { color: '#fcfaf2' } }>Foozie@support.in</li>
                </ul>
            </div>
        </div>  
        <hr className='ml-[80px] mr-[80px]' style={ { color: '#fcfaf2' } }/>
        <p className='py-[40px] pl-[550px]' style={ { color: '#fcfaf2' } } >Copyright 2025 @ Foozie.in - All Right Reserved.</p>  
    </div>
  )
}

export default Footer