import React from "react";
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
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
  SocialIcons,
  NavLinksSoc,
  SocialIconLink
  

} from './NavBarElements';


const Navbar = ({ toggle, img, alt }) => {
  return (
    <>
     <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavbarContainer>
          
          <NavLogo to="/">
            <ImgWrap>
                  <Img src={img} alt={alt} />
            </ImgWrap>
          </NavLogo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>


            <NavItem>
              <NavLinks to="/multisigwallet">Multisig Wallet </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="cryptodex">Crypto Dex </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="pillarsandrings">Pillars & Rings </NavLinks>
            </NavItem>
      
            <NavItem>
              <NavLinks to="geranimals">Geranimals</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="geranimals">About Me</NavLinks>
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
             <SocialIconLink  href="https://www.linkedin.com/in/james-ahn-king-6176841/"
                  target="_blank"
                  aria-label="Linkedin"
                   >
                     <FaLinkedin/>
              </SocialIconLink>

            </NavBtn>

          <NavBtn>
              <NavBtnLink to='/signin'>Download CV</NavBtnLink>
          </NavBtn>

        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
