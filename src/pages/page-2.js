import React from 'react'

import Layout from '../components/layout/layout'
import Seo from '../components/seo'
import Button from '../components/button/button'

const SecondPage = () => (
  <Layout>
    <Seo title='Page two' />
    <Button to='/'>Gatsby</Button>
    <Button href='google.com'>Normal a</Button>
    <Button>Button</Button>
    <Button type='square'>Button</Button>
    <Button type='square' size='narrow'>Button</Button>
    <Button size='narrow'>Button</Button>
    <Button size='narrow' active>Button</Button>
  </Layout>
)

export default SecondPage
