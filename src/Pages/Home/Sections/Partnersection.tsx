import React from "react";
import { sponsors } from "../../../Data/Cofee";

const Partnersection = () => {
  return (
    <section className=" mb-40 w-full ">
      <div className="mx-auto w-full text-center md:w-[60%]">
        <h2 className=" text-coffeeBlack mb-1 font-mini text-xl font-bold capitalize text-coffee-100 ">
          Partners & Clients
        </h2>
        <p className="text-medium mx-auto  text-2xl font-medium text-[#333333] sm:text-3xl md:text-4xl lg:text-6xl lg:font-bold">
          We work with the best people
        </p>
      </div>

      <div className="mx-auto mt-10 flex w-full flex-row items-center justify-center gap-6 md:w-[80%]">
        {sponsors.map((sponsor) => (
          <img
            key={sponsor.id}
            src={sponsor.logo}
            alt="sponsors image"
            className="h-10 w-8 sm:w-10 md:h-24 md:w-24 lg:h-full xl:w-[7rem]"
          />
        ))}
      </div>
    </section>
  );
};

export default Partnersection;
