import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const RootLayer = () => {
  return (
    <body className="relative">
      <Navbar />
      <main className="h-auto">
        <Outlet />
      </main>
      <Footer />
    </body>
  );
};

export default RootLayer;
