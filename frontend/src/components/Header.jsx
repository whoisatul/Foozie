import React from 'react'
import '../index.css';

const Header = () => {
  return (
    <div className="bg-[url('/bg.jpg')] bg-cover bg-center h-screen">
        <div>
            <h2 className='text-white'>Order your favourite food here</h2>
            <p className='text-white'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, our delicious meal at a time.</p>
            <button>View Menu</button>       
        </div>
    </div>
  )
}

export default Header