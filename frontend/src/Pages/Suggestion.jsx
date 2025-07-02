import React from 'react'
import {Salad,Hamburger,CakeSlice,Drumstick,PizzaIcon,LeafyGreen,DessertIcon,Wine} from 'lucide-react'
import '../index.css';
import Foodicon from './Foodicon'



const Suggestion = ({category,setCategory}) => {
  
  const foodOptions = [

    { name: 'Pizza', element: <PizzaIcon /> },
    { name: 'Burger', element: <Hamburger /> },
    { name: 'Non veg', element: <Drumstick /> },
    { name: 'Salad', element: <Salad /> },
    { name: 'Pure veg', element: <LeafyGreen /> },
    { name: 'Cakes', element: <CakeSlice /> },
    { name: 'Dessert', element: <DessertIcon /> },
    { name: 'Beverage', element: <Wine /> }
  ]
  
  return (
    <div>
    <h1 className="text-[40px] font-semibold ml-[30.5%] mt-[20px] mb-[12px] bg-gradient-to-r from-[#2a1a1c] via-[#4d3a3d] to-[#5d4c4d] bg-clip-text text-transparent drop-shadow-[3px_2px_5px_rgba(0,0,0,0.1)]">
  Experience Our Signature Dishes
</h1>
    <p className='text-[#6f4e37] text-[17px] ml-[21%] mt-[5px] mb-[45px] w-3/5'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, our delicious meal at a time.
  </p>
  <Foodicon prompt={foodOptions} />
    </div>
  )
}

export default Suggestion