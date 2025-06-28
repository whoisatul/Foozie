import React, { useState, useContext } from 'react';
import '../index.css';
import { Search, ShoppingCart } from 'lucide-react';
import { NavLink,useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import { assets } from '../assets/assets';

const Navbar = ({ setShowLogin, cartMode }) => {
  const [menu, setmenu] = useState('home');

  const navigate = useNavigate();
  
  const { getTotalCartItems, accesstoken , setaccesstoken } = useContext(StoreContext);

  const logout = () => {
   localStorage.removeItem("accesstoken");
   setaccesstoken("");
   navigate("/");

  }
    
  // Original navbar for all other pages
  return (
    <div className={`flex justify-between items-center px-5 mt-6 text-base absolute top-0 left-0 w-full z-50 bg-transparent ${cartMode ? 'text-black' : 'text-white'}`}>
      <div className="flex items-center h-full">
        <NavLink to='/'><div className={`w-25 h-15 bg-[url('/logo.svg')] bg-cover bg-center z-50 `}>
          </div></NavLink>
      </div>
      <div className='navitems'>
        <ul className={`flex gap-20 items-center cursor-pointer ml-[100px] ${cartMode ? 'text-black' : {}}`} style={!cartMode ? { color: '#FAF3E0' } : {}}>
          <NavLink to="/" className={`transition-transform duration-200 hover:-translate-y-[2px] ${menu === 'home' ? 'active' : ''}`} onClick={() => setmenu('home')}>home</NavLink>
          <NavLink to='/menu' className={`transition-transform duration-200 hover:-translate-y-[2px] ${menu === 'menu' ? 'active' : ''}`} onClick={() => setmenu('menu')}>menu</NavLink>
          <NavLink to='/App' className={`transition-transform duration-200 hover:-translate-y-[2px] ${menu === 'App' ? 'active' : ''}`} onClick={() => setmenu('App')}>App</NavLink>
          <NavLink to='/contactus' className={`transition-transform duration-200 hover:-translate-y-[2px] ${menu === 'contact us' ? 'active' : ''}`} onClick={() => setmenu('contact us')}>contact us</NavLink>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <Search className={`w-5 h-5 ${cartMode ? 'text-black' : 'text-white'}`} />
        <NavLink to='/cart' className="relative">
          <ShoppingCart className={`w-5 h-5 ${cartMode ? 'text-black' : 'text-white'}`} />
          {getTotalCartItems() > 0 && (
            <span className="absolute -top-2 -right-2 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center" style={{backgroundColor:3E2723}}>
              {getTotalCartItems()}
            </span>
          )}
        </NavLink>
        {!accesstoken ? (
          <button
          onClick={() => setShowLogin(true)}
          className={`relative group z-10 flex items-center justify-center bg-transparent border border-[#F3E5AB] text-base px-[20px] py-[6px] rounded-full cursor-pointer overflow-hidden transition duration-300 ease-in-out ${cartMode ? 'text-black' : 'text-gray-200'} hover:text-[#0d0e0c] `}>
          <span className="z-10">sign in</span>
          <span className=" absolute inset-0 m-auto w-[20em] h-[20em] -left-[5em] rounded-full z-0 transition-shadow duration-500 ease-out group-hover:shadow-[inset_0_0_0_10em_#F3E5AB]"></span>
        </button>
        
        
        ) : (
          <div className="relative group">
            <img
              src={assets.profile_icon}
              alt="Profile"
              className="w-9 h-9 rounded-full border-2 border-[#F3E5AB] bg-white p-1 cursor-pointer transition-transform duration-200 group-hover:scale-100"
            />
            <ul className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible pointer-events-auto transition-all duration-200 z-50">
              <NavLink to='/myorder' className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <img src={assets.bag_icon} className="w-5 h-5" alt="Orders" />
                <p className='text-black'>Orders</p>
              </NavLink>
              <hr className="my-1" />
              <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <img src={assets.logout_icon} className="w-5 h-5" alt="Logout" />
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