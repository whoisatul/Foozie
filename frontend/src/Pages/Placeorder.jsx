import React, { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import Orderdone from './Orderdone'

const PlaceOrder = () => {
  const { getTotal, accesstoken, cartItems } = useContext(StoreContext);
  const url = "http://localhost:8000";
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleProceedToPayment = async (e) => {
    e.preventDefault();
    const totalAmount = getTotal() + 2;
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: totalAmount * 100,
      currency: "INR",
      name: "Foozie",
      description: "Food Delivery Order",
      handler: async function (response) {
        try {
          await axios.post(`${url}/api/v1/order/checkout`, {
            items: cartItems,
            amount: totalAmount,
            address: form,
            payment: true,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature
          }, {
            headers: {
              Authorization: `Bearer ${accesstoken}`
            }
          });
          alert("Payment successful!");
          setOrderPlaced(true);
          setTimeout(() => {
            navigate('/myorder');
          }, 1500);
        } catch (err) {
          alert("Order creation failed after payment!");
          console.error(err);
          navigate("/myorder");
        }
      },
      prefill: {
        name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        contact: form.phone,
      },
      theme: {
        color: "#ff5133"
      }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-white px-4 py-12 ">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Delivery Information */}
        <form className="bg-white p-8 rounded-xl shadow-md w-full mt-[100px]" onSubmit={handleProceedToPayment}>
          <h2 className="text-3xl font-bold mb-8">Delivery Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="First name" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-tomato" required />
            <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last name" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-tomato" required />
          </div>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email address" className="border rounded-md px-3 py-2 mb-4 w-full focus:outline-none focus:ring-1 focus:ring-tomato" required />
          <input type="text" name="street" value={form.street} onChange={handleChange} placeholder="Street" className="border rounded-md px-3 py-2 mb-4 w-full focus:outline-none focus:ring-1 focus:ring-tomato" required />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" name="city" value={form.city} onChange={handleChange} placeholder="City" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-tomato" required />
            <input type="text" name="state" value={form.state} onChange={handleChange} placeholder="State" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-tomato" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" name="zip" value={form.zip} onChange={handleChange} placeholder="Zip code" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-tomato" required />
            <input type="text" name="country" value={form.country} onChange={handleChange} placeholder="Country" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-tomato" required />
          </div>
          <input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="border rounded-md px-3 py-2 mb-4 w-full focus:outline-none focus:ring-1 focus:ring-tomato" required />
        </form>
        {/* Cart Totals */}
        <div className="flex flex-col items-start justify-start w-full pt-8 mt-[280px] md:pt-0">
          <div className="bg-gray-50 p-8 rounded-xl shadow-md w-full max-w-md ml-auto">
            <h2 className="text-2xl font-bold mb-6">Cart Totals</h2>
            <div className="flex justify-between mb-3 text-gray-600">
              <span>Subtotal</span>
              <span>${getTotal ? getTotal() : 0}</span>
            </div>
            <div className="flex justify-between mb-3 text-gray-600">
              <span>Delivery Fee</span>
              <span>$2</span>
            </div>
            <div className="flex justify-between mb-6 font-bold text-lg">
              <span>Total</span>
              <span>${getTotal ? getTotal() + 2 : 2}</span>
            </div>
            {orderPlaced && <Orderdone />}
            <button className="bg-[tomato] text-white font-semibold w-full py-3 rounded hover:bg-[#e5532d] transition-all" onClick={handleProceedToPayment}>
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;