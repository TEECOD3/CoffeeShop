import * as React from "react";
type cartbagtype = {};
const CartBag = (props: cartbagtype) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.579 20.25H4.42a.75.75 0 0 1-.745-.667l-1.334-12a.75.75 0 0 1 .746-.833h17.824a.75.75 0 0 1 .745.833l-1.333 12a.75.75 0 0 1-.745.667Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.25 9.75v-3a3.75 3.75 0 0 1 7.5 0v3"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default CartBag;
