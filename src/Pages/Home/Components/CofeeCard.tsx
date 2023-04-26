import { FC } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsEye, BsStar } from "react-icons/bs";

import cofeelove from "../../../assets/Images/loves.png";

interface CofeecardProps {}

const Cofeecard: FC<CofeecardProps> = () => {
  return (
    <div className="relative shadow-lg hover:scale-95 transition-all duration-100 cursor-pointer  ">
      <img src={cofeelove} alt="cofeeimage" className="" />
      <div className="">
        <div className="flex items-center gap-4">
          <div className="font-bold mt-3 mb-3 px-2 text-sm">Coffee Beans</div>
          <div className="flex gap-1">
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
        <div className="text-[#828282] mb-2 px-2 font-nunito text-sm">$300</div>
      </div>

      <div className="absolute w-1/6 top-0 right-0 h-1/2 flex justify-center items-center gap-3 flex-col">
        <div className="">
          <HiOutlineShoppingBag className="h-6 w-6 p-1 bg-white" />
        </div>
        <div className="">
          <IoMdHeartEmpty className="h-6 w-6 p-1 bg-white" />
        </div>
        <div className="">
          <BsEye className="h-6 w-6 p-1 bg-white" />
        </div>
      </div>
    </div>
  );
};

export default Cofeecard;
