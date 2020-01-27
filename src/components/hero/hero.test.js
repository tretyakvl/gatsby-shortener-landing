import React from 'react'
import renderer from 'react-test-renderer'
import Hero from './hero'

describe('Hero', () => {
  it('renders correctly', () => {
    const props = {
      title: 'Very cool service',
      desc: 'What an amazing description!',
      cta: {
        to: '/buy-the-product-please',
        text: 'No refunds'
      }
    }

    const tree = renderer
      .create(<Hero {...props} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
