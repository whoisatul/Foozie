import { useContext } from 'react'
import React from 'react'
import  {StoreContext}  from '../context/StoreContext';
import Fooditem from './Fooditem';

const Fooddisplay = ({ category, highlightedFood }) => {
    const { food_list } = useContext(StoreContext); 
  
    return (
      <div>
        <h2 className='text-gray-600 text-2xl ml-[20px] border-t-[2px] mr-[15px] pt-[10px] border-gray-300'>Top dishes near you </h2>
        <div className='grid grid-cols-4'>
            {food_list.map((item,indx)=>{
              if(category==='All' || category===item.category){
                return (
                  <div key={indx} className={highlightedFood === item._id ? 'animate-pulse' : ''}>
                    <Fooditem 
                      id={item._id} 
                      name={item.name} 
                      description={item.description} 
                      price={item.price} 
                      image={item.image}
                      isHighlighted={highlightedFood === item._id}
                    />
                  </div>
                );
              }
              return null;
            })}
        </div>
    </div>
    );
  };
  
  export default Fooddisplay;