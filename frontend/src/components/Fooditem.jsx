import React, { useState } from 'react'
import '../index.css'
import { assets } from '../assets/assets'
import { Divide } from 'lucide-react'

const Fooditem = ({id,name,price,description,image}) => {
  
   const[itemcount,setitemcount] = useState(0)

  return (
    <div className='mx-[20px] my-[20px] bg-white rounded-lg shadow p-2'>
    <div>
      <img src={image} alt="" className='rounded-2xl mb-[5px] ' />
      {
        !itemcount ? <img src={assets.add_icon_white} alt="" onClick={()=>setitemcount(prev=>prev+1)} />
        : <div className='flex flex-row justify-between bg-gray-200 rounded-2xl w-[100px]'>
          <img onClick={()=>setitemcount(prev=>prev-1)} src={assets.remove_icon_red} alt="" className='px-[3px] py-[3px]'/>
          <p className='mx-[3px] mt-[6px]'>{itemcount}</p>
          <img onClick={()=>setitemcount(prev=>prev+1)} src={assets.add_icon_green} alt="" className='px-[3px] py-[3px] '/>
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