import React from 'react'

import Logotype from '../../images/logo.inline.svg'

import style from './logo.module.css'

const Logo = ({ type }) => {
  return (
    <Logotype className={style[type]} />
  )
}

export default Logo
