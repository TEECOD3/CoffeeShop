import React from "react";
import Input from "../../Components/Forms/Inputfield";
import Button from "../../Components/UI/Button";
import { ArrowBack } from "@mui/icons-material";
import CheckoutItem from "./CheckoutItem";
import { ArrowDown, ArrowRight } from "lucide-react";

const Checkoutpage = () => {
  return (
    <div className=" py-24 lg:py-48 mb-10">
      <h4 className="font-bold  mb-4 capitalize text-base px-2 ">
        <span> shipping address</span> <ArrowDown className="animate-bounce" />
      </h4>
      <div className=" w-full md:max-w-6xl mx-auto flex flex-col-reverse md:flex-row lg:px-2  space-y-2 md:justify-between gap-3">
        <div className="md:flex-[2] lg:p-3">
          <form action="">
            <div className="onerow flex justify-between items-center md:gap-4 flex-col md:flex-row">
              <div className="inputcontrol w-[90%] md:w-1/2">
                <label className="text-sm font-semibold capitalize " htmlFor="">
                  firstname
                </label>
                <Input />
              </div>
              <div className="inputcontrol w-[90%]  md:w-1/2">
                <label className="text-sm font-semibold capitalize " htmlFor="">
                  lastname
                </label>
                <Input />
              </div>
            </div>

            <div className="onerow flex justify-between items-center md:gap-4 flex-col md:flex-row">
              <div className="inputcontrol w-[90%]  md:w-1/2">
                <label className="text-sm font-semibold capitalize " htmlFor="">
                  email address
                </label>
                <Input />
              </div>
              <div className="inputcontrol w-[90%]  md:w-1/2">
                <label className="text-sm font-semibold capitalize " htmlFor="">
                  phone number
                </label>
                <Input />
              </div>
            </div>

            <div className="onerow flex justify-between items-center md:gap-4 flex-col md:flex-row">
              <div className="inputcontrol w-[90%]  md:w-1/2">
                <label className="text-sm font-semibold capitalize " htmlFor="">
                  company
                </label>
                <Input />
              </div>
              <div className="inputcontrol w-[90%]  md:w-1/2">
                <label className="text-sm font-semibold capitalize " htmlFor="">
                  country
                </label>

                <select
                  className="w-full p-2 border-coffee-100 text-sm font-semibold text-lightdark border-[1px] rounded-md"
                  name="countrynames"
                  id="countrynames"
                >
                  <option
                    className="text-sm font-semibold "
                    value="choose country"
                  >
                    choose country
                  </option>
                  <option value="zimbabawe">zimbabawe</option>
                  <option value="south africa">south africa</option>
                </select>
              </div>
            </div>

            <div className="onerow flex justify-between items-center md:gap-4 flex-col md:flex-row">
              <div className="inputcontrol w-[90%]  md:w-1/2">
                <label className="text-sm font-semibold capitalize " htmlFor="">
                  city
                </label>
                <select
                  className="w-full p-2 border-coffee-100 border-[1px] text-sm font-semibold text-lightdark rounded-md"
                  name="countrynames"
                  id="countrynames"
                >
                  <option value="choose city">choose city</option>
                  <option value="abuja">abuja</option>
                  <option value="kano">kano</option>
                </select>
              </div>
              <div className="inputcontrol w-[90%]  md:w-1/2">
                <label className="text-sm font-semibold capitalize " htmlFor="">
                  zip code
                </label>
                <Input />
              </div>
            </div>

            <div className="onerow flex justify-between items-center md:gap-4 flex-col md:flex-row">
              <div className="inputcontrol w-[90%]  md:w-1/2">
                <label className="text-sm font-semibold capitalize " htmlFor="">
                  address 1
                </label>
                <Input />
              </div>
              <div className="inputcontrol  w-[90%] md:w-1/2">
                <label className="text-sm font-semibold capitalize " htmlFor="">
                  address 2
                </label>
                <Input />
              </div>
            </div>
          </form>

          <div className="">
            <h4 className="px-2 font-bold text-base  capitalize mt-3">
              billing address
            </h4>
            <div className="flex w-[12rem] items-center justify-center gap-0 mt-1">
              <Input inputs={{ type: "checkbox" }} className="h-3 w-3" />
              <label htmlFor="" className="font-bold text-sm text-lightdark ">
                same as shipping address?
              </label>
            </div>
          </div>

          <div className="w-full flex gap-3 md:gap-6 lg:gap-10 mt-3  flex-col lg:flex-row">
            <Button
              variant="ghost"
              className="w-2/3 mx-auto md:w-1/2 flex gap-x-3 border-2 border-coffee-100 text-sm font-semibold "
            >
              <ArrowBack /> back to cart
            </Button>
            <Button className=" w-2/3 mx-auto md:w-1/2 text-sm font-semibold ">
              proceed to shipping
            </Button>
          </div>
        </div>
        <div className="md:w-[25rem] border-[1px] ">
          <div className="">
            <CheckoutItem />
            <CheckoutItem />
            <CheckoutItem />
            <CheckoutItem />
          </div>

          <div className="capitalize font-nunito font-bold ">
            <div className="flex justify-between w-full p-2 font-semibold text-sm text-gray-500">
              <h2>subtotal </h2> <span>$130</span>
            </div>
            <div className="flex justify-between w-full p-2 font-semibold text-sm text-gray-500">
              <h2>shipping </h2> <span>$130</span>
            </div>
            <div className="flex justify-between w-full p-2 font-semibold text-sm text-gray-500">
              <h2>discount</h2> <span>$130</span>
            </div>
            <div className="flex justify-between w-full p-2 font-semibold text-sm text-gray-500">
              <h2>tax </h2> <span>$130</span>
            </div>
            <div className="h-[1px]  w-full bg-gray-400 mt-3"></div>

            <div className="flex captalize font-nunito justify-between w-full p-4 font-semibold text-sm text-gray-500">
              <h2 className="capitalize font-nunito">total </h2>
              <span className="text-xl">$130.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkoutpage;
