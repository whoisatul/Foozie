import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';
import Statussetter from '../components/Statussetter';
import '../index.css';
import { Package2 } from 'lucide-react';

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

  const statushandler = async (newStatus, orderId) => {
    try {
      const response = await axios.post(`${url}/api/v1/order/updatestatus`, {
        orderId,
        status: newStatus, // ✅ Use the value directly
      });
  
      if (response.data.success) {
        await fetchAllOrders(); // ✅ Refresh list
        toast.success("Status updated");
      } else {
        toast.error("Failed to update status");
      }
    } catch (err) {
      toast.error("Error updating status");
      console.log(err);
    }
  };
  

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="px-6 mt-[120px] w-[70%] ml-[38px] rounded-2xl h-[82.5vh] mr-[30px] z-20 shadow-[0_0_1px_rgba(62,39,35,0.15),0_6px_12px_rgba(62,39,35,0.25)] ">
      <h2 className="text-2xl font-semibold text-[#3E2723] mb-8 mt-8 ml-2">Orders</h2>
      {orders.map((order, index) => {
        const itemSummary = Object.entries(order.items || {})
          .map(([name, quantity]) => `${name} x ${quantity}`)
          .join(', ');

        const itemCount = Object.keys(order.items || {}).length;

        return (
          <div
            key={index}
            className="border border-[#7f5539] rounded-xl p-4 mb-6 flex justify-between items-start w-3xl hover:shadow-[0_0_6px_1px_rgba(62,39,35,0.35)] transition-all duration-300"
          >
            {/* Left Section */}
            <div className="flex gap-4">
              <Package2 className="w-10 h-10 mt-1 text-[#3e2723]" />
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
              <Statussetter currentStatus={order.status} onChange={(newStatus) => statushandler(newStatus, order._id)} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Order;
