import React from 'react'
import '../index.css'
import { Plus,AlignJustify,Package } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';


const Sidebar = () => {

  const navigate = useNavigate();
  return (
    <div className='flex flex-col w-[23%] h-[770px] rounded-2xl gap-[25px] pt-[50px] pl-4 mt-[30px] ml-[30px] shadow-[0_0_1px_rgba(62,39,35,0.15),0_6px_12px_rgba(62,39,35,0.25)] z-20'>
      <div className="bg-[#3E2723] w-30 h-12 ml-[80px] flex items-center justify-center cursor-pointer rounded-3xl" onClick={() => navigate('/')}>
      <img src="/logo.svg" alt="Logo" className="h-14 pointer-events-none " />
</div>
      <span className='text-gray-600 ml-[4px]'>Main menu ⸻</span>
      <NavLink to='/add' className={({ isActive }) => `flex flex-row items-center p-3 gap-2 rounded-2xl rounded-r-none w-full h-[60px] ${isActive ? ' bg-gradient-to-r from-[#cbb9a4] via-[#e9d6c7] to-[#fefaf6] text-[#4F362F] font-semibold' : 'text-gray-600'}`}>
        <Plus />
        Add Items
      </NavLink>

      <NavLink to='/list' className={({ isActive }) => `flex flex-row items-center p-3 gap-2 rounded-2xl rounded-r-none w-full h-[60px] ${isActive ? 'bg-gradient-to-r from-[#cbb9a4] via-[#e9d6c7] to-[#fefaf6] text-[#4F362F] font-semibold' : 'text-gray-600'}`}>
        <AlignJustify />
        List Items
      </NavLink>

      <NavLink to='/order' className={({ isActive }) => `flex flex-row items-center p-3 gap-2 rounded-2xl rounded-r-none w-full h-[60px] ${isActive ? 'bg-gradient-to-r from-[#cbb9a4] via-[#e9d6c7] to-[#fefaf6] text-[#4F362F] font-semibold' : 'text-gray-600'}`}>
        <Package />
        Orders
      </NavLink>

    </div>
  );
};

export default Sidebar