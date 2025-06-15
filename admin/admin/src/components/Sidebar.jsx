import React from 'react'
import '../index.css'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='flex flex-col w-[18%] border-r-[1.5px] border-gray-400 h-[740px] gap-[20px] pt-[50px] pl-4'>
      
      <NavLink to='/add' className={({ isActive }) => `flex flex-row items-center border-[1px] border-r-0 p-3 gap-2 cursor-pointer w-full ${isActive ? 'bg-[#fff0ed] border-[tomato]' : 'border-gray-400'}`}>
        <img src={assets.add_icon} alt="add" />
        Add Items
      </NavLink>

      <NavLink to='/list' className={({ isActive }) => `flex flex-row items-center border-[1px] border-r-0 p-3 gap-2 cursor-pointer w-full ${isActive ? 'bg-[#fff0ed] border-[tomato]' : 'border-gray-400'}`}>
        <img src={assets.order_icon} alt="list" />
        List Items
      </NavLink>

      <NavLink to='/order' className={({ isActive }) => `flex flex-row items-center border-[1px] border-r-0 p-3 gap-2 cursor-pointer w-full ${isActive ? 'bg-[#fff0ed] border-[tomato]' : 'border-gray-400'}`}>
        <img src={assets.add_icon} alt="orders" />
        Orders
      </NavLink>

    </div>
  );
};

export default Sidebar