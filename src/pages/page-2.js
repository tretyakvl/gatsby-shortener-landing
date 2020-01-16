import React from 'react'

import Layout from '../components/layout/layout'
import Seo from '../components/seo'
import Button from '../components/button/button'

const SecondPage = () => (
  <Layout>
    <Seo title='Page two' />

    <div style={{
      paddingLeft: '200px'
    }}
    >
      <Button to='/'>Get started</Button>
      <Button types='thin'>Sign Up</Button>
      <Button types='square'>Shorten It!</Button>
      <Button types='square thin active'>Copied!</Button>
      <Button types='square thin'>Copy</Button>
    </div>
  </Layout>
)

export default SecondPage
