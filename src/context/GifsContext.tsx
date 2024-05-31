import { Gif } from '@/types'
import { createContext, ReactNode, useState } from 'react'

interface GifContextType {
  gifs: Gif[]
  updateGifs: React.Dispatch<React.SetStateAction<Gif[]>>
}

export const GifContext = createContext<GifContextType>({
  gifs: [],
  updateGifs: () => {},
})

export function GifsContextProvider({ children }: { children: ReactNode }) {
  const [gifs, setGifs] = useState<Gif[]>([])

  return <GifContext.Provider value={{ gifs, updateGifs: setGifs }}>{children}</GifContext.Provider>
}
