import React from 'react';

const Tray = () => {
  return (
    <svg
    viewBox="0 0 64 64"
    width="100"
    height="100"
    xmlns="http://www.w3.org/2000/svg"
    className="overflow-visible"
  >
    {/* Base hand */}
    <path
      d="M10 45c0 3 2 5 6 5h32c4 0 6-2 6-5H10z"
      fill="#6F4E37"
    />

    {/* Tray base */}
    <ellipse cx="32" cy="38" rx="22" ry="3" fill="#555" />

    {/* Cloche dome - animated */}
    <g>
      <path
        d="M10 38c0-12 10-22 22-22s22 10 22 22H10z"
        fill="#bbb"
        stroke="#444"
        strokeWidth="1"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; 0 -7; 0 0"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>

      {/* Cloche knob */}
      <circle cx="32" cy="14" r="2" fill="#777">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; 0 -7; 0 0"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
  );
};

export default Tray;