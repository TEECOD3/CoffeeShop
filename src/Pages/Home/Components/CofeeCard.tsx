import { FC, useState } from "react";
import { BsBag, BsEye, BsHeart, BsPlus, BsStar } from "react-icons/bs";
import loves from "../../../Data/speciality coffee/Blend  Totally Righteous House.png";
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
    <div className="group relative  mx-auto w-full cursor-pointer overflow-hidden rounded-lg  border-2 border-coffee-100  shadow-lg transition-all  duration-300">
      <div className="mx-auto flex w-full items-center justify-center">
        <img
          src={loves}
          alt="cofeeimage"
          className="  w-full rounded-lg bg-cover "
        />
      </div>

      <div className="p-1">
        <div className=" flex w-full items-center gap-1">
          <div className="mb-3 mt-3 w-1/2  px-2 text-[0.6rem] font-bold md:text-[0.8rem] xl:text-base">
            Coffee Beans
          </div>
          <div className="flex  w-1/2 flex-col items-center justify-center">
            <div className="flex items-center ">
              <span>
                <BsStar className="h-3 w-3  md:h-full md:w-full" />
              </span>
              <span>
                <BsStar className="h-3 w-3 md:h-full md:w-full " />
              </span>
              <span>
                <BsStar className="h-3 w-3  md:h-full md:w-full " />
              </span>
              <span>
                <BsStar className="h-3 w-3  md:h-full md:w-full " />
              </span>
              <span>
                <BsStar className="h-3 w-3  md:h-full md:w-full " />
              </span>
            </div>
          </div>
        </div>
        <div className="mb-2 px-2 font-nunito text-sm text-[#828282] ">
          $300
        </div>
      </div>

      <div className="absolute -right-11 top-3 bg-white  p-2  opacity-0 transition-all duration-300 group-hover:right-2 group-hover:opacity-100 ">
        <button className="flex flex-col items-center  justify-center gap-4 md:gap-8">
          <div className="flex h-8  w-8 items-center  justify-center bg-white text-center  text-lightdark shadow-lg ">
            <ShoppingBagIcon className="h-4 w-4 md:h-8 md:w-8" />
          </div>

          <Link
            to="/"
            className=" flex items-center justify-center bg-white text-lightdark shadow-lg "
          >
            <EyeIcon className="h-4 w-4 md:h-8 md:w-8" />
          </Link>

          <div className="flex h-10  w-10 items-center  justify-center bg-white text-center  text-lightdark shadow-lg">
            <HeartIcon className="h-4 w-4 md:h-8 md:w-8" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Cofeecard;
