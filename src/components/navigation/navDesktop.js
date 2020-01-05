import React from 'react'
import { Link } from 'gatsby'

import style from './navDesktop.module.css'

const LinkItem = ({ to }) => (
  <li>
    <Link to={`/${to}`}>{to}</Link>
  </li>
)

const navDesktop = ({ fields }) => {
  return (
    <nav className={style.navDesktop}>
      <ul className={style.navDesktop__links}>
        {fields.map(field => <LinkItem to={field} key={field} />)}
      </ul>
      <ul className={style.navDesktop__links}>
        <li><a href=''>Login</a></li>
        <li><a href=''>Sing Up</a></li>
      </ul>
    </nav>
  )
}

export default navDesktop
