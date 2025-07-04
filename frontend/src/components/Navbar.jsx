import React, { useState, useContext } from 'react';
import '../index.css';
import { Search, ShoppingCart,UserRound, ShoppingBag,LogOut } from 'lucide-react';
import { NavLink,useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import { assets } from '../assets/assets';

const Navbar = ({ setShowLogin, cartMode }) => {

  const navigate = useNavigate();
  
  const { getTotalCartItems, accesstoken , setaccesstoken } = useContext(StoreContext);

  const logout = () => {
   localStorage.removeItem("accesstoken");
   setaccesstoken("");
   navigate("/");

  }
    
  // Original navbar for all other pages
  return (
    <div className={`flex justify-between items-center px-5 mt-8 text-base absolute top-0 left-0 w-full z-50 bg-transparent ${cartMode ? 'text-[#3e2327]' : ' text-white'}`}>
      <div className="flex items-center h-full">
      <NavLink to='/'>
  <div className="relative w-24 h-12  rounded-full overflow-hidden z-50 flex items-center justify-center ">
    {cartMode && (<div className="absolute inset-0 bg-[#2a1a1c] border border-[#2a1a1c] rounded-full z-0" /> )}
    {/* Logo as image (won't be blurred) */}
    <img
      src="/logo.svg"
      alt="logo"
      className="relative z-10 w-22 h-13 object-contain"
    />
    
  </div>
</NavLink>


      </div>
      <div className='navitems'>
  <ul
    className={`flex gap-20 items-center cursor-pointer ml-[100px] ${cartMode ? 'text-[#2a1a1c]' : 'text-[#FAF3E0]'}`}>
    <NavLink to="/" className={({ isActive }) =>`transition-all duration-150 hover:-translate-y-[2px] pb-1 ${isActive ? cartMode ? 'border-b-2 border-[#2a1a1c]' : 'border-b-2 border-[#F3E5AB]': ''}`} >home</NavLink>
    <NavLink to="/menu" className={({ isActive }) =>`transition-all duration-150 hover:-translate-y-[2px] pb-1 ${isActive ? cartMode ? 'border-b-2 border-[#2a1a1c]' : 'border-b-2 border-[#F3E5AB]': ''}`} >menu</NavLink>
    <NavLink to="/app" className={({ isActive }) =>`transition-all duration-150 hover:-translate-y-[2px] pb-1 ${isActive ? cartMode ? 'border-b-2 border-[#2a1a1c]' : 'border-b-2 border-[#F3E5AB]': ''}`}  > App </NavLink>
    <NavLink to="/contactus" className={({ isActive }) =>`transition-all duration-150 hover:-translate-y-[2px] pb-1 ${isActive ? cartMode ? 'border-b-2 border-[#2a1a1c]' : 'border-b-2 border-[#F3E5AB]': ''}`} > contact us </NavLink> 
    </ul> 
    </div>

      <div className="flex items-center gap-4">
        <Search className={`w-5 h-5 ${cartMode ? 'text-black' : 'text-[#FAF3E0]'}`} />
        <NavLink to='/cart' className="relative">
          <ShoppingCart className={`w-5 h-5 ${cartMode ? 'text-black' : 'text-[#FAF3E0]'}`} />
          {getTotalCartItems() > 0 && (
            <span className={`absolute -top-2 -right-2 text-[#FAF3E0] text-xs rounded-full w-4 h-4 flex items-center justify-center ${cartMode? 'bg-[#3e2327]' : ''}`} >
              {getTotalCartItems()}
            </span>
          )}
        </NavLink>
        {!accesstoken ? (
          <button
          onClick={() => setShowLogin(true)}
          className={`relative group z-10 flex items-center justify-center bg-transparent text-base px-[18px] py-[6px] rounded-full cursor-pointer overflow-hidden transition duration-300 ease-in-out ${cartMode ? 'text-[#0d0e0c] border border-[#0d0e0c] hover:text-[#F3E5AB]' : 'text-gray-200 border border-[#F3E5AB] hover:text-[#0d0e0c]'}  `}>
          <span className="z-10">sign in</span>
          <span className={ `absolute inset-0 m-auto w-[20em] h-[20em] -left-[5em] rounded-full z-0 transition-shadow duration-500 ease-out ${cartMode ? 'group-hover:shadow-[inset_0_0_0_10em_#2a1a1c]' : 'group-hover:shadow-[inset_0_0_0_10em_#F3E5AB]'} `}></span>
        </button>
        
        
        ) : (
          <div className="relative group">
           <UserRound className={ `w-9 h-9 p-1 border-[1px] rounded-4xl cursor-pointer transition-transform duration-200 group-hover:scale-100 ${ cartMode? 'text-[#2a1a1c] border-[#2a1a1c]' : 'text-[#FAF3E0] border-[#FAF3E0]' }` } />
            <ul className="absolute right-0 mt-2 w-28 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible pointer-events-auto transition-all duration-200 z-50">
              <NavLink to='/myorder' className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 rounded-lg cursor-pointer">
                <ShoppingBag className='w-5 h-5 text-[#39210a]'/>
                <p className='text-black'>Orders</p>
              </NavLink>
              <hr className="my-1" />
              <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 rounded-lg cursor-pointer">
                <LogOut className='w-5 h-5 text-[#39210a]'/>
                <p className='text-black' onClick={logout} >Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;