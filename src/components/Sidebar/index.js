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
                <SidebarLink to="project1" > About</SidebarLink>
                <SidebarLink to="project2" > Multisig Wallet </SidebarLink>
                <SidebarLink to="project3" > Crypto Dex</SidebarLink>
                <SidebarLink to="project4" > Pillars & Rings</SidebarLink>
                <SidebarLink to="project5" > Geranimals</SidebarLink>
                <SidebarLink to="project6" > CV</SidebarLink>

            </SidebarMenu>
            <SideBtnWrap>
                 <SidebarRoute to='/contact'>Contact</SidebarRoute>
            </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
