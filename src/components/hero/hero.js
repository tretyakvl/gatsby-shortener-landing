import React from 'react'
import { Link } from 'gatsby'

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
        <h2 className={style.hero__header}>More than just shorter links</h2>
        <p className={style.hero__text}>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button>
          <Link>{text}</Link>
        </Button>
      </div>
    </section>
  )
}

export default Hero
