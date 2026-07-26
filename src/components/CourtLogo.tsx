import React from 'react';

interface CourtLogoProps {
  size?: number;
  color?: string;
  className?: string;
}

export default function CourtLogo({ size = 28, color = '#FFFFFF', className }: CourtLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2800 1500"
      fill="none"
      width={size}
      height={size * (1500 / 2800)}
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <g
        stroke={color}
        strokeWidth="110"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Outer Boundary */}
        <rect x="100" y="100" width="2600" height="1300" rx="40" />

        {/* Half Court Line */}
        <line x1="1400" y1="100" x2="1400" y2="1400" />

        {/* Center Circle */}
        <circle cx="1400" cy="750" r="240" />

        {/* Left Paint */}
        <rect x="100" y="480" width="520" height="540" />

        {/* Right Paint */}
        <rect x="2180" y="480" width="520" height="540" />

        {/* Left 3PT Arc */}
        <path d="M400 180 A650 650 0 0 1 400 1320" />

        {/* Right 3PT Arc */}
        <path d="M2400 180 A650 650 0 0 0 2400 1320" />
      </g>
    </svg>
  );
}
