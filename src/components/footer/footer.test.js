import React from 'react'
import renderer from 'react-test-renderer'
import { PureFooter as Footer } from './footer'

describe('Footer', () => {
  it('renders correctly', () => {
    const props = {
      groups: [
        {
          group: {
            links: [
              ['We', '/we'],
              ['All', '/all'],
              ['Lift', '/lift']
            ],
            title: 'Together'
          }
        },
        {
          group: {
            links: [
              ['check', '/check'],
              ['your', '/your'],
              ['pulse', '/pulse']
            ],
            title: 'It may be gone'
          }
        },
        {
          group: {
            links: [
              ['Call', '/call'],
              ['Your', '/your'],
              ['Grandma', '/grandma']
            ],
            title: 'Regularly'
          }
        }
      ],
      social: {
        links: [
          ['Zuccs', '/purgatory'],
          ['Trees', '/are-bend'],
          ['Cancel', '/everyone']
        ]
      }
    }

    const tree = renderer.create(<Footer {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
