import { FC, useState } from "react";
import { BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  BaggageClaim,
  EyeIcon,
  Heart,
  HeartIcon,
  ShoppingBagIcon,
} from "lucide-react";
import { urlFor } from "../../../client";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../Store/Slices/cartslice";

interface CofeecardProps {
  image?: any;
  oldprice?: number;
  newprice?: number;
  instock?: boolean;
  coffeename?: string;
  slug?: string;
  loading?: boolean;
}

const Cofeecard: FC<CofeecardProps> = (props) => {
  const { oldprice, newprice, image, coffeename, slug, loading } = props;
  const fixedimage =
    typeof image === "object" ? urlFor(image.asset._ref).url() : "";

  const dispatch = useDispatch();

  return (
    <div className="group relative mx-auto   w-full cursor-pointer overflow-hidden rounded-lg border-2  border-black py-1  shadow-lg transition-all  duration-300">
      <div className="mx-auto flex w-full items-center justify-center">
        <img
          src={urlFor(image).url()}
          alt="cofeeimage"
          className="mx-auto max-h-[150px] min-h-[150px] bg-cover bg-top object-cover"
        />
      </div>

      <div className="p-1">
        <div className=" flex w-full items-center gap-1 px-1">
          <div className="mb-3 mt-3 w-1/2 flex-1  px-2 text-[0.6rem] font-bold capitalize md:text-[0.8rem] xl:text-sm">
            {coffeename}
          </div>
          <div className="flex  w-1/3 flex-col items-center justify-center">
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
          ${newprice}
        </div>
      </div>

      <div className="absolute -right-11 top-3 bg-white  p-2  opacity-0 transition-all duration-300 group-hover:right-2 group-hover:opacity-100 ">
        <button className="flex flex-col items-center  justify-center gap-4 md:gap-2">
          <div
            onClick={() => {
              dispatch(
                addItemToCart({
                  id: slug,
                  name: coffeename,
                  price: newprice,
                  image: fixedimage,
                  quantity: 1,
                })
              );
            }}
            className="flex h-8  w-8 items-center  justify-center bg-white text-center  text-lightdark shadow-lg "
          >
            <ShoppingBagIcon className="h-4 w-4 md:h-6 md:w-6" />
          </div>

          <Link
            to={`menu/${slug}`}
            className=" flex items-center justify-center bg-white text-lightdark shadow-lg "
          >
            <EyeIcon className="h-4 w-4 md:h-6 md:w-6" />
          </Link>

          <div className="flex h-10  w-10 items-center  justify-center bg-white text-center  text-lightdark shadow-lg">
            <HeartIcon className="h-4 w-4 md:h-6 md:w-6" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Cofeecard;
