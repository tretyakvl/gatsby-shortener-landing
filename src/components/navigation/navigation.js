import React from 'react'
import { useMediaQuery } from 'react-responsive'

import NavMobile from './navMobile'
import NavDesktop from './navDesktop'

const Navigation = ({ navigation }) => {
  const isWide = useMediaQuery({
    minWidth: '41.25rem'
  })

  if (isWide) return <NavDesktop navigation={navigation} />
  return <NavMobile navigation={navigation} />
}

export default Navigation
