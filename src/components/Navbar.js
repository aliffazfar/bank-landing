import React from 'react'
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarLinkContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLink,
} from '../styles/Navbar.styles'

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer></LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to='/about'> about</NavbarLink>
            <NavbarLink to='/portfolio'> portfolio</NavbarLink>
            <NavbarLink to='/resume'> resume</NavbarLink>
            <NavbarLink to='/contact'> contact</NavbarLink>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      <NavbarExtendedContainer></NavbarExtendedContainer>
    </NavbarContainer>
  )
}

export default Navbar
