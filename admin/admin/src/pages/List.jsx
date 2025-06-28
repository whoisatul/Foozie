import React, { useState, useEffect } from 'react';
import '../index.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {
  const url = 'http://localhost:8000';
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/v1/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error(response.data.message);
    }
  };

  const removeItem = async (foodId) => {
    const response = await axios.post(`${url}/api/v1/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="px-6 mt-[120px] w-[70%] ml-[38px] mr-[30px] rounded-2xl z-20 bg-white shadow-[0_10px_30px_rgba(62,39,35,0.1)] overflow-y-auto max-h-[82.5vh] scrollbar-hide">
      {/* Heading */}
      <p className="text-2xl font-semibold mb-8 mt-8 w-fit text-[#3E2723]">
      All Foods List
      </p>

      {/* Food Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
        {list.map((food, idx) => (
          <div
            key={idx}
            className=" rounded-2xl p-4 hover:scale-[1.03] border-[0.5px] border-[#3e2723] transition-all duration-300 shadow-[0_4px_20px_rgba(62,39,35,0.08)]"
          >
            {/* Image */}
            <div className="w-full h-40 overflow-hidden rounded-xl mb-4">
              {food.image ? (
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 rounded" />
              )}
            </div>

            {/* Name */}
            <h3 className="text-lg text-[#f4eadb] bg-[#3E2723] mb-2 truncate px-4 py-1 w-fit rounded-xl shadow-sm">
              {food.name}
            </h3>

            {/* Price + Category */}
            <div className="flex justify-between items-center mb-3 text-sm">
              <p className="text-gray-700">
                Category: <span className="font-medium">{food.category}</span>
              </p>
              <p className="font-semibold text-[#3E2723] bg-[#f4eadb] px-2 py-1 rounded-xl shadow-sm">
                ${food.price}
              </p>
            </div>

            {/* Delete Button */}
            <div className="flex justify-end">
              <button
                onClick={() => removeItem(food._id)}
                className="px-3 py-1 text-sm font-semibold text-red-600 border border-red-300 rounded-full hover:bg-red-50 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
