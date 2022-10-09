import React from "react";
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";

import{
    LinksContainer, 
    LinkTextBox, 
    LinkLogoBox, 
    LinkTextLink,
    LinkText
} from "./LinkModElements";


const LinkModule = ({
    RepoLink0,href,target,arialabel
}) => {
    
    return(
        <>
            <LinksContainer>
                <LinkLogoBox>
                    <LinkTextLink
                        href={href}
                        target={target}
                        aria-label={arialabel}>
                        <FaGithub />
                    </LinkTextLink>
                </LinkLogoBox>
                <LinkTextBox>  
                        <LinkText
                        href={href}
                        target={target}
                        aria-label={arialabel}>
                        { RepoLink0 }
                        </LinkText>
                </LinkTextBox>
            </LinksContainer>
        </>
    );
};

export default LinkModule;