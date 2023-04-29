import { FC } from "react";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import Profile from "../../assets/Icons/Profile";
import Coffeelogo from "../../Pages/Home/icon/coffelogo";

interface MobileNavProps {
  hideModalHandler: () => void;
}

const MobileNav: FC<MobileNavProps> = (props: MobileNavProps) => {
  const { hideModalHandler } = props;
  return (
    <>
      <div className="fixed top-0 left-0  h-full w-full bg-white z-[129030020039030920] flex items-center justify-center">
        <FaTimes
          className="text-3xl absolute text-coffee-100 z-[83999999999939939399339] right-2 top-2"
          onClick={hideModalHandler}
        />

        <div className="absolute top-4 left-4 h-10 w-10">
          <Coffeelogo className=" h-16 w-16  sm:h-20 sm:w-20 bg-coffee-100 rounded-full fill-red-300" />
        </div>
        <ul className="text-4xl space-y-1 capitalize font-rails font-medium text-coffee-100">
          <li> Menu</li>
          <li> blog </li>
          <li>Shop</li>
          <li>contact us</li>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
