import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

import style from './button.module.css'

const tapAnimation = {
  initial: { scale: 1 },
  whileTap: { scale: 0.9 }
}

const Button = props => {
  const { types = '', to, href, ...rest } = props
  const className = types.split(' ').reduce((classes, type) => {
    const currentClass = style[type]

    return currentClass ? classes + ` ${currentClass}` : classes
  }, `${style.button} button-module`)

  if (to) {
    return (
      <motion.span
        style={{
          display: 'inline-block'
        }}
        {...tapAnimation}
      >
        <Link className={className} to={to} {...rest}>
          {props.children}
        </Link>
      </motion.span>
    )
  }

  if (href) {
    return (
      <motion.a
        className={className}
        href={href}
        rel='noopener noreferrer'
        {...rest}
        {...tapAnimation}
      >
        {props.children}
      </motion.a>
    )
  }

  return (
    <motion.button className={className} {...rest} {...tapAnimation}>
      {props.children}
    </motion.button>
  )
}

export default Button
