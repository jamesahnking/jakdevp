import React from "react";
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";

import{
    LinksContainer, LinkTextBox, LinkLogoBox, LinkTextLink,RepoImg

} from "./LinkModElements";



const LinkModule = ({

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
                    <LinkTextLink>{}</LinkTextLink>
                </LinkTextBox>
            </LinksContainer>

        </>
    );
};

export default LinkModule;