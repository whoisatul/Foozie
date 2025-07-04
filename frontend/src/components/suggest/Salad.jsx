import React from 'react';

const Salad = () => {
  return (
    <div className="w-[80px] h-[80px] flex items-center justify-center animate-salad-bounce">
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        className="drop-shadow-md"
      >
        {/* Bowl */}
        <path
          d="M16 36c0 8 7 14 16 14s16-6 16-14H16z"
          fill="#a37b5f"
          stroke="#3e2c23"
          strokeWidth="1.5"
        />
        
        {/* Lettuce leaf */}
        <path
          d="M18 30c1-5 4-9 9-9s5 4 5 6c0 3-2 6-6 7s-6-1-8-4z"
          fill="#8a7b5a"
          stroke="#3e2c23"
          strokeWidth="1"
        />

        {/* Tomato */}
        <circle cx="42" cy="28" r="3" fill="#d04949" stroke="#3e2c23" strokeWidth="1" />

        {/* Cucumber slice */}
        <circle cx="35" cy="25" r="2.5" fill="#f0e4d6" stroke="#3e2c23" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default Salad;
