import React from 'react';

const Beverage = () => {
  return (
    <div className="w-[80px] h-[80px] flex items-center justify-center animate-beverage-bounce">
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        className="drop-shadow-md"
      >
        {/* Cup body */}
        <rect
          x="22"
          y="20"
          width="20"
          height="28"
          rx="3"
          fill="#a37b5f"
          stroke="#3e2c23"
          strokeWidth="1.5"
        />
        {/* Handle */}
        <path
          d="M42 25c3 0 4 2 4 4s-1 4-4 4"
          stroke="#3e2c23"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Beverage surface */}
        <rect x="22" y="20" width="20" height="5" fill="#5c4033" />
        {/* Steam animation lines */}
        <path d="M28 16c-1-2 1-3 0-5" stroke="#ccc" strokeWidth="1" className="animate-steam" />
        <path d="M34 16c-1-2 1-3 0-5" stroke="#ccc" strokeWidth="1" className="animate-steam delay-[0.2s]" />
      </svg>
    </div>
  );
};

export default Beverage;
