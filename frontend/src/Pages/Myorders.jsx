import React,{ useState,useContext,useEffect } from "react"
import axios from "axios"
import API_BASE_URL from '../config';
import { StoreContext } from "../context/StoreContext"
import { Package, Package2 } from 'lucide-react';

// SVG icons for statuses (function to allow dynamic color)
const statusIcons = {
  "Food Processing": (colorClass) => (
    <svg className={`w-4 h-4 mr-1 inline-block ${colorClass}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
  ),
  "Out for Delivery": (colorClass) => (
    <svg className={`w-4 h-4 mr-1 inline-block ${colorClass}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13l4-4 4 4m0 0v6m0-6l4-4 4 4" /></svg>
  ),
  "Delivered": (colorClass) => (
    <svg className={`w-4 h-4 mr-1 inline-block ${colorClass}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
  )
};

const statusSteps = ["Preparing", "Out for Delivery", "Food Delivered"];

const Myorders = () => {

  const {accesstoken} = useContext(StoreContext) 
  const [data,setdata] = useState([])
  const [showItemsIdx, setShowItemsIdx] = useState(null);

  const fetchorder = async() => {
     const response = await axios.post(`${API_BASE_URL}/api/v1/order/myorder`, {} , {
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

  // Helper: get progress step
  const getStep = (status) => {
    if (status === "Food Delivered") return 2;
    if (status === "Out for Delivery") return 1;
    return 0;
  };

  return (
    <div className="mt-[100px] mb-[140px] px-2 md:px-6">
      <h2 className="text-2xl font-bold mb-6">My Orders</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((order, idx) => {
          // Status color mapping
          let statusStyles = {
            background: "bg-yellow-400", // Default for Food Processing
            text: "text-white",
            border: "border-blue-300",
            icon: "text-white"
          };
          if (order.status === "Out for Delivery") {
            statusStyles = { background: "bg-blue-600", text: "text-white", border: "border-orange-400", icon: "text-white" };
          } else if (order.status === "Delivered") {
            statusStyles = { background: "bg-green-600", text: "text-white", border: "border-yellow-300", icon: "text-white" };
          } else if (order.status === "Cancelled") {
            statusStyles = { background: "bg-gray-400", text: "text-white", border: "border-gray-300", icon: "text-white" };
          }

          // Format date
          const orderDate = order.createdAt ? new Date(order.createdAt).toLocaleString() : "";
          const shortId = order._id ? order._id.slice(-6).toUpperCase() : "";

          // Progress bar
          const step = getStep(order.status);

          return (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start md:items-center border-[0.5px] border-[#2a1a1c] justify-between rounded-2xl px-6 py-5 bg-white transition duration-300 hover:shadow-[0_0_15px_2px_#6e5a4b] relative overflow-visible"
            >
              {/* Left: Parcel icon (now Lucide icon) + item list */}
              <div className="flex items-center gap-4 w-full md:w-1/2 mb-4 md:mb-0">
                <Package2 className="w-14 h-14 text-[#2a1a1c]/70 drop-shadow" />
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-base leading-6 text-gray-800 font-medium truncate max-w-[180px]">
                      {order.items
                        .map((item, i) => `${item.name} x ${item.quantity}${i === order.items.length - 1 ? "" : ", "}`)
                        .join("")}
                    </p>
                    {order.items.length > 2 && (
                      <button
                        className="ml-1 text-xs text-blue-500 underline hover:text-blue-700"
                        onClick={() => setShowItemsIdx(showItemsIdx === idx ? null : idx)}
                      >
                        {showItemsIdx === idx ? "Hide" : `+${order.items.length - 2} more`}
                      </button>
                    )}
                  </div>
                  {/* Popover for full item list */}
                  {showItemsIdx === idx && (
                    <div className="absolute z-20 bg-white border rounded shadow-lg p-3 mt-2 left-20 min-w-[200px]">
                      <ul className="text-sm text-gray-700">
                        {order.items.map((item, i) => (
                          <li key={i}>{item.name} x {item.quantity}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="text-xs text-gray-400 mt-1">Order ID: <span className="font-mono">{shortId}</span></div>
                  <div className="text-xs text-gray-400">Placed: {orderDate}</div>
                </div>
              </div>

              {/* Center: Progress bar */}
              <div className="flex flex-col items-center w-full md:w-[160px] mb-4 md:mb-0">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {statusSteps.map((s, i) => {
                    // If Delivered, all dots/lines green
                    const isDelivered = order.status === "Delivered";
                    const dotColor = isDelivered ? 'bg-green-500' : (i <= step ? 'bg-green-500' : 'bg-gray-300');
                    const lineColor = isDelivered ? 'bg-green-400' : (i < step ? 'bg-green-400' : 'bg-gray-200');
                    return (
                      <div key={s} className="flex items-center">
                        <span className={`w-3 h-3 ${dotColor} border-2 border-white rounded-full`}></span>
                        {i < statusSteps.length - 1 && (
                          <span className={`w-8 h-px ${lineColor}`}></span>
                        )}
                      </div>
                    );
                  })}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm flex items-center gap-1 ${statusStyles.background} ${statusStyles.text} transition-all duration-200`}>
                  {statusIcons[order.status] ? statusIcons[order.status](statusStyles.icon) : null}
                  {order.status}
                </span>
              </div>

              {/* Right: Amount + Track Button */}
              <div className="flex flex-col items-end w-full md:w-[160px] gap-2">
                <p className="text-lg font-bold text-[#2d2d2d]">₹{order.amount}.00</p>
                <button
                  onClick={fetchorder}
                  className="flex items-center gap-2 px-5 py-2 border border-[#d7aa81] rounded-full bg-[#f7eee7eb] transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h4" /><path strokeLinecap="round" strokeLinejoin="round" d="M17 13l4 4m0 0l-4 4m4-4H3" /></svg>
                  Track Order
                </button>
                <p className="text-xs text-gray-500">Items: {order.items.length}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Myorders