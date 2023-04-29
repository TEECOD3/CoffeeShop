import { FC, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsEye, BsStar } from "react-icons/bs";
import loves from "../../../Data/images/espresso/espresso5.jpg";

import Button from "../../../Components/UI/Button";

interface CofeecardProps {}

const Cofeecard: FC<CofeecardProps> = () => {
  const [SideBar, SetSideBar] = useState<boolean>(false);
  const showSidebar = () => {
    // SetSideBar(true);
  };
  return (
    <div
      className={`${" relative shadow-lg  w-full  mx-auto xl:w-11/12 rounded-lg  overflow-hidden transition-all duration-100 cursor-pointer "}  ${
        SideBar ? "hover:scale-100 transition-all" : " "
      }`}
      onClick={showSidebar}
    >
      <img
        src={loves}
        alt="cofeeimage"
        className=" h-[9rem] xl:h-[12rem]  w-full bg-cover"
      />
      <div className="p-1">
        <div className=" flex items-center w-full gap-1">
          <div className="font-bold mt-3 w-1/2  mb-3 px-2 text-[0.6rem] md:text-[0.8rem] xl:text-base">
            Coffee Beans
          </div>
          <div className="flex  w-1/2 flex-col items-center justify-center">
            <div className="flex items-center ">
              <span>
                <BsStar className="w-2 h-2  md:w-full md:h-full" />
              </span>
              <span>
                <BsStar className="w-2 h-2 md:h-full md:w-full " />
              </span>
              <span>
                <BsStar className="w-2 h-2  md:h-full md:w-full " />
              </span>
              <span>
                <BsStar className="w-2 h-2 md:h-full md:w-full " />
              </span>
              <span>
                <BsStar className="w-2 h-2  md:h-full md:w-full " />
              </span>
            </div>
          </div>
        </div>
        <div className="text-[#828282] mb-2 px-2 font-nunito text-sm ">
          $300
        </div>
      </div>

      {SideBar && (
        <div className="absolute w-1/6 top-0 right-0 h-1/2 flex justify-center items-center gap-3 flex-col">
          <div className="">
            <HiOutlineShoppingBag
              className={`${"h-6 w-6 p-1 bg-[#ffffff] text-lightdark"}  ${
                SideBar ? "bg-yellow-200/90" : " "
              }`}
            />
          </div>
          <div className="">
            <IoMdHeartEmpty className="h-6 w-6 p-1 bg-white text-lightdark" />
          </div>
          <div className="">
            <BsEye className="h-6 w-6 p-1 bg-white text-lightdark" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cofeecard;
