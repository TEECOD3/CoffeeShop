import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Outlet, useLocation } from "react-router-dom";
import image from "../../../Data/images/mainimages/matte-coffee-bag-mockup-template-removebg-preview.png";

import {
  ArrowLeft,
  ArrowRight,
  EyeIcon,
  Facebook,
  Instagram,
  Linkedin,
  Minus,
  ShoppingBag,
  ShoppingBagIcon,
  Twitter,
} from "lucide-react";
import { Add } from "@mui/icons-material";
import { BsHeart, BsStar } from "react-icons/bs";
import Button from "../../../Components/UI/Button";
import { useNavigate } from "react-router-dom";
import { coffeedets } from "../../../Data/Cofee";
import SwipperNavbuttons from "../Components/swipperbuttons";
import { Link } from "react-router-dom";

interface CoffeedetailProps {}

const Coffeedetail: FC<CoffeedetailProps> = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const breakpoints = {
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main className=" py-16 lg:py-20">
        <section className="xl:w-[80%] mx-auto mt-4">
          <Link
            to="/menu"
            className="flex text-sm w-32 gap-x-4 items-center justify-center font-semibold "
          >
            <ArrowLeft /> <span>back to shop</span>
          </Link>
        </section>
        <section className="flex flex-col md:flex-row max-w-7xl mx-auto my-10">
          <div className="rightside| w-full md:w-1/2 h-full ">
            <h4 className="text-3xl font-bold px-2 text-lightdark">
              Coffee details
            </h4>
            <div className=" h-[20rem]  sm:h-[30rem] md:h-[35rem] lg:h-[40rem] px-3">
              <img
                src={image}
                alt="coffeedetail-image"
                className="object-cover h-full bg-cover w-full rounded-md"
              />
            </div>
          </div>

          <div className="leftside| w-full md:w-1/2 p-3">
            <h3 className="px-4 py-2  my-2 text-white text-sm bg-coffee-100 inline-block rounded-md">
              in stock
            </h3>
            <h2 className=" text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold capitalize ">
              espresso coffee delicous
            </h2>
            <p className=" my-4 lg:my-6 text-lightdark text-sm md:text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              voluptatibus vel perferendis, consectetur reiciendis, maiores
              fugiat corporis exercitationem aperiam distinctio asperiores ut
              veniam architecto obcaecati vero et temporibus possimus assumenda?
              Distinctio in officiis autem cupiditate facere ea, molestiae
              similique provident. Repellendus perspiciatis laborum,
            </p>

            <hr className="text-lightdark" />

            <h3 className=" text-2xl lg:text-3xl font-nunito font-bold my-2 lg:my-3">
              $52.00
            </h3>
            <div className="rating| flex text-lightdark gap-4 items-center justify-start font-nunito">
              <div className="flex items-center justify-center">
                <BsStar />
                <BsStar />
                <BsStar />
                <BsStar />
                <BsStar />
              </div>
              <h5>| 5.0 rating |</h5>
              <h5>22 review</h5>
            </div>

            <div className="cartbutton| mt-3 flex gap-3 my-4">
              <div className="flex border-2 border-lightdark md:px-4 md:w-[10rem] items-center justify-center ">
                <button className="p-2 md:px-4 text-2xl flex item-center ">
                  <Minus />
                </button>
                <span className="p-1 px-3 md:px-4 text-2xl flex items-center border-l-2 border-lightdark border-r-2">
                  1
                </span>
                <button className="p-2 md:px-4 text-2xl flex items-center">
                  <Add />
                </button>
              </div>

              <Button className="flex rounded-none bg-coffee-100 px-4 lg:px-6 md:px-10 item-center justify-center gap-3">
                <ShoppingBag className="w-1/6" />
                <span className="text-[0.7rem] xl:text-sm w-4/6">
                  add to cart
                </span>
              </Button>
            </div>

            <hr />

            <div className="aboutcoffee| mt-2 flex items-start flex-col space-y-1 lg:space-y-3 text-lightdark font-medium">
              <span className="flex items-center justify-center gap-1">
                <BsHeart />
                <span className="font-bold fill-red-400">add to wishlist</span>
              </span>
              <h3 className="font-medium">
                <span className="font-semibold">category: </span> espresso
              </h3>
              <h3>
                <span className="font-semibold">tag: </span> our shop
              </h3>
              <div className="flex gap-1">
                <span className="font-semibold">share: </span>
                <div className="flex gap-3 text-2xl">
                  <Facebook className="text-2xl" />
                  <Twitter />
                  <Instagram />
                  <Linkedin />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-10">
          <Button
            onClick={() => {
              navigate("/menu/:id");
            }}
            className="bg-blue-300 rounded-none capitalize mb-4 ml-2 xl:ml-8"
          >
            description
          </Button>
          <Button
            onClick={() => {
              navigate("reviews");
            }}
            className="rounded-none capitalize mb-4"
          >
            review (24)
          </Button>
          <div className="w-full">
            <Outlet />
          </div>
        </section>

        <section className="similarProducts| my-20 relative w-[80%] mx-auto ">
          <h4 className="font-bold text-lightdark md:text-xl mb-4 ">
            Other Collections You May Like
          </h4>

          <Swiper
            centeredSlides={true}
            loop={true}
            loopedSlides={4}
            breakpoints={breakpoints}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            effect="fade"
            modules={[Autoplay, Pagination, Navigation]}
            speed={1000}
            className="relative"
          >
            <SwipperNavbuttons className="mt-4" />
            {coffeedets.map((cofee) => (
              <SwiperSlide key={cofee.id}>
                <div className="relative w-full lg:mb-4 cursor-pointer z-20 hover:scale-[1.02] transition duration-100 delay-75 group ">
                  <div className="w-full relative">
                    <img
                      src={cofee.image}
                      alt="coffeedetail"
                      className=" w-full h-[20rem] object-cover md:w-[25rem]"
                    />
                  </div>
                  <div className="absolute  top-3  -right-11  opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-300 ">
                    <button className="flex items-center justify-center  flex-col gap-2 md:gap-4">
                      <div className=" flex justify-center items-center text-lightdark  shadow-lg bg-coffee-100/90 p-4 rounded-lg ">
                        <ShoppingBagIcon className="h-4 w-4 md:h-6 md:w-6 text-white" />
                      </div>

                      <Link
                        to="/menu/:id"
                        className=" flex justify-center items-center text-lightdark shadow-lg bg-coffee-100/90 p-4 rounded-lg "
                      >
                        <EyeIcon className="h-4 w-4 md:h-6 md:w-6 text-white" />
                      </Link>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>
    </>
  );
};

export default Coffeedetail;
