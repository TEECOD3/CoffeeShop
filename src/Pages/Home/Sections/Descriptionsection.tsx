import React from "react";
import LeftCoffeeItem from "../Components/LeftCoffeeItem";
import RightCoffeeItem from "../Components/RightCofeeItem";
import leftleaf from "../../../assets/Images/leaveleft.png";
import rightleaf from "../../../assets/Images/leaveright.png";
import middlecofs from "../../../assets/Images/cofeemids.png";
import { leftCoffee } from "../../../Data/Cofee";
import { rightCofee } from "../../../Data/Cofee";
import imagemiddle from "../../../assets/Images/kisscoffee.png";

type Props = {};

export default function Descriptionsection({}: Props) {
  return (
    <section className=" mt-2 bg-[#EDEAE3]/20  py-8 md:p-8 lg:mt-20">
      <div className=" mx-auto w-[90%] md:w-[75%] lg:w-[95%] xl:w-[75%]">
        <div className="mx-auto w-full text-center lg:w-[40%]">
          <h2 className=" text  mb-1 font-rails text-3xl font-extrabold capitalize text-[#333333] md:text-4xl">
            our collections
          </h2>
          <p className="mb-4 text-base font-medium text-lightdark md:text-xl">
            We offer our customers a choice between six main categories, which
            are...
          </p>
        </div>

        <div className="mt-5 flex w-full flex-col justify-around md:mt-14 lg:flex-row">
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
          <div className=" relative mx-auto flex h-[20rem] w-[60%] items-start justify-center md:w-[40%]">
            <img
              src={leftleaf}
              alt="left leaf"
              className="bg-no absolute left-2 top-[10%] z-[10]  h-2/4 bg-contain bg-no-repeat "
            />

            <img
              src={imagemiddle}
              alt="middlecoffeecan"
              className="absolute z-[20] h-[15rem] w-full  bg-cover bg-no-repeat sm:w-2/3 lg:h-full lg:w-full"
            />

            <img
              src={rightleaf}
              alt="right leave"
              className="absolute right-[1rem] top-[13%] z-[10] h-1/3  w-1/3 bg-leaveright bg-contain bg-no-repeat"
            />
          </div>
          <div className="mt-[-4rem] lg:mt-0">
            <div className="lg:text-right ">
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
  );
}
