import * as React from "react";
const WhiteCheck = (props: any) => (
  <svg
    width={26}
    height={26}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <path
        d="m21.25 6.75-10.5 10.5L5.5 12"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={0.75}
        y={6}
        width={25.25}
        height={20}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1714_9248"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1714_9248"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default WhiteCheck;
