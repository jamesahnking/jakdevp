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

const Navbar = ({ toggle, img, alt, project1 }) => {
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
                  to="project1"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Multisig Wallet{" "}
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="project2"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Crypto Dex{" "}
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="project3"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Pillars & Rings{" "}
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="project4"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Geranimals
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="project5"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Portfolio
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                      to="project6"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      >About Me</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <SocialIconLink
                href="https://www.linkedin.com/in/james-ahn-king-6176841/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaGithub />
              </SocialIconLink>
            </NavBtn>

            <NavBtn>
              <SocialIconLink
                href="https://www.linkedin.com/in/james-ahn-king-6176841/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </NavBtn>

            <NavBtn>
              <NavBtnLink to="/">Download CV</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
