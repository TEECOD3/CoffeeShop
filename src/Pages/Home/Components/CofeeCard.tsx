import { FC, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsEye, BsStar } from "react-icons/bs";
import njsjs from "../../../Data/images/espresso/espress04.jpg";

interface CofeecardProps {}

const Cofeecard: FC<CofeecardProps> = () => {
  const [SideBar, SetSideBar] = useState<boolean>(false);
  const showSidebar = () => {
    // SetSideBar(true);
  };
  return (
    <div
      className={`${" relative shadow-lg hover:scale-95  w-full sm:w-3/4 mx-auto xl:w-11/12 transition-all duration-100 cursor-pointer "}  ${
        SideBar ? "hover:scale-100 transition-all" : " "
      }`}
      onClick={showSidebar}
    >
      <img
        src={njsjs}
        alt="cofeeimage"
        className=" h-[9rem] xl:h-[12rem]  w-full bg-cover"
      />
      <div className="">
        <div className="flex items-center gap-4">
          <div className="font-bold mt-3 mb-3 px-2 text-[0.8rem] sm:text-base">
            Coffee Beans
          </div>
          <div className="flex  px-4">
            <span>
              <BsStar className="w-3 h-3 md:h-full md:w-full " />
            </span>
            <span>
              <BsStar className="w-3 h-3 md:h-full md:w-full " />
            </span>
            <span>
              <BsStar className="w-3 h-3 md:h-full md:w-full " />
            </span>
            <span>
              <BsStar className="w-3 h-3 md:h-full md:w-full " />
            </span>
            <span>
              <BsStar className="w-3 h-3 md:h-full md:w-full " />
            </span>
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
