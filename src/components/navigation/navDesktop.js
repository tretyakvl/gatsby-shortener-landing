import React from 'react'
import { Link } from 'gatsby'

import style from './navDesktop.module.css'

const LinkItem = ({ text, to }) => (
  <li>
    <Link to={to}>{text}</Link>
  </li>
)

const navDesktop = ({ navigation }) => {
  return (
    <nav className={style.navDesktop}>
      <ul className={style.navDesktop__links}>
        {navigation.primary.map(([text, to]) => (
          <LinkItem to={to} text={text} key={text} />
        ))}
      </ul>
      <ul className={style.navDesktop__links}>
        {navigation.login.map(([text, to]) => (
          <LinkItem to={to} text={text} key={text} />
        ))}
      </ul>
    </nav>
  )
}

export default navDesktop
