import React from 'react';
import Video from '../../videos/video4.mp4';
import { Button } from '../ButtonElements';
import { animateScroll as scroll } from "react-scroll";

import {
HeroContainer,
HeroBg,
VideoBg,
HeroContent,
HeroP,
HeroBtnWrapper,
ImgWrap,
Img
} from './HeroSectionElements';

const HeroSection = ({ img, alt }) => {
  return (
    <>
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg playsInline autoPlay muted loop src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <ImgWrap>
          <Img src={img} alt={alt} />
            </ImgWrap>
          <HeroP>JAMES AHN-KING<br />Developer - Web3 - Blockchain - Solidity - React</HeroP>
            <HeroBtnWrapper>
                <Button 
                  to="project1"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-20}
                >
                  Check out the latest
                </Button>
            </HeroBtnWrapper>
            
        </HeroContent>
    </HeroContainer>
    </>
  )
}

export default HeroSection;