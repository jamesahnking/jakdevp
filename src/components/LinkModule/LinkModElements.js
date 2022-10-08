import styled from "styled-components";
// import { Link } from "react-router-dom";

export const LinksContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 60px;
    background: green;
    margin: 0px 0px 20px 0px;
    border-radius: 5px;
    width: 100%;

`;


export const LinkLogoBox = styled.div `
    width: 20%;
    height: 100%;
    background: orange;
`;


export const LinkTextBox = styled.div `
    height: 100%;
    width: 80%;
    background: blue
`;


export const LinkTextLink = styled.a`
    font-size: 24px;    
`;

