import React from 'react'

import Button from '../button/button'

import style from './start.module.css'

const Start = ({ title, cta }) => {
  return (
    <div className={style.container}>
      <section className={style.start}>
        <h2>{title}</h2>
        <Button to={cta.to}>{cta.text}</Button>
      </section>
    </div>
  )
}

export default Start
