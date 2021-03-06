import { useState, useEffect } from 'react'

const usePersistentState = (key, intialValue) => {
  const storedString =
    typeof window !== 'undefined' && window.localStorage.getItem(key)

  const [value, setValue] = useState(
    storedString ? JSON.parse(storedString) : intialValue
  )

  useEffect(() => {
    typeof window !== 'undefined' &&
      window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default usePersistentState
