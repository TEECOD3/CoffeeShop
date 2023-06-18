import Herosection from "./Sections/herosection";
import Aboutsection from "./Sections/Aboutsection";
import Descriptionsection from "./Sections/Descriptionsection";
import Collectionsection from "./Sections/Collectionsection";
import Chefssection from "./Sections/Chefssection";
import TestimonialSection from "./Sections/TestimonialSection";
import Partnersection from "./Sections/Partnersection";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-[#f6f6f6]">
        <Herosection />
        <Aboutsection />
        <Descriptionsection />
        <Collectionsection />
        <Chefssection />
        <TestimonialSection />
        <Partnersection />
      </div>
    </>
  );
};

export default Home;
