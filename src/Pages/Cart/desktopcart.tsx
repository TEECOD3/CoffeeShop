import Cartitem from "./Cartitem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCartmodal,
  cartstate,
  cartbasket,
  removeItemFromCart,
} from "../../Store/Slices/cartslice";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Desktopcart = () => {
  const dispatch = useDispatch();
  const cartOpen = useSelector(cartstate);
  const cartbaskets = useSelector(cartbasket);

  type itms = {
    id: number;
    quantity: number;
    price: number;
    totalprice: number;
    image: string;
    name: string;
  };

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
          className="c fixed left-0 top-0 z-[200000] h-full w-screen cursor-pointer bg-black/70"
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
        className="fixed bottom-0 right-0 z-[9000000] h-[90vh] w-full overflow-y-scroll  rounded-t-lg bg-white text-black md:right-0  md:top-0 md:h-screen md:w-1/3 md:rounded-none"
      >
        <div className="mt-2 flex cursor-pointer justify-between px-3 font-bold capitalize text-gray-500">
          <div
            className=" flex gap-x-4"
            onClick={() => {
              dispatch(setCartmodal({ payload: 0 }));
            }}
          >
            <span className="flex items-center justify-center gap-x-3 p-2">
              <HiOutlineShoppingBag className=" text-black" />{" "}
              <span className="text-sm text-black">
                shopping bag ({cartbaskets.length})
              </span>
            </span>
          </div>

          <div className="">
            <FaTimes
              onClick={() => {
                dispatch(setCartmodal({ payload: 0 }));
              }}
            />
          </div>
        </div>

        {cartbaskets.map(
          ({ id, quantity, price, totalprice, image, name }: itms) => (
            <Cartitem
              key={id}
              id={id}
              coffeename={name}
              quantity={quantity}
              price={price}
              image={image}
              total={totalprice}
            />
          )
        )}

        <div className="bottom-4 mt-4 flex justify-center gap-x-10">
          <button className="captialize w-28 rounded-lg bg-black py-2 text-sm font-bold capitalize text-white ">
            go to cart
          </button>
          <button className="captialize w-28 rounded-lg bg-red-600 py-2 text-sm font-bold capitalize text-white ">
            clear cart
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Desktopcart;
