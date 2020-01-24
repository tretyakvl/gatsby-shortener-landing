import React, { useState } from 'react'
import usePersistentState from '../../hooks/usePersistentState'
import shortenUrl from '../../helpers/shortenUrl'

import ShortenerForm from './shortener-form/shortener-form'
import ShortenerList from './shortener-list/shortener-list'
import style from './shortener.module.css'

const Shortener = () => {
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

  return (
    <section className={style.shortener}>
      <div className={style.shortener__container}>
        <ShortenerForm
          onSubmit={handleSumbit}
          onChange={handleChange}
          value={urlToShorten}
          errorMessage={errorMessage}
        />
        <ShortenerList shortenedLinks={shortenedLinks} />
      </div>
    </section>
  )
}

export default Shortener
