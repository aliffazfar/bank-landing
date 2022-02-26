import styled from 'styled-components'

export const LandingContainer = styled.main`
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  z-index: 1;
  height: 800px;
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: flex;
    align-items: center;
    margin-top: -3rem;
  }
`
