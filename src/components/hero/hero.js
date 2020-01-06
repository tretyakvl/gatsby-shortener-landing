import React from "react"

import style from "./hero.module.css"

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.hero__container}>
        <h2 className={style.hero__header}>More than just shorter links</h2>
        <p className={style.hero__text}>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <a>Get Started</a>
      </div>
    </section>
  )
}

export default Hero
