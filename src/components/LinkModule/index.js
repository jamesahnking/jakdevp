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
    RepoLink0
}) => {
    
    return(
        <>
            <LinksContainer>
         
                <LinkLogoBox>
                <LinkTextLink
                    href="https://github.com/jamesahnking/pillarsandringsmintdapp"
                    target="_blank"
                    aria-label="Pillars and Rings Github Repo">
                    <FaGithub />
                </LinkTextLink>
                </LinkLogoBox>
                <LinkTextBox>  
                        <LinkText
                         href="https://github.com/jamesahnking/pillarsandringsmintdapp"
                         target="_blank"
                         aria-label="Pillars and Rings Github Repo">
                        
                                { RepoLink0 }
                        </LinkText>
                </LinkTextBox>
            </LinksContainer>

        </>
    );
};

export default LinkModule;