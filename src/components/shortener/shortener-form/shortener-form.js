import React from 'react'
import Button from '../../button/button'

import style from './shortener-form.module.css'

const ShortenerForm = ({ onSubmit, onChange, value }) => {
  return (
    <form
      className={style.shortener__form}
      onSubmit={onSubmit}
    >
      <input
        type='text'
        id='shortener-url'
        placeholder='Shorten a link here...'
        value={value}
        onChange={onChange}
      />
      <Button types='square thin500'>Shorten it!</Button>
    </form>
  )
}

export default ShortenerForm
