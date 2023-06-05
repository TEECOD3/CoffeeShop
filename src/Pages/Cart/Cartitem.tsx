import { FC } from "react";
import image from "../../Data/images/mainimages/coferd.png";
import { RiDeleteBin2Fill } from "react-icons/ri";

interface CartitemProps {}

const Cartitem: FC<CartitemProps> = () => {
  return (
    <div className="w-full mx-auto">
      <div className="bg-white shadow-lg rounded-lg mt-2 p-4">
        <div className="min-h-[150px] flex items-center  gap-x-4 ">
          <img src={image} alt="cartimage" className="max-w-[60px]" />

          <div className="font-nunito w-full flex flex-col">
            <div className="flex justify-between mb-2">
              <h3 className="uppercase text-gray-500 font-bold text-sm md:text-base ">
                Coffea Canephora coffee bean
              </h3>

              <RiDeleteBin2Fill className="text-coffee-100" />
            </div>

            <div className="flex gap-x-3 h-[36px] text-sm">
              <div className="flex flex-1 max-w-[100px] border-gray-100 border-2  items-center h-full text-gray-500 font-bold">
                <div className="flex-1 flex h-full justify-center items-center text-base ">
                  -
                </div>
                <div className="h-full flex justify-center items-center px-2 ">
                  1
                </div>
                <div className="flex-1 h-full flex justify-center items-center text-base">
                  +
                </div>
              </div>
              <div className="flex flex-1 justify-start items-center text-gray-400 font-bold  md:text-base">
                price: $299.00
              </div>

              <div className="flex flex-2 justify-end items-center text-gray-400 font-medium  md:text-base">
                total: $900.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
{
  /* <div className="cartbutton|">
              <div className="flex border-[2px] border-gray-200 rounded-md md:px-1 md:w-[7rem] items-center justify-around  ">
                <button className="text-xl flex py-1 item-center text-gray-400 justify-center ">
                  -
                </button>
                <span className="  text-gray-800   text-sm flex items-center   ">
                  1
                </span>
                <button className=" text-gray-800 py-1  text-xl flex items-center">
                  +
                </button>
              </div>

              <h3 className="text-gray-800 text-sm">$190.00</h3>
            </div> */
}
