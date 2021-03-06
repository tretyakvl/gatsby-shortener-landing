import React from 'react'

import facebook from '../../images/icon-facebook.inline.svg'
import instagram from '../../images/icon-instagram.inline.svg'
import pinterest from '../../images/icon-pinterest.inline.svg'
import twitter from '../../images/icon-twitter.inline.svg'

import style from './socials.module.css'

const icons = {
  facebook,
  instagram,
  pinterest,
  twitter
}

const Socials = ({ links = [] }) => {
  return (
    <ul className={style.socials}>
      {links.map(([name, href]) => {
        const CurrIcon = icons[name] || pinterest

        return (
          <li className={style.socials__item} key={name}>
            <a href={href} target='_blank' rel='noopener noreferrer'>
              <span className='visually-hidden'>{name}</span>
              <CurrIcon />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Socials
