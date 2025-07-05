import React from 'react'
import Loader from './Loader'
import Tray from './Tray'
import Fresh from './Fresh'
import Hat from './Hat'
import {FiStar} from 'react-icons/fi'

const Homesection = () => {
  const features = [
    {
      icon: <Loader />,
      title: "Fast Delivery",
      description: "Everything you order will be quickly delivered to your door."
    },
    {
      icon: <Fresh />,
      title: "Fresh Food",
      description: "We use only the best ingredients to cook tasty, fresh meals."
    },
    {
      icon: <Hat />,
      title: "Experienced Chefs",
      description: "Our staff consists of chefs and cooks with experience."
    },
    {
      icon: <Tray />,
      title: "A Variety of Dishes",
      description: "Explore a wide variety of dishes, desserts, and drinks."
    },
  ];

  return (
    <div className="py-10 h-[160vh] bg-white">
      {/* Section Divider */}
      <div className="flex items-center justify-center mb-12">
        <div className="w-[30%] h-[2px] bg-[#a37b5f]" />
        <img src="/section.png" alt="section" className="h-10 w-10 mx-4" />
        <div className="w-[30%] h-[2px] bg-[#a37b5f]" />
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-15 mt-[70px] text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center justify-center space-y-4">
            <div className="w-[100px] h-[100px] flex items-center justify-center">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-[#2a1a1c]">{feature.title}</h3>
            <div className="w-8 h-1 bg-[#6f4e37] rounded-full" />
            <p className="text-sm text-gray-600 px-2">{feature.description}</p>
          </div>
        ))}
      </div> 
        <h1 className='fav text-[35px] font-semibold ml-[32.5%] mt-[80px] mb-[12px] bg-gradient-to-r from-[#7a5e3a] via-[#d4af7f] to-[#a9894a] bg-clip-text text-transparent '>Most Ordered Dishes Of All Time</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-[70px] h-[50vh] w-full max-w-5xl mx-auto'>
        <div className="relative bg-[url('/fav1.jpg')] bg-cover rounded-xl shadow-lg flex items-end p-6 min-h-[200px]">
          <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
          <div className="relative z-10 text-white">
            <h2 className="text-xl font-bold">Spaghetti Bolognese</h2>
            <p className="text-sm">Classic Italian pasta with rich meat sauce served with Parmesan and olive oil.</p>
          </div>
        </div>
        <div className="relative bg-[url('/fav2.jpg')] bg-cover rounded-xl shadow-lg flex items-end p-6 min-h-[200px]">
          <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
          <div className="relative z-10 text-white">
            <h2 className="text-xl font-bold">Classic Cheeseburger</h2>
            <p className="text-sm text-gray-200">Juicy beef patty, cheddar cheese, lettuce, tomato, and our special sauce.</p>
          </div>
        </div>
        <div className="relative bg-[url('/fav3.jpg')] bg-cover rounded-xl shadow-lg flex items-end p-6 min-h-[200px]">
          <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
          <div className="relative z-10 text-white">
            <h2 className="text-xl font-bold">Chocolate Lava Cake</h2>
            <p className="text-sm text-gray-200">Warm chocolate cake with a gooey molten center, served with a hint of fruit.</p>
          </div>
        </div>
      </div>
       {/* end section */}
       <div className="flex items-center justify-center mt-12">
        <div className="w-[30%] h-[2px] bg-[#a37b5f]" />
        <img src="/section.png" alt="section" className="h-10 w-10 mx-4" />
        <div className="w-[30%] h-[2px] bg-[#a37b5f]" />
      </div>
      <div className="grid grid-rows-2 grid-cols-2 gap-8 w-4/5 ml-[143px] mt-[60px]">
  <div className="bg-[#f7eee7eb] border-[1px] border-[#d7aa81] rounded-xl shadow-md p-4">
    <p className="text-sm text-[#3e2723] font-medium">
    <div className="flex items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <FiStar key={i} className="text-[#efc75a]" />
            ))}
            <FiStar className="text-gray-300" />
          </div> <br />
      "Absolutely love the food quality and packaging! Foozie never disappoints."
    </p>
    <p className="text-xs text-[#6e4f3a] mt-2 text-right">– Anjali R.</p>
  </div>

  <div className="bg-[#f7eee7eb] border-[1px] border-[#d7aa81] rounded-xl shadow-md p-4">
    <p className="text-sm text-[#3e2723] font-medium">
    <div className="flex items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <FiStar key={i} className="text-[#efc75a]" />
            ))}
            <FiStar className="text-gray-300" />
          </div> <br />
      "Delicious meals with timely delivery. Highly recommended!"
    </p>
    <p className="text-xs text-[#6e4f3a] mt-2 text-right">– Rahul S.</p>
  </div>

  <div className="bg-[#f7eee7eb] border-[1px] border-[#d7aa81] rounded-xl shadow-md p-4">
    <p className="text-sm text-[#3e2723] font-medium">
    <div className="flex items-center gap-1">
            {[...Array(3)].map((_, i) => (
              <FiStar key={i} className="text-[#efc75a]" />
            ))}
            <FiStar className="text-gray-300" />
            <FiStar className="text-gray-300" />
          </div><br />
      "Great variety and taste. Foozie is my go-to food app."
    </p>
    <p className="text-xs text-[#6e4f3a] mt-2 text-right">– Priya K.</p>
  </div>

  <div className="bg-[#f7eee7eb] border-[1px] border-[#d7aa81] rounded-xl shadow-md p-4">
    <p className="text-sm text-[#3e2723] font-medium">
    <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} className="text-[#efc75a]" />
            ))}
          </div> <br />
      "Nice UI and smooth experience ordering food. Keep it up!"
    </p>
    <p className="text-xs text-[#6e4f3a] mt-2 text-right">– Aman T.</p>
  </div>
</div>

    </div>
  );
};

export default Homesection;
