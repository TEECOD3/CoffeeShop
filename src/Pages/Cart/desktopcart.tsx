import React from "react";
import Cartitem from "./Cartitem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartmodal, cartstate } from "../../Store/Slices/cartslice";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Desktopcart = () => {
  const [cart, setcart] = useState(true);
  const dispatch = useDispatch();
  const cartOpen = useSelector(cartstate);

  const slideFromBottomMobileVariant = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      y: "100%",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const slideFromRightDesktopVariant = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const isMobile = window.innerWidth < 768; // Adjust the breakpoint to your needs

  const variant = isMobile
    ? slideFromBottomMobileVariant
    : slideFromRightDesktopVariant;

  return (
    <motion.div
      initial="hidden"
      animate={cartOpen ? "visible" : "hidden"}
      exit="exit"
      variants={variant}
      className=" fixed bottom-0 right-0 z-[90000]  h-[80vh] w-full bg-white text-black  md:right-0 md:top-0 md:h-screen md:w-1/3"
    >
      <div className="flex gap-x-5 mt-2 text-gray-500 capitalize font-bold px-3">
        <h3 className="">Shopping bag</h3>
        <ArrowRight
          className="text-3xl font-bold  cursor-pointer"
          onClick={() => {
            dispatch(setCartmodal({ payload: 0 }));
          }}
        />
      </div>

      <Cartitem />
    </motion.div>
  );
};

export default Desktopcart;
