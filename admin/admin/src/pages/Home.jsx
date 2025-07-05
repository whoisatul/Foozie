import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const url = "http://localhost:8000";

  const [summary, setSummary] = useState({
    totalorders: "",
    totalusers: "",
    pendingorders: "",
    totalrevenue: ""
  });

  const fetchData = async () => {
    try {
      const response = await axios.post(`${url}/api/v1/food/order`);
      if (response.data.success) {
        const data = response.data.data;
        setSummary({
          totalorders: data.totalorder,
          totalusers: data.totaluser,
          pendingorders: data.totalpendingorder,
          totalrevenue: data.totalrevenue
        });
      } else {
        console.log("API issue: data.success is false");
      }
    } catch (error) {
      console.log("API fetching issue:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="px-6 mt-[120px] w-[70%] ml-[38px] mr-[30px] rounded-2xl z-20 bg-white shadow-[0_0_1px_rgba(62,39,35,0.15),0_6px_12px_rgba(62,39,35,0.25)] overflow-y-auto max-h-[82.5vh] scrollbar-hide animate-fade-in">
  
      {/* Header */}
      <div className="mt-6 mb-4">
        <div className="flex items-center gap-3">
          <div className="text-3xl font-bold text-[#3e2723] flex items-center gap-2">
            Heyy <span className="text-[#6e4d3c]">Foozie Admin</span>
            <span className="animate-wiggle text-2xl origin-bottom">👋</span>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-1 ml-1">Here's your current dashboard summary ✨</p>
      </div>
  
      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-[#fff6f0] to-[#f7eee7eb] border-[1px] border-[#6e4d3c] rounded-2xl p-5 shadow-sm hover:shadow-lg transition duration-200">
          <p className="text-sm text-[#6e4d3c]">Total Orders</p>
          <h2 className="text-2xl font-extrabold text-[#3e2723] mt-1">{summary.totalorders}</h2>
        </div>
  
        <div className="bg-gradient-to-br from-[#fff6f0] to-[#f7eee7eb] border-[1px] border-[#6e4d3c] rounded-2xl p-5 shadow-sm hover:shadow-lg transition duration-200">
          <p className="text-sm text-[#6e4d3c]">Total Users</p>
          <h2 className="text-2xl font-extrabold text-[#3e2723] mt-1">{summary.totalusers}</h2>
        </div>
  
        <div className="bg-gradient-to-br from-[#fff6f0] to-[#f7eee7eb] border-[1px] border-[#6e4d3c] rounded-2xl p-5 shadow-sm hover:shadow-lg transition duration-200">
          <p className="text-sm text-[#6e4d3c]">Pending Orders</p>
          <h2 className="text-2xl font-extrabold text-[#3e2723] mt-1">{summary.pendingorders}</h2>
        </div>
  
        <div className="bg-gradient-to-br from-[#fff6f0] to-[#f7eee7eb] border-[1px] border-[#6e4d3c] rounded-2xl p-5 shadow-sm hover:shadow-lg transition duration-200">
          <p className="text-sm text-[#6e4d3c]">Total Revenue</p>
          <h2 className="text-2xl font-extrabold text-[#3e2723] mt-1">₹{summary.totalrevenue}</h2>
        </div>
      </div>
  
    </div>
  );
  }

  export default Home;
