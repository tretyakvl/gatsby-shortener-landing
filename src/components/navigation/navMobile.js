import React, { useState } from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

import Hamburger from '../hamburger/hamburger.js'

import style from './navMobile.module.css'

const LinkItem = ({ text, to }) => (
  <motion.li
    whileTap={{
      scale: 0.8
    }}
  >
    <Link to={to}>{text}</Link>
  </motion.li>
)

const NavigationMobile = ({ navigation }) => {
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
        <ul className={style.navMobile__links}>
          {navigation.primary.map(([text, to]) => (
            <LinkItem to={to} text={text} key={text} />
          ))}
        </ul>
        <ul className={style.navMobile__links}>
          {navigation.login.map(([text, to]) => (
            <LinkItem to={to} text={text} key={text} />
          ))}
        </ul>
      </motion.div>
    </nav>
  )
}

export default NavigationMobile
