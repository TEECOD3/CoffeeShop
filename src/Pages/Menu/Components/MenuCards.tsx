import { FC } from "react";

import image from "../../../assets/Images/milkshake.png";
interface MenucardsProps {}

const Menucards: FC<MenucardsProps> = () => {
  return (
    <div className="w-full cursor-pointer">
      <div className="w-full">
        <img src={image} alt="" className="object-cover bg-cover bg-top" />
      </div>
      <h3 className="mt-4 text-lightdark font-bold ">espresso cofeee</h3>
      <div className="flex gap-4 mt-2 font-medium  font-nunito ">
        <h4 className="text-coffee-100 text-sm">$500</h4>
        <s className="text-lightdark text-sm">$900</s>
      </div>
    </div>
  );
};

export default Menucards;
