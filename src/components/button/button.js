import React from 'react'
import { Link } from 'gatsby'

import style from './button.module.css'

const Button = props => {
  const { type, size, active, to, href, ...rest } = props
  let className = style.button + ' .button'

  if (type === 'square') {
    className = className + ` ${style.buttonSquare}`
  }

  if (size === 'narrow') {
    className = className + ` ${style.buttonNarrow}`
  }

  if (active) {
    className = className + ` ${style.buttonActive}`
  }

  if (to) {
    return (
      <Link className={className} to={to} {...rest}>
        {props.children}
      </Link>
    )
  }

  if (href) {
    return (
      <a className={className} href={href} rel='noopener noreferrer'>
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
