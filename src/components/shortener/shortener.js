import React, { useState } from 'react'
import usePersistentState from '../../hooks/usePersistentState'

import ShortenerForm from './shortener-form/shortener-form'
import ShortenerList from './shoretener-list/shortener-list'
import style from './shortener.module.css'

import { REL_INK } from '../../constants'

function * keyMaker () {
  let index = 0

  while (true) { yield index++ }
}

const keys = keyMaker()

const Shortener = () => {
  const [urlToShorten, setUrlToShorten] = useState('')
  const [shortenedLinks, setShortenedLinks] = usePersistentState('shortenedLinks', [])
  const [errorMessage, setErrorMessage] = useState('')

  const handleSumbit = async event => {
    event.preventDefault()

    if (!urlToShorten) {
      setErrorMessage('Please add a link')
      return
    }

    const result = await configuredFetch({ url: urlToShorten })

    if (result) {
      const { url, hashid } = result
      const key = keys.next().value

      setShortenedLinks(shortenedLinks => {
        const copy = [...shortenedLinks]

        if (copy.length > 2) copy.shift()
        copy.push({ url, hashid, key })

        return copy
      })
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
        <ShortenerList
          shortenedLinks={shortenedLinks}
          serviceUrl={REL_INK}
        />
      </div>
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
