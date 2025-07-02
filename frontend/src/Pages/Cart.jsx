import React,{ useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import  Processbar  from '../components/Processbar'
import { useNavigate } from 'react-router-dom';
import {Trash2} from 'lucide-react'

const Cart = () => {
  
  const {cartItems,food_list,removeFromCart,getTotal,getTotalCartItems} = useContext(StoreContext);
  const navigate = useNavigate();

   return (
      <>
        <div className="flex justify-center w-full mt-[120px] mb-6">
          <Processbar />
        </div>
        <div className="bg-white min-h-screen px-8 py-6 flex flex-col md:flex-row gap-8">
          {/* Cart Items (Left Side) */}
          <div className="flex-1">
            {food_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <div key={index} className="flex gap-4 items-center py-4 border-b border-gray-300 text-sm">
                  {/* Image */}
                  <img src={item.image} alt={item.name} className="w-38 h-42 object-cover rounded-md" />
                
                  {/* Product Info */}
                  <div className="flex flex-col flex-grow justify-between h-full pl-1">
                    <p className="text-lg font-bold text-[#2a1a1c] mb-1">{item.name}</p>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-1 max-w-xs">{item.description}</p>
                    <p className="text-[12px] text-gray-400 mb-2">Sold by: Foozie</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <span className="text-gray-600 text-sm">Qty:</span>
                        <span>{cartItems[item._id]}</span>
                      </div>
                      <p className="text-lg font-semibold text-[#2a1a1c]">₹{item.price}</p>
                    </div>
                  </div>
                
                  {/* Remove Button */}
                  <div className="flex flex-col justify-between items-end">
                    <button
                      className="text-gray-500 hover:text-red-500 font-bold"
                      onClick={() => removeFromCart(item._id)}
                    >
                      <Trash2 />
                    </button>
                    <p className="text-lg font-semibold text-[#2a1a1c] mt-[130px]">Total: ₹{item.price * cartItems[item._id]}</p>
                  </div>
                </div>
                
                  
                )
              }
              return null
            })}
          </div>

          {/* Promo Code + Cart Totals (Right Side) */}
          <div className="w-full md:w-[350px] flex flex-col gap-6">
            {/* Promo Code */}
            <div className="bg-[#f7eee7eb] p-4 rounded-md shadow-sm border-[1px] border-[#d7aa81]">
              <p className="font-semibold mb-[15px] text-[#432b1a]">If you have a promo code, Enter it here</p>
              <div className="flex">
                <input
                  type="text"
                  placeholder="promo code"
                  className="border px-4 py-2 rounded-l w-full focus:outline-none"
                />
                <button className="bg-[#432b1a] text-white px-4 py-2 rounded-r hover:bg-[#6e5a4b] transition duration-200" >Submit</button>
              </div>
            </div>
            {/* Totals */}
            {getTotalCartItems()>0 && (
              <div className="bg-[#f7eee7eb] text-[#432b1a] p-6 rounded-md shadow-sm w-full border-[1px] border-[#d7aa81]">
                <h2 className="text-lg font-bold mb-4">Cart Totals</h2>
                <div className="flex justify-between mb-2">
                  <p>Subtotal</p>
                  <p>₹{getTotal()}</p>
                </div>
                <div className="flex justify-between mb-2">
                  <p>Delivery Fee</p>
                  <p>₹49</p>
                </div>
                <div className="flex justify-between font-semibold text-lg mb-4">
                  <p>Total</p>
                  <p>₹{getTotal()+2}</p>
                </div>
                <button className="bg-[#432b1a] text-white font-semibold w-full py-2 rounded hover:bg-[#6e5a4b] transition-all" onClick={()=> navigate('/order')}>
                  PROCEED TO CHECKOUT
                </button>
              </div>
            )}
          </div>
        </div>
      </>
    )
}

export default Cart