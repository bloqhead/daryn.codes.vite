import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface Artist {
  url: string
  name: string
  artist: {
    name: string
  }
}

export interface Music {
  [key: string]: Artist
}

export interface Meta {
  meta: {
    [key: string]: any
  }
}
