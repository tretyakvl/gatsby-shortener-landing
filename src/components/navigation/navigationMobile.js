import React from 'react'
import { motion } from 'framer-motion'

import style from './navigationMobiel.module.css'

import Hamburger from '../hamburger/hamburger.js'

const NavigationMobile = ({ fields, isOpen }) => {
  return (
    <nav className={style.nav}>
      <Hamburger isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
      <div
        className={style.nav__dropdown}
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
        <ul className={style.nav__links}>
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
        <ul className={style.nav__links}>
          <li><a href=''>Login</a></li>
          <li><a href=''>Sing Up</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavigationMobile
