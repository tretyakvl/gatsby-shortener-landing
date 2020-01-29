import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { useMediaQuery } from 'react-responsive'

import Button from '../../button/button'
import NavMobile from './navMobile'
import NavDesktop from './navDesktop'

const Navigation = ({ navigation }) => {
  const isWide = useMediaQuery({
    minWidth: '43rem'
  })

  // Fixes gatsby hydration bug
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [isClient])
  if (!isClient) return null

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
      <NavDesktop>
        <NavFields />
      </NavDesktop>
    )
  }
  return (
    <NavMobile>
      <NavFields />
    </NavMobile>
  )
}

export default Navigation
