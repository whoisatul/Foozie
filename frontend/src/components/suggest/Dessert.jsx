import React from 'react';

const Dessert = () => {
  return (
    <div className="w-[80px] h-[80px] flex items-center justify-center animate-dessert-bounce">
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        className="drop-shadow-md"
      >
        {/* Dessert base (like pudding or flan) */}
        <ellipse cx="32" cy="48" rx="16" ry="6" fill="#a37b5f" />
        <path
          d="M16 48c0-10 4-20 16-20s16 10 16 20H16z"
          fill="#f0e4d6"
          stroke="#3e2c23"
          strokeWidth="1.5"
        />
        {/* Syrup topping */}
        <path
          d="M20 32c2 1 4 0 6-2s4-2 6 0 4 2 6 0 4-2 6 0v4H20v-2z"
          fill="#5c4033"
        />
        {/* Cherry */}
        <circle cx="32" cy="24" r="2" fill="#ff5e5e" />
        <path
          d="M32 24 C31 22, 31 20, 33 18"
          stroke="#3e2c23"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default Dessert;
