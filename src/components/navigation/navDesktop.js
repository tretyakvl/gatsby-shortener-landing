import React from 'react'

import style from './navDesktop.module.css'

const navDesktop = () => {
  return (
    <nav className={style.navDesktop}>
      <ul className={style.navDesktop__links}>
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
      <ul className={style.navDesktop__links}>
        <li><a href=''>Login</a></li>
        <li><a href=''>Sing Up</a></li>
      </ul>
    </nav>
  )
}

export default navDesktop
