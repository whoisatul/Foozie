import React from 'react'
import { assets } from '../assets/assets';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-[80px]'>
      <div className='ml-[50px] text-3xl font-semibold cursor-pointer'>
       .LOGO
      </div>
      <div className='mr-[50px]'>
        {assets.profile_image}
      </div>
    </div>
  )
}

export default Navbar