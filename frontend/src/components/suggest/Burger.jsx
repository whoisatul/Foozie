import React from 'react';

const Burger = () => {
  return (
    <div className="w-[80px] h-[80px] flex items-center justify-center animate-burger-bounce">
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        className="drop-shadow-md"
      >
        {/* Top Bun */}
        <path
          d="M12 28c0-9 10-14 20-14s20 5 20 14H12z"
          fill="#a37b5f"
          stroke="#3e2c23"
          strokeWidth="1.5"
        />
        {/* Lettuce */}
        <path
          d="M12 30h40c-1 2-3 3-4 3H16c-1.5 0-3-1-4-3z"
          fill="#8a7b5a"
        />
        {/* Patty */}
        <rect x="16" y="33" width="32" height="6" rx="1" fill="#5c4033" />
        {/* Bottom Bun */}
        <rect x="14" y="40" width="36" height="6" rx="2" fill="#a37b5f" />
      </svg>
    </div>
  );
};

export default Burger;
