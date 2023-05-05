import Profile from "../assets/Icons/Profile";
import CartBag from "../assets/Icons/CartBag";
import { FaSistrix } from "react-icons/fa";
import Coffeelogo from "../Pages/Home/icon/coffelogo";
import MobileNav from "../Components/UI/MobileNavigation";
import { AnimatePresence } from "framer-motion";
import { Profiler, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
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
      <div className=" px-8 sm:px-8 bg-black z-[1000] w-full fixed ">
        <div className="  md:w-full  md:max-w-7xl flex justify-between items-center mx-auto h-full">
          <div className="capitalize text-2xl font-bold text-white">
            <Link to="/">
              <Coffeelogo className=" h-16 w-16  sm:h-20 sm:w-20 " />
            </Link>
          </div>

          <ul className="md:flex hidden justify-around  w-1/3 md:w-[40%] item-end text-white ">
            <NavLink to="/menu">
              <li>Menu</li>
            </NavLink>
            <li>contact</li>

            <li className="flex items-center justify-center">
              <FaSistrix className="text-white text-2xl" />
            </li>

            <li className="h-6 w-6">
              <Profile />
            </li>
            <li>
              <CartBag />
            </li>
          </ul>

          <ul className="flex items-center justify-center w-[20%] gap-6 md:hidden px-4 mr-4">
            <li className="h-2 w-2">
              <CartBag />
            </li>
            <li className="h-2 w-2">
              <Profile />
            </li>
            <li className="h-2 w-2">
              <GiHamburgerMenu
                className="text-white text-3xl"
                onClick={openModalHandler}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
