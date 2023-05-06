import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Menucards from "./Components/MenuCards";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import Input from "../../Components/Forms/Inputfield";
import Filtercheckboxes from "./Components/filtercheckboxes";
import { Search } from "lucide-react";
import image from "../../assets/Images/milkshake.png";
import { AnimatePresence, motion } from "framer-motion";

const Menu = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navigate = useNavigate();
  return (
    <>
      <AnimatePresence>
        <motion.div
          className="py-28 h-full w-full px-1 xl:px-0 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ y: 0 }}
          transition={{
            duration: 0.2,
            delay: 0.3,
          }}
        >
          <div className="flex flex-col w-full md:max-w-7xl lg:max-w-[80%] mx-auto gap-2  md:px-2">
            <main className="w-full h-full">
              <div className="mb-6  md:w-4/12 capitalize text-base sm:text-xl font-bold flex item-center justify-left">
                <h4 className="">All Menu </h4>
                <span className="font-extrabold text-xl ml-2 flex items-center justify-center">
                  <FaArrowDown className="animate-bounce" />
                </span>
              </div>
              <div className="w-full mx-auto  h-full flex flex-col-reverse lg:flex-row gap-16 justify-center">
                <div className="flex  lg:flex-col flex-col-reverse lg:w-[70%] border-2 p-2">
                  <div className="grid-cols-2 grid md:grid-cols-3 gap-3">
                    <Menucards />
                    <Menucards />
                    <Menucards />
                    <Menucards />
                    <Menucards />
                    <Menucards />
                    <Menucards />
                    <Menucards />
                  </div>
                </div>

                <div className=" lg:w-[30%] xl:w-[20%] border-2  lg:h-[30rem] p-4">
                  <div className="flex relative sm:w-1/2  lg:w-full">
                    <Input
                      inputs={{
                        type: "text",
                        placeholder: "search category",
                      }}
                      className=" border-coffee-100 bg-white"
                    />
                    <div className="bg-coffee-100 absolute p-2 flex focus:ring-coffee-100 focus:border-coffee-100 items-center justify-center right-0 top-0 h-full">
                      <Search className="" />
                    </div>
                  </div>

                  <div className="category| mt-4">
                    <h5 className="font-bold text-lightdark">Category</h5>
                    <div>
                      <div className="flex lg:flex-col  lg:w-3/6 mt-3 flex-wrap  w-full  gap-2">
                        <Filtercheckboxes />
                        <Filtercheckboxes />
                        <Filtercheckboxes />
                        <Filtercheckboxes />
                        <Filtercheckboxes />
                      </div>
                    </div>
                  </div>

                  <div className="filter-by-price | mt-6 flex flex-col items-start justify-start gap-2">
                    <h5 className="font-bold text-lightdark capitalize">
                      filter by price
                    </h5>

                    <form className="">
                      <Input
                        inputs={{
                          type: "range",
                          id: "pricefilter",
                          min: "0",
                          max: "8000",
                        }}
                        className="text-coffee-100  bg-coffee-100 range border-coffee-100 appearance-none border-1  h-[0.3rem]"
                      />
                      <label
                        htmlFor="pricefilter "
                        className=" text-lightdark  font-nunito font-bold"
                      >
                        from $0 to $8000
                      </label>
                    </form>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Menu;
