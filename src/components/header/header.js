import React from 'react'

import Navigation from '../navigation/navigation'

import style from './header.module.css'
import logo from '../../images/logo.svg'

const Header = () => {
  return (
    <header
      className={style.header}
    >
      <img src={logo} alt='Shortly logo' />
      <Navigation />
    </header>
  )
}

export default Header
