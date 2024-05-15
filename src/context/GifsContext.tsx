import { Gif } from '@/types'
import { createContext, ReactNode, useState } from 'react'

interface GifContextType {
  gifs: Gif[]
  setGifs: React.Dispatch<React.SetStateAction<Gif[]>>
}

export const GifContext = createContext<GifContextType>({
  gifs: [],
  setGifs: () => {},
})

export function GifsContextProvider({ children }: { children: ReactNode }) {
  const [gifs, setGifs] = useState<Gif[]>([])

  return (
    <GifContext.Provider value={{ gifs, setGifs }}>
      {children}
    </GifContext.Provider>
  )
}
