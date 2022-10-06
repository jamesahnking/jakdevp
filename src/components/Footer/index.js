import React from "react";
import { animateScroll as scroll } from 'react-scroll';

import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  ImgWrap,
  Img
} from "./FooterElements";

import {
  FaTwitter,
  FaLinkedin,
  FaMedium,
  FaGithub,
} from "react-icons/fa";

const Footer = ({  img, alt}) => {
    const toggleHome = () => {
        scroll.scrollToTop();
      };
  return (
    <>
      <FooterContainer>
        <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <ImgWrap>
                          <SocialLogo to="/" onClick={toggleHome}> 
                              <Img src={img} alt={alt} />
                          </SocialLogo>
                        </ImgWrap>
                        <WebsiteRights>James Ahn-King © 2022. This site was built using NodeJS | React | Bootstrap</WebsiteRights>
                        <SocialIcons>
                            
                            <SocialIconLink
                            href="https://www.linkedin.com/in/james-ahn-king-6176841/"
                            target="_blank"
                            aria-label="Linkedin"
                            >
                              <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink
                            target="_blank"
                            aria-label="Github"
                            href="https://github.com/jamesahnking"
                            >
                             <FaGithub />
                            </SocialIconLink>
                        </SocialIcons>
                      </SocialMediaWrap>
                `</SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
