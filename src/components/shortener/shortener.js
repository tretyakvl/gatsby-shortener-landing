import React, { useState } from 'react'
import ShortenerForm from './shortener-form/shortener-form'
import ShortenerList from './shoretener-list/shortener-list'

import { REL_INK } from '../../constants'

import style from './shortener.module.css'

const Shortener = () => {
  const [urlToShorten, setUrlToShorten] = useState('')
  const [shortenedLinks, setShortenedLinks] = useState([])

  const handleSumbit = async event => {
    event.preventDefault()
    const result = await configuredFetch({ url: urlToShorten })

    if (result) {
      const { url, hashid } = result

      setShortenedLinks(shortenedLinks => [...shortenedLinks, { url, hashid }])
    }
  }
  const handleChange = event => setUrlToShorten(event.target.value)

  return (
    <section className={style.shortener}>
      <ShortenerForm
        onSubmit={handleSumbit}
        onChange={handleChange}
        value={urlToShorten}
      />
      <ShortenerList
        shortenedLinks={shortenedLinks}
        serviceUrl={REL_INK}
      />
    </section>
  )
}

export default Shortener

async function configuredFetch (payload) {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const request = new Request(`${REL_INK}/api/links/`, {
    method: 'POST',
    mode: 'cors',
    headers,
    body: JSON.stringify(payload)
  })

  try {
    const response = await fetch(request)
    if (!response.ok) throw new Error(response.statusText)
    return await response.json()
  } catch (error) {
    console.log(`Some error: ${error}`)
    return null
  }
}
