import React from 'react'

import logo from '../../images/logo.svg'

import { NavLink } from 'react-router-dom'

import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Historico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

export default Header
