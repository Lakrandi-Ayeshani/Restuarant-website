import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
background-color: #0d0909;
`;

export const FooterWrap= styled.div`
padding: 16px 24px;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
max-width: 1300px;
margin: o auto;
`;

export const SocialMedia = styled.section`
max-width: 1300px;
width: 100%;
`;

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 100%;
margin: 16px auto 0 auto;

@media screen and (max-width: 820px){
    flex-direcion: column;
`;

export const SocialLogo = styled(Link)`
color: yellow;
justify-self: start;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-bottom: 16px;
font-weight: bold;
`;

export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`;

export const SocialIconLink = styled.p`
color:#fff;
font-size: 24px;
`;



