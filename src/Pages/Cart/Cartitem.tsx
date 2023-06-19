import { FC } from "react";
import image from "../../Data/images/mainimages/coferd.png";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../Store/Slices/cartslice";

interface CartitemProps {
  coffeename: string;
  image: string;
  price: number;
  total: number;
  quantity: number;
  id: number;
}

const Cartitem: FC<CartitemProps> = (props: CartitemProps) => {
  const { image, coffeename, price, total, quantity, id } = props;
  const dispatch = useDispatch();

  const removeitem = () => {
    dispatch(removeItemFromCart(id));
  };

  const addtocart = () => {
    dispatch(
      addItemToCart({
        id: id,
        name: coffeename,
        price,
        image,
        quantity: 1,
      })
    );
  };
  return (
    <div className="mx-auto w-full">
      <div className="mt-2 rounded-lg bg-white p-2 shadow-lg">
        <div className="flex min-h-[100px] items-center  gap-x-4 ">
          <img src={image} alt="cartimage" className="max-w-[60px]" />

          <div className="flex w-full flex-col font-nunito">
            <div className="mb-4 flex justify-between">
              <h3 className="text-[0.6rem] font-bold uppercase text-black md:text-base ">
                {coffeename}
              </h3>

              <RiDeleteBin2Fill />
            </div>

            <div className="flex h-[36px] gap-x-3 text-sm">
              <div className="flex h-full max-w-[100px] flex-1 items-center  border-2 border-gray-100 font-bold text-black">
                <div
                  className="flex h-full flex-1 cursor-pointer items-center justify-center text-base "
                  onClick={removeitem}
                >
                  -
                </div>
                <div className="flex h-full items-center justify-center px-2 ">
                  {quantity}
                </div>
                <div
                  className="flex h-full flex-1 cursor-pointer items-center justify-center text-base"
                  onClick={addtocart}
                >
                  +
                </div>
              </div>
              <div className="flex flex-1 items-center justify-start font-monsts text-[0.5rem] font-bold text-black md:text-sm">
                price: ${price} x {quantity}
              </div>

              <div className="flex-2 flex items-center justify-end font-monsts text-[0.6rem] font-medium text-black  md:text-sm">
                total: ${total}
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
