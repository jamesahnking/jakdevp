import React, {useState} from 'react';
import { FaChevronCircleUp } from "react-icons/fa";
import {Button } from "./ScrollTopElements";


const ScrollTopButton = () => {
  
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    // how we measure from the top of page
    const scrolled = document.documentElement.scrollTop
      // if the scroll space is greater than 300 px set the button to visible
      if (scrolled > 500) {
        setVisible(true)
      }
      else if (scrolled <= 500) {
        setVisible(false)
      }
    };
 
      // set window to top with a smooth scroll
      const scrollToTop = () => {
        window.scrollTo({
          top:0,
          behavior: 'smooth'
        });
      }
      window.addEventListener('scroll', toggleVisible);
      return (
        <>
          <Button>
            <FaChevronCircleUp onClick={ scrollToTop} style={{display: visible ? 'inline' : 'none'}} />
          </Button>
        
        </>
      );
    };
 



export default ScrollTopButton;

