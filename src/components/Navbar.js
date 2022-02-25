import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
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
} from '../assets/styles/Navbar.styles'
import LogoImg from '../assets/images/logo.png'

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false)

  const [isOpen, setOpen] = useState(false)

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <a href='/'>
            <Logo src={LogoImg}></Logo>
          </a>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to='/'> home</NavbarLink>
            <NavbarLink to='/about'> about</NavbarLink>
            <NavbarLink to='/portfolio'> portfolio</NavbarLink>
            <NavbarLink to='/resume'> resume</NavbarLink>
            <NavbarLink to='/contact'> contact</NavbarLink>
            <OpenLinksButton>
              <Hamburger toggled={extendNavbar} toggle={setExtendNavbar} />
              {/* {extendNavbar ? <>&#10005;</> : <Hamburger direction='right' />} */}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to='/'> home</NavbarLinkExtended>
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
