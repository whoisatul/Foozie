import React from 'react'
import { useLocation } from 'react-router-dom'

const Processbar = () => {
  const location = useLocation();
  const isCart = location.pathname.includes('cart');
  const isPlaceOrder = location.pathname.includes('order');

  return (
    <div className='text-[#2a1a1c]/70 text-lg font-medium'>
      <span className={isCart || isPlaceOrder ? 'text-[#1fc2ae]' : ''}>Bag</span>
      <span className={isCart || isPlaceOrder ? 'text-[#1fc2ae]' : ''}> ∙∙∙ </span>
      <span className={isPlaceOrder ? 'text-[#1fc2ae]' : ''}>Address</span>
      <span className={isPlaceOrder ? 'text-[#1fc2ae]' : ''}> ∙∙∙ </span>
      <span>Payment</span>
    </div>
  )
}

export default Processbar