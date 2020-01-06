import React from 'react'
import Image from '../image'

const Hero = () => {
  return (
    <section>
      <Image
        fileName='illustration-working.svg'
        alt='Working on a computer illustration'
      />
      <div>
        <h2>More than just shorter links</h2>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <a>Get Started</a>
      </div>
    </section>
  )
}

export default Hero
