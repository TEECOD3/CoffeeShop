import * as React from "react";
const Profile = (props: any) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M2.905 20.25a10.504 10.504 0 0 1 18.19 0"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Profile;
