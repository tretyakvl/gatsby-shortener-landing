import React from 'react'

import style from './features.module.css'

const Features = ({ title, desc, list }) => {
  return (
    <section className={style.features}>
      <div className={style.features__container}>
        <h2 className='visually-hidden'>Shortly features</h2>
        <div className={style.features__main}>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <ul className={style.features__list}>
          {list.map(({ item }, i) => (
            <li key={i}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Features
