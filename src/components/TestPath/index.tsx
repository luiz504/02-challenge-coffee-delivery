import React from 'react'
import styled from 'styled-components'
import { Logo } from '~/assets/logo'

const Container = styled.div`
  background: ${({ theme }) => theme['base-button']};
  color: ${({ theme }) => theme['base-label']};
`

export const TestPath: React.FC = () => (
  <Container>
    <Logo />
  </Container>
)
