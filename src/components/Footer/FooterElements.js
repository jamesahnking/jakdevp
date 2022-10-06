import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const FooterContainer = styled.footer`
    background: #02062E;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;


export const SocialMedia = styled.div`
    max-width: 1000px;
    width: 100%;
    justify-content: center;

    
    
`;

export const SocialIcons = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    width: 70px; 


    @media screen and (max-width: 820px) {
        margin-top: 20px;
    }
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    marign: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }

`;

export const WebsiteRights = styled.small`
    color: #fff;
    text-align: center;

`;

export const SocialLogo = styled(Link)`

    color: #fff;
    justify-start: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: block;
    align-items: center;
    margin-bottom: 16px;
`;


export const ImgWrap = styled.div`
  max-width: 50px;
  height: 100%; 
  
`;

export const Img = styled.img`
color:
  width: 100%;
  height: 20px;
  margin-top: 0;
  margin-right: 0;
  margin-left: 10px;
  padding-right: 0;

  
  @media screen and (max-width: 820px) {
    margin-left: 0px;
    }  

`;

