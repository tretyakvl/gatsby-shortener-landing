import React from 'react'
import PropTypes from 'prop-types'

// import Header from './header'
import './layout.css'
import './global.css'

const Layout = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
