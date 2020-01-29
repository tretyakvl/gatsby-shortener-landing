import React from 'react'
import Button from '../../button/button'

import style from './shortener-form.module.css'

const ShortenerForm = ({
  onSubmit,
  onChange,
  value,
  errorMessage,
  onFocus
}) => {
  const errorClass = errorMessage ? style.form__notificatorError : ''

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <div className={`${style.form__notificator} ${errorClass}`}>
        <label htmlFor='shortener-url' className='visually-hidden'>
          Enter a link you'd like to short
        </label>
        <input
          type='text'
          id='shortener-url'
          placeholder='Shorten a link here...'
          value={value}
          onChange={onChange}
          onFocus={onFocus}
        />
        <span>{errorMessage}</span>
      </div>
      <Button types='square thin500'>Shorten it!</Button>
    </form>
  )
}

export default ShortenerForm
