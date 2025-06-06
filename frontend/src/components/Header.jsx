import React from 'react'
import '../index.css';

const Header = () => {
  return (
    <div className="bg-[url('/bg.jpg')] bg-cover bg-center h-screen ">
        <div className='flex flex-col'>
            <h2 id='hi' className='text-white font-extrabold text-7xl flex flex-col pt-[200px] pl-[75px] mb-[20px] animate-fade-in'>Order your <br />favourite food here</h2>
            <p className='text-white w-1/2 pl-[75px] mb-[20px]'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, our delicious meal at a time.</p>
            <button className='bg-white w-1/12 ml-[75px] mt-5 px-3 py-3 rounded-4xl'>View Menu</button>       
        </div>
    </div>
  )
}

export default Header