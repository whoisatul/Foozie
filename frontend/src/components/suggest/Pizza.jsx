import React from 'react';

const Pizza = () => {
  return (
    <div className="w-[80px] h-[80px] flex items-center justify-center animate-pizza-bounce">
      <svg
        viewBox="0 0 64 64"
        width="64"
        height="64"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md"
      >
        {/* Crust */}
        <path
          d="M32 2 C50 5, 60 25, 62 36 L32 32 Z"
          fill="#a37b5f"
          stroke="#3e2c23"
          strokeWidth="1.5"
        />
        {/* Cheese */}
        <path
          d="M32 6 C48 10, 56 26, 58 35 L32 32 Z"
          fill="#f0e4d6"
        />
        {/* Toppings */}
        <circle cx="42" cy="18" r="2" fill="#5c4033" />
        <circle cx="50" cy="25" r="1.5" fill="#5c4033" />
        <circle cx="46" cy="30" r="1.8" fill="#5c4033" />
        <circle cx="38" cy="22" r="1.5" fill="#5c4033" />
      </svg>
    </div>
  );
};

export default Pizza;
