import React from 'react';

const Hat = () => {
  return (
    <svg
      viewBox="0 0 64 64"
      width="80"
      height="80"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#333"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Top of the hat: 3 cloud bumps */}
      <path d="
        M20 28
        C14 28, 14 18, 22 18
        C24 12, 40 12, 42 18
        C50 18, 50 28, 44 28
        Z
      " />

      {/* Bottom band */}
      <rect x="22" y="28" width="20" height="10" rx="1" stroke="#333" />

      {/* Vertical lines inside the base */}
      <line x1="26" y1="28" x2="26" y2="38" />
      <line x1="30" y1="28" x2="30" y2="38" />
      <line x1="34" y1="28" x2="34" y2="38" />
      <line x1="38" y1="28" x2="38" y2="38" />
    </svg>
  );
};

export default Hat;
