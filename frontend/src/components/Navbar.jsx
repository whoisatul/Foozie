import React,{ useState } from 'react';
import '../index.css';
import { Search,ShoppingCart } from 'lucide-react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const [ menu, setmenu ] = useState("home");
  return (
    <div className="flex justify-between items-center px-5 mt-6 text-base">
  <div className="flex items-center h-full">
    <div className="font-semibold text-black">logo</div>
  </div>

  <div>
    <ul className="flex gap-6 text-[#49557e] items-center cursor-pointer">
      <NavLink to='/' className={menu === "home" ? "active" : ""}  onClick={()=>setmenu("home")}>home</NavLink>
      <NavLink to='/menu' className={menu === "menu" ? "active" : ""} onClick={()=>setmenu("menu")}>menu</NavLink>
      <NavLink to='/App' className={menu === "App" ? "active" : ""} onClick={()=>setmenu("App")}>App</NavLink>
      <NavLink to='/contactus' className={menu === "contact us" ? "active" : ""} onClick={()=>setmenu("contact us")}>contact us</NavLink>
    </ul>
  </div>

  <div className="flex items-center gap-3">
    <Search className="w-5 h-5 text-[#49557e]" />
    <NavLink to='/cart'> <ShoppingCart className="w-5 h-5 text-[#49557e]" /></NavLink>
    <button className="bg-transparent text-[#49557e] border border-[tomato] text-base px-[20px] py-[6px] rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-[tomato] hover:text-white ">
      sign in
    </button>
  </div>
</div>

   

  )
}

export default Navbar