import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoModule from "../components/InfoModule";
import { HomeObjOne, HomeObjTwo, HomeObjThree, HomeObjFour, HomeObjFive } from "../components/InfoModule/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoModule {...HomeObjOne} />
      <InfoModule {...HomeObjTwo} />
      <InfoModule {...HomeObjThree} />
      <InfoModule {...HomeObjFour} />
      <InfoModule {...HomeObjFive} />
    </>
  );
};

export default Home;
