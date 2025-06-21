import React, { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const PlaceOrder = () => {
  const { getTotal, accesstoken, cartItems } = useContext(StoreContext);
  const url = "http://localhost:8000";
  
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      items: cartItems,
      amount: getTotal() + 2,
      address: form,
    };

    try {
      const { data } = await axios.post(`${url}/api/v1/order/checkout`, orderData, {
        headers: {
          Authorization: `Bearer ${accesstoken}`
        }
      });

      if (data.success) {
        const { order } = data;
        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY,
          amount: order.amount,
          currency: order.currency,
          name: "Foozie",
          description: "Food Delivery Order",
          order_id: order.id,
          handler: function (response) {
            alert("Payment successful!");
            navigate("/");
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
      } else {
        console.error("Order failed:", data.message);
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-white px-4 py-12">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Delivery Information */}
        <form className="bg-white p-8 rounded-xl shadow-md w-full mt-[100px]" onSubmit={handleSubmit}>
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
            <button className="bg-[tomato] text-white font-semibold w-full py-3 rounded hover:bg-[#e5532d] transition-all" onClick={handleSubmit}>
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;