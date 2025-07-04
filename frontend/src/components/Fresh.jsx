import React from 'react';

const FreshFoodIcon = () => {
  return (
    <svg
    viewBox="0 0 64 64"
    width="100"
    height="100"
    xmlns="http://www.w3.org/2000/svg"
    className="overflow-visible"
  >
    {/* Coffee cup */}
    <rect x="16" y="24" width="32" height="24" rx="4" fill="#6f4e37" stroke="#3e2723" strokeWidth="2" />
    
    {/* Handle */}
    <path
      d="M48 28c4 0 4 12 0 12"
      fill="none"
      stroke="#3e2723"
      strokeWidth="2"
    />

    {/* Saucer */}
    <ellipse cx="32" cy="50" rx="20" ry="3" fill="#d7ccc8" />

    {/* Steam / Smoke */}
    <path fill="none" stroke="#bbb" strokeWidth="1.5">
      <animate
        attributeName="d"
        dur="2s"
        repeatCount="indefinite"
        values="
          M30 20 C28 18, 28 16, 30 14;
          M30 20 C32 18, 32 16, 30 14;
          M30 20 C28 18, 28 16, 30 14
        "
      />
    </path>
    <path fill="none" stroke="#bbb" strokeWidth="1.2">
      <animate
        attributeName="d"
        dur="2.5s"
        repeatCount="indefinite"
        values="
          M34 20 C32 18, 32 16, 34 14;
          M34 20 C36 18, 36 16, 34 14;
          M34 20 C32 18, 32 16, 34 14
        "
      />
    </path>
  </svg>
  );
};

export default FreshFoodIcon;
