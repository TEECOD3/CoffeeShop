import { FC } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import image from "../../../Data/images/mainimages/Kuska-packshot-mellemristet-skraa-2.webp";
import { EyeIcon, ShoppingBagIcon } from "lucide-react";
interface MenucardsProps {}

const Menucards: FC<MenucardsProps> = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div className="border-2 p-2 relative w-full lg:mb-4 cursor-pointer z-20 hover:scale-[1.09] transition duration-300 delay-200 group ">
      <div className=" md:w-[200px] relative mx-auto">
        {/* <div className="absolute h-full w-full round-xl bg-black/20 opacity-0 group-hover:opacity-100"></div> */}
        <div className="  flex items-center justify-center">
          <img
            src={image}
            alt=""
            className="object-cover bg-cover bg-top max-w-[100px]  mx-auto"
            onClick={() => {
              navigate("/menu/:id");
            }}
          />
        </div>
      </div>
      <h3 className="mt-4  text-lightdark font-light text-sm md:text-base w-2/3 mx-auto text-center ">
        espresso cofeee cofee yamayada exposio
      </h3>
      <div className="flex gap-4 mt-2 font-medium  font-nunito justify-center">
        <h4 className="text-coffee-100 text-sm">$500</h4>
        <s className="text-lightdark text-sm">$900</s>
      </div>
      <div className="absolute p-2 bg-white top-3  -right-11  opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-300 ">
        <button className="flex items-center justify-center  flex-col gap-2 md:gap-4">
          <div className=" flex justify-center items-center text-lightdark  shadow-lg bg-coffee-100/90 p-4 rounded-lg ">
            <ShoppingBagIcon className="h-4 w-4 md:h-6 md:w-6 text-white" />
          </div>

          <Link
            to="/menu/:id"
            className=" flex justify-center items-center text-lightdark shadow-lg bg-coffee-100/90 p-4 rounded-lg "
          >
            <EyeIcon className="h-4 w-4 md:h-6 md:w-6 text-white" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Menucards;
