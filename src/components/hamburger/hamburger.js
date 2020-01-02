import React from 'react'
import { motion } from 'framer-motion'

import style from './hamburger.module.css'

const Path = props => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='var(--textColor500)'
    {...props}
  />
)

const Hamburger = ({ isOpen }) => {
  return (
    <motion.button
      className={style.hamburger}
      onClick={() => {}}
    >
      <svg width='23' height='23' viewBox='0 0 23 23'>
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' }
          }}
          animate={isOpen ? 'open' : 'closed'}
        />
        <Path
          d='M 2 9.423 L 20 9.423'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
          animate={isOpen ? 'open' : 'closed'}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' }
          }}
          animate={isOpen ? 'open' : 'closed'}
        />
      </svg>
      <span className='visually-hidden'>
        Open/close menu
      </span>
    </motion.button>
  )
}

export default Hamburger
