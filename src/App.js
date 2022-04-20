// import logo from './logo.svg';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ScrollToTop from "./components/ScrollToTop";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";
import Project5 from "./pages/Project5";
import Project6 from "./pages/Project6";
import {
  BrandingObj,
  BrandingObj2,
  SubNavbarLinks
} from "./components/Data";
import ScrollTopButton from "./components/ScrollTopButton";

function App() {
 
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      < ScrollToTop />
      <ScrollTopButton />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} {...BrandingObj} {...SubNavbarLinks} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
        <Route path="/project5" element={<Project5 />} />
        <Route path="/project6" element={<Project6 />} />
      </Routes>

      <Footer {...BrandingObj2} />
    </BrowserRouter>
  );
}

export default App;
