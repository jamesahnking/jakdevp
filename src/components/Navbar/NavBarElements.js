import { Link as LinkRouter} from 'react-router-dom';
import { Link as LinkScroll} from 'react-scroll';
import styled from 'styled-components';


export const Nav = styled.nav `
    background: #02062E;
    height: 80px;
    // margin-top: -80px;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8 all ease;
    }
`
;

// Nav Container
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;

    @media screen and (max-width: 768px) {
      padding: 0 10px;
    }



`;

// Nav Logo - link is react Router
export const NavLogo = styled(LinkRouter)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    /* font-size: 1.5rem; */
    display: flex;  
    align-items: center;
    margin-left: 20px;
    font-weight: bold;
    text-decoration: none;

    @media screen and (max-width: 768px) {
      margin-left: 10px;
    }

    @media screen and (max-width: 320px) {
      margin-left: 0px;
    }
`;

export const ImgWrap = styled.div`
  max-width: 100px;
  height: 100%;
  padding-top: 20px;
`;

export const Img = styled.img`
  width: 100%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 10px;
  padding-right: 0;
`;


export const MobileIcon = styled.div `
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px) {
  display: none;
}
`;

export const NavItem = styled.li` 
height: 80px;

`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled(LinkRouter)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

/* &:active {
  border-bottom: 3px solid #01bf71;
} */
`;

export const NavLinksSoc = styled.div`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
  border-bottom: 3px solid #01bf71;
}
`;


export const NavBtnLink = styled(LinkRouter)`
border-radius: 50px;
background: none;
white-space: nowrap;

padding: 10px 22px;
color: #fff;
font-size: 16px;
outline: none;
border: 2px #fff solid;
cursor: pointer;
transition: all 0.2 ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2 eas-in-out;
    background: #fff;
    color: #010606;
}
`;


export const SocialIcons = styled.div`
font-size: 1.5em;
align-items: center;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`;
