import { Gif } from '@/types'
import { createContext, ReactNode, useCallback, useState } from 'react'

interface GifContextType {
  gifs: Gif[]
  updateGifs: (gif: Gif[]) => void
}

export const GifContext = createContext<GifContextType>({
  gifs: [],
  updateGifs: () => {},
})

export function GifsContextProvider({ children }: { children: ReactNode }) {
  const [gifs, setGifs] = useState<Gif[]>([])

  const updateGifs = useCallback((gif: Gif[]) => {
    setGifs(gif)
  }, [])

  console.log('context gifs')
  return (
    <GifContext.Provider value={{ gifs, updateGifs }}>
      {children}
    </GifContext.Provider>
  )
}
