import React from "react";
import Cartitem from "./Cartitem";
import Input from "../../Components/Forms/Inputfield";
import Button from "../../Components/UI/Button";

const Cartpage = () => {
  return (
    <main className=" pt-16 pb-36">
      <section className="md:max-w-7xl mx-auto">
        <div className="">
          <h2 className="text-sm p-4  md:text-3xl uppercase font-semibold text-lightdark">
            shopping bag <span className="font-nunito">(7)</span>
          </h2>
          <div className="h-[0.15rem] w-full bg-lightdark" />
        </div>
        <div className="w-full flex-col md:flex-row flex mt-2 mx-auto gap-x-3">
          <div className="md:w-1/2">
            <Cartitem />
            <Cartitem />
            <Cartitem />
          </div>
          <div className="md:w-1/2 px-4 md:px-0 md:p-8">
            <h4 className="text-sm uppercase my-2 font-bold text-gray-500">
              Coupon code
            </h4>
            <div className="md:w-3/4 border-2 border-gray-200 p-3 md:p-5">
              <p className="text-sm font-medium  text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                omnis sequi nostrum quae ab praesentium pariatur fugit velit,
                reiciendis quasi
              </p>
              <div className="flex mt-2 gap-x-2">
                <Input
                  className="flex-1 text-sm outline-none border-coffee-100"
                  inputs={{ placeholder: "Enter your coupon code" }}
                />
                <Button className="w-2/6 bg-coffee-100 ">apply</Button>
              </div>
            </div>

            <div className="bg-blue-400 mt-5">
              <div className=""></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cartpage;
