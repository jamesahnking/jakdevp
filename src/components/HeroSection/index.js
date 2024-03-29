import React from 'react';
import Video from '../../videos/video4.mp4';
import { Button } from '../ButtonElements';
import { HomeObjTwo } from "../../components/Data";
import { animateScroll as scroll } from "react-scroll";

import {
HeroContainer,
HeroBg,
VideoBg,
HeroContent,
HeroP,
HeroBtnWrapper,
ImgWrap,
Img,

} from './HeroSectionElements';

const HeroSection = ({ img, alt, stillImg }) => {
  return (
    <>
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg playsInline autoPlay muted loop src={Video} poster={stillImg} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <ImgWrap>
          <Img src={img} alt={alt} />
            </ImgWrap>
          <HeroP>JAMES AHN-KING<br />Fullstack Blockchain Developer</HeroP>
            <HeroBtnWrapper>
                <Button 
                  to="project2"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-20}
                >
                  See The Latest
                </Button>
            </HeroBtnWrapper>
            
        </HeroContent>
    </HeroContainer>
    </>
  )
}

export default HeroSection;