import React from 'react'
import styled from 'styled-components'
import { Container, Flex } from './common'

const Nav = styled.div`
  background: white;
  position: sticky;
  top: 0;
  z-index: 1;
`

export default (props) => (
  <Nav>
    <Container>
      <Flex alignCenter {...props} />
    </Container>
  </Nav>
)
