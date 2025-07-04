import React from 'react';

const Pureveg = () => {
  return (
    <div className="w-[80px] h-[80px] flex items-center justify-center animate-leaf-bounce">
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        className="drop-shadow-md"
      >
        {/* Leaf stem */}
        <path
          d="M32 36 C34 26, 36 18, 44 12"
          stroke="#5c4033"
          strokeWidth="2"
          fill="none"
        />

        {/* Left leaf */}
        <path
          d="M32 36 C24 28, 18 20, 16 12 C26 10, 34 20, 32 36 Z"
          fill="#8a7b5a"
          stroke="#3e2c23"
          strokeWidth="1"
        />

        {/* Right leaf */}
        <path
          d="M32 36 C38 28, 46 22, 52 18 C46 10, 36 14, 32 36 Z"
          fill="#a37b5f"
          stroke="#3e2c23"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default Pureveg;
