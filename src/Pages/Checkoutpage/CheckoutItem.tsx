import { FC } from "react";
import image from "../../Data/images/mainimages/cofefbshs.png";

interface CheckoutItemProps {}

const CheckoutItem: FC<CheckoutItemProps> = () => {
  return (
    <>
      <div className="max-h-[10rem]  flex gap-2 items-center justify-start font-nunito ">
        <img src={image} alt="" className="object-cover  h-24 w-24" />

        <div className="flex- flex-col items-center justify-center">
          <h3 className="font-bold text-base text-lightdark capitalize font-rails">
            cofee expassso
          </h3>
          <h4 className="text-gray-500 text-sm font-bold ">4 bags</h4>
          <h4 className="text-gray-500 text-sm font-bold ">$50</h4>
        </div>
      </div>
      <div className="h-[1px]  w-full bg-gray-400 mt-3"></div>
    </>
  );
};

export default CheckoutItem;
