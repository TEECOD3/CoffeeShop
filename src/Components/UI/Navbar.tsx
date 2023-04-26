import Profile from "./../../assets/Icons/Profile";
import CartBag from "./../../assets/Icons/CartBag";
import { FaSistrix } from "react-icons/fa";
import Coffeelogo from "../../Pages/Home/icon/coffelogo";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  return (
    <div>
      <div className=" px-3 sm:px-8 h-12 md:h-20 bg-black/50 z-[1000] w-full fixed ">
        <div className="  md:w-full  md:max-w-7xl flex justify-between items-center mx-auto h-full">
          <div className="capitalize text-2xl font-bold text-white">
            <Coffeelogo className=" h-16 w-16  sm:h-20 sm:w-20 " />
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
          <RxHamburgerMenu className="text-white text-2xl ml-4" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
