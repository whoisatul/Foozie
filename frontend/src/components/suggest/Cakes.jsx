import React from 'react';

const Cakes = () => {
  return (
    <div className="w-[80px] h-[80px] flex items-center justify-center animate-bounce-slow">
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        className="drop-shadow-md"
      >
        {/* Cake base */}
        <rect
          x="14"
          y="32"
          width="36"
          height="18"
          rx="3"
          fill="#a37b5f"
          stroke="#3e2c23"
          strokeWidth="1.5"
        />

        {/* Frosting */}
        <path
          d="M14 32c2 2 4 2 6 0s4-2 6 0 4 2 6 0 4-2 6 0 4 2 6 0 4-2 6 0v3H14v-3z"
          fill="#f0e4d6"
        />

        {/* Candle */}
        <rect x="30" y="20" width="4" height="10" fill="#3e2c23" rx="1" />
        <circle cx="32" cy="18" r="2" fill="#ffb300" className="animate-flicker" />
      </svg>
    </div>
  );
};

export default Cakes;
