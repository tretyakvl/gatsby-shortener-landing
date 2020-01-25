import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Button from '../../button/button'

import style from './shortener-list.module.css'

const Item = ({ original, shortened, variants }) => {
  const [isCopied, setIsCopied] = useState(false)

  let activeClass = ''
  let buttonText = 'copy'

  if (isCopied) {
    activeClass = 'active'
    buttonText = 'copied!'
  }

  return (
    <motion.li
      className={style.shortener__item}
      variants={variants}
      exit='hidden'
      positionTransition
    >
      <span>{original}</span>
      <a href={shortened} target='_blank' rel='noopener noreferrer'>
        {shortened}
      </a>
      <CopyToClipboard
        text={shortened}
        onCopy={() => setIsCopied(isCopied => true)}
      >
        <Button types={`square thin400 ${activeClass}`}>{buttonText}</Button>
      </CopyToClipboard>
    </motion.li>
  )
}

const ShortenerList = ({ shortenedLinks, variants }) => {
  return (
    <ul className={style.shortener__list}>
      <AnimatePresence>
        {shortenedLinks.map(({ original, shortened }) => {
          return (
            <Item
              original={original}
              shortened={shortened}
              variants={variants}
              key={shortened}
            />
          )
        })}
      </AnimatePresence>
    </ul>
  )
}

export default ShortenerList
