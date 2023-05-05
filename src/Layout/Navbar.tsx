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
import { Menu, User } from "lucide-react";
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
      <div className=" px-2 sm:px-8 bg-black z-[1000] w-full fixed flex md: ">
        <div className=" w-[80%] md:w-full  md:max-w-7xl flex justify-between items-center h-full mx-auto">
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

          <ul className="flex items-center justify-center w-[10%] gap-6 md:hidden px-4 mr-2">
            <li className="">
              <li>
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
            </li>
            <li>
              <User className="text-white" />
            </li>
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
