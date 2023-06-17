import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Outlet, useLocation, useParams } from "react-router-dom";
import image from "../../../Data/images/mainimages/matte-coffee-bag-mockup-template-removebg-preview.png";
import {
  ArrowLeft,
  ArrowRight,
  EyeIcon,
  Facebook,
  Instagram,
  Linkedin,
  Loader2,
  LoaderIcon,
  LucideLoader2,
  Minus,
  ShoppingBag,
  ShoppingBagIcon,
  Twitter,
} from "lucide-react";
import { Add, Details } from "@mui/icons-material";
import { BsHeart, BsStar } from "react-icons/bs";
import Button from "../../../Components/UI/Button";
import { useNavigate } from "react-router-dom";
import { coffeedets } from "../../../Data/Cofee";
import SwipperNavbuttons from "../Components/swipperbuttons";
import { Link } from "react-router-dom";
import { client } from "../../../client";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../../Store/Slices/cartslice";
import { HiOutlineTruck } from "react-icons/hi";
import { GiClockwork } from "react-icons/gi";

interface CoffeedetailProps {}

const Coffeedetail: FC<CoffeedetailProps> = () => {
  const { pathname } = useLocation();
  const [details, setDetails] = useState<any>({});
  const navigate = useNavigate();
  const { id } = useParams();
  const [images, setimage] = useState("");
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setloading(true);
    client
      .fetch(
        `*[_type == 'coffeeProduct' && slug.current == '${id}'] {
          name,
          image {
            asset-> {
              _id,
              url
            }
          },
          oldPrice,
          newPrice,
          inStock,
          slug,
          rating,
          description
        }[0]`
      )
      .then((data) => {
        setloading(false);
        setDetails(data);
        setimage(data.image.asset.url);
      })
      .catch(console.error);
  }, [id]);

  const handlerCart = () => {
    dispatch(
      addItemToCart({
        id: id,
        name: details.name,
        price: details.newPrice,
        image: details.image.asset.url,
      })
    );
  };

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
      <main className=" py-16 lg:py-20 bg-[#f6f6f6]">
        <section className="xl:w-[80%] mx-auto mt-4">
          <Link
            to="/menu"
            className="flex text-sm w-32 gap-x-4 items-center justify-center font-semibold "
          >
            <ArrowLeft /> <span>shop</span>
          </Link>
        </section>
        <section className="flex flex-col md:flex-row max-w-7xl mx-auto my-10">
          <div className="rightside| w-full md:w-1/2 h-full ">
            <div className=" h-[20rem] relative  sm:h-[28rem] md:h-[30rem] lg:h-[40rem] px-3 flex items-center justify-center">
              {loading ? (
                <p>
                  <Loader2 className="animate-spin" />
                </p>
              ) : (
                <LazyLoadImage
                  effect="blur"
                  src={`${images}`}
                  alt="coffeedetail-image"
                  className={`object-cover w-2/3  md:h-full md:w-full rounded-md mx-auto bg-cover bg-top ${
                    !details.inStock ? "sepia" : "sepia-0"
                  }`}
                />
              )}
            </div>
          </div>

          <div className="leftside| w-full md:w-1/2 p-3">
            <h3 className="px-4 py-2 my-2 text-white text-sm bg-black inline-block rounded-md">
              <span className="capitalize">
                {details.inStock ? "in stock" : " Sold out"}
              </span>
            </h3>

            <h2 className=" text-2xl mt-4  sm:text-3xl lg:text-4xl xl:text-5xl font-bold capitalize ">
              {details.name}
            </h2>

            <div className="rating| flex text-lightdark gap-4 items-center justify-start font-nunito mt-4">
              <div className="flex items-center justify-center gap-x-2">
                <BsStar />
                <BsStar />
                <BsStar />
                <BsStar />
                <BsStar />
              </div>

              <h3 className="text-base font-bold border-b-2 border-black font-inter">
                234 reviews
              </h3>
            </div>
            <p className=" my-4 lg:my-6 text-lightdark text-sm md:text-base">
              {details.description}
            </p>

            <hr className="text-lightdark" />

            <h3 className=" text-2xl lg:text-3xl font-nunito font-bold my-2 lg:my-3 font-nunito ">
              ${details.oldPrice}
            </h3>

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

              <Button className="flex rounded-none bg-black px-4 lg:px-6 md:px-10 item-center justify-center gap-3">
                <ShoppingBag className="w-1/6" />
                <span
                  className="text-[0.7rem] xl:text-sm w-4/6 font-bold"
                  onClick={handlerCart}
                >
                  add to cart
                </span>
              </Button>
            </div>

            <hr />

            <div className="aboutcoffee| mt-2 flex items-start justify-center flex-col space-y-1 lg:space-y-3 text-black  font-medium">
              <span className="flex items-center justify-center gap-x-3">
                <BsHeart />
                <span className="font-bold fill-red-400">add to wishlist</span>
              </span>
              <h3 className="font-medium">
                <span className="font-semibold">category: </span> Espresso
              </h3>
            </div>

            <div className="aboutcoffee| flex item-center justify-center gap-x-6 mt-4 text-black  font-medium w-full ">
              <div className="flex items-center justify-center gap-x-3">
                <HiOutlineTruck />
                <span className="font-bold"> Free shippimg</span>
              </div>
              <div className="font-medium flex items-center justify-center gap-x-3">
                <GiClockwork />
                <span className="font-semibold">cancel anytime </span>
              </div>
            </div>
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
                  <div className="w-full relative h-[200px]">
                    <img
                      src={cofee.image}
                      alt="coffeedetail"
                      className="mx-auto max-h-[200px] min-h-[150px] bg-cover bg-top object-cover"
                    />
                  </div>
                  <div className="absolute  top-3  -right-11  opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-300 ">
                    <button className="flex items-center justify-center  flex-col gap-2 md:gap-4">
                      <div className=" flex justify-center items-center text-lightdark  shadow-lg bg-black p-4 rounded-lg ">
                        <ShoppingBagIcon className="h-4 w-4 md:h-6 md:w-6 text-white" />
                      </div>

                      <Link
                        to="/menu/:id"
                        className=" flex justify-center items-center text-lightdark shadow-lg bg-black p-4 rounded-lg "
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
