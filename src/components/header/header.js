import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'

import Navigation from './navigation/navigation'

import style from './header.module.css'
import Logo from '../logo/logo'

export const PureHeader = ({ navigation }) => {
  return (
    <header className={style.header}>
      <Link to='/'>
        <Logo />
      </Link>
      <Navigation navigation={navigation} />
    </header>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        headerYaml {
          navigation {
            primary
            login
          }
        }
      }
    `}
    render={({ headerYaml }) => <PureHeader {...headerYaml} {...props} />}
  />
)

PureHeader.propTypes = {
  navigation: PropTypes.shape({
    login: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    primary: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
  }).isRequired
}
