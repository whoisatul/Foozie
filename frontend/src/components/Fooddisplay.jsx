import { useContext } from 'react'
import React from 'react'
import { food_list } from '../assets/assets'
import  StoreContext  from './context/StoreContext';
import Fooditem from './Fooditem';

const Fooddisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext); 
  
    return (
      <div>
        <h2>Top dishes near you in </h2>
        <div>
            {food_list.map((item,indx)=>{
                return <Fooditem />
            })}
        </div>
    </div>
    );
  };
  
  export default Fooddisplay;