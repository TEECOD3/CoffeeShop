import React from "react";
import Coffeelogo from "../Pages/Home/icon/coffelogo";
import { GiPhone } from "react-icons/gi";
import bgfooter from "../assets/Images/darks.png";
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
    <footer className="relative bottom-0 left-0 mt-auto w-full bg-red-400">
      <div className=" relative flex h-full  w-full flex-col items-center justify-around bg-black/90 px-4 py-10  text-sm  text-white md:flex-row md:text-base">
        <div className="absolute -top-24 z-[900] mx-auto flex h-[12rem] w-[90%] flex-col items-center justify-center rounded-lg bg-white px-4 py-4 text-black shadow-2xl md:w-2/3 xl:flex-row">
          <h2 className="w-full pt-4 text-center text-xl font-bold  lg:text-3xl">
            Subscribe To Our Newsletter
          </h2>
          <div className="mt-3 flex w-full flex-col md:flex-row">
            <input
              type="email"
              placeholder="Enter email .."
              className="mr-1 w-full rounded-lg  border-2 border-coffee-100  p-3 md:w-[60%] "
            />
            <Button
              variant="ghost"
              className="mx-auto mt-3 w-2/4 border-[1px] border-coffee-100  text-sm md:w-[35%]"
            >
              Subscribe now
            </Button>
          </div>
          <div className="mx-auto mb-6 w-full md:mb-2">
            <div className="mx-auto flex w-2/3 justify-center gap-2 ">
              <div className="flex items-center justify-center rounded-lg px-1 text-sm md:bg-coffee-100 md:py-2">
                <Facebook className="h-6 text-coffee-100 md:text-white " />
              </div>
              <div className="flex items-center justify-center rounded-lg  px-1 py-2 text-sm md:bg-coffee-100">
                <Twitter className="h-6 text-coffee-100  md:text-white " />
              </div>
              <div className="flex items-center justify-center rounded-lg px-1 py-2 text-sm md:bg-coffee-100">
                <Instagram className="h-6 text-coffee-100  md:text-white  " />
              </div>
              <div className="flex  items-center justify-center rounded-lg px-1 py-2 text-sm md:bg-coffee-100">
                <Youtube className="h-6 text-coffee-100 md:text-white  " />
              </div>
            </div>
          </div>
        </div>
        <img
          src={bgfooter}
          className=" absolute  left-0 top-0 z-[1]  h-full w-full bg-cover bg-center bg-no-repeat object-cover opacity-20"
        ></img>
        <div className="z-30 mt-20  w-full  md:w-1/5">
          <div className="">
            <Coffeelogo className=" h-16 w-16  sm:h-20 sm:w-20 " />
          </div>
          <p className="mt-4">
            Welcome to DAVIS Roasters, where we have been dedicated to curating,
            roasting, and delivering exceptional artisanal and specialty coffees
            since 2010. Our mission is to bring you the finest hand-roasted,
            your go-to destination for exquisite coffee that will elevate your
            coffee journey.
          </p>
        </div>

        <div className=" z-30 mt-4  w-full p-5 capitalize md:w-1/5">
          <h3 className="font-bold">Explore</h3>

          <div className="flex w-full justify-between">
            <ul className="mt-4 space-y-4">
              <li>home</li>
              <li>about us</li>
              <li>contact us</li>
            </ul>
            <ul className="mt-4 space-y-4">
              <li>blog</li>
              <li>team</li>
              <li>our menu</li>
            </ul>
          </div>
        </div>
        <div className=" z-30 mt-8 w-full md:w-1/5 ">
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
