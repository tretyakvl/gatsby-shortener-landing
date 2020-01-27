import React from 'react'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

import { variants, observerOptions } from '../../framerAnimations'

import Button from '../button/button'
import illustration from '../../images/illustration-working.svg'
import style from './hero.module.css'

const Hero = ({ title, desc, cta }) => {
  const [ref, inView] = useInView(observerOptions)
  return (
    <motion.section
      className={style.hero}
      variants={variants}
      initial='hidden'
      animate={inView ? 'shown' : 'hidden'}
      ref={ref}
    >
      <img
        src={illustration}
        width='733'
        height='482'
        alt='Illustration of a woman working on a computer'
      />
      <div className={style.hero__container}>
        <h2 className={style.hero__header}>{title}</h2>
        <p className={style.hero__text}>{desc}</p>
        <Button to={cta.to}>{cta.text}</Button>
      </div>
    </motion.section>
  )
}

export default Hero

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  cta: PropTypes.shape({
    text: PropTypes.string,
    to: PropTypes.string
  }).isRequired
}
