import React from "react";
import Coffeelogo from "../Pages/Home/icon/coffelogo";
import { GiPhone } from "react-icons/gi";
import {
  MdOutlineLocationOn,
  MdOutlineEmail,
  MdPunchClock,
} from "react-icons/md";
import {
  Clock10,
  Facebook,
  Instagram,
  LocateIcon,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Button from "../Components/UI/Button";

const Footer = () => {
  return (
    <footer className="w-full  relative bottom-0 left-0 mt-auto">
      <div className=" flex flex-col relative  md:flex-row py-10 px-4 justify-around items-center h-full bg-black/90  w-full  text-white text-sm md:text-base">
        <div className="bg-white z-[900] py-4 rounded-lg h-[12rem] shadow-2xl absolute -top-24 mx-auto w-[90%] md:w-2/3 px-4 text-black flex flex-col items-center justify-center xl:flex-row">
          <h2 className="w-full text-center text-xl pt-4 font-bold  lg:text-3xl">
            Subscribe To Our Newsletter
          </h2>
          <div className="w-full mt-3 flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Enter email .."
              className="w-full border-2 rounded-lg  border-coffee-100 p-3  md:w-[60%] mr-1 "
            />
            <Button
              variant="ghost"
              className="w-2/4 text-sm mt-3 md:w-[35%] mx-auto  border-[1px] border-coffee-100"
            >
              Subscribe now
            </Button>
          </div>
          <div className="w-full mx-auto mb-6 md:mb-2">
            <div className="w-2/3 mx-auto flex gap-2 justify-center ">
              <div className="md:bg-coffee-100 flex items-center justify-center text-sm md:py-2 px-1 rounded-lg">
                <Facebook className="text-coffee-100 md:text-white h-6 " />
              </div>
              <div className="md:bg-coffee-100 flex items-center justify-center  text-sm py-2 px-1 rounded-lg">
                <Twitter className="text-coffee-100 md:text-white  h-6 " />
              </div>
              <div className="md:bg-coffee-100 flex items-center justify-center text-sm py-2 px-1 rounded-lg">
                <Instagram className="text-coffee-100 md:text-white  h-6  " />
              </div>
              <div className="md:bg-coffee-100  flex items-center justify-center text-sm py-2 px-1 rounded-lg">
                <Youtube className="text-coffee-100 md:text-white h-6  " />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blackcoffee opacity-20  z-[1] bg-center object-cover  bg-cover bg-no-repeat absolute h-full w-full top-0 left-0"></div>
        <div className="w-full md:w-1/5  z-30  mt-20">
          <div className="">
            <Coffeelogo className=" h-16 w-16  sm:h-20 sm:w-20 " />
          </div>
          <p className="mt-4">
            Lugbe is a suburb located in the Abuja Municipal Area Council (AMAC)
            of the Federal Capital Territory (FCT) of Nigeria. 09031269618
            Email: temi236topemicheal@gmail.com
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
