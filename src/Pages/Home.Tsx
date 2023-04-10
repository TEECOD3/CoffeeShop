import React from "react";
import WhiteCheck from "../assets/Icons/WhiteCheck";
import BlackCheck from "../assets/Icons/BlackCheck";
import Ringer from "../assets/Icons/Ringer";
import CoffeeItem from "./CoffeeItem";

const Home = () => {
  return (
    <>
      <section className="bg-black/90 z-30 h-[100vh] w-full  bg-hero flex items-center justify-center ">
        <div className=" flex max-md:flex-col items-center  justify-between w-[90rem] max-xl:w-[70rem]  mx-auto gap-40 max-lg:gap-4 max-lg:px-8  md:px-4 lg:p-0 ">
          {/* first col */}

          <div className="flex w-[40%] max-md:w-full  mx-auto relative  p-10 max-lg:w-[50%] font-inter">
            <div className="h-[6rem] w-[5rem]  absolute bg-seed bg-no-repeat left-[33rem] max-sm:left-[14rem] max-sm:top-[11rem] max-md:left-[22rem] top-[15rem] max-xl:left-[21rem] flex items-center justify-center"></div>
            <div className="">
              <p className="text-white text-[1rem] font-medium mb-3">
                Welcome to coffee hut
              </p>
              <h1 className="text-6xl font-bold text-[#BC9A6C]/70 mb-6 font-inter">
                Heal the world with coffee
              </h1>
              <p className="text-white mb-7 font-inter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                sed pharetra dictum neque massa congue
              </p>

              <div className="flex gap-3">
                <div className="py-4 px-8 bg-[#BC9A6C]  rounded-lg text-white hover:bg-[#BC9A6C]/70 cursor-pointer">
                  order now
                </div>
                <div className="py-4 px-8 border-double border-2  border-[#BC9A6C] text-[#BC9A6C] hover:bg-[#BC9A6C]/70 cursor-pointer hover:text-white">
                  see menu
                </div>
              </div>
            </div>
          </div>
          {/* 2nd col */}

          {/* <div className=" w-[40%] relbative bg-cofeeHero h-[40rem] bg-no-repeat max-md:bg-none  z-[900] flex-end max-md:hidden  max-lg:w-[20rem] max-lg:h-[25rem] max-xl:bg-cover max-xl:h-[30rem]  after:content-['*'] after:absolute after:h-full after:w-full after:border-[#BC9A6C] after:border-2 after:top-[-3rem] after:left-[-4rem] after:border-b-transparent after:border-r-transparent"></div> */}

          <div className="w-[50%] relative h-[40rem]  max-md:hidden max-xl:mt-[17rem] ">
            <div className="h-full w-[35rem] absolute border-2 border-[#BC9A6C] z-[300] top-[-2rem] left-[-3rem] max-md:hidden  max-lg:w-[20rem] max-lg:h-[25rem] max-xl:bg-cover max-xl:h-[30rem]"></div>
            <div className=" bg-cofeeHero absolute w-full top-0 h-[40rem] bg-no-repeat max-md:bg-none z-[900] max-md:hidden  max-lg:w-[20rem] max-lg:h-[25rem] max-xl:bg-cover max-xl:h-[30rem]" />
          </div>
        </div>
      </section>

      <section className="h-[100vh] p-24 my-8 max-md:p-3">
        <div className=" gap-3 flex justify-between max-w-[90rem] max-md:w-[90%] mx-auto  h-[80%] max-xl:h-[100%] flex-col xl:flex-row">
          <div className="  max-xl:w-full  relative h-full w-[60%] ">
            <div className="bg-dottedimage max-sm:hidden h-[50%] w-[40%] absolute right-0 bg-no-repeat  top-36" />

            <div className="bg-coffeabout max-xl:bg-cover bg-center h-[90%] w-[60%] max-md:w-full max-lg:h-full max-md:left-0 absolute left-[14%] top-5" />

            <div className="bg-coffeabout2 h-[50%] w-[50%] absolute  bg-center bottom-0 left-0 max-xl:hidden " />
          </div>
          <div className="flex-1 p-20  max-md:p-8 max-sm:w-full">
            <h3 className="text-[1.1rem] mb-4 font-medium">About us</h3>
            <h2 className="text-4xl font-bold font-playfair text-[#333333] mb-7">
              We are the best quality Coffee maker
            </h2>
            <p className="text-[#4F4F4F] mb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              accusantium magnam pariatur assumenda ipsum facere eos nulla quasi
              distinctio doloremque, odio dolorem nemo inventore, nostrum rerum
            </p>

            <div className="mb-8 ">
              <ul className="space-y-2">
                <li className="flex gap-4">
                  <span className="bg-[#edeae3] p-[0.2em]">
                    <BlackCheck />{" "}
                  </span>
                  <span className="font-medium">Experienced Chefs</span>{" "}
                </li>
                <li className="flex gap-4">
                  <span className="bg-[#1b1b19] p-[0.2em]">
                    <WhiteCheck className="text-white" />
                  </span>

                  <span className="font-medium">Fresh & Organic Foods</span>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="bg-[#edeae3] p-[0.2em]">
                    <BlackCheck />
                  </span>
                  <span className="font-medium">Different Coffee & Drinks</span>
                </li>
              </ul>
            </div>

            <button className="py-4 hover:bg-[#927d5f] px-14 bg-[#BC9A6C] focus:none capitalize text-white font-bold flex items-center justify-center gap-2 rounded-xl">
              <span> learn more</span> <span className="text-2xl">&#8594;</span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-red-400 h-[70vh] p-20 max-lg:p-10">
        <div className="max-w-[90rem] mx-auto max-md:w-full max-lg:w-[80%] max-lg:mx-auto">
          <div className="text-center w-[30%] bg-yellow-300 mx-auto max-lg:w-full">
            <h2 className="text-4xl font-bold text-[#333333] mb-4 capitalize ">
              Coffee Category
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue
            </p>
          </div>

          <div className="flex w-full flex-col lg:flex-row justify-between mt-14">
            <div className="bg-blue-300 w-[33.3%] max-lg:w-full">
              <ul>
                <CoffeeItem image="jsjsjs" text="jkssksk" cofee="jssjks" />
                <CoffeeItem image="jsjsjs" text="jkssksk" cofee="jssjks" />
                <CoffeeItem image="jsjsjs" text="jkssksk" cofee="jssjks" />
              </ul>
            </div>
            <div className="">cofee logo</div>
            <div className="">left list</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
