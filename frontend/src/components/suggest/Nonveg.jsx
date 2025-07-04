import React from 'react';

const NonVeg = () => {
  return (
    <div className="w-[80px] h-[80px] flex items-center justify-center animate-drumstick-bounce">
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        className="drop-shadow-md"
      >
        {/* Drumstick meat */}
        <path
          d="M42 20c8 8 4 20-6 24s-22-6-24-14 6-16 14-16 10 2 16 6z"
          fill="#a37b5f"
          stroke="#3e2c23"
          strokeWidth="1.5"
        />
        {/* Bone part */}
        <path
          d="M50 32c2-2 4 2 2 4 2 1 2 3 0 4s-4 0-4-2-2-2-2-4 2-2 4-2z"
          fill="#f0e4d6"
          stroke="#3e2c23"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default NonVeg;
