import React from 'react'
import Button from '../../button'

import style from './shortener-list.module.css';

const ShortenerList = () => {
  return (
    <ul className={style.shortener__list}>
      {shortenedLinks.map(({ url, hashid }, i) => {
        const shortenedUrl = `${REL_INK}/${hashid}`
        return (
          <li className={style.shortener__item} key={hashid + i}>
            <span>{url}</span>
            <a href={shortenedUrl} target='_blank' rel='noopener noreferrer'>
              {shortenedUrl}
            </a>
            <Button types='square thin400'>copy</Button>
          </li>
        )
      })}
    </ul>
  )
}

export default ShortenerList
