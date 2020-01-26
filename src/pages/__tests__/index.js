import React from 'react'
import renderer from 'react-test-renderer'
import { StaticQuery } from 'gatsby'

import Index from '../index'
import indexData from './index-data.json'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({ indexData.data })
  )
})

describe('Index', () => {
  it('renders correctly', () => {
    const data = { indexData.data }

    const tree = renderer.create(<Index data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
