import styled from "styled-components";
// import { Link } from "react-router-dom";

export const LinksContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 70px;
    width: 50%;
    margin: 0px 0px 30px 0px;
    border-radius: 18px;
    border: 1px solid black;
    background: rgba(5,5,63,1);
       /* width: 100%; */

    @media screen and (max-width: 768px) {
        width: 50%;
        margin: 0px 0px 20px 0px;

    }

    @media screen and (max-width: 425px) {
        width: 100%;
    }


`;

export const LinkLogoBox = styled.div `
    width: 30%;
    height: 100%;
    /* background: orange; */
    text-align: center;
    padding: 0.375em  0;


    @media screen and (max-width: 425px) {
        padding: 0.775em  0;
    }
`;  

export const LinkTextBox = styled.div `
    /* height: 60px; */
    width: 70%;
    padding: 0 10px;
    /* background: yellow; */
`;

export const LinkText = styled.a `
    font-size: 18px;
    text-decoration: none;
    color: white;

    @media screen and (max-width: 425px) {
        font-size: 14px;
    }
`;

export const LinkTextLink = styled.a `
    font-size: 52px;    
    color: white;


    @media screen and (max-width: 425px) {
        font-size: 42px;
    }
`;





