import React, { useState } from 'react'
import '../index.css'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'
import { useContext } from 'react'

const Fooditem = ({id,name,price,description,image}) => {
  
   const{cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className='mx-[20px] my-[20px] bg-white rounded-lg shadow p-2 transition-transform duration-300 hover:scale-105'>
    <div>
      <img src={image} alt="" className='rounded-2xl mb-[5px] ' />
      {
        !cartItems[id] ? <img src={assets.add_icon_white} alt="" onClick={()=>addToCart(id)} />
        : <div className='flex flex-row justify-between bg-gray-200 rounded-2xl w-[100px]'>
          <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" className='px-[3px] py-[3px]'/>
          <p className='mx-[3px] mt-[6px]'>{cartItems[id]}</p>
          <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" className='px-[3px] py-[3px] '/>
        </div>
      }
    </div>
    <div>
      <div className='flex flex-row justify-between '><p className='text-[18px] font-semibold my-[3px]'>{name}</p> <img src={assets.rating_starts} alt="" className='h-[20px]'/></div>
      <p className='text-[15px] text-gray-600'>{description}</p>
      <p className='text-[tomato]'><span>$</span>{price}</p>
    </div>
    </div>
  )
}

export default Fooditem