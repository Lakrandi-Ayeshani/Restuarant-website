import React from 'react';
import {FaFacebook,
        FaInstagram,
        FaYoutube,
        FaTwitter,
        FaLinkedin,
        FaUtensils} from 'react-icons/fa';
import {FooterContainer,
        FooterWrap,
        SocialIconLink,
        SocialIcons,
        SocialLogo,
        SocialMedia,
        SocialMediaWrap} from './FooterElements';

function Footer() {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to ="/">Food Kinda... <FaUtensils /></SocialLogo>
                        <SocialIcons>

                            <SocialIconLink href= "/" target="_blank" 
                            aria-label = "Facebook" 
                            rel="noopener noreferrer">
                                <FaFacebook />
                            </SocialIconLink>

                            <SocialIconLink href= "/" target="_blank" 
                            aria-label = "Instagram" 
                            rel="noopener noreferrer">
                                <FaInstagram />
                            </SocialIconLink>

                            <SocialIconLink href= "https://github.com/Lakrandi-Ayeshani" target="_blank" 
                            aria-label = "Linkedin" 
                            rel="noopener noreferrer">
                                <FaLinkedin />
                            </SocialIconLink>

                            <SocialIconLink href= "/" target="_blank" 
                            aria-label = "Youtube" 
                            rel="noopener noreferrer">
                                <FaYoutube />
                            </SocialIconLink>

                            <SocialIconLink href= "/" target="_blank" 
                            aria-label = "Twitter" 
                            rel="noopener noreferrer">
                                <FaTwitter />
                            </SocialIconLink>
                        
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
