import React from "react";
import Cartitem from "./Cartitem";
import Input from "../../Components/Forms/Inputfield";
import Button from "../../Components/UI/Button";
import { CheckOutlined } from "@mui/icons-material";
import { BsFillBagCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartbasket } from "../../Store/Slices/cartslice";

const Cartpage = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(cartbasket);

  type itms = {
    id: number;
    quantity: number;
    price: number;
    totalprice: number;
    image: string;
    name: string;
  };

  return (
    <main className=" pb-36 pt-16">
      <section className="mx-auto md:max-w-7xl">
        <div className="">
          <h2 className="p-6 text-sm  font-semibold uppercase text-lightdark md:text-2xl">
            shopping bag{" "}
            <span className="font-nunito">({cartItems.length})</span>
          </h2>
          <div className="h-[0.15rem] w-full bg-lightdark" />
        </div>
        <div className="mx-auto mt-2 flex w-full flex-col gap-x-6 md:flex-row">
          <div className="md:w-1/2">
            {cartItems.map(
              ({ id, quantity, price, totalprice, image, name }: itms) => (
                <Cartitem
                  id={id}
                  key={id}
                  coffeename={name}
                  quantity={quantity}
                  price={price}
                  image={image}
                  total={totalprice}
                />
              )
            )}
          </div>
          <div className="top-2 px-4 md:w-1/2 md:p-8 md:px-0 lg:sticky ">
            <h4 className="my-4 text-sm font-bold uppercase text-gray-500">
              Coupon code
            </h4>
            <div className="border-2 border-gray-200 p-3 md:w-2/3 md:p-5">
              <p className="text-sm font-medium  text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                omnis sequi nostrum quae ab praesentium pariatur fugit velit,
                reiciendis quasi
              </p>
              <div className="mt-2 flex gap-x-2">
                <Input
                  className="flex-1 border-black bg-white text-sm outline-none"
                  inputs={{ placeholder: "Enter your coupon code" }}
                />
                <Button className="w-2/6 bg-black">apply</Button>
              </div>
            </div>

            <div className="font- mt-5 md:w-2/3 ">
              <div className="">
                <h4 className="font-bold capitalize text-lightdark">
                  total bill
                </h4>
                <div className="border-2 p-4 ">
                  <div className="flex justify-between">
                    <span className="text-base font-bold capitalize text-lightdark">
                      cart subtotal
                    </span>
                    <span className="text-base font-bold">$120.00</span>
                  </div>
                  <div className="my-4 flex justify-between">
                    <span className="text-sm font-medium ">
                      shiping charges
                    </span>
                    <span className="text-sm font-medium">$120.00</span>
                  </div>

                  <div className="flex justify-between border-t-2 p-3">
                    <span className="text-base font-bold capitalize  text-lightdark">
                      total amount
                    </span>
                    <span className="text-base font-bold">$120.00</span>
                  </div>
                </div>
              </div>
              <Button
                onClick={() => {
                  navigate("/checkoutpage");
                }}
                className="mx-auto mt-3 w-full bg-black text-sm capitalize md:w-2/3"
              >
                proceed to checkout <BsFillBagCheckFill className="ml-3" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cartpage;
