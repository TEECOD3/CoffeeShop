import React from "react";
import Cartitem from "./Cartitem";
import { useState } from "react";

const Desktopcart = () => {
  const [cart, setcart] = useState(true);
  return (
    <div className=" fixed bottom-0 right-0 z-[90000]  h-[80vh] w-full bg-white text-black  md:right-0 md:top-0 md:h-screen md:w-1/3">
      <Cartitem />
    </div>
  );
};

export default Desktopcart;
