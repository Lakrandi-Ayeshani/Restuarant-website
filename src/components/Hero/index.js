import React, {useState} from 'react';
import Navbar from '../Navbar';
import { HeroContainer, HeroContent, HeroItem,HeroH1,HeroP,HeroBtn,} from './HeroElements';
import Sidebar from '../Sidebar';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItem>
                    <HeroH1>Yummy Rice Ever</HeroH1>
                    <HeroP>Ready in 1O Min</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItem>
            </HeroContent>
        </HeroContainer>
    );
} 

export default Hero
