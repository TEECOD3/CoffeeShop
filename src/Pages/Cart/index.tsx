import React from "react";
import Cartitem from "./Cartitem";

const Cartpage = () => {
  return (
    <main className=" py-28">
      <section className="md:max-w-7xl mx-auto ">
        <div className="">
          <h2 className="text-sm p-4  md:text-3xl uppercase font-semibold text-lightdark">
            shopping bag <span className="font-nunito">(7)</span>
          </h2>
          <div className="h-[0.15rem] w-full bg-lightdark" />
        </div>
        <div className="mt-2 md:w-3/4 mx-auto">
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
          <Cartitem />
        </div>
      </section>
    </main>
  );
};

export default Cartpage;
