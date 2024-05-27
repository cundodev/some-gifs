import { Gif } from '@/types'
import { createContext, ReactNode, useState } from 'react'

interface FavsContextType {
  favsStorage: Set<Gif['id']>
  toggleFavorite: (id: Gif['id']) => void
  favorites: Gif[]
  setFavorites: React.Dispatch<React.SetStateAction<Gif[]>>
}

export const FavsContext = createContext<FavsContextType>({
  favsStorage: new Set(),
  toggleFavorite: () => {},
  favorites: [],
  setFavorites: () => {},
})

export function FavsContextProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Gif[]>([])
  const [favsStorage, setFavsStorage] = useState<Set<Gif['id']>>(() => {
    const storeFavorites = window.localStorage.getItem('favorites')
    return storeFavorites ? new Set(JSON.parse(storeFavorites)) : new Set()
  })

  function toggleFavorite(id: Gif['id']) {
    const draft = new Set(favsStorage)

    if (draft.has(id)) {
      draft.delete(id)
      setFavorites((prevState) => prevState.filter((gif) => gif.id !== id))
    } else {
      draft.add(id)
    }

    window.localStorage.setItem('favorites', JSON.stringify([...draft.values()]))

    setFavsStorage(draft)
  }

  return (
    <FavsContext.Provider value={{ favorites, setFavorites, favsStorage, toggleFavorite }}>
      {children}
    </FavsContext.Provider>
  )
}
