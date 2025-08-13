import type { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface LastFmArtist {
  name: string
  url: string
}

export interface LastFmTrack {
  name: string
  url: string
  artist: LastFmArtist
}

export type Music = LastFmTrack[]

export interface Meta {
  meta: {
    date: Date | string | number
    excerpt: string
    layout?: string
    title: string
    ttr?: string | number
    state?: object | unknown[]
  }
}
