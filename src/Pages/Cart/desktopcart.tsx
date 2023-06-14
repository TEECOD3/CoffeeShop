import Cartitem from "./Cartitem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartmodal, cartstate } from "../../Store/Slices/cartslice";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

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

  const isMobile = window.innerWidth < 768;

  const variant = isMobile
    ? slideFromBottomMobileVariant
    : slideFromRightDesktopVariant;

  return (
    <>
      {cartOpen && (
        <div
          className="bg-black/70 fixed top-0 left-0 h-full w-screen cursor-pointer z-[200000]"
          onClick={() => {
            dispatch(setCartmodal({ payload: 0 }));
          }}
        ></div>
      )}
      <motion.div
        initial="hidden"
        animate={cartOpen ? "visible" : "hidden"}
        exit="exit"
        variants={variant}
        className="fixed bottom-0 right-0 z-[9000000] rounded-t-lg md:rounded-none  h-[90vh] w-full bg-white text-black  md:right-0 md:top-0 md:h-screen md:w-1/3"
      >
        <div className="mt-2 text-gray-500 capitalize font-bold px-3 flex justify-between">
          <Link
            to="/cart"
            className=" flex gap-x-4"
            onClick={() => {
              dispatch(setCartmodal({ payload: 0 }));
            }}
          >
            <span>go to coffee cart</span>
            <ArrowRight className="text-3xl font-bold  cursor-pointer" />
          </Link>

          <div className="">
            <FaTimes
              onClick={() => {
                dispatch(setCartmodal({ payload: 0 }));
              }}
            />
          </div>
        </div>

        <Cartitem />
      </motion.div>
    </>
  );
};

export default Desktopcart;
