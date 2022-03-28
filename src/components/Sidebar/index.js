import React from "react";
// import {  CloseIcon } from "react-icons/fa";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from "./SideBarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about"> About</SidebarLink>
                <SidebarLink to="about"> Multisig Wallet </SidebarLink>
                <SidebarLink to="about"> Crypto Dex</SidebarLink>
                <SidebarLink to="about"> Pillars & Rings</SidebarLink>
                <SidebarLink to="about"> Geranimals</SidebarLink>
                <SidebarLink to="about"> CV</SidebarLink>

            </SidebarMenu>
            <SideBtnWrap>
                 <SidebarRoute to='/contact'>Contact</SidebarRoute>
            </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
