import Profile from "../assets/Icons/Profile";
import CartBag from "../assets/Icons/CartBag";
import { FaSistrix } from "react-icons/fa";
import Coffeelogo from "../Pages/Home/icon/coffelogo";
import MobileNav from "../Components/UI/MobileNavigation";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
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
      {ModalOpen && <MobileNav hideModalHandler={hidemodalHandler} />}
      <div className=" px-8 sm:px-8 bg-black/50 z-[1000] w-full fixed ">
        <div className="  md:w-full  md:max-w-7xl flex justify-between items-center mx-auto h-full">
          <div className="capitalize text-2xl font-bold text-white">
            <Coffeelogo className=" h-16 w-16  sm:h-20 sm:w-20 " />
          </div>
          <nav className="w-1/3 max-sm:hidden">
            <ul className="flex justify-around font-medium capitalize text-white max-md:hidden cursor-pointer ">
              <li>Menu</li>
              <li>Blog</li>
              <li>shop</li>
              <li>contact</li>
            </ul>
          </nav>

          <ul className="md:flex hidden justify-around  w-1/3 md:w-[10%] item-end ">
            <li className="flex items-center justify-center">
              <FaSistrix className="text-white text-2xl" />
            </li>
            <li>
              <Profile />
            </li>
            <li>
              <CartBag />
            </li>
          </ul>

          <ul className="flex items-center justify-center w-[10%] gap-4 md:hidden">
            <li>
              <CartBag />
            </li>
            <li>
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