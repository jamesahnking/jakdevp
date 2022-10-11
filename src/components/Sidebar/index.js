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
                <SidebarLink to="project2" > NFT Marketplace</SidebarLink>
                <SidebarLink to="project1" > Multisig Wallet</SidebarLink>
                <SidebarLink to="project3" > Crypto DEX</SidebarLink>
                <SidebarLink to="project4" > Pillars & Rings</SidebarLink>
                <SidebarLink to="project5" > About Me</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                 <SidebarRoute 
                href='mailto:jamesahnking@gmail.com?subject=A Message for James Ahn-King from jamesahnking.com'
                alt='_blank'
                aria-label='contact me by email: jamesahnking@gmail.com'
                 >Contact JAK</SidebarRoute>
            </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
