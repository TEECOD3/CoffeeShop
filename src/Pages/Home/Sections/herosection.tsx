import React from "react";
import { motion } from "framer-motion";
import heroimage from "../../../assets/Images/bg-hero.png";
import coffeehero from "../../../assets/Images/coffeeHero.png";

type Props = {};

export default function Herosection({}: Props) {
  return (
    <motion.section
      className="relative z-30 flex h-full w-full bg-black/90  md:p-40 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
        delay: 0.3,
      }}
    >
      <img
        src={heroimage}
        alt=""
        className="absolute left-0 top-0 -z-[1] h-full w-full object-cover "
      />
      <div className="mx-auto mt-20 flex h-full w-full flex-col-reverse items-center justify-between  space-y-2 py-10 font-rails sm:max-w-4xl sm:space-y-8  sm:py-0 md:mt-2 md:max-w-7xl md:flex-row md:space-x-16 lg:mt-0 lg:space-x-28">
        <div className="relative   mx-auto w-4/5 p-8 sm:w-5/6 lg:p-5   ">
          <div className="absolute left-[33rem]  top-[15rem] flex h-[6rem] w-[5rem] items-center justify-center bg-seed bg-no-repeat max-xl:left-[21rem] max-md:left-[22rem] max-sm:left-[14rem] max-sm:top-[11rem]"></div>
          <div className=" mx-auto lg:mt-0 lg:w-3/4 ">
            <p className="mb-3 font-rails text-[1rem] font-medium text-white">
              Welcome to coffee hut
            </p>
            <h1 className=" md:text-md  mb-4 font-rails  text-4xl   font-medium leading-8 text-[#BC9A6C]/70 lg:leading-10 xl:text-6xl ">
              Heal the world with coffee
            </h1>
            <p className="mb-7 text-sm text-white md:text-base">
              On the hunt for a place to indulge your craving for caffeine? Look
              to our coffee maker shop for the solution!
            </p>

            <div className="md:w-full">
              <div className=" mx-auto flex w-full gap-3 md:w-full  ">
                <div className=" focus:none user flex  translate-x-1 cursor-pointer  items-center justify-center rounded-lg bg-[#BC9A6C] px-4 py-0 text-sm capitalize  text-white outline-none transition-all delay-200 duration-75 ease-out hover:translate-y-1   hover:border-white hover:bg-[#BC9A6C]/20 hover:text-white  sm:px-8 sm:py-4  md:text-sm xl:px-16  ">
                  order now
                </div>
                <div className=" focus:none flex translate-x-1 cursor-pointer items-center  justify-center rounded-lg border-2  border-double border-[#BC9A6C] px-4 py-1  text-sm capitalize text-[#BC9A6C] outline-none transition-all delay-200 ease-out hover:translate-y-1 hover:border-white hover:bg-[#BC9A6C]/70 hover:text-white xl:px-16">
                  see menu
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd col */}

        <div className=" relative mx-auto h-[20rem] w-[70%] md:h-[25rem]  lg:h-[35rem]">
          <div className=" absolute left-[-1rem] top-[-1rem] z-[300]  h-[16rem] w-full border-2 border-[#BC9A6C] sm:left-[-2rem] sm:h-[20rem] sm:w-[80%] md:mt-20  md:h-[15rem] lg:mt-[4rem] lg:h-[20rem] lg:w-[80%] xl:right-[24%] xl:mt-0 xl:h-[25rem] xl:w-[80%]"></div>

          <img
            src={coffeehero}
            alt="beautiful image of a coffee"
            className=" absolute z-[400] h-full w-full bg-cofeeHero bg-cover bg-no-repeat md:mt-20 md:h-1/2 lg:mt-[5rem] lg:w-[20rem] xl:mt-0 xl:h-full xl:w-full"
          />
        </div>
      </div>
    </motion.section>
  );
}
