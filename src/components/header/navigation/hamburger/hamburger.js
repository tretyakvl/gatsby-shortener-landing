import React from 'react'
import { motion } from 'framer-motion'

import style from './hamburger.module.css'

const Path = props => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='var(--gray-500)'
    initial='closed'
    {...props}
  />
)

const Hamburger = ({ isOpen, onClick }) => {
  return (
    <motion.button className={style.hamburger} onClick={onClick}>
      <svg width='25' height='25' viewBox='0 0 25 25'>
        <Path
          variants={{
            closed: { d: 'M 2 4 L 23 4' },
            open: { d: 'M 3 22 L 22 3' }
          }}
          animate={isOpen ? 'open' : 'closed'}
        />
        <Path
          d='M 2 12.5 L 23 12.5'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
          animate={isOpen ? 'open' : 'closed'}
        />
        <Path
          variants={{
            closed: { d: 'M 2 21 L 23 21' },
            open: { d: 'M 3 3 L 22 22' }
          }}
          animate={isOpen ? 'open' : 'closed'}
        />
      </svg>
      <span className='visually-hidden'>Open/close menu</span>
    </motion.button>
  )
}

export default Hamburger
