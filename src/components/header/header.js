import React from 'react'

import style from './header.module.css'
import logo from '../../images/logo.svg'

const Header = () => (
  <header className={style.header}>
    <img src={logo} alt='Shortly logo' />
    <button>
      Open menu
    </button>
    <nav className={style.header__navigation}>
      <ul className={style.header__links}>
        <li>
          <a href=''>Features</a>
        </li>
        <li>
          <a href=''>Pricing</a>
        </li>
        <li>
          <a href=''>Resources</a>
        </li>
      </ul>
      <ul className={style.header__links}>
        <li><a href=''>Login</a></li>
        <li><a href=''>Sing Up</a></li>
      </ul>
    </nav>
  </header>
)
console.log(style)

export default Header
