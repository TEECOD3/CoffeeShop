import React from "react";

import LeftCoffeeItem from "./Components/LeftCoffeeItem";
import RightCoffeeItem from "./Components/RightCofeeItem";
import { leftCoffee, rightCofee, sponsors, buttondata } from "../../Data/Cofee";
import leftleaf from "../../assets/Images/leaveleft.png";
import rightleaf from "../../assets/Images/leaveright.png";
import middlecofs from "../../assets/Images/cofeemids.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import heroimage from "../../assets/Images/bg-hero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial from "./Components/testimonialCard";
import { testimonials } from "../../Data/Cofee";
import Userefplayer from "./Components/Userefplayer";
import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { chefs } from "../../Data/Cofee";
import Herosection from "./Sections/herosection";
import Aboutsection from "./Sections/Aboutsection";
import Descriptionsection from "./Sections/Descriptionsection";
import Collectionsection from "./Sections/Collectionsection";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Herosection />
      <Aboutsection />
      <Descriptionsection />
      <Collectionsection />

      <section className=" my-10">
        <div className="mx-auto w-full text-center md:w-[60%]">
          <h2 className=" text-coffeeBlack mb-1 font-rails text-3xl font-bold capitalize text-[#333333]">
            Meet our chefs
          </h2>
          <p className=" text-md  text-medium mx-auto font-medium text-lightdark md:text-xl xl:w-3/5">
            Exploring Culinary Delights: A Chef's Passion for Creating Memorable
            Dining Experiences
          </p>
        </div>

        <div className="mx-auto my-8 grid w-full  grid-cols-2  gap-4 text-center md:grid-cols-4 lg:w-[80%] xl:flex-nowrap xl:gap-2">
          {chefs.map((chef) => (
            <div className="mx-auto h-full w-full px-2" key={chef.id}>
              <img src={chef.image} alt="" className="mx-auto" />
              <h3 className="mt-4 text-base font-bold">{chef.name}</h3>
              <h2>{chef.position}</h2>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto lg:my-32 lg:w-[80%] ">
        <div className="flex flex-col lg:flex-row ">
          <div className=" relative w-full  bg-black/90 p-2 lg:w-1/2">
            <div className="absolute  left-0 top-0 h-full w-full bg-hero bg-cover "></div>
            <div className="text-center">
              <h4 className="mt-4 capitalize text-white">testimonial</h4>
              <h2 className=" text-coffeeBlack mb-1 font-rails text-2xl font-extrabold capitalize text-[#ffffff]">
                Our customers say
              </h2>
            </div>
            <div className="">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                pagination={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}
                speed={1100}
                className="sm-h-full relative flex w-full items-center justify-start md:h-full "
              >
                {testimonials.map((testimony) => (
                  <SwiperSlide
                    key={testimony.id}
                    className="mb-4 transition-all delay-75 ease-in-out"
                  >
                    <Testimonial
                      image={testimony.image}
                      name={testimony.name}
                      description={testimony.testimonial}
                      key={testimony.id}
                      position={testimony.position}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className=" relative mt-1  w-full bg-black/90 sm:mt-0 lg:w-1/2">
            <Userefplayer />
          </div>
        </div>
      </section>
      {/* 
      <section className=" my-10 p-8">
        <div className="text-center md:w-[60%] mx-auto w-full">
          <h2 className=" text-[#333333] text-3xl font-bold text-coffeeBlack mb-1 capitalize font-rails">
            Latest News & Blog
          </h2>
          <p className=" text-md  md:text-xl text-lightdark text-medium font-medium xl:w-3/5 mx-auto">
            Discovering the Art of Specialty Coffee: A Journey through the
            Aromas, Flavors, and Culture of Our Cafe
          </p>
        </div>

        <div className="px-3 md:w-[95%] xl:w-[80%] flex flex-col mx-auto md:flex-row gap-6 mt-8">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section> */}

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
    </>
  );
};

export default Home;
