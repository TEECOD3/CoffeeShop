import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import image from "../../../Data/images/Brewedlarge/BRW8.jpg";
import {
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Minus,
  ShoppingBag,
  Star,
  Twitter,
} from "lucide-react";
import { Add } from "@mui/icons-material";
import { BsHeart, BsStar } from "react-icons/bs";
import Button from "../../../Components/UI/Button";

interface CoffeedetailProps {}

const Coffeedetail: FC<CoffeedetailProps> = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <section className=" py-24">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto my-10">
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
            <h3 className="px-4 py-2 text-white text-sm bg-coffee-100 inline-block rounded-md">
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
              <div className="flex border-2 border-lightdark px-4 w-[10rem] items-center justify-center ">
                <button className="p-2 px-4 text-2xl flex item-center ">
                  <Minus />
                </button>
                <span className="p-1 px-4 text-2xl flex items-center border-l-2 border-lightdark border-r-2">
                  1
                </span>
                <button className="p-2 px-4 text-2xl flex items-center">
                  <Add />
                </button>
              </div>

              <Button className="flex rounded-none bg-coffee-100 px-6 md:px-10 item-center justify-center gap-3">
                <ShoppingBag className="w-1/6" />
                <span className="text-[0.7rem] xl:text-sm w-4/6">
                  add to cart
                </span>
              </Button>
            </div>

            <hr />

            <div className="aboutcoffee| mt-2 flex items-start flex-col space-y-1 lg:space-y-3 text-lightdark font-medium">
              <span className="flex items-center justify-center gap-3">
                <BsHeart /> <span>add to wishlist</span>
              </span>
              <h3>category: espresso</h3>
              <h3>tag: our shop</h3>
              <div className="flex gap-1">
                <span>share: </span>
                <div className="flex gap-3 text-2xl">
                  <Facebook className="text-2xl" />
                  <Twitter />
                  <Instagram />
                  <Linkedin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Coffeedetail;
