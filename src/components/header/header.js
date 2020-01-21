import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import Navigation from '../navigation/navigation'

import style from './header.module.css'
import Logo from '../logo/logo'

const Header = ({ navigation }) => {
  return (
    <header
      className={style.header}
    >
      <Link to='/'><Logo /></Link>
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
