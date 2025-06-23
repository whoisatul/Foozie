import React,{ useState,useContext,useEffect } from "react"
import axios from "axios"
import { StoreContext } from "../context/StoreContext"
import { assets } from "../assets/assets"


const Myorders = () => {

  const {accesstoken} = useContext(StoreContext) 
  const url = "http://localhost:8000";
  const [data,setdata] = useState([])

  const fetchorder = async() => {
     const response = await axios.post(`${url}/api/v1/order/myorder`, {} , {
        headers: {
          Authorization: `Bearer ${accesstoken}`
        }
      });
     setdata(response.data.data); 

  }

  useEffect(()=>{
    if(accesstoken){
        fetchorder();
    }
  },[accesstoken])

  return (
    <div className="mt-[100px] mb-[140px] px-6">
    <h2 className="text-2xl font-bold mb-6">My Orders</h2>

    {data.map((order, idx) => (
      <div
        key={idx}
        className="flex items-center justify-between border border-[#e5d7cb] rounded-md px-4 py-3 mb-4"
      >
        {/* Parcel icon + item list */}
        <div className="flex items-center gap-4 w-1/2">
          <img src={assets.parcel_icon} alt="Parcel" className="w-10 h-10" />
          <p className="text-sm leading-5">
            {order.items
              .map((item, i) => {
                return `${item.name} x ${item.quantity}${i === order.items.length - 1 ? "" : ", "}`;
              })
              .join("")}
          </p>
        </div>

        {/* Amount */}
        <p className="text-sm font-semibold w-[100px] text-center">
          ${order.amount}.00
        </p>

        {/* Item count + status */}
        <div className="flex flex-col items-center w-[120px]">
          <p className="text-sm text-gray-600">Items: {order.items.length}</p>
          {(() => {
            let color = "text-yellow-500";
            if (order.status === "Out for Delivery") color = "text-red-500";
            else if (order.status === "Food Delivered") color = "text-green-500";
            return (
              <p className={`text-sm ${color} mt-1`}>
                <span className={color}>&#x25cf;</span>{" "}
                <b>{order.status}</b>
              </p>
            );
          })()}
        </div>

        {/* Track Button */}
        <button onClick={fetchorder} className="px-4 py-1 border border-gray-400 rounded-md hover:bg-gray-100 transition">
          Track Order
        </button>
      </div>
    ))}
  </div>
)}

export default Myorders