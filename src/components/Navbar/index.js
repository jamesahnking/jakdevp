import React from "react";
import { FaBars, FaEthereum } from "react-icons/fa";
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
  NavBtnLink
} from "./NavBarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
     <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">jak</NavLogo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks to="about"> About</NavLinks>
            </NavItem>

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
              <NavLinks to="geranimals">CV</NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
              <NavBtnLink to='/signin'>Contact JAK</NavBtnLink>
          </NavBtn>

        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
