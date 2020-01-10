import React from 'react'

import style from './shortener.module.css'

const Shortener = () => {
  const handleSumbit = (event) => {
    event.preventDefault()
    console.log(event)
  }

  return (
    <section className={style.shortener}>
      <form
        className={style.shortener__form}
        onSubmit={handleSumbit}
      >
        <input type='text' id='shortener-email' />
        <button type='submit'>Shorten it</button>
      </form>
    </section>
  )
}

export default Shortener
