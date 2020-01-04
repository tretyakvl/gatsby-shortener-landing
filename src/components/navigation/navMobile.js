import React, { useState } from 'react'
import { motion } from 'framer-motion'

import Hamburger from '../hamburger/hamburger.js'

import style from './navMobile.module.css'

const NavigationMobile = ({ fields }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav className={style.navMobile}>
      <Hamburger isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
      <motion.div
        className={style.navMobile__dropdown}
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
        <ul className={style.navMobile__links}>
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
        <ul className={style.navMobile__links}>
          <li><a href=''>Login</a></li>
          <li><a href=''>Sing Up</a></li>
        </ul>
      </motion.div>
    </nav>
  )
}

export default NavigationMobile
