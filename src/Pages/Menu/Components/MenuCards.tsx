import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import image from "../../../assets/Images/milkshake.png";
import { EyeIcon, ShoppingBagIcon } from "lucide-react";
interface MenucardsProps {}

const Menucards: FC<MenucardsProps> = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div className="relative w-full lg:mb-4 cursor-pointer z-20 hover:scale-[1.02] transition duration-100 delay-75 group ">
      <div className="w-full relative">
        <div className="absolute h-full w-full bg-black/20 opacity-0 group-hover:opacity-100"></div>
        <img src={image} alt="" className="object-cover bg-cover bg-top" />
      </div>
      <h3 className="mt-4 text-lightdark font-bold text-sm ">
        espresso cofeee
      </h3>
      <div className="flex gap-4 mt-2 font-medium  font-nunito ">
        <h4 className="text-coffee-100 text-sm">$500</h4>
        <s className="text-lightdark text-sm">$900</s>
      </div>

      <div className="button| absolute p-2  w-1/2 flex items-center justify-center gap-4 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2  opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-300 ">
        <div className="p-3 bg-white rounded-full flex items-center justify-center">
          <ShoppingBagIcon />
        </div>
        <div className="p-3 bg-white rounded-full flex items-center justify-center">
          <EyeIcon
            className="text-xl  font-bold animate-pulse  "
            onClick={() => {
              navigate("/menu/:id");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Menucards;
