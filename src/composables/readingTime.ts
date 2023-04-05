export default function (text: String) {
  const wpm = 225
  const words = text.trim().split(/\s+/).length
  const label = words >= wpm ? 'minutes' : 'minute'

  return `${Math.ceil(words / wpm)} ${label}`
}
