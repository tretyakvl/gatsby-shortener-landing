/**
 * TODO:
 *
 * Handle errors, 404 and 500
 * Remove commented promise fetch
 */

import React, { useState } from 'react'

import style from './shortener.module.css'

const Shortener = () => {
  const [urlToShorten, setUrlToShorten] = useState('')

  return (
    <section className={style.shortener}>
      <form
        className={style.shortener__form}
        onSubmit={event => {
          event.preventDefault()
          configuredFetch({ urlToShorten })
        }}
      >
        <input
          type='text'
          id='shortener-url'
          placeholder='Shorten a link here...'
          value={urlToShorten}
          onChange={event => setUrlToShorten(event.target.value)}
        />
        <button type='submit'>Shorten it</button>
      </form>
    </section>
  )
}

export default Shortener

async function configuredFetch (payload) {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const request = new Request('https://rel.ink/api/links/', {
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
