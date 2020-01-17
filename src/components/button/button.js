import React from 'react'
import { Link } from 'gatsby'

import style from './button.module.css'

const Button = props => {
  const { types = '', to, href, ...rest } = props
  const className = types.split(' ').reduce((classes, type) => {
    const currentClass = style[type]

    return currentClass ? classes + ` ${currentClass}` : classes
  }, `button-module ${style.button}`)

  if (to) {
    return (
      <Link className={className} to={to} {...rest}>
        {props.children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        className={className}
        href={href}
        rel='noopener noreferrer'
        {...rest}
      >
        {props.children}
      </a>
    )
  }

  return (
    <button className={className} {...rest}>
      {props.children}
    </button>
  )
}

export default Button
