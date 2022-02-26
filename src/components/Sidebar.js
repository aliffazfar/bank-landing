import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from '../assets/styles/Sidebar.styles'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='Landing' onClick={toggle}>
            home
          </SidebarLink>
          <SidebarLink to='about' onClick={toggle}>
            about
          </SidebarLink>
          <SidebarLink to='portfolio' onClick={toggle}>
            portfolio
          </SidebarLink>
          <SidebarLink to='resume' onClick={toggle}>
            resume
          </SidebarLink>
          <SidebarLink to='contact' onClick={toggle}>
            contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
