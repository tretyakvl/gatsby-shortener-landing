import React from 'react'
import { motion } from 'framer-motion'

import style from './button.module.css'

const Button = (props) => {
  return (
    <motion.span
      className={style.button}
      whileTap={{ scale: 0.9 }}
    >
      {props.children}
    </motion.span>
  )
}

export default Button
