import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CopyToClipboard } from 'react-copy-to-clipboard'

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
  },
  exit: {
    opacity: 0
  }
}

const Item = ({ original, shortened }) => {
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
      variants={motionVariants}
      initial='hidden'
      animate='shown'
      exit='exit'
      layoutTransition
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
    <ul className={style.shortener__list}>
      <AnimatePresence>
        {shortenedLinks.map(({ original, shortened }, i) => {
          return <Item original={original} shortened={shortened} key={i} />
        })}
      </AnimatePresence>
    </ul>
  )
}

export default ShortenerList
