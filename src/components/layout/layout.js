import React from 'react'
import PropTypes from 'prop-types'

import 'normalize.css'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Shortly</h1>
      </header>
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
