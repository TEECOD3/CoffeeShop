import { FC } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { EyeIcon, ShoppingBagIcon } from "lucide-react";
import { urlFor } from "../../../client";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../../components/ui/tooltip";

interface MenucardsProps {
  image?: string | undefined;
  oldprice?: number;
  newprice?: number;
  coffeename?: string;
  slug?: string;
  loading?: boolean;
  instock: boolean;
}

const Menucards: FC<MenucardsProps> = (props) => {
  const { oldprice, newprice, image, coffeename, slug, loading, instock } =
    props;
  const navigate = useNavigate();

  return (
    <>
      {loading ? (
        <div className="tlg:mb-4 group relative z-20 w-full animate-pulse  cursor-pointer bg-black/30 p-2 transition delay-200 duration-300 ">
          <div className=" relative mx-auto md:w-[200px]">
            <div className="  flex items-center justify-center ">
              <div className="mx-auto max-h-[150px] min-h-[150px] bg-cover bg-top object-cover" />
            </div>
          </div>
        </div>
      ) : (
        <div
          className={` ${
            instock ? " " : " bg-gray-white z-[900] sepia "
          }group relative  z-20 w-full cursor-pointer border-2 p-2 transition delay-200 duration-300 hover:scale-[1.09] lg:mb-4 `}
        >
          <div className=" relative mx-auto md:w-[200px]">
            {!instock && (
              <div className="font-mini text-base text-black">sold out</div>
            )}
            <div className="flex items-center justify-center">
              <LazyLoadImage
                effect="blur"
                src={urlFor(image).url()}
                alt="productimage"
                className="mx-auto max-h-[150px] min-h-[150px] bg-cover bg-top object-cover"
              />
            </div>
          </div>
          <h3 className="mx-auto  mt-4 text-left text-[7px] font-bold uppercase text-lightdark sm:text-[12px]  md:text-base ">
            {coffeename}
          </h3>
          <div className="font-nunito mt-2 flex justify-start  gap-4 font-medium">
            <h4 className="text-sm text-black">${newprice}</h4>
            <s className="text-sm text-red-500">${oldprice}</s>
          </div>

          {/* details amd add to cart */}
          <div className="absolute  -right-11  top-3  opacity-0 transition-all duration-300 group-hover:right-2 group-hover:opacity-100 ">
            <button className="flex flex-col items-center  justify-center gap-2 md:gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className=" flex items-center justify-center rounded-lg  bg-black p-2 text-lightdark shadow-lg md:p-4 ">
                      <ShoppingBagIcon className="h-4 w-4 text-white" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className=" w-20 bg-black px-3 py-2 text-[8px] text-white">
                    <p>Add to cart</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      to={`/menu/${slug}`}
                      className=" flex items-center justify-center rounded-lg bg-black  p-2 text-lightdark shadow-lg md:p-4 "
                    >
                      <EyeIcon className="h-4 w-4 text-white" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className=" w-20 bg-black px-3 py-2 text-[8px] text-white">
                    <p>view details</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Menucards;
