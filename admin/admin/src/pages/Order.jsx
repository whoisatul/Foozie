import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';
import '../index.css';

const Order = () => {
  const url = "http://localhost:8000";
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(`${url}/api/v1/order/listorder`);
      if (response.data.success) {
        setOrders(response.data.data);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    }
  };

  const statushandler = async(event,orderId) => {
    const response = await axios.post(`${url}/api/v1/order/updatestatus`,{orderId,status:event.target.value})
    if(response.data.success){
     await fetchAllOrders();
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="px-6 mt-[100px]">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Order Page</h2>
      {orders.map((order, index) => {
        const itemSummary = Object.entries(order.items || {})
          .map(([name, quantity]) => `${name} x ${quantity}`)
          .join(', ');

        const itemCount = Object.keys(order.items || {}).length;

        return (
          <div
            key={index}
            className="border border-[#eecac9] rounded-md p-4 mb-6 flex justify-between items-start w-3xl"
          >
            {/* Left Section */}
            <div className="flex gap-4">
              <img src={assets.parcel_icon} alt="Parcel" className="w-10 h-10 mt-1" />
              <div className="text-gray-800 text-sm leading-relaxed">
                <p className="font-semibold mb-1">{itemSummary}</p>
                <p className="font-semibold">{order.address?.firstName || 'name'}</p>
                <p>{order.address?.street || 'street'},</p>
                <p>
                  {order.address?.city || 'City'}, {order.address?.state || 'state'},{' '}
                  {order.address?.country || 'US'}, {order.address?.zip || '123456'}
                </p>
                <p>{order.phone || '9876543210'}</p>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-end justify-between text-sm text-gray-700 min-w-[120px]">
              <p className="mb-2">Items : {itemCount}</p>
              <p className="mb-2 font-semibold text-base">${order.amount}</p>
              <select onChange={(event) => statushandler(event,order._id)}
                value={order.status}
                className="border border-[#eecac9] rounded-md px-3 py-1 bg-[#ffeceb] text-gray-800"
              >
                <option>Delivered</option>
                <option>Food Processing</option>
                <option>Out for Delivery</option>
              </select>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Order;
