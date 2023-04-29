import React from "react";
import Coffeelogo from "../Pages/Home/icon/coffelogo";
import { GiPhone } from "react-icons/gi";
import {
  MdOutlineLocationOn,
  MdOutlineEmail,
  MdPunchClock,
} from "react-icons/md";
import { Clock10, LocateIcon, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full h-full relative">
      {/* <div className="bg-blackcoffee bg-center object-cover  bg-cover bg-no-repeat absolute h-full w-full top-0 left-0 bg-black/20"></div> */}
      <div className=" flex flex-col relative  md:flex-row py-10 px-4 justify-around items-center h-full bg-black/90  w-full  text-white text-sm md:text-base">
        <div className="bg-blackcoffee opacity-20  z-[1] bg-center object-cover  bg-cover bg-no-repeat absolute h-full w-full top-0 left-0"></div>
        <div className="w-full md:w-1/5  z-30 ">
          <div className="">
            <Coffeelogo className=" h-16 w-16  sm:h-20 sm:w-20 " />
          </div>
          <p className="mt-4">
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old.
          </p>
        </div>

        <div className=" z-30 w-full  mt-4 p-5 md:w-1/5 capitalize">
          <h3 className="font-bold">Explore</h3>

          <div className="flex justify-between w-full">
            <ul className="space-y-4 mt-4">
              <li>home</li>
              <li>about us</li>
              <li>contact us</li>
            </ul>
            <ul className="space-y-4 mt-4">
              <li>blog</li>
              <li>team</li>
              <li>our menu</li>
            </ul>
          </div>
        </div>
        <div className=" z-30 w-full mt-8 md:w-1/5 ">
          <ul className="space-y-6">
            <li className="flex gap-2 ">
              <span>
                <LocateIcon />
              </span>
              Kolkata India , 3rd Floor, Office 45
            </li>
            <li className="flex gap-2">
              <span>
                <Phone />
              </span>
              00965 - 96659986
            </li>
            <li className="flex gap-2">
              <span>
                <Mail />
              </span>
              M.Alyaqout@4house.Co
            </li>
            <li className="flex gap-2">
              <span>
                <Clock10 />
              </span>
              Sun - Sat / 10:00 AM - 8:00 PM
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
