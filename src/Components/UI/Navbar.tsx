import React from "react";
import Search from "./../../assets/Icons/Search";
import Profile from "./../../assets/Icons/Profile";
import CartBag from "./../../assets/Icons/CartBag";
const Navbar = () => {
  return (
    <div>
      <div className=" px-3 sm:px-8 h-20 bg-black/50 z-[1000] w-full fixed ">
        <div className="  md:w-full  md:max-w-7xl flex justify-between items-center mx-auto h-full">
          <div className="capitalize text-2xl font-bold text-white">
            MARY'S
            <span className="text-xl ml-1 text-[#BC9A6C]  font-bold capitalize">
              Foods
            </span>
          </div>
          <nav className="w-1/3 max-sm:hidden">
            <ul className="flex justify-around font-medium capitalize text-white max-md:hidden">
              <li>Menu</li>
              <li>about Us</li>
              <li>shop</li>
              <li>contact</li>
            </ul>
          </nav>

          <ul className="flex justify-around  w-1/3 md:w-[10%] item-end ">
            <li>
              <Search className="" />
            </li>
            <li>
              <Profile />
            </li>
            <li>
              <CartBag />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
