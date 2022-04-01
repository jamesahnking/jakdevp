import React from 'react'

const Footer = () => {
  return (
    <>
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    
                    <FooterLinksItems>
                        
                        <FooterLinkTitle>Projects</FooterLinkTitle>
                        <FooterLink to='/'> Project 1</FooterLink>
                        <FooterLink to='/'> Project 2</FooterLink>
                        <FooterLink to='/'> Project 3</FooterLink>
                        <FooterLink to='/'> Project 4</FooterLink>
                        <FooterLink to='/'> Project 5</FooterLink>

                    </FooterLinksItems>

                    <FooterLinksItems>
                        
                        <FooterLinkTitle>Social</FooterLinkTitle>
                        <FooterLink to='/'> Medium</FooterLink>
                        <FooterLink to='/'> Linkedin</FooterLink>

                    </FooterLinksItems>

                    <FooterLinksItems>
                        
                        <FooterLinkTitle>Contact</FooterLinkTitle>
                        <FooterLink to='/'> Email </FooterLink>
                        <FooterLink to='/'> 6462831017</FooterLink>

                    </FooterLinksItems>


                    <SocialMedia>
                        <SocialLogo to='/'>

                        {/* Image  */}

                        </SocialLogo>
                        <SocialIconLink href='/' target='_blank' aria-label='Medium'>
                         {/* FaIcon */}
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
                         {/* FaIcon */}
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                         {/* FaIcon */}
                        </SocialIconLink>
                    </SocialMedia>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>
    </FooterContainer>
    </>
  )
}

export default Footer