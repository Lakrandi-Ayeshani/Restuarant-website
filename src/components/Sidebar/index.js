import React from 'react'
import {SlidebarContainer,
     Icon,
     SlideMenu,
     SlideBtnWrap,
     SlidebarRoute, 
     SlidebarLink,
     CloseIcon  } from './SidebarElements';

function Sidebar({isOpen, toggle}) {
    return (
        <SlidebarContainer isOpen={isOpen} onClick={toggle}> 
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SlideMenu>
                <SlidebarLink to ="/">Yummy Rice</SlidebarLink>
                <SlidebarLink to ="/">Desserts</SlidebarLink>
                <SlidebarLink to ="/">Full Menu</SlidebarLink>
            </SlideMenu>
            <slideBtnWrap>
                <SlidebarRoute to ="/">Order Now</SlidebarRoute>
            </slideBtnWrap>
        </SlidebarContainer> 
    )
}

export default Sidebar
