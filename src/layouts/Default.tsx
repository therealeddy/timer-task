import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../components'

const Default: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default Default
