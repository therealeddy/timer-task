import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../../components'

import { LayoutContainer } from './styles'

const Default: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}

export default Default
