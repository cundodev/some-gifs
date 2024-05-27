import { Gif } from '@/types'
import { createContext, ReactNode, useState } from 'react'

interface FavsContextType {
  favorites: Set<Gif['id']>
  toggleFavorite: (id: Gif['id']) => void
}

export const FavsContext = createContext<FavsContextType>({
  favorites: new Set(),
  toggleFavorite: () => {},
})

export function FavsContextProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Set<Gif['id']>>(() => {
    const storeFavorites = window.localStorage.getItem('favorites')
    return storeFavorites ? new Set(JSON.parse(storeFavorites)) : new Set()
  })

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

  console.log('context favs')

  return (
    <FavsContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavsContext.Provider>
  )
}
