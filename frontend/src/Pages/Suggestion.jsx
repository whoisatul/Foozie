import React from 'react'
import Pizza from '../components/suggest/Pizza'
import Burger from '../components/suggest/Burger'
import Nonveg from '../components/suggest/Nonveg'
import Pureveg from '../components/suggest/Pureveg'
import Salad from '../components/suggest/Salad'
import Cakes from '../components/suggest/Cakes'
import Dessert from '../components/suggest/Dessert'
import Beverage from '../components/suggest/Beverage'
import '../index.css';
import Foodicon from './Foodicon'



const Suggestion = ({category,setCategory}) => {
  
  const foodOptions = [

    { name: 'Pizza', element: <Pizza /> },
    { name: 'Burger', element: <Burger /> },
    { name: 'Non veg', element: <Nonveg /> },
    { name: 'Salad', element: <Salad /> },
    { name: 'Pure veg', element: <Pureveg /> },
    { name: 'Cakes', element: <Cakes /> },
    { name: 'Dessert', element: <Dessert /> },
    { name: 'Beverage', element: <Beverage /> }
  ]
  
  return (
    <div>
    <h1 className="text-[40px] font-semibold ml-[30.5%] mt-[20px] mb-[12px] bg-gradient-to-r from-[#4a3417] via-[#624b22] to-[#745a33] bg-clip-text text-transparent drop-shadow-[3px_2px_5px_rgba(0,0,0,0.1)]">
  Experience Our Signature Dishes
</h1>
    <p className='text-[#6f4e37] text-[17px] ml-[21%] mt-[5px] mb-[45px] w-3/5'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, our delicious meal at a time.
  </p>
  <Foodicon prompt={foodOptions} />
    </div>
  )
}

export default Suggestion