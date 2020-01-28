import React from 'react'
import renderer from 'react-test-renderer'
import ShortenerList from './shortener-list'

describe('ShortenerList', () => {
  it('renders correctly with zero items', () => {
    const tree = renderer
      .create(<ShortenerList />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with three items', () => {
    const props = {
      shortenedLinks: [
        {
          original: 'https://www.google.com',
          shortened: 'https://www.google.com'
        },
        {
          original: 'https://www.amazon.com',
          shortened: 'https://www.amazon.com'
        },
        {
          original: 'https://www.google.ru',
          shortened: 'https://www.google.ru'
        }
      ]
    }
    const tree = renderer
      .create(<ShortenerList {...props} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
