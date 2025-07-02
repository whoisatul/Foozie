import React from 'react';
import { assets } from '../assets/assets';

const Download = () => {
  return (
    <div className='flex flex-row justify-between mt-[150px] mb-[50px]'>
      <div className='ml-[190px] mt-[100px] '> 
    <h1 className='text-5xl font-medium '> Download Our <span className='text-[#6f4e37]'>Foozie</span> App</h1>
    <p className='text-[1.32rem] text-[#38281c]/60 mt-[5px]'>
    Experience seamless online ordering
    only on our mobile app
    </p>
    <div className='flex flex-row mt-[40px] gap-[30px]'><img src={assets.app_store} className='hover:scale-105 transition duration-300'/> <img src={assets.play_store} className='hover:scale-105 transition duration-300' /></div>
      </div>
     <div className='mr-[90px]'> <img src={'/download.svg'} alt={Download} className='w-90 h-126'/></div>
    </div>
  );
};

export default Download;