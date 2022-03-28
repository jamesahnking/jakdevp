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
                <SidebarLink to="about" onClick={toggle}> About</SidebarLink>
                <SidebarLink to="about" onClick={toggle}> Multisig Wallet </SidebarLink>
                <SidebarLink to="about" onClick={toggle}> Crypto Dex</SidebarLink>
                <SidebarLink to="about" onClick={toggle}> Pillars & Rings</SidebarLink>
                <SidebarLink to="about" onClick={toggle}> Geranimals</SidebarLink>
                <SidebarLink to="about" onClick={toggle}> CV</SidebarLink>

            </SidebarMenu>
            <SideBtnWrap>
                 <SidebarRoute to='/contact'>Contact</SidebarRoute>
            </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
