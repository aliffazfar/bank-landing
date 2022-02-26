import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from '../assets/styles/Navbar.styles'
import LogoImg from '../assets/images/logo.png'

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavbarLogo to='/'>AliffAzfar</NavbarLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to='Landing'>home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='about'>about</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='portfolio'>portfolio</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='resume'>resume</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='contact'>contact</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
