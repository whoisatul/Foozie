import React from 'react'
import { menu_list } from '../assets/assets'
import '../index.css';



const Menu = ({category,setCategory}) => {
  
  return (
    <div>
    <h1 className='text-[#262626] text-[35px] ml-[20px] mt-[10px] mb-[15px]'>Explore our menu</h1>
    <p className='text-[#262626] text-[17px] ml-[20px] mt-[5px] mb-[45px] w-3/5'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, our delicious meal at a time.
  </p>
  <div className=' flex flex-row justify-between gap-[30px] mx-[10px]'  >
    {menu_list.map((item,index)=>(
      <div key={index} onClick={()=>setCategory(prev=>prev===item.menu_name?"All" : item.menu_name)}>
        <img src={item.menu_image} className={`menu-img${category===item.menu_name ? ' active' : ''}`} alt={item.menu_name} />
        <p className='ml-[32px] mt-[10px] mb-[20px] text-xl text-gray-600 cursor-pointer '>{item.menu_name}</p>

      </div>
    ))}
    </div>
    
    </div>
  )
}

export default Menu
