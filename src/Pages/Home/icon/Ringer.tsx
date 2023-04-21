import * as React from "react";

type ringerprops = {
  className?: string;
};
const Ringer = (props: ringerprops) => (
  <svg
    width={81}
    height={82}
    viewBox="0 0 81 82"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M74.32 7.783c7.154 7.566 5.095 19.208 4.94 29.6-.16 10.684 1.073 22.127-5.835 30.261-7.517 8.852-19.275 12.978-30.91 13.005-12.088.028-24.372-3.86-32.467-12.86C2.076 58.929-.76 46.358 1.098 34.61c1.67-10.557 9.63-18.46 18.14-24.915 7.504-5.691 16.424-8.126 25.85-8.453C55.456.881 67.185.236 74.32 7.783Z"
      stroke="#BC9A6C"
    />
  </svg>
);
export default Ringer;
