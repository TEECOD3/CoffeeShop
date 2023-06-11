import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Desktopcart from "../Pages/Cart/desktopcart";
import { useSelector } from "react-redux";
import { cartstate } from "../Store/Slices/cartslice";
import { AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
const RootLayer = () => {
  const modalstate = useSelector(cartstate);
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <AnimatePresence>{modalstate && <Desktopcart />}</AnimatePresence>

      <Footer />
    </>
  );
};

export default RootLayer;
