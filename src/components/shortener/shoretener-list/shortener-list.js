import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Button from '../../button/button'

import style from './shortener-list.module.css'

const variants = {
  hidden: {
    opacity: 0,
    x: -10
  },
  shown: {
    opacity: 1,
    x: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3
    }
  }
}

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

const ShortenerList = ({ shortenedLinks }) => {
  return (
    <motion.ul
      className={style.shortener__list}
      variants={variants}
      initial='hidden'
      animate='shown'
    >
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
    </motion.ul>
  )
}

export default ShortenerList
