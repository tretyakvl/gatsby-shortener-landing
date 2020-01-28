import React from 'react'
import renderer from 'react-test-renderer'
import Shortener from './shortener'

describe('Shortener', () => {
  it('renders correctly with zero links', () => {
    const tree = renderer
      .create(<Shortener />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
