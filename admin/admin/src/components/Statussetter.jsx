import React, { useState } from 'react';
import { Ellipsis, Truck, PackageCheck } from 'lucide-react';

const Statussetter = ({ currentStatus, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`transition-all duration-300 ease-in-out flex items-center
          ${isOpen ? 'w-[140px] px-3' : 'w-[140px] pl-[5px]'}
          h-[42px] rounded-full overflow-hidden
          bg-white/10 backdrop-blur-sm cursor-pointer border border-[#7f5539]
        `}
      >
        {!isOpen ? (
          <div className="text-xs font-medium text-[#7f5539] text-center w-full">
            {currentStatus || 'Status'}
          </div>
        ) : (
          <div className="flex justify-between items-center w-full">
            <Ellipsis
              size={18}
              className="text-[#7f5539] cursor-pointer active:scale-110 hover:font-semibold hover:text-yellow-500 transition duration-300"
              onClick={() => onChange('Food Processing')}
            />
            <Truck
              size={18}
              className="text-[#7f5539] cursor-pointer active:scale-110 hover:font-semibold hover:text-blue-700 transition duration-300"
              onClick={() => onChange('Out for Delivery')}
            />
            <PackageCheck
              size={18}
              className="text-[#7f5539] cursor-pointer active:scale-110 hover:font-semibold hover:text-green-600 transition duration-300]"
              onClick={() => onChange('Delivered')}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Statussetter;
