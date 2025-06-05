import React,{ useState } from 'react';
import '../index.css';
import { Search,ShoppingCart } from 'lucide-react';


const Navbar = () => {
    const [ menu, setmenu ] = useState("home");
  return (
    <div className="flex justify-between items-center px-5 mt-6 text-base">
  <div className="flex items-center h-full">
    <div className="font-semibold text-black">logo</div>
  </div>

  <div>
    <ul className="flex gap-6 text-[#49557e] items-center cursor-pointer">
      <li className={menu === "home" ? "active" : ""}  onClick={()=>setmenu("home")}>home</li>
      <li className={menu === "menu" ? "active" : ""} onClick={()=>setmenu("menu")}>menu</li>
      <li className={menu === "App" ? "active" : ""} onClick={()=>setmenu("App")}>App</li>
      <li className={menu === "contact us" ? "active" : ""} onClick={()=>setmenu("contact us")}>contact us</li>
    </ul>
  </div>

  <div className="flex items-center gap-3">
    <Search className="w-5 h-5 text-[#49557e]" />
    <ShoppingCart className="w-5 h-5 text-[#49557e]" />
    <button className="bg-transparent text-[#49557e] border border-[tomato] text-base px-[20px] py-[7px] rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-[tomato] hover:text-white ">
      sign in
    </button>
  </div>
</div>

   

  )
}

export default Navbar