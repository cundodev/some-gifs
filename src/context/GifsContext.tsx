import { Gif } from '@/types'
import { createContext, ReactNode, useState } from 'react'

interface GifContextType {
  gifs: Gif[]
  setGifs: React.Dispatch<React.SetStateAction<Gif[]>>
  favorites: Map<Gif['id'], Gif>
  toggleFavorite: (currentGif: Gif) => void
}

export const GifContext = createContext<GifContextType>({
  gifs: [],
  setGifs: () => {},
  favorites: new Map(),
  toggleFavorite: () => {},
})

export function GifsContextProvider({ children }: { children: ReactNode }) {
  const [gifs, setGifs] = useState<Gif[]>([])

  const [favorites, setFavorites] = useState<Map<Gif['id'], Gif>>(() => {
    const storeFavorites = window.localStorage.getItem('favorites')
    return storeFavorites ? new Map(JSON.parse(storeFavorites)) : new Map()
  })

  function toggleFavorite(currentGif: Gif) {
    const draft = structuredClone(favorites)

    if (draft.has(currentGif.id)) {
      draft.delete(currentGif.id)
    } else {
      draft.set(currentGif.id, currentGif)
    }

    window.localStorage.setItem(
      'favorites',
      JSON.stringify(Array.from(draft.entries())),
    )

    setFavorites(draft)
  }
  return (
    <GifContext.Provider value={{ gifs, setGifs, favorites, toggleFavorite }}>
      {children}
    </GifContext.Provider>
  )
}
