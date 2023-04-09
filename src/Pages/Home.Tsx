import React from "react";

const Home = () => {
  return (
    <>
      <section className="bg-black/90 z-30 h-[100vh] w-full ">
        <div className="flex w-full max-md:flex-col max-w-7xl max-lg:w-[100%] mx-auto absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%]  max-md:translate-y-[-50%] max-md:translate-x-[-50%] gap-10 md:p-10">
          <div className="flex max-md:w-[80%] md:w-[40%] mx-auto">
            <div className="">
              <p className="text-white text-[1rem] font-medium mb-3">
                Welcome to coffee hut
              </p>
              <h1 className="text-5xl font-bold text-[#BC9A6C]/70 mb-6">
                Heal the world with coffee
              </h1>
              <p className="text-white mb-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                sed pharetra dictum neque massa congue
              </p>

              <div className="flex gap-3">
                <div className="py-4 px-8 bg-[#BC9A6C]  rounded-lg text-white">
                  order now
                </div>
                <div className="py-4 px-8 border-double border-2  border-[#BC9A6C] text-[#BC9A6C]">
                  see menu
                </div>
              </div>
            </div>
          </div>
          <div className="bg-yellow-300 w-[50%]">jsjs</div>
        </div>
      </section>
    </>
  );
};

export default Home;
