import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
// import PropTypes from 'prop-types'

import Logo from '../logo/logo'
import Socials from '../socials/socials'

import style from './footer.module.css'

const Footer = ({ groups, social }) => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <Logo type='light' />
        <nav>
          {groups.map(({ group }, i) => (
            <section key={i}>
              <h4>{group.title}</h4>
              <ul>
                {group.links.map(([title, to], i) => (
                  <li key={i}>
                    <Link to={to}>{title}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>
        <Socials links={social.links} />
      </div>
    </footer>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        footerYaml {
          groups {
            group {
              links
              title
            }
          }
          social {
            links
          }
        }
      }
    `}
    render={({ footerYaml }) => <Footer {...footerYaml} {...props} />}
  />
)
