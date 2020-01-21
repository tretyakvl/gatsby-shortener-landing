import React from 'react'

import style from './navDesktop.module.css'

const navDesktop = ({ children }) => {
  return (
    <nav className={style.navDesktop}>
      {children}
    </nav>
  )
}

export default navDesktop
