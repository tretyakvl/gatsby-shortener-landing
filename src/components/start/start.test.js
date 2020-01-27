import React from 'react'
import renderer from 'react-test-renderer'
import Start from './start'

describe('Start', () => {
  it('renders correctly', () => {
    const props = {
      title: 'Start spending with us!',
      cta: {
        to: '/buy-the-product-please',
        text: 'No refunds, seriously'
      }
    }

    const tree = renderer
      .create(<Start {...props} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
