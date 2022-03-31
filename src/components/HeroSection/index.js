import React from 'react';
import Video from '../../videos/video4.mp4';
import { Button } from '../ButtonElements';
import {
HeroContainer,
HeroBg,
VideoBg,
HeroContent,
HeroP,
HeroBtnWrapper,
HeroTri,

} from './HeroSectionElements';

const HeroSection = () => {
  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg playsInline autoPlay muted loop src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroTri>


          </HeroTri>
          <HeroP>JAMES AHN-KING <br /> Jr. Fullstack Blockchain Developer</HeroP>
            <HeroBtnWrapper>
                <Button to='home'>
                  Check out the work
                </Button>
            </HeroBtnWrapper>
            
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;