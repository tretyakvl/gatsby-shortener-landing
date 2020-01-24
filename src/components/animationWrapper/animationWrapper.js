import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const variants = {
  hidden: {
    opacity: 0,
    x: -100
  },
  shown: {
    opacity: 1,
    x: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
      duration: 5
    }
  }
}

const AnimationWrapper = ({ children }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial='hidden'
      animate={inView ? 'shown' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}

export default AnimationWrapper
