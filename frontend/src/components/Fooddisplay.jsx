import { useContext } from 'react'
import React from 'react'
import { food_list } from '../assets/assets'
import  {StoreContext}  from '../context/StoreContext';
import Fooditem from './Fooditem';

const Fooddisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext); 
  
    return (
      <div>
        <h2 className='text-gray-600 text-2xl ml-[20px] border-t-[2px] mr-[15px] pt-[10px] border-gray-300'>Top dishes near you in </h2>
        <div className='grid grid-cols-4'>
            {food_list.map((item,indx)=>{
              if(category==='All' || category===item.category){
                return <Fooditem key={indx} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
              }
                
            })}
        </div>
    </div>
    );
  };
  
  export default Fooddisplay;