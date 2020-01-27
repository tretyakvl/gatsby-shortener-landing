import React from 'react'
import { Link } from 'gatsby'
import { useMediaQuery } from 'react-responsive'

import Button from '../../button/button'
import NavMobile from './navMobile'
import NavDesktop from './navDesktop'

const Navigation = ({ navigation }) => {
  const isWide = useMediaQuery({
    minWidth: '43rem'
  })

  const NavFields = () => (
    <>
      <ul className=''>
        {navigation.primary.map(([text, to]) => (
          <li key={text}>
            <Link to={to}>{text}</Link>
          </li>
        ))}
      </ul>
      <ul className=''>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Button to='/sign-up'>Sign Up</Button>
        </li>
      </ul>
    </>
  )

  if (isWide) {
    return (
      <NavDesktop navigation={navigation}>
        <NavFields />
      </NavDesktop>
    )
  }
  return (
    <NavMobile navigation={navigation}>
      <NavFields />
    </NavMobile>
  )
}

export default Navigation
