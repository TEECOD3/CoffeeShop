import React from "react";
import BlogCard from "../Components/BlogCard";

const Blogsection = () => {
  return (
    <section className=" my-10 p-8">
      <div className="mx-auto w-full text-center md:w-[60%]">
        <h2 className=" text-coffeeBlack mb-1 font-rails text-3xl font-bold capitalize text-[#333333]">
          Latest News & Blog
        </h2>
        <p className=" text-md  text-medium mx-auto font-medium text-lightdark md:text-xl xl:w-3/5">
          Discovering the Art of Specialty Coffee: A Journey through the Aromas,
          Flavors, and Culture of Our Cafe
        </p>
      </div>

      <div className="mx-auto mt-8 flex flex-col gap-6 px-3 md:w-[95%] md:flex-row xl:w-[80%]">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};

export default Blogsection;
