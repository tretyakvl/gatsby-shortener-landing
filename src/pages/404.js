import React from 'react'

import Layout from '../components/layout/layout'
import Seo from '../components/seo'

import illustration from '../images/illustration-404.svg'
import style from './404.module.css'

const NotFoundPage = () => {
  console.log(style)
  return (
    <Layout>
      <Seo title='404: Not found' />
      <main className={style.notFound}>
        <h1>Page not found</h1>
        <div className={style.notFound__illustration}>
          <img
            src={illustration}
            width='796'
            height='1074'
            alt='Illustration of a woman reaching down'
          />
          <span>
            404
          </span>
        </div>
      </main>
    </Layout>
  )
}

export default NotFoundPage
