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

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavbarLogo to='/'>AliffAzfar</NavbarLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to='/about'>about</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
