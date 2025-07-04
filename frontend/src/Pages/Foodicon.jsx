import React, { useState } from 'react';

const Foodicon = ({ prompt }) => {
  const [category, setCategory] = useState();

  return (
    <div className="px-6">
      <div className="flex flex-wrap justify-center gap-x-[80px] gap-y-[40px]">
        {prompt.map((item, index) => (
          <div
          key={index}
          onClick={() =>
            setCategory(prev => (prev === item.name ? 'All' : item.name))
          }
          className="flex flex-col items-center justify-center w-[100px] min-h-[130px] cursor-pointer"
        >
          <div className="w-[60px] h-[60px] flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              {item.element}
            </div>
          </div>
        
          <p
            className={`mt-2 text-center text-sm font-medium ${
              category === item.name
                ? 'text-[#2a1a1c]'
                : 'text-[#2a1a1c]/50 hover:text-[#2a1a1c]/90'
            } transition-colors duration-200`}
          >
            {item.name}
          </p>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Foodicon;
