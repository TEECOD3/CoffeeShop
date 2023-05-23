import { FC } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import image from "../../../Data/images/mainimages/Coffee-Bag-Mockup-removebg-preview.png";
import { EyeIcon, ShoppingBagIcon } from "lucide-react";
interface MenucardsProps {}

const Menucards: FC<MenucardsProps> = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div className="group relative z-20 w-full cursor-pointer border-2 p-2 transition delay-200 duration-300 hover:scale-[1.09] lg:mb-4 ">
      <div className=" relative mx-auto md:w-[200px]">
        <div className="  flex items-center justify-center">
          <img
            src={image}
            alt=""
            className="mx-auto max-w-[100px] bg-cover bg-top  object-cover"
          />
        </div>
      </div>
      <h3 className="mx-auto  mt-4 text-left text-[10px] font-bold capitalize text-lightdark ">
        espresso cofeee cofee yamayada exposio
      </h3>
      <div className="mt-2 flex justify-start gap-4  font-nunito font-medium">
        <h4 className="text-sm text-coffee-100">$500</h4>
        <s className="text-sm text-lightdark">$900</s>
      </div>
      <div className="absolute  -right-11  top-3  opacity-0 transition-all duration-300 group-hover:right-2 group-hover:opacity-100 ">
        <button className="flex flex-col items-center  justify-center gap-2 md:gap-4">
          <div className=" flex items-center justify-center rounded-lg  bg-coffee-100/90 p-4 text-lightdark shadow-lg ">
            <ShoppingBagIcon className="h-4 w-4 text-white md:h-6 md:w-6" />
          </div>

          <Link
            to="/menu/:id"
            className=" flex items-center justify-center rounded-lg bg-coffee-100/90 p-4 text-lightdark shadow-lg "
          >
            <EyeIcon className="h-4 w-4 text-white md:h-6 md:w-6" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Menucards;
