import '../index.css';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Linkedin,Github,Instagram} from 'lucide-react'

const Footer = () => {
    const navigate = useNavigate();
  return (
    <div  style={ { backgroundColor: '#0d0e0c', color: '#FAF3E0' } }>
        <div className=' flex justify-between gap-x-20 px-[50px] py-15 '>
            <div className="flex-[2] ml-[80px] ">
            <div className={`w-30 h-18 bg-[url('/logo.svg')] bg-cover bg-center z-50 ml-[5px]`}></div>
            <p className='w-[400px] ml-[17px] ' style={ { color: '#fcfaf2' } }>Built with love and precision by Atul, Foozie is more than just a food service website — it's your everyday food companion. Whether you're craving street-style snacks or gourmet dishes, we've got it all covered. Simple, fast, and flavorful — that's the Foozie promise.</p>
           <div className="flex space-x-4 mt-4 ml-[17px]"> <a href="https://www.linkedin.com/in/hrikshesh-kumar/" className='cursor-pointer'><Linkedin/></a><a href="https://github.com/whoisatul" className='cursor-pointer'> <Github/></a><a href="https://www.instagram.com/whoisatull/" className='cursor-pointer'><Instagram/></a></div>
            </div>
            <div className="flex-1">
                <h2 className="font-semibold text-[25px] mb-[10px] mt-[15px]">COMPANY</h2>
                <ul className="space-y-1">
                    <a className='text-[#fcfaf2] cursor-pointer' onClick={() => window.scrollTo({ top:0 , behavior: 'smooth' })} >Home</a>
                    <li className='text-[#fcfaf2] cursor-pointer' onClick={()=> navigate('/contactus')}>About us</li>
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