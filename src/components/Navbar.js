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
import { Link, animateScroll as scroll } from 'react-scroll'

const Navbar = ({ toggle }) => {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <Nav>
      <NavbarContainer>
        <NavbarLogo to='/'>AliffAzfar</NavbarLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks
              smooth={true}
              offset={-70}
              duration={500}
              activeClass='active'
              spy={true}
              to='Landing'
            >
              home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              smooth={true}
              offset={-70}
              duration={500}
              activeClass='active'
              spy={true}
              to='about'
            >
              about
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              smooth={true}
              offset={-70}
              duration={500}
              activeClass='active'
              spy={true}
              to='portfolio'
            >
              portfolio
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              smooth={true}
              offset={-70}
              duration={500}
              activeClass='active'
              spy={true}
              to='resume'
            >
              resume
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              smooth={true}
              offset={-70}
              duration={500}
              activeClass='active'
              spy={true}
              to='contact'
            >
              contact
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
