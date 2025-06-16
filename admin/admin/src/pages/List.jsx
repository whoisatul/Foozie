import React, { useState,useEffect } from 'react'
import '../index.css'
import axios from "axios";
import { toast } from 'react-toastify';

const List = () => {

  const url = "http://localhost:8000"
  const[list,setlist] = useState([]);
  const fetchlist = async() => {
   const response = await axios.get(`${url}/api/v1/food/list`)
   if(response.data.success){
    setlist(response.data.data);
   }
   else{
    toast.error(response.data.message)
   }
  }

  const removeitem = async(foodid) => {
    const response = await axios.post(`${url}/api/v1/food/remove`,{id:foodid})
    await fetchlist();
    if(response.data.sucess){
      toast.success(response.data.message)
    }
    else{
      toast.error(response.data.message)
    }

  }

    useEffect(() => {
       fetchlist();
    }, [])
    

    return (
      <div className="p-4">
  <p className="text-2xl font-semibold mb-8">All Foods List</p>

  <div className="bg-white overflow-x-auto">
    {/* Header Row */}
    <div className="grid grid-cols-5 bg-gray-100 p-4 font-bold border border-black min-w-[1000px]">
      <span>Image</span>
      <span>Name</span>
      <span>Price</span>
      <span>Category</span>
      <span className="text-center">Action</span>
    </div>

    {/* Food Items */}
    {list.map((food, idx) => (
      <div
        key={idx}
        className="grid grid-cols-5 items-center p-4 border-b hover:bg-gray-50 min-w-[1000px]"
      >
        <div className="flex justify-center">
          {food.image ? (
            <img
              src={food.image}
              alt={food.name}
              className="w-16 h-16 object-cover rounded mr-[130px]"
            />
          ) : (
            <div className="w-16 h-16 bg-gray-200 rounded" />
          )}
        </div>
        <p className="truncate">{food.name}</p>
        <p>${food.price}</p>
        <p>{food.category}</p>
        <div className="flex justify-center">
          <p
            onClick={() => removeitem(food._id)}
            className="text-red-500 cursor-pointer font-bold text-xl hover:text-red-700"
          >
            &minus;
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

    
    )
}

export default List