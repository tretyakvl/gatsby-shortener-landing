export const variants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  shown: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.3
    }
  }
}

export const observerOptions = {
  threshold: 0.2
}
