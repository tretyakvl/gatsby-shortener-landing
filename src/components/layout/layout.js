import React from 'react'
import PropTypes from 'prop-types'

import Header from '../header/header'
import Footer from '../footer/footer'

import 'normalize.css'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
