import React, { useState } from 'react'

import style from './header.module.css'
import logo from '../../images/logo.svg'

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <header
      className={style.header}
    >
      <img src={logo} alt='Shortly logo' />
    </header>
  )
}

export default Header
