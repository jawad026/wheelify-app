import React from 'react';

 const DynamicGradientSVG = ({ color1, color2, text, colorFont }) => {
  return (
    <svg
      className="sp__wave_svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 220"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" x2="65%" y1="0%" y2="0%">
          <stop offset="0%" stopColor={color1}></stop>
          <stop offset="100%" stopColor={color2}></stop>
        </linearGradient>
      </defs>
      <path
        className="sm_svg_fill"
        fill="url(#grad1)"
        d="M0,128  C2000,400,4000,0,1820,250L1820,0 C1200,0,960,0,720,0 C480,0,240,0,120,0 L0,0 Z"
      ></path>
      <text
        id="chat_header_color"
        fill="white"
        style={{ fontSize: "60px", fill: colorFont }}
        x="20%"
        y="40%"
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {text}
      </text>
    </svg>
  );
};

export default DynamicGradientSVG;
