import { Link, useNavigate, useLocation } from "react-router-dom";
import Cofeecard from "../Home/Components/CofeeCard";
import { useEffect } from "react";
import Menucards from "./Components/MenuCards";
import { RiArrowGoForwardFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";

const Menu = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navigate = useNavigate();
  return (
    <div className=" py-32 mb-32 bg-hero h-full w-full px-3 xl:px-0">
      <div className="flex flex-col max-w-7xl mx-auto gap-2 ">
        <main className="w-full h-full">
          <div className="mb-10  md:w-4/12 capitalize text-base sm:text-xl font-bold flex item-center justify-left">
            <h4 className="">complete coffee menu </h4>
            <span className="font-extrabold text-xl ml-2 flex items-center justify-center">
              <FaArrowRight />
            </span>
          </div>
          <div className="w-full mx-auto  h-full flex flex-col md:flex-row gap-16 justify-center">
            <div className="   grid-cols-2 md:w-[70%] grid   md:grid-cols-3 gap-3">
              <Menucards />
              <Menucards />
              <Menucards />
              <Menucards />
              <Menucards />
              <Menucards />
              <Menucards />
              <Menucards />
              <Menucards />
              <Menucards />
              <Menucards />
              <Menucards />
              <Menucards />
            </div>
            <div className="w-[30%] bg-yellow-400">side</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Menu;
