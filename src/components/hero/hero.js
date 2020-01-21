import React from 'react'

import Button from '../button/button'
import illustration from '../../images/illustration-working.svg'
import style from './hero.module.css'

const Hero = ({
  title,
  desc,
  illustration: publicUrl,
  cta: { text, to }
}) => {
  return (
    <section className={style.hero}>
      <img
        src={illustration}
        width='733'
        height='482'
        alt='Illustration of a woman working on a computer'
      />
      <div className={style.hero__container}>
        <h2 className={style.hero__header}>{title}</h2>
        <p className={style.hero__text}>
          {desc}
        </p>
        <Button to={to}>
          {text}
        </Button>
      </div>
    </section>
  )
}

export default Hero
