import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Menucards from "./Components/MenuCards";
import { FaArrowDown } from "react-icons/fa";
import Input from "../../Components/Forms/Inputfield";
import Filtercheckboxes from "./Components/filtercheckboxes";
import { EyeIcon, Search, ShoppingBagIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import SwipperNavbuttons from "./Components/swipperbuttons";
import { filterButtons } from "../../Data/Cofee";
import { client, urlFor } from "../../client";
import Loader from "../../Components/UI/Loader";

const Menu = () => {
  const [Categories, setCategories] = useState<any[]>([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    client
      .fetch(
        `*[_type == "coffeeProduct"]{
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
  // console.log(Categories);
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

  const navigate = useNavigate();
  return (
    <>
      <AnimatePresence>
        <motion.div
          className="h-full w-full px-1 py-28 xl:px-0 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ y: 0 }}
          transition={{
            duration: 0.2,
            delay: 0.3,
          }}
        >
          <div className="mx-auto flex w-[95%] flex-col  gap-2 md:max-w-7xl  md:px-2">
            <main className="h-full w-full">
              <div className="item-center justify-left mb-6 flex text-base font-bold capitalize sm:text-xl md:w-4/12">
                <h4 className="">All collections </h4>
                <span className="flex-cols ml-2 flex items-center justify-center text-xl font-extrabold">
                  <FaArrowDown className="animate-bounce" />
                </span>
              </div>
              <div className="mx-auto h-full  w-full">
                <div className="flex  flex-col-reverse gap-16 lg:flex-row">
                  <div className=" mx-auto flex  w-[98%] flex-col border-2 p-2 lg:flex-col xl:w-[90%]">
                    <div className="mx-auto grid w-full grid-cols-2 gap-3 md:grid-cols-3">
                      {loading
                        ? [1, 2, 3, 8, 5, 6, 7, 7, 8, 11, 19, 23].map(
                            (stuff) => (
                              <div className="group skeleton bg-black/30 relative z-20 w-full cursor-pointer  p-2 transition delay-200 duration-300 animate-pulse tlg:mb-4 ">
                                <div className=" relative mx-auto md:w-[200px]">
                                  <div className="  flex items-center justify-center ">
                                    <div className="mx-auto max-h-[150px] min-h-[150px] bg-cover bg-top object-cover" />
                                  </div>
                                </div>
                              </div>
                            )
                          )
                        : Categories.map((coffee) => (
                            <Menucards
                              image={coffee.image}
                              coffeename={coffee.name}
                              oldprice={coffee.oldPrice}
                              newprice={coffee.newPrice}
                              loading={loading}
                            />
                          ))}
                    </div>
                  </div>
                  <div className=" border-2 p-4 lg:h-[30rem]  lg:w-[30%] xl:w-[20%]">
                    <div className="relative flex sm:w-1/2  lg:w-full">
                      <Input
                        inputs={{
                          type: "text",
                          placeholder: "search category",
                        }}
                        className=" border-coffee-100 bg-white"
                      />
                      <div className="absolute right-0 top-0 flex h-full items-center justify-center bg-coffee-100 p-2 focus:border-coffee-100 focus:ring-coffee-100">
                        <Search className="" />
                      </div>
                    </div>

                    <div className="category| mt-4">
                      <h5 className="font-bold text-lightdark">Category</h5>
                      <div>
                        <div className="mt-3 flex  w-full flex-wrap gap-2  lg:w-3/6  lg:flex-col">
                          {filterButtons.map((buttondata) => (
                            <Filtercheckboxes
                              filterName={buttondata.name}
                              key={buttondata.id}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="filter-by-price | mt-6 flex flex-col items-start justify-start gap-2">
                      <h5 className="font-bold capitalize text-lightdark">
                        filter by price
                      </h5>

                      <form className="flex flex-col">
                        <Input
                          inputs={{
                            type: "range",
                            id: "pricefilter",
                            min: "0",
                            max: "800",
                          }}
                          className="range  border-1 h-[0.3rem] appearance-none border-coffee-100 bg-coffee-100  text-coffee-100"
                        />
                        <label
                          htmlFor="pricefilter "
                          className=" font-nunito  font-bold text-lightdark"
                        >
                          from $0 to $800
                        </label>
                      </form>
                    </div>
                  </div>
                </div>

                <section className="similarProducts| relative mx-auto  my-20 ">
                  <h4 className="mb-4 font-bold text-lightdark md:text-xl ">
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
                    className="relative xl:w-[90%]"
                  >
                    <SwipperNavbuttons className="mt-4" />
                    {Categories.map((cofee, index) => (
                      <SwiperSlide key={index}>
                        <div className="group relative z-20 w-full cursor-pointer transition delay-75 duration-100 hover:scale-[1.09] lg:mb-4 ">
                          {loading ? (
                            Array(10)
                              .fill(9)
                              .map((box, I) => (
                                <div
                                  className="relative flex h-[250px] items-center justify-center bg-black/20 "
                                  key={I}
                                >
                                  <Loader className="text-black" />
                                </div>
                              ))
                          ) : (
                            <div className=" relative flex h-[250px] items-center justify-center ">
                              <img
                                src={urlFor(cofee.image).url()}
                                alt="coffeedetail"
                                className="max-h-[200px] bg-contain object-cover "
                              />

                              <div className="absolute  -right-10  top-3  opacity-0 transition-all duration-300 group-hover:right-2 group-hover:opacity-100 ">
                                <button className="flex flex-col items-center  justify-center gap-2 md:gap-4">
                                  <div className=" flex items-center justify-center rounded-lg  bg-coffee-100/90 p-4 text-lightdark shadow-lg ">
                                    <ShoppingBagIcon className="h-4 w-4 text-white md:h-6 md:w-6" />
                                  </div>

                                  <Link
                                    to="/menu/:id"
                                    className=" flex items-center justify-center rounded-lg bg-coffee-100/90 p-4 text-lightdark shadow-lg "
                                  >
                                    <EyeIcon className="h-4 w-4 text-white md:h-6 md:w-6" />
                                  </Link>
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </section>
              </div>
            </main>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Menu;
