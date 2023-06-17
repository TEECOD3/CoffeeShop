import React, { useState } from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import heroimage from "../../../assets/Images/kisscoffee.png";
import "react-lazy-load-image-component/src/effects/blur.css";

type Props = {};

export default function Herosection({}: Props) {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <motion.section
        className="relative z-30 flex h-full w-full bg-[#f6f6f6]  md:px-10 md:py-40 items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.2,
          delay: 0.3,
        }}
      >
        <div className="  w-[90%] mt-24 md:mt-0 relative bg-gray-200 rounded-xl  md:flex-row mx-auto py-10 px-8 md:px-8 lg:px-20 flex items-start gap-y-4 justify-center flex-col-reverse ">
          <div className="flex-1 p-4 md:p-10  w-full space-y-4 ">
            <h3 className="text-2xl font-bold capitalize ">
              best coffee avail
            </h3>
            <h2 className="text-4xl font-extrabold capitalize">tasteful</h2>
            <div className=" text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem]   font-[900] text-white uppercase ">
              sponge candy
            </div>
            <div className="">
              <div className=" focus:none  inline-block  translate-x-1 cursor-pointer  items-center justify-center rounded-lg bg-red-500 px-4 text-[10px] sm:text-sm capitalize  text-white outline-none transition-all delay-200 duration-75 ease-out hover:translate-y-1   hover:border-white hover:bg-[#BC9A6C]/20 hover:text-white py-3">
                order now sponge candy
              </div>
            </div>

            <div className=" w-full text-right z-[14] text-black mt-4">
              <h4 className="font-bold text-sm capitalize md:text-xl">
                description
              </h4>
              <p className="text-sm">
                Discover the epitome of coffee perfection with Cocoba Coffee
                Beans. Sourced from the finest coffee plantations around the
                world, our beans are meticulously selected for their exceptional
                quality and flavor.
              </p>
            </div>
          </div>

          <div className="relative  mx-auto w-full lg:w-1/2 h-[18rem] md:h-[250px] lg:h-[80vh] my-auto">
            <LazyLoadImage
              effect="black-and-white"
              src={heroimage}
              alt="beautiful image of a coffee"
              className=" bg-cofeeHero absolute z-[400] h-full w-full bg-cover bg-no-repeat  xl:mt-0 xl:h-full xl:w-full"
            />
          </div>
        </div>
      </motion.section>
    </>
  );
}

{
  /* <div className="font-rails mx-auto mt-20 flex h-full w-full flex-col-reverse items-center  justify-between space-y-2 py-10 sm:max-w-4xl sm:space-y-8  sm:py-0 md:mt-2 md:max-w-7xl md:flex-row md:space-x-16 lg:mt-0 lg:space-x-28">
            <div className="relative   mx-auto w-4/5 p-8 sm:w-5/6 lg:p-5   "> */
}
{
  /* <div className="bg-seed absolute  left-[33rem] top-[15rem] flex h-[6rem] w-[5rem] items-center justify-center bg-no-repeat max-xl:left-[21rem] max-md:left-[22rem] max-sm:left-[14rem] max-sm:top-[11rem]"></div>
              <div className=" mx-auto lg:mt-0  ">
                <p className="font-rails mb-3 text-[1rem]  text-black font-bold ">
                  Welcome to coffee hut
                </p>
                <h1 className=" md:text-md  font-rails mb-4  text-4xl   font-extrabold leading-8 text-black lg:leading-10 xl:text-6xl ">
                  Heal the world with coffee
                </h1>
                <p className="mb-7 text-sm text-black md:text-base font-bold">
                  On the hunt for a place to indulge your craving for caffeine?
                  Look to our coffee maker shop for the solution!
                </p>

                <div className="md:w-full">
                  <div className=" mx-auto flex w-full gap-3 md:w-full  ">
                    <div className=" focus:none user flex  translate-x-1 cursor-pointer  items-center justify-center rounded-lg bg-black px-4 text-sm capitalize  text-white outline-none transition-all delay-200 duration-75 ease-out hover:translate-y-1   hover:border-white hover:bg-[#BC9A6C]/20 hover:text-white w-28 py-3">
                      order now
                    </div>
                  </div>
                </div>
              </div>
            </div> */
}
{
  /* 2nd col */
}

{
  /* <div className=" relative mx-auto h-[20rem] w-[70%] md:h-[25rem]  lg:h-[35rem]">
              <img
                src={heroimage}
                alt="beautiful image of a coffee"
                className=" bg-cofeeHero absolute z-[400] h-full w-full bg-cover bg-no-repeat md:h-[20rem] lg:w-[20rem] xl:mt-0 xl:h-full xl:w-full"
              />
            </div> */
}
{
  /* </div> */
}
