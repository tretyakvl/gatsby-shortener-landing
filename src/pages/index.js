import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import Image from '../components/image'
import Seo from '../components/seo'

const IndexPage = () => (
  <Layout>
    <Seo title='Shortly' />
    <section>
      <h1>More than just shorter links</h1>
      <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
      </p>
    </section>
  </Layout>
)

export default IndexPage
