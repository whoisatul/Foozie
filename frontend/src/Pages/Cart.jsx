import React from 'react'
import { StoreContext } from '../context/StoreContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  
  const {cartItems,food_list,removeFromCart,getTotal} = useContext(StoreContext);
  const navigate = useNavigate();

   return (<>
    
    <div className="bg-white min-h-screen px-8 py-6 mt-[120px]">
      {/* Header */}
      <div className="grid grid-cols-6 font-semibold text-gray-400 pb-8 ml-[20px] gap-[5px] ">
        <p className="col-span-1">Items</p>
        <p className="col-span-1">Title</p>
        <p className="col-span-1">Price</p>
        <p className="col-span-1">Quantity</p>
        <p className="col-span-1">Total</p>
        <p className="col-span-1">Remove</p>
      </div>

      {/* Cart Items */}
      {food_list.map((item, index) => {
        if (cartItems[item._id] > 0) {
          return (
            <div key={index} className="grid grid-cols-6 items-center py-4 border-b text-sm">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>${item.price * cartItems[item._id]}</p>
              <button className="text-red-500 mr-[130px] hover:text-red-700 font-bold" onClick={()=>removeFromCart(item._id)}>-</button>
            </div>
          )
        }
        return null
      })}

      {/* Cart Totals and Promo Code */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Promo Code */}
        <div>
          <p className="font-semibold mb-[15px]">If you have a promo code, Enter it here</p>
          <div className="flex">
            <input
              type="text"
              placeholder="promo code"
              className="border px-4 py-2 rounded-l w-full focus:outline-none"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r">Submit</button>
          </div>
        </div>

        {/* Totals */}
        <div className="bg-gray-50 p-6 rounded-md shadow-sm w-full max-w-sm ml-auto">
          <h2 className="text-lg font-bold mb-4">Cart Totals</h2>
          <div className="flex justify-between mb-2">
            <p>Subtotal</p>
            <p>${getTotal()}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Delivery Fee</p>
            <p>$2</p>
          </div>
          <div className="flex justify-between font-semibold text-lg mb-4">
            <p>Total</p>
            <p>${getTotal()+2}</p>
          </div>
          <button className="bg-[tomato] text-white font-semibold w-full py-2 rounded hover:bg-[#e5532d] transition-all" onClick={()=> navigate('/order')}>
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div></>
  )
}

export default Cart