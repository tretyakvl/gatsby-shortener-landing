import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

import { variants, observerOptions } from '../../framerAnimations'

import Button from '../button/button'

import style from './start.module.css'

const Start = ({ title, cta }) => {
  const [ref, inView] = useInView(observerOptions)

  return (
    <section className={style.start}>
      <motion.div
        className={style.start__container}
        variants={variants}
        initial='hidden'
        animate={inView ? 'shown' : 'hidden'}
        ref={ref}
      >
        <h2>{title}</h2>
        <Button to={cta.to}>{cta.text}</Button>
      </motion.div>
    </section>
  )
}

export default Start
