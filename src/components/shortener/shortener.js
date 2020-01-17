import React, { useState } from 'react'
import Button from '../button/button'

import style from './shortener.module.css'

const REL_INK = 'https://rel.ink'

const Shortener = () => {
  const [urlToShorten, setUrlToShorten] = useState('')
  const [shortenedLinks, setShortenedLinks] = useState([])

  return (
    <section className={style.shortener}>
      <form
        className={style.shortener__form}
        onSubmit={async event => {
          event.preventDefault()
          const result = await configuredFetch({ urlToShorten })

          if (result) {
            const { url, hashid } = result

            setShortenedLinks(shortenedLinks => [
              ...shortenedLinks,
              { url, hashid }
            ])
          }
        }}
      >
        <input
          type='text'
          id='shortener-url'
          placeholder='Shorten a link here...'
          value={urlToShorten}
          onChange={event => setUrlToShorten(event.target.value)}
        />
        <Button types='square thin500'>Shorten it!</Button>
      </form>
      <ul className={style.shortener__list}>
        <li className={style.shortener__item}>
          <span>https://www.frontendmentor.io</span>
          <a href='#'>https://rel.ink/k4lKyk</a>
          <Button types='square thin400'>copy</Button>
        </li>
        <li className={style.shortener__item}>
          <span>https://www.frontendmentor.io</span>
          <a href='#'>https://rel.ink/k4lKyk</a>
          <Button types='square thin400'>copy</Button>
        </li>
        {/* {shortenedLinks.map(({ url, hashid }, i) => (
          <li key={hashid + i}>
            <span>{url}</span>
            <span>{`${REL_INK}/${hashid}`}</span>
          </li>
        ))} */}
      </ul>
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
