import React from 'react'

import style from './header.module.css'
import logo from '../../images/logo.svg'

const Header = () => (
  <header className={style.header}>
    <img src={logo} alt="Shortly logo"/>
  </header>
)
console.log(style)


export default Header
