import React from 'react';
import '../index.css';
import { NavLink,useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();
  return (
    <div className="relative bg-[url('/bg.png')] bg-cover bg-center h-screen">
      {/* Dim black overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-10 pointer-events-none"></div>
      {/* Text content */}
      <div className="relative z-30 flex flex-col">
        <div className = 'headline text-6xl flex flex-col pt-[250px] pl-[75px] mb-[23px] leading-14 fade-in' style={ { color: '#FAF3E0' } }  >
         <div>Craving something amazing?</div>
         <div><span className='text-[#FAE17F]'>Foozie's</span> got you covered.</div>
       </div>
        <p className=" w-1/2 pl-[75px] mb-[20px] text-[17px]" style={ { color: '#FAF3E0' } }>
        From sizzling street-style snacks to comfort-packed meals, Foozie brings your favorite flavors right to your doorstep — fast, fresh, and full of joy.
        <br />Your next bite is just a tap away.
        </p>
        <button onClick={()=>navigate('/menu')} className="bg-transparent w-fit ml-[75px] mt-2 px-4 py-3 rounded-4xl text-gray-300 border border-[#F3E5AB] transition duration-200 hover:shadow-[0_0_10px_#F3E5AB]">
        View menu
       </button>
      </div>
    </div>
  );
};

export default Header;
