import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

import usePersistentState from '../../hooks/usePersistentState'
import shortenUrl from '../../helpers/shortenUrl'
import { variants, observerOptions } from '../../framerAnimations'

import ShortenerForm from './shortener-form/shortener-form'
import ShortenerList from './shortener-list/shortener-list'
import style from './shortener.module.css'

const Shortener = () => {
  const [ref, inView] = useInView(observerOptions)

  const [urlToShorten, setUrlToShorten] = useState('')
  const [shortenedLinks, setShortenedLinks] = usePersistentState(
    'shortenedLinks',
    []
  )
  const [errorMessage, setErrorMessage] = useState('')

  const handleSumbit = async event => {
    event.preventDefault()

    if (shortenedLinks.some(item => item.original === urlToShorten)) return

    try {
      const { original, shortened } = await shortenUrl(urlToShorten)

      setShortenedLinks(shortenedLinks => {
        const copy = [...shortenedLinks]

        if (copy.length > 2) copy.shift()
        copy.push({ original, shortened })

        return copy
      })
    } catch (error) {
      console.log(error)
      setErrorMessage('Something went wrong')
    }
  }
  const handleChange = event => setUrlToShorten(event.target.value)
  const handleFocus = () => setErrorMessage('')

  return (
    <section className={style.shortener}>
      <motion.div
        className={style.shortener__container}
        variants={variants}
        initial='hidden'
        animate={inView ? 'shown' : 'hidden'}
        ref={ref}
      >
        <ShortenerForm
          onSubmit={handleSumbit}
          onChange={handleChange}
          onFocus={handleFocus}
          value={urlToShorten}
          errorMessage={errorMessage}
        />
        <ShortenerList shortenedLinks={shortenedLinks} variants={variants} />
      </motion.div>
    </section>
  )
}

export default Shortener
