import React from 'react'
import { FiPlus, FiMinus, FiStar } from 'react-icons/fi'
import { StoreContext } from '../context/StoreContext'
import { useContext } from 'react'

const Fooditem = ({id,name,price,description,image, isHighlighted}) => {
  const { cartItems = {}, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className={`ml-[36px] my-5 w-[300px] rounded-2xl shadow-lg p-4 border border-[#d7aa81] backdrop-blur-md bg-white/60 transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group ${
      isHighlighted ? 'ring-4 ring-[#F3E5AB] ring-opacity-75 shadow-2xl scale-105' : ''
    }`}>
      {/* Food Image with zoom on hover and plus icon */}
      <div className="relative overflow-hidden rounded-t-2xl mb-2 w-full h-40">
        <img src={image} alt={name} className="rounded-t-2xl w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute top-2 right-2 z-20">
          {!cartItems[id] ? (
            <button onClick={() => addToCart(id)} className="bg-white/80 backdrop-blur-md p-2 rounded-full shadow hover:bg-[#432b1a] hover:text-white transition-all duration-200">
              <FiPlus size={22} />
            </button>
          ) : (
            <div className="flex items-center bg-white/80 backdrop-blur-md rounded-full shadow px-2 py-1 gap-2">
              <button onClick={() => removeFromCart(id)} className="hover:bg-red-100 p-1 rounded-full transition-all duration-200">
                <FiMinus size={18} className="text-red-500" />
              </button>
              <span className="font-semibold text-[#432b1a]">{cartItems[id]}</span>
              <button onClick={() => addToCart(id)} className="hover:bg-green-100 p-1 rounded-full transition-all duration-200">
                <FiPlus size={18} className="text-green-600" />
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Card Content */}
      <div className="pt-2">
        <div className="flex items-center justify-between mb-1">
          <p className="text-lg font-bold text-[#2a1a1c]">{name}</p>
          <div className="flex items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <FiStar key={i} className="text-[#efc75a]" />
            ))}
            <FiStar className="text-gray-300" />
          </div>
        </div>
        <p className="text-[15px] text-gray-600 line-clamp-2 mb-2">{description}</p>
        <p className="text-[#efc75a] text-lg font-semibold"><span>₹</span>{price}</p>
      </div>
    </div>
  )
}

export default Fooditem