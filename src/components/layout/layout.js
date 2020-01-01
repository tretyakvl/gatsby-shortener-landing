import React from 'react'
import PropTypes from 'prop-types'

import Header from '../header/header'

import 'normalize.css'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <footer>
      footer
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
