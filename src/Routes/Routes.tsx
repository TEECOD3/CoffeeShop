import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
const Routeer = () => {
  return (
    <>
      <Route index element={<Home />}></Route>
      <Route path="menu" element={<Menu />} />
    </>
  );
};

export default Routeer;
