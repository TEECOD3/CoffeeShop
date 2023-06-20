import React from "react";
import { buttondata } from "../../../Data/Cofee";
import Button from "../../../Components/UI/Button";
import Cofeecard from "../Components/CofeeCard";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { client } from "../../../client";
import Loader from "../../../Components/UI/Loader";

const Collectionsection = () => {
  const [Categories, setCategories] = useState<any[]>([]);
  const [loading, setloading] = useState(false);
  const [category, setCategory] = useState("machandize");
  const handleFilter = (button: { name: string }) => {
    switch (button.name) {
      case "dark roasts":
        setCategory("dark roasts");
        break;
      case "light roast":
        setCategory("light roast");
        break;
      case "bundles":
        setCategory("bundles");
        break;
      case "unroasted coffee beans":
        setCategory("unroasted coffee beans");
        break;
      case "subscriptions":
        setCategory("subscriptions");
        break;
      default:
        setCategory("machandize");
        break;
    }
  };

  useEffect(() => {
    setloading(true);
    client
      .fetch(
        `*[_type == 'coffeeProduct' && category._ref in *[_type == 'category' && name == '${category}']._id] {
          name,
          image,
          oldPrice,
          newPrice,
          inStock,
          slug,
          rating,
          description
        }`
      )
      .then((data) => {
        setloading(false);
        setCategories(data);
      })
      .catch(console.error);
  }, [category]);
  const navigate = useNavigate();
  return (
    <section className=" mt-10 w-full md:p-20">
      <div className="mx-auto w-full text-center md:w-[60%]">
        <h2 className=" text-coffeeBlack mb-1 font-rails text-3xl font-bold capitalize text-[#333333]">
          different collection
        </h2>
        <p className=" text-md  mx-auto px-4 text-sm font-medium text-lightdark md:px-0 md:text-xl xl:w-3/5">
          A coffee menu lists the various collections of coffee that our coffee
          shop offers, along with their prices. filter by available category
        </p>
      </div>

      <div className="mx-auto flex w-full flex-col gap-4 p-3 lg:mt-6 lg:flex-row xl:w-[80%] ">
        <div className=" no-scrollbar w-full overflow-x-auto lg:w-[60%] xl:w-[40%]  ">
          <div className="flex w-[60rem] gap-3 bg-[#f6f6f6] sm:w-full sm:gap-5 md:p-4 lg:flex-col  lg:gap-5">
            {buttondata.map((buttons) => (
              <Button
                onClick={() => {
                  handleFilter(buttons);
                }}
                variant="coffee"
                size="lg"
                key={buttons.id}
                className=" mx-auto w-[30rem] border-black bg-[#f6f6f6] p-0  text-black shadow-sm md:w-[18rem]"
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
          {loading ? (
            <div className="flex h-[500px] w-full items-center justify-center text-black ">
              <Loader className="text-black" />
            </div>
          ) : (
            <div className=" mx-auto grid h-full w-full grid-cols-2 gap-5 sm:grid-cols-3  md:gap-3 ">
              {Categories.map((cofee) => (
                <Cofeecard
                  key={cofee.name}
                  coffeename={cofee.name}
                  image={cofee.image}
                  newprice={cofee.newPrice}
                  instock={cofee.inStock}
                  slug={cofee.slug.current}
                />
              ))}
            </div>
          )}

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
