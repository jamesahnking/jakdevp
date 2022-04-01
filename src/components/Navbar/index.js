import React from "react";
import { FaBars, FaGithub, FaMedium } from "react-icons/fa";
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
  ImgWrap
} from './NavBarElements';



const Navbar = ({ toggle,img,alt }) => {
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
              <NavLinks to="multisigwallet">Multisig Wallet </NavLinks>
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
              <NavLinks to="about"> About Me</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="geranimals">
                  <FaGithub />
              </NavLinks>
            </NavItem>


            <NavItem>
              <NavLinks to="geranimals">
                  <FaMedium />
              </NavLinks>
            </NavItem>


         
          </NavMenu>
        
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
