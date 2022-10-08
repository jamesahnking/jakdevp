import React from "react";
import{
    LinksContainer, LinkTextBox, LinkLogoBox, LinkTextLink

} from "./LinkModElements";



const LinkModule = ({

}) => {
    
    return(
        <>
            <LinksContainer>
                <LinkLogoBox> </LinkLogoBox>
                <LinkTextBox>  
                    <LinkTextLink>{}</LinkTextLink>
                </LinkTextBox>
            </LinksContainer>

        </>
    );
};

export default LinkModule;