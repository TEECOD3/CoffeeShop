import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const RootLayer = () => {
  return (
    <body className="min-h-full flex flex-col">
      <Navbar />
      <main className="h-auto">
        <Outlet />
      </main>
      <Footer />
    </body>
  );
};

export default RootLayer;
