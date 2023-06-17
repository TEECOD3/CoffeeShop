import React from "react";
import dottedimage from "../../../assets/Images/dottedimagecofee.png";
import coffeeabout from "../../../assets/Images/cofeeAbout2.png";
import coffeeabout2 from "../../../assets/Images/coffeeAboutSec.png";
import WhiteCheck from "../icon/WhiteCheck";
import BlackCheck from "../../../assets/Icons/BlackCheck";

type Props = {};

export default function Aboutsection({}: Props) {
  return (
    <section className="my-4 max-md:p-1 sm:my-8 lg:p-4  bg-[#f6f6f6]">
      <div className=" mx-auto flex flex-col justify-between  gap-3  p-2   md:flex-row lg:max-w-7xl">
        <div className="relative w-[60%] max-xl:w-full max-md:h-1/6">
          <img
            src={dottedimage}
            alt="dotted images"
            className="absolute right-0 top-36 h-[50%] w-[40%]  bg-no-repeat"
          />
          <img
            src={coffeeabout}
            className="absolute left-[14%] top-5 h-[100%] w-[60%] bg-coffeabout bg-center bg-no-repeat max-xl:bg-cover max-lg:h-full max-md:left-0 max-md:w-full md:h-4/6 lg:h-2/3 xl:h-3/4"
            alt="coffeeabout"
          />

          <img
            src={coffeeabout2}
            alt="cofeeabout2"
            className="absolute bottom-0 left-0 h-[50%] w-[50%] bg-coffeabout2 bg-center bg-no-repeat max-xl:hidden "
          />
        </div>
        <div className=" w-full p-2 max-md:h-5/6 max-md:p-8 md:w-full  lg:ml-16 xl:w-[50%]">
          <h3 className="mb-2 text-[1.1rem] font-medium  sm:mb-4">About us</h3>
          <h2 className=" mb-4 font-rails text-2xl  font-bold text-lightdark sm:text-3xl md:text-2xl xl:text-5xl">
            We are the best quality Coffee maker
          </h2>
          <p className="mb-5  text-sm font-light text-lightdark sm:mb-3 sm:w-3/4 md:text-sm lg:mb-6 lg:text-xl">
            At CoffeeBean Co. we are passionate about providing you with the
            finest coffee beans from around the world. We believe that great
            coffee starts with great beans, and that's why we go the extra mile
            to source beans directly from farmers who share our commitment to
            quality and sustainability.
          </p>

          <div className=" mb-6 sm:mb-8 ">
            <ul className="space-y-2 text-lightdark ">
              <li className="flex gap-4">
                <span className="bg-[#edeae3] p-[0.2em]">
                  <BlackCheck />
                </span>
                <span className="font-semibold">Experienced bean roasters</span>{" "}
              </li>
              <li className="flex gap-4">
                <span className="bg-[#1b1b19] p-[0.2em]">
                  <WhiteCheck className="text-white" />
                </span>

                <span className="font-semibold">Fast delivery</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-[#edeae3] p-[0.2em]">
                  <BlackCheck />
                </span>
                <span className="font-semibold">Different Nice products</span>
              </li>
            </ul>
          </div>

          <button className=" focus:none flex items-center justify-center gap-2 rounded-xl bg-black font-bold p-3 text-sm font-bold capitalize text-white outline-none hover:bg-[#927d5f] md:px-14 md:py-4 md:text-xl">
            <span className="font-light"> learn more</span>
            <span className=" md:text-2xl">&#8594;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
