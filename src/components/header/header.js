import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Navigation from '../navigation/navigation'

import style from './header.module.css'
import Logo from '../logo/logo'

const Header = ({ navigation }) => {
  return (
    <header
      className={style.header}
    >
      <Logo />
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
            primary,
            login
          }
        }
      }
    `}
    render={({ headerYaml }) => <Header {...headerYaml} {...props} />}
  />
)
