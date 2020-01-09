import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import Seo from '../components/seo'
import Hero from '../components/hero/hero'

const IndexPage = ({ data }) => {
  console.log(data.indexYaml)

  return (
    <Layout>
      <Seo title='Shortly' />
      <h1 className='visually-hidden'>{data.indexYaml.title}</h1>
      <Hero />
    </Layout>
  )
}

export const query = graphql`
  query {
    indexYaml {
      title
      sections {
        hero {
          title
          desc
          illustration {
            publicURL
          }
          cta {
            text
            to
          }
        }
        features {
          tite
          desc
          list {
            item {
              title
              desc
            }
          }
        }
        start {
          title
          cta {
            text
            to
          }
        }
      }
    }
  }
`

export default IndexPage
