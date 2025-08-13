export default function (text: string) {
  const wpm = 225
  const words = text.trim().split(/\s+/).length
  const label = words >= wpm ? 'minutes' : 'minute'

  return `${Math.ceil(words / wpm)} ${label}`
}
