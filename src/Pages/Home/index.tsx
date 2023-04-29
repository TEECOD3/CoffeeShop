import React from "react";
import WhiteCheck from "./icon/WhiteCheck";
import BlackCheck from "../../assets/Icons/BlackCheck";
import LeftCoffeeItem from "./Components/LeftCoffeeItem";
import RightCoffeeItem from "./Components/RightCofeeItem";
import { leftCoffee, rightCofee, sponsors, buttondata } from "../../Data/Cofee";
import coffeehero from "../../assets/Images/coffeeHero.png";
import leftleaf from "../../assets/Images/leaveleft.png";
import rightleaf from "../../assets/Images/leaveright.png";
import middlecofs from "../../assets/Images/cofeemids.png";
import dottedimage from "../../assets/Images/dottedimagecofee.png";
import coffeeabout from "../../assets/Images/cofeeAbout2.png";
import coffeeabout2 from "../../assets/Images/coffeeAboutSec.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../Components/UI/Button";
import Cofeecard from "./Components/CofeeCard";
import chef1 from "../../Data/images/chefs/ourchef1.png";
import chef2 from "../../Data/images/chefs/ourchef2.png";
import chef3 from "../../Data/images/chefs/ourchef3.png";
import chef4 from "../../Data/images/chefs/ourchef4.png";
import Testimonial from "./Components/testimonialCard";
import { testimonials } from "../../Data/Cofee";
import Userefplayer from "./Components/Userefplayer";
import BlogCard from "./Components/BlogCard";

const Home = () => {
  return (
    <>
      <section className="bg-black/90  z-30 w-full h-full  bg-hero flex  md:p-24 ">
        <div className="  flex flex-col-reverse items-center justify-between h-full py-10 sm:py-0 font-rails  space-y-2 w-full mt-20 md:mt-2   md:max-w-7xl  mx-auto sm:max-w-4xl md:flex-row sm:space-y-8 md:space-x-16 lg:mt-0 lg:space-x-28">
          <div className="w-4/5   mx-auto relative p-8 lg:p-5 sm:w-5/6   ">
            <div className="h-[6rem] w-[5rem]  absolute bg-seed bg-no-repeat left-[33rem] max-sm:left-[14rem] max-sm:top-[11rem] max-md:left-[22rem] top-[15rem] max-xl:left-[21rem] flex items-center justify-center"></div>
            <div className=" lg:w-3/4 lg:mt-0 mx-auto ">
              <p className="text-white text-[1rem] font-medium mb-3 font-rails">
                Welcome to coffee hut
              </p>
              <h1 className=" text-4xl  leading-8 lg:leading-10  xl:text-6xl   md:text-md font-medium text-[#BC9A6C]/70 mb-4 font-rails ">
                Heal the world with coffee
              </h1>
              <p className="text-white mb-7 text-sm md:text-base">
                On the hunt for a place to indulge your craving for caffeine?
                Look to our coffee maker shop for the solution!
              </p>

              <div className="md:w-full">
                <div className=" w-full md:w-full gap-3 mx-auto flex  ">
                  <div className=" sm:px-8 sm:py-4 outline-none  focus:none bg-[#BC9A6C]  py-0 px-4 flex items-center justify-center text-sm transition-all duration-75  rounded-lg text-white hover:bg-[#BC9A6C]/20 cursor-pointer delay-200 xl:px-16 md:text-sm   hover:text-white hover:translate-y-1 ease-out  hover:border-white translate-x-1  capitalize user  ">
                    order now
                  </div>
                  <div className=" px-4 py-1 text-sm outline-none rounded-lg  focus:none border-double border-2  border-[#BC9A6C] flex items-center justify-center  text-[#BC9A6C] hover:bg-[#BC9A6C]/70 cursor-pointer hover:text-white hover:translate-y-1 transition-all ease-out delay-200 hover:border-white translate-x-1 xl:px-16 capitalize">
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
            <h2 className=" text-2xl sm:text-3xl md:text-2xl  xl:text-5xl font-bold font-rails text-lightdark mb-4">
              We are the best quality Coffee maker
            </h2>
            <p className="text-lightdark text-base  mb-5 lg:mb-6 sm:mb-3 sm:w-3/4 md:text-sm lg:text-xl font-light">
              Satisfy your caffeine cravings at our coffee maker shop! We serve
              high-quality specialty drinks crafted by our expert baristas. Come
              in and try our delicious espresso, latte, and more.
            </p>

            <div className=" mb-6 sm:mb-8 ">
              <ul className="space-y-2 text-lightdark ">
                <li className="flex gap-4">
                  <span className="bg-[#edeae3] p-[0.2em]">
                    <BlackCheck />
                  </span>
                  <span className="font-semibold">Experienced Chefs</span>{" "}
                </li>
                <li className="flex gap-4">
                  <span className="bg-[#1b1b19] p-[0.2em]">
                    <WhiteCheck className="text-white" />
                  </span>

                  <span className="font-semibold">Fresh & Organic Foods</span>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="bg-[#edeae3] p-[0.2em]">
                    <BlackCheck />
                  </span>
                  <span className="font-semibold">
                    Different Coffee & Drinks
                  </span>
                </li>
              </ul>
            </div>

            <button className=" p-3 md:py-4 hover:bg-[#927d5f] md:px-14 bg-[#BC9A6C] focus:none outline-none capitalize text-white text-sm md:text-xl font-bold flex items-center justify-center gap-2 rounded-xl">
              <span className="font-light"> learn more</span>
              <span className=" md:text-2xl">&#8594;</span>
            </button>
          </div>
        </div>
      </section>

      <section className=" mt-4 lg:mt-20  bg-[#EDEAE3]/20 py-8 md:p-8">
        <div className=" w-[90%] mx-auto md:w-[75%] lg:w-[95%] xl:w-[75%]">
          <div className="text-center lg:w-[40%] mx-auto w-full">
            <h2 className=" text-4xl  md:text-4xl font-extrabold text-[#333333] text mb-1 capitalize font-rails">
              Coffee Category
            </h2>
            <p className="mb-4 text-base md:text-xl font-medium text-lightdark">
              We offer our customers a choice between six main categories, which
              are...
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

      <section className=" w-full mt-10 md:p-20">
        <div className="text-center md:w-[60%] mx-auto w-full">
          <h2 className=" text-[#333333] text-3xl font-bold text-coffeeBlack mb-1 capitalize font-rails">
            Our Favorites Menu
          </h2>
          <p className=" text-md  md:text-xl text-lightdark text-medium font-medium xl:w-3/5 mx-auto">
            A coffee menu lists the various types of coffee and drinks that our
            coffee shop offers, along with their prices.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row w-full xl:w-[80%] mx-auto p-3 gap-4 lg:mt-6 ">
          <div className=" overflow-x-auto no-scrollbar lg:w-[40%]  ">
            <div className="flex lg:flex-col gap-3 sm:gap-24 lg:gap-5 xl:bg-[#EDEAE3] p-4 w-full ">
              {buttondata.map((buttons) => (
                <Button
                  variant="coffee"
                  size="lg"
                  key={buttons.id}
                  className=" w-[15rem] mx-auto p-0"
                >
                  <div className="flex  items-center gap-3 w-[90%] justify-between">
                    <div className="text-3xl  md:text-4xl w-[20%]  flex justify-center">
                      {buttons.component}
                    </div>
                    <div className="text-center  text-[0.7rem] md:text-base flex ">
                      {buttons.name}
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
          <div className=" w-full mx-auto h-full">
            <div className=" w-full grid grid-cols-2 md:grid-cols-3 h-full gap-5 md:gap-3  mx-auto ">
              <Cofeecard />
              <Cofeecard />
              <Cofeecard />
              <Cofeecard />
              <Cofeecard />
              <Cofeecard />
            </div>

            <Button className="mt-6 bg-coffee-100 hover:bg-coffee-200/60">
              <span className="font-light mr-4 ">check our shop</span>
              <span className=" md:text-2xl">&#8594;</span>
            </Button>
          </div>
        </div>
      </section>

      <section className=" my-10">
        <div className="text-center md:w-[60%] mx-auto w-full">
          <h2 className=" text-[#333333] text-3xl font-bold text-coffeeBlack mb-1 capitalize font-rails">
            Meet our chefs
          </h2>
          <p className=" text-md  md:text-xl text-lightdark text-medium font-medium xl:w-3/5 mx-auto">
            Exploring Culinary Delights: A Chef's Passion for Creating Memorable
            Dining Experiences
          </p>
        </div>

        <div className="flex w-full flex-col mx-auto sm:flex-row sm:flex-wrap lg:w-[80%] gap-4 xl:gap-2 xl:flex-nowrap text-center my-8">
          <div className="mx-auto">
            <img src={chef1} alt="" className="mx-auto" />
            <h3 className="font-bold text-base mt-4">Bulbul Hassan</h3>
            <h2>founder</h2>
          </div>
          <div className="mx-auto">
            <img src={chef2} alt="" className="mx-auto" />
            <h3 className="font-bold text-base mt-4 ">Jorina Begum</h3>
            <h2>specialist</h2>
          </div>
          <div className="mx-auto">
            <img src={chef3} alt="" className="mx-auto" />
            <h3 className="font-bold text-base mt-4">M.Mohammad Nur</h3>
            <h2>Chef</h2>
          </div>
          <div className="mx-auto">
            <img src={chef4} alt="" className="mx-auto" />
            <h3 className="font-bold text-base mt-4">Munna Kathy</h3>
            <h2>owner</h2>
          </div>
        </div>
      </section>

      <section className="lg:w-[80%] mx-auto lg:my-32 ">
        <div className="flex flex-col lg:flex-row ">
          <div className=" relative bg-black/90  w-full lg:w-1/2 p-2">
            <div className="bg-hero  bg-cover absolute h-full w-full top-0 left-0 "></div>
            <div className="text-center">
              <h4 className="text-white mt-4 capitalize">testimonial</h4>
              <h2 className=" text-[#ffffff] text-2xl font-extrabold text-coffeeBlack mb-1 capitalize font-rails">
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
                speed={2500}
                className="w-full sm-h-full md:h-full relative flex items-center justify-start "
              >
                {testimonials.map((testimony) => (
                  <SwiperSlide
                    key={testimony.id}
                    className="transition-all delay-75 ease-in-out mb-4"
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
          <div className=" relative w-full  lg:w-1/2 bg-black/90 mt-1 sm:mt-0">
            <Userefplayer />
          </div>
        </div>
      </section>

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
      </section>

      <section className="my-10 w-full ">
        <div className="text-center md:w-[60%] mx-auto w-full">
          <h2 className=" text-coffee-100 font-mini text-xl font-bold text-coffeeBlack mb-1 capitalize ">
            Partners & Clients
          </h2>
          <p className="text-2xl sm:text-3xl  md:text-4xl text-[#333333] text-medium font-medium mx-auto lg:text-6xl lg:font-bold">
            We work with the best people
          </p>
        </div>

        <div className="flex flex-row w-full md:w-[80%] mx-auto gap-6 items-center justify-center mt-10">
          {sponsors.map((sponsor) => (
            <img
              key={sponsor.id}
              src={sponsor.logo}
              alt="sponsors image"
              className="h-10 w-8 sm:w-10 md:h-24 md:w-24 xl:w-[7rem] lg:h-full"
            />
          ))}
        </div>
      </section>

      <section className="h-[100vh] bg-blue-400"></section>
    </>
  );
};

export default Home;
