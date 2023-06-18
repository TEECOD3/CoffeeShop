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
import { IoIosAdd, IoIosRemove } from "react-icons/io";

const CartForms = (props: any) => {
  const { cartshandle } = props;
  const [itemnumber, setItemNumber] = useState(0);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (itemnumber === 0) {
      return;
    }

    cartshandle(itemnumber);
    setItemNumber(0);
  };

  const decrementHandler = () => {
    setItemNumber(itemnumber - 1);
    if (itemnumber <= 0) {
      setItemNumber(0);
    }
  };

  return (
    <>
      <form className="mt-8 flex max-sm:flex-col" onSubmit={onSubmitHandler}>
        <div className="flex items-center justify-center">
          <ul className="mr-4 mt-2 flex h-12 w-32 items-center justify-between rounded-xl bg-gray-200/40 px-3 max-sm:w-full max-sm:py-1">
            <li>
              <IoIosRemove
                className="cursor-pointer text-2xl  text-black"
                onClick={decrementHandler}
              />
            </li>
            <li className="cursor-default">{itemnumber}</li>
            <li>
              <IoIosAdd
                className="h-14 cursor-pointer p-1 text-3xl font-bold text-black"
                onClick={() => {
                  setItemNumber((prev) => prev + 1);
                }}
              />
            </li>
          </ul>

          <Button className="item-center flex justify-center gap-3 rounded-none bg-black px-4 md:px-10 lg:px-6">
            <ShoppingBag className="w-1/6" />
            <span className="w-4/6 text-[0.7rem] font-bold xl:text-sm">
              add to cart
            </span>
          </Button>
        </div>
      </form>
    </>
  );
};

interface CoffeedetailProps {}

const Coffeedetail: FC<CoffeedetailProps> = () => {
  const [details, setDetails] = useState<any>({});
  const navigate = useNavigate();
  const { id } = useParams();
  const [images, setimage] = useState("");
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const [quantities, setquantities] = useState(1);

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

  const handlerCart = (amount: number) => {
    dispatch(
      addItemToCart({
        id: id,
        name: details.name,
        price: details.newPrice,
        image: details.image.asset.url,
        quantity: amount,
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
      <main className=" bg-[#f6f6f6] py-16 lg:py-20">
        <section className="mx-auto mt-4 xl:w-[80%]">
          <Link
            to="/menu"
            className="mt-6 flex w-32 items-center justify-center gap-x-2 text-sm font-semibold"
          >
            <ArrowLeft /> <span>shop</span>
          </Link>
        </section>
        <section className="mx-auto my-10 flex max-w-7xl flex-col md:flex-row">
          <div className="rightside| h-full w-full md:w-1/2 ">
            <div className=" relative flex  h-[20rem] items-center justify-center px-3 sm:h-[28rem] md:h-[30rem] lg:h-[40rem]">
              {loading ? (
                <p>
                  <Loader2 className="animate-spin" />
                </p>
              ) : (
                <LazyLoadImage
                  effect="blur"
                  src={`${images}`}
                  alt="coffeedetail-image"
                  className={`mx-auto w-2/3  rounded-md bg-cover bg-top object-cover md:h-full md:w-full ${
                    !details.inStock ? "sepia" : "sepia-0"
                  }`}
                />
              )}
            </div>
          </div>

          <div className="leftside| w-full p-3 md:w-1/2">
            <h3 className="my-2 inline-block rounded-md bg-black px-4 py-2 text-sm text-white">
              <span className="capitalize">
                {details.inStock ? "in stock" : " Sold out"}
              </span>
            </h3>

            <h2 className=" mt-4 text-2xl  font-bold capitalize sm:text-3xl lg:text-4xl xl:text-5xl ">
              {details.name}
            </h2>

            <div className="rating| font-nunito mt-4 flex items-center justify-start gap-4 text-lightdark">
              <div className="flex items-center justify-center gap-x-2">
                <BsStar />
                <BsStar />
                <BsStar />
                <BsStar />
                <BsStar />
              </div>

              <h3 className="font-inter border-b-2 border-black text-base font-bold">
                234 reviews
              </h3>
            </div>
            <p className=" my-4 text-sm text-lightdark md:text-base lg:my-6">
              {details.description}
            </p>

            <hr className="text-lightdark" />

            <h3 className=" font-nunito font-nunito my-2 text-2xl font-bold lg:my-3 lg:text-3xl ">
              ${details.oldPrice}
            </h3>

            <div className="cartbutton| my-4 mt-3 flex gap-3">
              <CartForms
                setqunatities={setquantities}
                cartshandle={handlerCart}
              />
            </div>

            <hr />

            <div className="aboutcoffee| mt-2 flex flex-col items-start justify-center space-y-1 font-medium text-black  lg:space-y-3">
              <span className="flex items-center justify-center gap-x-3">
                <BsHeart />
                <span className="fill-red-400 font-bold">add to wishlist</span>
              </span>
              <h3 className="font-medium">
                <span className="font-semibold">category: </span> Espresso
              </h3>
            </div>

            <div className="aboutcoffee| item-center mt-5 flex w-full justify-center gap-x-6  font-medium text-black ">
              <div className="flex items-center justify-center gap-x-3">
                <HiOutlineTruck />
                <span className="font-bold"> Free shippimg</span>
              </div>
              <div className="flex items-center justify-center gap-x-3 font-medium">
                <GiClockwork />
                <span className="font-semibold">cancel anytime </span>
              </div>
            </div>
          </div>
        </section>

        <section className="similarProducts| relative mx-auto my-20 w-[80%] ">
          <h4 className="mb-4 font-bold text-black md:text-xl ">
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
                <div className="group relative z-20 w-full cursor-pointer transition delay-75 duration-100 hover:scale-[1.02] lg:mb-4 ">
                  <div className="relative h-[200px] w-full">
                    <img
                      src={cofee.image}
                      alt="coffeedetail"
                      className="mx-auto max-h-[200px] min-h-[150px] bg-cover bg-top object-cover"
                    />
                  </div>
                  <div className="absolute  -right-11  top-3  opacity-0 transition-all duration-300 group-hover:right-2 group-hover:opacity-100 ">
                    <button className="flex flex-col items-center  justify-center gap-2 md:gap-4">
                      <div className=" flex items-center justify-center rounded-lg  bg-black p-4 text-lightdark shadow-lg ">
                        <ShoppingBagIcon className="h-4 w-4 text-white md:h-6 md:w-6" />
                      </div>

                      <Link
                        to="/menu/:id"
                        className=" flex items-center justify-center rounded-lg bg-black p-4 text-lightdark shadow-lg "
                      >
                        <EyeIcon className="h-4 w-4 text-white md:h-6 md:w-6" />
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
