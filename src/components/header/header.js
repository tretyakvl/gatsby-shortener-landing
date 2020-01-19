import React from 'react'

import Navigation from '../navigation/navigation'

import style from './header.module.css'
import Logo from '../logo/logo'

const Header = () => {
  return (
    <header
      className={style.header}
    >
      <Logo />
      <Navigation />
    </header>
  )
}

export default Header
