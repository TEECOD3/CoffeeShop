import * as React from "react";

type quotesprops = {};
const Quotes = (props: quotesprops) => (
  <svg
    width={69}
    height={69}
    viewBox="0 0 69 69"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M29.11 38.813H10.78a2.157 2.157 0 0 1-2.156-2.157v-17.25a2.156 2.156 0 0 1 2.156-2.156h16.172a2.156 2.156 0 0 1 2.156 2.156v23.719a10.781 10.781 0 0 1-10.78 10.781m42.047-15.093H42.047a2.156 2.156 0 0 1-2.156-2.157v-17.25a2.156 2.156 0 0 1 2.156-2.156h16.172a2.156 2.156 0 0 1 2.156 2.156v23.719a10.781 10.781 0 0 1-10.781 10.781"
      stroke="#BC9A6C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Quotes;
