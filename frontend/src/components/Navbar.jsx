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
    <div className={`flex justify-between items-center px-5 mt-6 text-base absolute top-0 left-0 w-full z-10 bg-transparent ${cartMode ? 'text-black' : 'text-white'}`}>
      <div className="flex items-center h-full">
        <NavLink to='/'><div className={`font-semibold text-2xl ${cartMode ? 'text-black' : 'text-white'}`}>logo</div></NavLink>
      </div>
      <div className='navitems'>
        <ul className={`flex gap-6 items-center cursor-pointer ${cartMode ? 'text-black' : 'text-white'}`}>
          <NavLink to='/' className={menu === 'home' ? 'active' : ''} onClick={() => setmenu('home')}>home</NavLink>
          <NavLink to='/menu' className={menu === 'menu' ? 'active' : ''} onClick={() => setmenu('menu')}>menu</NavLink>
          <NavLink to='/App' className={menu === 'App' ? 'active' : ''} onClick={() => setmenu('App')}>App</NavLink>
          <NavLink to='/contactus' className={menu === 'contact us' ? 'active' : ''} onClick={() => setmenu('contact us')}>contact us</NavLink>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <Search className={`w-5 h-5 ${cartMode ? 'text-black' : 'text-white'}`} />
        <NavLink to='/cart' className="relative">
          <ShoppingCart className={`w-5 h-5 ${cartMode ? 'text-black' : 'text-white'}`} />
          {getTotalCartItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-[tomato] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {getTotalCartItems()}
            </span>
          )}
        </NavLink>
        {!accesstoken ? (
          <button className={`bg-transparent border border-[tomato] text-base px-[20px] py-[6px] rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-[tomato] hover:text-white ${cartMode ? 'text-black' : 'text-gray-200'}`} onClick={() => setShowLogin(true)}>
            sign in
          </button>
        ) : (
          <div className="relative group">
            <img
              src={assets.profile_icon}
              alt="Profile"
              className="w-9 h-9 rounded-full border-2 border-[tomato] bg-white p-1 cursor-pointer transition-transform duration-200 group-hover:scale-100"
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