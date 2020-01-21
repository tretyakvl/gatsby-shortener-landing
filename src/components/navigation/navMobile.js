import React, { useState } from 'react'
import { motion } from 'framer-motion'

import Hamburger from '../hamburger/hamburger.js'

import style from './navMobile.module.css'

const NavigationMobile = ({ children }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav className={style.navMobile}>
      <Hamburger isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
      <motion.div
        className={style.navMobile__dropdown}
        initial={{
          clipPath: 'circle(0% at 110% -10%)'
        }}
        variants={{
          closed: {
            clipPath: 'circle(0% at 110% -10%)'
          },
          open: {
            clipPath: 'circle(160% at 110% -10%)'
          }
        }}
        animate={isOpen ? 'open' : 'closed'}
      >
        {children}
      </motion.div>
    </nav>
  )
}

export default NavigationMobile
