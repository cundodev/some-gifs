import { Gif } from '@/types'
import { createContext, ReactNode, useState } from 'react'

interface GifContextType {
  gifs: Gif[]
  updateGifs: (gif: Gif[]) => void
  favorites: Set<Gif['id']>
  toggleFavorite: (id: Gif['id']) => void
}

export const GifContext = createContext<GifContextType>({
  gifs: [],
  updateGifs: () => {},
  favorites: new Set(),
  toggleFavorite: () => {},
})

export function GifsContextProvider({ children }: { children: ReactNode }) {
  const [gifs, setGifs] = useState<Gif[]>([])
  const [favorites, setFavorites] = useState<Set<Gif['id']>>(() => {
    const storeFavorites = window.localStorage.getItem('favorites')
    return storeFavorites ? new Set(JSON.parse(storeFavorites)) : new Set()
  })

  function updateGifs(gif: Gif[]) {
    setGifs(gif)
  }

  function toggleFavorite(id: Gif['id']) {
    const draft = structuredClone(favorites)

    if (draft.has(id)) {
      draft.delete(id)
    } else {
      draft.add(id)
    }

    window.localStorage.setItem(
      'favorites',
      JSON.stringify([...draft.values()]),
    )

    setFavorites(draft)
  }
  return (
    <GifContext.Provider
      value={{ gifs, updateGifs, favorites, toggleFavorite }}
    >
      {children}
    </GifContext.Provider>
  )
}
