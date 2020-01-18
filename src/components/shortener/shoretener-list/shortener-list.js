import React from 'react'
import { motion } from 'framer-motion'
import Button from '../../button/button'

import style from './shortener-list.module.css'

const motionVariants = {
  hidden: {
    opacity: 0,
    x: -100,
    y: -20
  },
  shown: {
    opacity: 1,
    x: 0,
    y: 0
  }
}

const ShortenerList = ({ shortenedLinks, serviceUrl }) => {
  return (
    <ul className={style.shortener__list}>
      {shortenedLinks.map(({ url, hashid }) => {
        const shortenedUrl = `${serviceUrl}/${hashid}`

        return (
          <motion.li
            className={style.shortener__item}
            key={hashid}
            variants={motionVariants}
            initial='hidden'
            animate='shown'
          >
            <span>{url}</span>
            <a href={shortenedUrl} target='_blank' rel='noopener noreferrer'>
              {shortenedUrl}
            </a>
            <Button types='square thin400'>copy</Button>
          </motion.li>
        )
      })}
    </ul>
  )
}

export default ShortenerList
