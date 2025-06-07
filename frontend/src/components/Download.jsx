import React from 'react';
import { assets } from '../assets/assets';

const Download = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[50vh] bg-white'>
      <h1 className='text-4xl font-semibold text-black text-center mb-6'>
        For Better Experience Download <br /> Foozie App
      </h1>
      <div className='flex gap-4'>
        <img src={assets.play_store} alt="Google Play" className='h-15  cursor-pointer transition-transform duration-300 hover:scale-105' />
        <img src={assets.app_store} alt="App Store" className='h-15  cursor-pointer transition-transform duration-300 hover:scale-105' />
      </div>
    </div>
  );
};

export default Download;