import Profile from "../assets/Icons/Profile";
import CartBag from "../assets/Icons/CartBag";
import { FaSistrix } from "react-icons/fa";
import Coffeelogo from "../Pages/Home/icon/coffelogo";
import MobileNav from "../Components/UI/MobileNavigation";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

import { Menu } from "lucide-react";
import { BsPersonCheck } from "react-icons/bs";
const Navbar = () => {
  const [ModalOpen, setModalOpen] = useState(false);

  const openModalHandler = () => {
    setModalOpen(!ModalOpen);
  };

  const hidemodalHandler = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <AnimatePresence>
        {ModalOpen && <MobileNav hideModalHandler={hidemodalHandler} />}
      </AnimatePresence>
      <div className="fixed z-[1000] flex w-full bg-black px-2 sm:px-8">
        <div className="mx-auto  flex h-full w-full items-center justify-between lg:max-w-[70%]">
          <div className="text-2xl font-bold capitalize text-white ">
            <Link to="/">
              <Coffeelogo className=" h-16 w-16  sm:h-20 sm:w-20 " />
            </Link>
          </div>

          <ul className="item-end hidden justify-around   text-white md:flex md:w-[30%] ">
            <NavLink to="/menu">
              <li>Shop</li>
            </NavLink>
            <li>contact</li>

            <li className="flex items-center justify-center">
              <FaSistrix className="text-2xl text-white" />
            </li>
            <NavLink to="/login">
              <li className="relative h-6 w-6">
                {/* <Check className="absolute -bottom-2 -right-2  h-4 w-4 rounded-full bg-coffee-100 text-white" />
                <Profile /> */}
                <BsPersonCheck className="text-3xl text-white" />
              </li>
            </NavLink>
            <li className="relative ">
              <div className="item-center  absolute -right-2 -top-2 flex h-5 w-5  justify-center rounded-full bg-coffee-100 text-sm text-white">
                3
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-shopping-bag"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" x2="21" y1="6" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </li>
          </ul>

          <ul className="flex items-center justify-center gap-4 px-2 md:hidden ">
            <li className="">
              <Link to="/Cart">
                <li className="relative">
                  <div className="item-center  absolute -right-2 -top-2 flex h-5 w-5 justify-center rounded-full bg-coffee-100 text-sm text-white">
                    3
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-shopping-bag text-white"
                  >
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" x2="21" y1="6" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </li>
              </Link>
            </li>
            <NavLink to="/login">
              <li className="relative">
                {/* <Check className="absolute -bottom-2 -right-2  h-4 w-4 rounded-full bg-coffee-100 text-white" /> */}
                {/* <User className="text-white" /> */}
                <BsPersonCheck className="text-3xl text-white" />
              </li>
            </NavLink>

            <li className="">
              <Menu className="text-white" onClick={openModalHandler} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
