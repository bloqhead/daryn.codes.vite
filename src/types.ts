import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export type Artist = {
  url: string,
  name: string,
  artist: {
    name: string,
  },
}

export type Music = {
  [key: string]: Artist
}

export type Meta = {
  meta: {
    [key: string]: any,
  }
}
