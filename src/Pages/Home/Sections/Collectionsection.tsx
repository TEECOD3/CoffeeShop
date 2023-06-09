import React from "react";
import { buttondata } from "../../../Data/Cofee";
import Button from "../../../Components/UI/Button";
import Cofeecard from "../Components/CofeeCard";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { client } from "../../../client";

const Collectionsection = () => {
  const [Categories, setCategories] = useState<any[]>([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    client
      .fetch(
        `*[_type == "categories"]{
      name,
      slug,
      oldPrice,
      newPrice,
      inStock,
      image{
        asset->{
          _id,
          url
        },
      },
     
    }`
      )
      .then((data) => {
        setloading(false);
        setCategories(data);
      })
      .catch(console.error);
  }, []);
  const navigate = useNavigate();
  return (
    <section className=" mt-10 w-full md:p-20">
      <div className="mx-auto w-full text-center md:w-[60%]">
        <h2 className=" text-coffeeBlack mb-1 font-rails text-3xl font-bold capitalize text-[#333333]">
          different collection
        </h2>
        <p className=" text-md  mx-auto px-4 text-sm font-medium text-lightdark md:px-0 md:text-xl xl:w-3/5">
          A coffee menu lists the various collections of coffee and drinks that
          our coffee shop offers, along with their prices.
        </p>
      </div>

      <div className="mx-auto flex w-full flex-col gap-4 p-3 lg:mt-6 lg:flex-row xl:w-[80%] ">
        <div className=" no-scrollbar w-full overflow-x-auto lg:w-[60%] xl:w-[40%]  ">
          <div className="flex w-[60rem] gap-3 sm:w-full sm:gap-5 md:p-4 lg:flex-col lg:gap-5 xl:bg-[#EDEAE3] ">
            {buttondata.map((buttons) => (
              <Button
                variant="coffee"
                size="lg"
                key={buttons.id}
                className=" mx-auto w-[30rem] p-0 shadow-sm md:w-[18rem]"
              >
                <div className="flex w-full items-center justify-between gap-3 px-6">
                  <div className="flex  w-[20%] justify-center  text-3xl md:text-4xl">
                    {buttons.component}
                  </div>
                  <div className="flex w-[90%] flex-wrap text-center text-[0.7rem] font-bold md:text-base">
                    {buttons.name}
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>
        <div className=" mx-auto h-full w-full">
          <div className=" mx-auto grid h-full w-full grid-cols-2 gap-5 sm:grid-cols-3  md:gap-3 ">
            {Categories.map((cofee) => (
              <Cofeecard
                coffeename={cofee.name}
                image={cofee.image}
                newprice={cofee.newPrice}
              />
            ))}
          </div>

          <div
            onClick={() => {
              navigate("/menu");
            }}
            className="item-center justify-left mb-6  mt-4 flex cursor-pointer text-base font-bold capitalize sm:text-xl md:w-4/12"
          >
            <h4 className="">view all collection </h4>
            <span className="ml-2 flex items-center justify-center text-xl font-extrabold">
              <FaArrowRight className="animate-ping" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collectionsection;
