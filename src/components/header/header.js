import React, { useState } from 'react'
import { motion } from 'framer-motion'

import Hamburger from '../hamburger/hamburger.js'

import style from './header.module.css'
import logo from '../../images/logo.svg'

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <header
      className={style.header}
    >
      <img src={logo} alt='Shortly logo' />
      <Hamburger isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
      <motion.nav
        className={style.header__navigation}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 40
        }}
        variants={{
          closed: {
            'clip-path': 'circle(0% at 110% -10%)'
          },
          open: {
            'clip-path': 'circle(160% at 110% -10%)'
          }
        }}
        animate={isOpen ? 'open' : 'closed'}
      >
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
      </motion.nav>
    </header>
  )
}

export default Header
