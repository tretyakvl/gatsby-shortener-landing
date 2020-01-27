import React from 'react'
import renderer from 'react-test-renderer'
import { PureHeader as Header } from './header'

describe('Header', () => {
  it('renders correctly', () => {
    const data = {
      primary: [
        ['About', '/about'],
        ['Team', '/team'],
        ['Price', '/price']
      ],
      login: [
        ['Login', '/login'],
        ['Register', '/register']
      ]
    }

    const tree = renderer
      .create(<Header navigation={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
