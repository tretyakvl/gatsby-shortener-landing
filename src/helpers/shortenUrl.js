import { REL_INK } from '../constants'

const shoretnUrl = async (urlToShoren) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const request = new Request(`${REL_INK}/api/links/`, {
    method: 'POST',
    mode: 'cors',
    headers,
    body: JSON.stringify({ url: urlToShoren })
  })

  const response = await fetch(request)

  if (!response.ok) throw new Error(response.statusText)

  const { url, hashid } = await response.json()

  return { original: url, shortened: `${REL_INK}/${hashid}` }
}

export default shoretnUrl
