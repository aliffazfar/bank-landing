import React, { useState } from 'react'
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarLinkContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from '../styles/Navbar.styles'
import LogoImg from '../assets/images/logo.png'

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false)

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src={LogoImg}></Logo>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to='/about'> about</NavbarLink>
            <NavbarLink to='/portfolio'> portfolio</NavbarLink>
            <NavbarLink to='/resume'> resume</NavbarLink>
            <NavbarLink to='/contact'> contact</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr)
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to='/about'> about</NavbarLinkExtended>
          <NavbarLinkExtended to='/portfolio'> portfolio</NavbarLinkExtended>
          <NavbarLinkExtended to='/resume'> resume</NavbarLinkExtended>
          <NavbarLinkExtended to='/contact'> contact</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  )
}

export default Navbar
