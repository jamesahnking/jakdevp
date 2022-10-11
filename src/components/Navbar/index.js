import React, { useEffect, useState } from "react";
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import { animateScroll as scroll } from "react-scroll";

import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  Img,
  ImgWrap,
  SocialIconLink,
} from "./NavBarElements";

const Navbar = ({ toggle, img, alt }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to="/">
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </NavLogo>

            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>

            <NavMenu>
              
            <NavItem>
                <NavLinks
                  to="project2">
                  NFT Marketplace{" "}
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="project3">
                  Crypto Dex{" "}
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="project1">
                  Multisig Wallet{" "}
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="project4">
                  Pillars & Rings NFT
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="project5">About Me</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <SocialIconLink
                href="https://github.com/jamesahnking"
                target="_blank"
                aria-label="Github" >
                <FaGithub />
              </SocialIconLink>
            </NavBtn>

            <NavBtn>
              <SocialIconLink
                href="https://www.linkedin.com/in/james-ahn-king-6176841/"
                target="_blank"
                aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </NavBtn>

            <NavBtn>
              <NavBtnLink 
                  href='mailto:jamesahnking@gmail.com?subject=A Message for James Ahn-King from jamesahnking.com'
                  alt='_blank'
                  aria-label='contact me by email: jamesahnking@gmail.com'
              >Contact JAK </NavBtnLink>
            </NavBtn>
          
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

<a href="mailto:email@example.com?subject=Mail from our Website">Send Email</a>


export default Navbar;
