import React from "react";
import Cartitem from "./Cartitem";
import Input from "../../Components/Forms/Inputfield";
import Button from "../../Components/UI/Button";
import { CheckOutlined } from "@mui/icons-material";
import { BsFillBagCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Cartpage = () => {
  const navigate = useNavigate();
  return (
    <main className=" pt-16 pb-36">
      <section className="md:max-w-7xl mx-auto">
        <div className="">
          <h2 className="text-sm p-6  md:text-2xl uppercase font-semibold text-lightdark">
            shopping bag <span className="font-nunito">(7)</span>
          </h2>
          <div className="h-[0.15rem] w-full bg-lightdark" />
        </div>
        <div className="w-full flex-col md:flex-row flex mt-2 mx-auto gap-x-6">
          <div className="md:w-1/2">
            <Cartitem />
            <Cartitem />
            <Cartitem />
            <Cartitem />
            <Cartitem />
            <Cartitem />
            <Cartitem />
            <Cartitem />
            <Cartitem />
            <Cartitem />
            <Cartitem />
            <Cartitem />
            <Cartitem />
            <Cartitem />
            <Cartitem />
          </div>
          <div className="md:w-1/2 px-4 md:px-0 md:p-8 lg:sticky top-2 ">
            <h4 className="text-sm uppercase my-4 font-bold text-gray-500">
              Coupon code
            </h4>
            <div className="md:w-2/3 border-2 border-gray-200 p-3 md:p-5">
              <p className="text-sm font-medium  text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                omnis sequi nostrum quae ab praesentium pariatur fugit velit,
                reiciendis quasi
              </p>
              <div className="flex mt-2 gap-x-2">
                <Input
                  className="flex-1 text-sm outline-none border-coffee-100 bg-white"
                  inputs={{ placeholder: "Enter your coupon code" }}
                />
                <Button className="w-2/6 bg-coffee-100 ">apply</Button>
              </div>
            </div>

            <div className="mt-5 font- md:w-2/3 ">
              <div className="">
                <h4 className="capitalize font-bold text-lightdark">
                  total bill
                </h4>
                <div className="border-2 p-4 ">
                  <div className="flex justify-between">
                    <span className="capitalize font-bold text-lightdark text-base">
                      cart subtotal
                    </span>
                    <span className="text-base font-bold">$120.00</span>
                  </div>
                  <div className="flex justify-between my-4">
                    <span className="text-sm font-medium ">
                      shiping charges
                    </span>
                    <span className="text-sm font-medium">$120.00</span>
                  </div>

                  <div className="flex justify-between border-t-2 p-3">
                    <span className="capitalize font-bold text-lightdark  text-base">
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
                className="w-full md:w-2/3 mx-auto bg-coffee-100 mt-3 text-sm capitalize"
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
