import React from 'react'

import { DefaultLayoutContainer } from './styles'
import { Header } from '~/components/Header'
import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => (
  <DefaultLayoutContainer>
    <Header />
    <Outlet />
  </DefaultLayoutContainer>
)
