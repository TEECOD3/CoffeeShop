import React from "react";
import WhiteCheck from "./icon/WhiteCheck";
import BlackCheck from "../../assets/Icons/BlackCheck";
import LeftCoffeeItem from "./Components/LeftCoffeeItem";
import RightCoffeeItem from "./Components/RightCofeeItem";
import { leftCoffee, rightCofee } from "../../Data/Cofee";
import coffeehero from "../../assets/Images/coffeeHero.png";
import leftleaf from "../../assets/Images/leaveleft.png";
import rightleaf from "../../assets/Images/leaveright.png";
import middlecofs from "../../assets/Images/cofeemids.png";
import dottedimage from "../../assets/Images/dottedimagecofee.png";
import coffeeabout from "../../assets/Images/cofeeAbout2.png";
import coffeeabout2 from "../../assets/Images/coffeeAboutSec.png";
import Button from "../../Components/UI/Button";
import { SiBuymeacoffee } from "react-icons/si";
import { GiCoffeeBeans, GiCoffeeCup, GiCoffeeMug } from "react-icons/gi";
import { CiCoffeeBean } from "react-icons/ci";
import Cofeecard from "./Components/CofeeCard";

const Home = () => {
  return (
    <>
      <section className="bg-black/90  z-30 w-full h-full  bg-hero flex  md:p-24 ">
        <div className="  flex flex-col-reverse items-center justify-between h-full py-10 sm:py-0  space-y-2 w-full mt-28 md:mt-2   md:max-w-7xl  mx-auto sm:max-w-4xl md:flex-row sm:space-y-8 md:space-x-16 lg:mt-0 lg:space-x-28">
          <div className="w-4/5   mx-auto relative p-8 lg:p-5 sm:w-5/6   ">
            <div className="h-[6rem] w-[5rem]  absolute bg-seed bg-no-repeat left-[33rem] max-sm:left-[14rem] max-sm:top-[11rem] max-md:left-[22rem] top-[15rem] max-xl:left-[21rem] flex items-center justify-center"></div>
            <div className=" lg:w-3/4 lg:mt-0 mx-auto ">
              <p className="text-white text-[1rem] font-medium mb-3 font-playfair">
                Welcome to coffee hut
              </p>
              <h1 className=" text-3xl  xl:text-6xl   md:text-md font-bold text-[#BC9A6C]/70 mb-6 font-playfair ">
                Heal the world with coffee
              </h1>
              <p className="text-white mb-7 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                sed pharetra dictum neque massa congue
              </p>

              <div className="md:w-full">
                <div className=" w-full md:w-full gap-3 mx-auto flex  ">
                  <div className=" sm:px-8 sm:py-4 outline-none  focus:none bg-[#BC9A6C] font-nunito py-0 px-4 flex items-center justify-center text-sm transition-all duration-75  rounded-lg text-white hover:bg-[#BC9A6C]/20 cursor-pointer delay-200 xl:px-16 md:text-sm   hover:text-white hover:translate-y-1 ease-out  hover:border-white translate-x-1  capitalize user  ">
                    order now
                  </div>
                  <div className=" px-1 py-1 font-nunito outline-none  focus:none border-double border-2  border-[#BC9A6C] flex items-center justify-center  text-[#BC9A6C] hover:bg-[#BC9A6C]/70 cursor-pointer hover:text-white hover:translate-y-1 transition-all ease-out delay-200 hover:border-white translate-x-1 xl:px-16 capitalize">
                    see menu
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd col */}

          <div className=" mx-auto w-[70%] relative h-[20rem] md:h-[25rem]  lg:h-[35rem]">
            <div className=" w-full absolute h-[16rem] left-[-1rem]  xl:right-[24%] top-[-1rem] border-2 border-[#BC9A6C] z-[300] sm:left-[-2rem] sm:h-[20rem] sm:w-[80%]  md:h-[15rem] lg:h-[20rem] lg:w-[80%] lg:mt-[4rem] xl:w-[80%] xl:mt-0 xl:h-[25rem] md:mt-20"></div>

            <img
              src={coffeehero}
              alt="beautiful image of a coffee"
              className=" bg-cofeeHero absolute w-full h-full z-[400] lg:w-[20rem] md:h-1/2 xl:h-full md:mt-20 xl:w-full bg-no-repeat bg-cover lg:mt-[5rem] xl:mt-0"
            />
          </div>
        </div>
      </section>

      <section className="lg:p-4 my-4 sm:my-8 max-md:p-1  ">
        <div className=" gap-3 flex justify-between lg:max-w-7xl  mx-auto  p-2   flex-col md:flex-row">
          <div className="max-xl:w-full  max-md:h-1/6 relative w-[60%]">
            <img
              src={dottedimage}
              alt="dotted images"
              className="h-[50%] w-[40%] absolute right-0 bg-no-repeat  top-36"
            />
            <img
              src={coffeeabout}
              className="bg-coffeabout max-xl:bg-cover bg-no-repeat bg-center h-[100%] lg:h-2/3 md:h-4/6 xl:h-3/4 w-[60%] max-md:w-full max-lg:h-full max-md:left-0 absolute left-[14%] top-5"
              alt="coffeeabout"
            />

            <img
              src={coffeeabout2}
              alt="cofeeabout2"
              className="bg-coffeabout2 h-[50%] w-[50%] absolute bg-no-repeat bg-center bottom-0 left-0 max-xl:hidden "
            />
          </div>
          <div className=" lg:ml-16 xl:w-[50%] p-2 max-md:h-5/6 md:w-full  max-md:p-8 w-full">
            <h3 className="text-[1.1rem] mb-2 sm:mb-4  font-medium">
              About us
            </h3>
            <h2 className=" text-2xl sm:text-3xl md:text-2xl  xl:text-5xl font-bold font-playfair text-[#333333] mb-4">
              We are the best quality Coffee maker
            </h2>
            <p className="text-[#4F4F4F] mb-4 sm:mb-3 sm:w-3/4 md:text-sm lg:text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              accusantium magnam pariatur assumenda ipsum facere eos nulla quasi
              distinctio doloremque, odio dolorem nemo inventore, nostrum rerum
            </p>

            <div className=" mb-4 sm:mb-8 ">
              <ul className="space-y-2">
                <li className="flex gap-4">
                  <span className="bg-[#edeae3] p-[0.2em]">
                    <BlackCheck />
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

            <button className=" p-3 md:py-4 hover:bg-[#927d5f] md:px-14 bg-[#BC9A6C] focus:none outline-none capitalize text-white text-sm md:text-xl font-bold flex items-center justify-center gap-2 rounded-xl">
              <span> learn more</span>
              <span className=" md:text-2xl">&#8594;</span>
            </button>
          </div>
        </div>
      </section>

      <section className=" mt-4 lg:mt-20  bg-[#EDEAE3]/20 py-8 md:p-8">
        <div className=" w-[90%] mx-auto md:w-[75%] lg:w-[95%] xl:w-[65%]">
          <div className="text-center lg:w-[40%] mx-auto w-full">
            <h2 className=" text-3xl md:text-4xl font-bold text-coffeeBlack mb-1 capitalize font-playfair">
              Coffee Category
            </h2>
            <p className="mb-4 text-md md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue
            </p>
          </div>

          <div className="flex mt-5 w-full flex-col lg:flex-row justify-around md:mt-14">
            <div className="text-left">
              <ul>
                {leftCoffee.map((coffee) => (
                  <LeftCoffeeItem
                    key={coffee.id}
                    cofee={coffee.coffeeName}
                    image={coffee.image}
                    text={coffee.coffeeDescription}
                  />
                ))}
              </ul>
            </div>
            <div className=" h-[20rem] w-[60%] md:w-[40%] mx-auto flex items-start justify-center relative">
              <img
                src={leftleaf}
                alt="left leaf"
                className="bg-contain bg-no h-2/4 top-[10%] left-2  absolute bg-no-repeat z-[10] "
              />

              <img
                src={middlecofs}
                alt="middlecoffeecan"
                className="h-[15rem] sm:w-2/3 lg:h-full lg:w-full  w-full absolute bg-cover bg-no-repeat z-[20]"
              />

              <img
                src={rightleaf}
                alt="right leave"
                className="bg-leaveright h-1/3 absolute w-1/3 right-[1rem]  bg-no-repeat top-[13%] z-[10] bg-contain"
              />
            </div>
            <div className="mt-[-4rem] lg:mt-0">
              <div className="lg:text-right">
                <ul>
                  {rightCofee.map((coffee) => (
                    <RightCoffeeItem
                      key={coffee.id}
                      cofee={coffee.coffeeName}
                      image={coffee.image}
                      text={coffee.coffeeDescription}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" w-full mt-10 md:p-20">
        <div className="text-center lg:w-[60%] mx-auto w-full">
          <h2 className=" text-3xl md:text-4xl font-bold text-coffeeBlack mb-1 capitalize font-playfair">
            Our Favorites Menu
          </h2>
          <p className="mb-4 text-md md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </p>
        </div>

        <div className="flex flex-col lg:flex-row w-full lg:max-w-[80%]  xl:max-w-[70%] mx-auto p-3 gap-4">
          <div className=" overflow-x-auto no-scrollbar sm:w-full  lg:w-[25rem]">
            <div className="flex lg:flex-col gap-3 sm:gap-24 lg:gap-5 md:bg-[#EDEAE3] p-4 w-full ">
              <Button variant="coffee" size="lg">
                <span>
                  <GiCoffeeBeans className="text-2xl  md:text-4xl mr-2 md:mr-4 " />
                </span>
                <span className=""> Americano</span>
              </Button>
              <Button variant="coffee" size="lg">
                <span>
                  <SiBuymeacoffee className="text-2xl   md:text-4xl mr-2 md:mr-4 " />
                </span>
                Esperesso
              </Button>
              <Button variant="coffee" size="lg" className="">
                <span>
                  <CiCoffeeBean className="text-2xl md:text-4xl  mr-2 md:mr-7" />
                </span>
                Arabica
              </Button>
              <Button
                variant="coffee"
                size="lg"
                className="flex items-center justify-center px-7"
              >
                <span>
                  <GiCoffeeCup className="text-2xl  md:text-4xl mr-2 md:mr-4 " />
                </span>
                Coffee <span>stimy</span>
              </Button>
              <Button variant="coffee" size="lg">
                <span>
                  <GiCoffeeMug className="text-2xl  md:text-4xl mr-2 md:mr-4 " />
                </span>
                Organic <span>Pack</span>
              </Button>
            </div>
          </div>
          <div className="bg-yellow-200 lg:w-full lg:flex-3 ">
            <div className="grid  grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 h-full gap-4">
              <Cofeecard />
              <Cofeecard />
              <Cofeecard />
              <Cofeecard />
              <Cofeecard />
              <Cofeecard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
