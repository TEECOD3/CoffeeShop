import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import image from "../../../Data/images/mainimages/Kuska-packshot-mellemristet-skraa-2.webp";
import { EyeIcon, ShoppingBagIcon } from "lucide-react";
interface MenucardsProps {}

const Menucards: FC<MenucardsProps> = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div className="  border-2 p-2 relative w-full lg:mb-4 cursor-pointer z-20 hover:scale-[1.02] transition duration-100 delay-75 group ">
      <div className=" md:w-[200px] relative mx-auto">
        {/* <div className="absolute h-full w-full round-xl bg-black/20 opacity-0 group-hover:opacity-100"></div> */}
        <div className="  flex items-center justify-center">
          <img
            src={image}
            alt=""
            className="object-cover bg-cover bg-top max-w-[100px] mx-auto"
            onClick={() => {
              navigate("/menu/:id");
            }}
          />
        </div>
      </div>
      <h3 className="mt-4 text-lightdark font-light text-sm ">
        espresso cofeee
      </h3>
      <div className="flex gap-4 mt-2 font-medium  font-nunito ">
        <h4 className="text-coffee-100 text-sm">$500</h4>
        <s className="text-lightdark text-sm">$900</s>
      </div>

      {/* <div className="button| absolute p-2  w-1/2 flex items-center justify-center top-1/3  gap-4 left-[45%] md:bottom-4 md:left-[43%]  -translate-x-1/3 -translate-y-1/3  opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-300 ">
        <div className=" p-3 lg:p-2 shadow-xl bg-white/80 rounded-full flex items-center justify-center">
          <ShoppingBagIcon className="h-4 w-4 lg:h-6 lg:w-6 " />
        </div>
        <div className=" p-3 lg:p-2 shadow-xl bg-white/80 rounded-full flex items-center justify-center">
          <EyeIcon
            className="h-4 w-4 lg:h-6 lg:w-6  animate-pulse  "
            onClick={() => {
              navigate("/menu/:id");
            }}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Menucards;
