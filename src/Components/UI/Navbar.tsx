import React from "react";
import Search from "./../../assets/Icons/Search";
import Profile from "./../../assets/Icons/Profile";
import Cartbag from "./../../assets/Icons/CartBag";
import CartBag from "./../../assets/Icons/CartBag";
const Navbar = () => {
  return (
    <div>
      <div className="w-full h-20 bg-orange-600 ">
        <div className="max-w-7xl flex justify-between items-center mx-auto h-full">
          <div className="capitalize text-3xl font-bold text-black">
            MARY'S
            <span className="text-3xl ml-1 text-[#BC9A6C]  font-bold capitalize">
              Foods
            </span>
          </div>
          <nav className="w-1/3 max-sm:hidden">
            <ul className="flex justify-around font-medium capitalize text-white">
              <li>Menu</li>
              <li>about Us</li>
              <li>shop</li>
              <li>contact</li>
            </ul>
          </nav>

          <ul className="flex gap-4 w-1/6 max-sm:hidden ">
            <li>
              <Search className="text-red-300 " />
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
