import { FC } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { EyeIcon, ShoppingBagIcon } from "lucide-react";
import { urlFor } from "../../../client";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
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
        <div className="group bg-black/30 relative z-20 w-full cursor-pointer  p-2 transition delay-200 duration-300 animate-pulse tlg:mb-4 ">
          <div className=" relative mx-auto md:w-[200px]">
            <div className="  flex items-center justify-center ">
              <div className="mx-auto max-h-[150px] min-h-[150px] bg-cover bg-top object-cover" />
            </div>
          </div>
        </div>
      ) : (
        <div
          className={` ${
            instock ? " " : " z-[900] sepia bg-gray-white "
          }group relative  z-20 w-full cursor-pointer border-2 p-2 transition delay-200 duration-300 hover:scale-[1.09] lg:mb-4 `}
        >
          <div className=" relative mx-auto md:w-[200px]">
            {!instock && (
              <div className="bg-coffee-100 -rotate-12 rounded-lg animate-pulse  text-white  w-20 text-center text-sm mt-2 p-1 ">
                sold out
              </div>
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
          <h3 className="mx-auto  mt-4 text-left text-sm md:text-base uppercase font-bold  text-lightdark ">
            {coffeename}
          </h3>
          <div className="mt-2 flex justify-start gap-4  font-nunito font-medium">
            <h4 className="text-sm text-coffee-100">${newprice}</h4>
            <s className="text-sm text-red-500">${oldprice}</s>
          </div>

          {/* details amd add to cart */}
          <div className="absolute  -right-11  top-3  opacity-0 transition-all duration-300 group-hover:right-2 group-hover:opacity-100 ">
            <button className="flex flex-col items-center  justify-center gap-2 md:gap-4">
              <div className=" flex items-center justify-center rounded-lg  bg-coffee-100/90 p-4 text-lightdark shadow-lg ">
                <ShoppingBagIcon className="h-4 w-4 text-white " />
              </div>

              <Link
                to={`/menu/${slug}`}
                className=" flex items-center justify-center rounded-lg bg-coffee-100/90 p-4 text-lightdark shadow-lg "
              >
                <EyeIcon className="h-4 w-4 text-white" />
              </Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Menucards;
