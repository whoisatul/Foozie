import React, { useState, useContext } from 'react';
import '../index.css';
import { Search, ShoppingCart } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Navbar = ({ setShowLogin, cartMode }) => {
  const [menu, setmenu] = useState('home');
  
  const { getTotalCartItems } = useContext(StoreContext);
    
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
        <button className={`bg-transparent border border-[tomato] text-base px-[20px] py-[6px] rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-[tomato] hover:text-white ${cartMode ? 'text-black' : 'text-gray-200'}`} onClick={() => setShowLogin(true)}>
          sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;