import React from 'react'

import Layout from '../components/layout/layout'
import Seo from '../components/seo'

const IndexPage = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <Seo title='Shortly' />
      <h1 className='visually-hidden'>Shortly URL shortening</h1>
    </Layout>
  )
}

export default IndexPage
