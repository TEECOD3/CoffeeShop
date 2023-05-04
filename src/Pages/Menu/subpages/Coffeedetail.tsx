import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import image from "../../../Data/images/Brewedlarge/BRW8.jpg";
import image2 from "../../../Data/images/Brewedlarge/BRW7.jpg";
import { useSwiper } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import {
  ArrowRight,
  EyeIcon,
  Facebook,
  Instagram,
  Linkedin,
  Minus,
  ShoppingBag,
  Twitter,
} from "lucide-react";
import { Add } from "@mui/icons-material";
import { BsHeart, BsStar } from "react-icons/bs";
import Button from "../../../Components/UI/Button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { coffeedets } from "../../../Data/Cofee";

interface CoffeedetailProps {}

const Coffeedetail: FC<CoffeedetailProps> = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const swiper = useSwiper();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <main className=" py-16 lg:py-20">
        <section className="flex flex-col md:flex-row max-w-7xl mx-auto my-10">
          <div className="rightside| w-full md:w-1/2 h-full ">
            <div className=" h-[20rem]  sm:h-[30rem] md:h-[35rem] lg:h-[40rem] px-3">
              <img
                src={image}
                alt="coffeedetail image"
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
                <BsHeart />{" "}
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

        <section className="similarProducts| my-20 relative w-[80%] mx-auto">
          <div className="">
            <div className="flex justify-between w-full mb-4 items-center">
              <h4 className="font-bold text-lightdark text-sm md:text-2xl flex items-center  capitalize">
                <div className="">
                  <span>similar coffee categories</span> <ArrowRight />
                </div>
              </h4>
              <div className="flex gap-4">
                <button
                  className="p-2 border-2 rounded-full "
                  onClick={() => swiper.slidePrev()}
                >
                  <ArrowLeft />
                </button>
                <button
                  className="p-2 border-2 rounded-full"
                  onClick={() => swiper.slideNext()}
                >
                  <ArrowRight />
                </button>
              </div>
            </div>

            <div>
              <div className="">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  slidesPerView={4}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  speed={2500}
                  className=""
                >
                  {coffeedets.map((coffee) => (
                    <SwiperSlide className="container|bg-red-200">
                      <div
                        key={coffee.id}
                        className="relative md:w-[20rem] bg-red-400 h-[20rem] cursor-pointer z-20 hover:scale-[1.02] transition duration-100 delay-75 group "
                      >
                        <div className="absolute h-full w-full bg-black/20 opacity-0 group-hover:opacity-100"></div>
                        <img
                          src={coffee.image}
                          alt=""
                          className="h-full object-cover w-full bg-red-700"
                        />
                        <div className="button| absolute p-2  w-1/2 flex items-center justify-center  gap-4 top-1/2 left-[40%] md:left-1/2 -translate-x-1/2 -translate-y-1/2  opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-300 ">
                          <div className=" p-1 lg:p-3 bg-white rounded-full flex items-center justify-center">
                            <ShoppingBag className="h-4 w-4 lg:h-full lg:w-full  " />
                          </div>
                          <div className=" p-1 lg:p-3 bg-white rounded-full flex items-center justify-center">
                            <EyeIcon
                              className="h-4 w-4 lg:h-full lg:w-full animate-pulse  "
                              onClick={() => {
                                navigate("/menu/:id");
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Coffeedetail;

// {
//   coffeedets.map((cofee, i) => (

//   ));
// }
