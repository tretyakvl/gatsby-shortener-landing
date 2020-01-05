import React from 'react'
import { useMediaQuery } from 'react-responsive'

import NavMobile from './navMobile'
import NavDesktop from './navDesktop'

const Navigation = () => {
  const isWide = useMediaQuery({
    minWidth: '41.25rem'
  })
  const fields = ['features', 'pricing', 'resources']

  if (isWide) return <NavDesktop fields={fields} />
  return <NavMobile fields={fields} />
}

export default Navigation
