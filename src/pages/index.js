import React from "react";
import HeroSection from "../components/HeroSection";
import InfoModule from "../components/InfoModule";
import {
  HomeObjOne,
  HomeObjTwo,
  HomeObjThree,
  HomeObjFour,
  HomeObjFive, 
  HomeObjSix,
  BrandingPriObj
} from '../components/Data';

const Home = () => {

  return (
    <>
      <HeroSection {...BrandingPriObj} />
      <InfoModule {...HomeObjOne} />
      <InfoModule {...HomeObjTwo} />
      <InfoModule {...HomeObjThree} />
      {/* <InfoModule {...HomeObjFour} /> */}
      {/* <InfoModule {...HomeObjFive} />
      <InfoModule {...HomeObjSix} /> */}
    </>
  );
};

export default Home;
