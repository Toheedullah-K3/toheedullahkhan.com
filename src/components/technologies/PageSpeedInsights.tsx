import React from 'react';

export default function PageSpeedInsights() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="28" fill="#0F9D58" />
      {/* Gauge / Speedometer arc */}
      <path
        d="M32 78A36 36 0 1 1 96 78"
        stroke="#FFFFFF"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* Lightning bolt indicator */}
      <path
        d="M66 36L48 64H62L58 92L80 60H64L66 36Z"
        fill="#FFD600"
      />
    </svg>
  );
}
