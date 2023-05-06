import { FC, useState } from "react";
import { BsBag, BsEye, BsHeart, BsPlus, BsStar } from "react-icons/bs";
import loves from "../../../Data/images/mainimages/images__1_-removebg-preview.png";
import { Link } from "react-router-dom";
import {
  BaggageClaim,
  EyeIcon,
  Heart,
  HeartIcon,
  ShoppingBagIcon,
} from "lucide-react";

interface CofeecardProps {}

const Cofeecard: FC<CofeecardProps> = () => {
  return (
    <div className="relative shadow-lg  w-full border-2 transition-all duration-300 border-coffee-100  mx-auto rounded-lg  overflow-hidden group  cursor-pointer">
      <div className="w-full mx-auto flex items-center justify-center">
        <img
          src={loves}
          alt="cofeeimage"
          className="  rounded-lg w-full bg-cover "
        />
      </div>

      <div className="p-1">
        <div className=" flex items-center w-full gap-1">
          <div className="font-bold mt-3 w-1/2  mb-3 px-2 text-[0.6rem] md:text-[0.8rem] xl:text-base">
            Coffee Beans
          </div>
          <div className="flex  w-1/2 flex-col items-center justify-center">
            <div className="flex items-center ">
              <span>
                <BsStar className="w-4 h-4  md:w-full md:h-full" />
              </span>
              <span>
                <BsStar className="w-4 h-4 md:h-full md:w-full " />
              </span>
              <span>
                <BsStar className="w-4 h-4  md:h-full md:w-full " />
              </span>
              <span>
                <BsStar className="w-4 h-4  md:h-full md:w-full " />
              </span>
              <span>
                <BsStar className="w-4 h-4  md:h-full md:w-full " />
              </span>
            </div>
          </div>
        </div>
        <div className="text-[#828282] mb-2 px-2 font-nunito text-sm ">
          $300
        </div>
      </div>

      <div className="absolute p-2 bg-white top-3  -right-11  opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-300 ">
        <button className="flex items-center justify-center  flex-col gap-4 md:gap-8">
          <div className="h-8 w-8  flex text-center  items-center justify-center text-lightdark  bg-white shadow-lg ">
            <ShoppingBagIcon className="h-4 w-4 md:h-8 md:w-8" />
          </div>

          <Link
            to="/"
            className=" flex justify-center items-center text-lightdark bg-white shadow-lg "
          >
            <EyeIcon className="h-4 w-4 md:h-8 md:w-8" />
          </Link>

          <div className="h-10 w-10  flex text-center  items-center justify-center text-lightdark  bg-white shadow-lg">
            <HeartIcon className="h-4 w-4 md:h-8 md:w-8" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Cofeecard;
