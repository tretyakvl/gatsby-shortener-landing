import React from 'react'
import renderer from 'react-test-renderer'
import Features from './features'

describe('Features', () => {
  it('renders correctly', () => {
    const props = {
      title: 'Take a look at our features!',
      desc: 'Our features are very featury',
      list: [
        {
          item: {
            title: 'Cool feature',
            desc: 'This is our favourite'
          }
        },
        {
          item: {
            title: 'Amazing feature',
            desc: 'Well, maybe it`s not true'
          }
        },
        {
          item: {
            title: 'Unique feature',
            desc: 'Call the police if you see someone else list this'
          }
        }
      ]
    }

    const tree = renderer
      .create(<Features {...props} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
