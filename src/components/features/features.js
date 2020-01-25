import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

import { variants, observerOptions } from '../../framerAnimations'

import style from './features.module.css'

const Features = ({ title, desc, list }) => {
  const [ref, inView] = useInView(observerOptions)

  return (
    <section className={style.features}>
      <motion.div
        className={style.features__container}
        variants={variants}
        initial='hidden'
        animate={inView ? 'shown' : 'hidden'}
        ref={ref}
      >
        <h2 className='visually-hidden'>Shortly features</h2>
        <div className={style.features__main}>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <ul className={style.features__list}>
          {list.map(({ item }, i) => (
            <li key={i}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}

export default Features
