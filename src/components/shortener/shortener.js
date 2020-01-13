/**
 * TODO:
 *
 * Handle errors, 404 and 500
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
          console.log(urlToShorten)
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

async function fetchShortenedUrl (url) {
  fetch('https://rel.ink/api/links/', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({ url })
  }).then(response => console.log(response))
}
