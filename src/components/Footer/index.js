import React from 'react';
import {FaFacebook,
        FaInstagram,
        FaYoutube,
        FaTwitter,
        FaLinkedin,
        FaUtensils,
        FaGit,
        FaGithub} from 'react-icons/fa';
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

                            <a href= "https://m.facebook.com/lakrandi.ayeshani.5" target="_blank">
                                <SocialIconLink  aria-label = "Facebook" rel="noopener noreferrer">
                                    <FaFacebook />
                                </SocialIconLink>
                            </a>

                            <a href= "https://www.instagram.com/ayeshani_dissanayake/" target="_blank" >
                                <SocialIconLink aria-label = "Instagram" rel="noopener noreferrer">
                                    <FaInstagram />
                                </SocialIconLink>
                            </a>

                            <a target="_blank" href= "https://www.linkedin.com/in/lakrandi-ayeshani-732677180/" >
                                <SocialIconLink   aria-label = "Linkedin" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </SocialIconLink>
                            </a>

                            <a target="_blank" href= "https://github.com/Lakrandi-Ayeshani" >
                                <SocialIconLink aria-label = "Twitter" rel="noopener noreferrer">
                                    <FaGithub />
                                </SocialIconLink>
                            </a>

                            <SocialIconLink href= "/" target="_blank" 
                            aria-label = "Youtube" 
                            rel="noopener noreferrer">
                                <FaYoutube />
                            </SocialIconLink>
                        
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
