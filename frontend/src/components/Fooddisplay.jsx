import { useContext } from 'react'
import React from 'react'
import { food_list } from '../assets/assets'
import  {StoreContext}  from '../context/StoreContext';
import Fooditem from './Fooditem';

const Fooddisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext); 
  
    return (
      <div>
        <h2 className='text-gray-600 text-3xl ml-[20px]'>Top dishes near you in </h2>
        <div className='grid grid-cols-5'>
            {food_list.map((item,indx)=>{
                return <Fooditem key={indx} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            })}
        </div>
    </div>
    );
  };
  
  export default Fooddisplay;