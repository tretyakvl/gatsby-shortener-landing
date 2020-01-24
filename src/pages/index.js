import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import Seo from '../components/seo'
import AnimationWrapper from '../components/animationWrapper/animationWrapper'
import Hero from '../components/hero/hero'
import Shortener from '../components/shortener/shortener'
import Features from '../components/features/features'
import Start from '../components/start/start'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title='Shortly' />
      <h1 className='visually-hidden'>{data.indexYaml.title}</h1>
      <AnimationWrapper>
        <Hero {...data.indexYaml.sections.hero} />
      </AnimationWrapper>
      <AnimationWrapper>
        <Shortener />
      </AnimationWrapper>
      <AnimationWrapper>
        <Features {...data.indexYaml.sections.features} />
      </AnimationWrapper>
      <AnimationWrapper>
        <Start {...data.indexYaml.sections.start} />
      </AnimationWrapper>
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
          title
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
