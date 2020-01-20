import React from 'react'

import Button from '../button/button'

import style from './start.module.css'

const Start = ({ title, cta }) => {
  return (
    <section className={style.start}>
      <div className={style.start__container}>
        <h2>{title}</h2>
        <Button to={cta.to}>{cta.text}</Button>
      </div>
    </section>

  )
}

export default Start
