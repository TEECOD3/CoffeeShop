import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Desktopcart from "../Pages/Cart/desktopcart";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
const RootLayer = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      {/* <Desktopcart /> */}
      <Footer />
    </>
  );
};

export default RootLayer;
