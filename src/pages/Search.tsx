import Gifs from '@/components/Gifs'
import Header from '@/components/Header'
import useGifs from '@/hooks/useGifs'
import useNearScreen from '@/hooks/useNearScreen'
import { useEffect, useRef } from 'react'

export default function Search() {
  const { gifs, updatePage } = useGifs()
  const visor = useRef<HTMLDivElement>(null)
  const { isNearScreen } = useNearScreen({ visor, once: false })

  useEffect(() => {
    if (isNearScreen) updatePage((prevPage) => prevPage + 1)
  }, [isNearScreen, updatePage])

  return (
    <>
      <Header />
      <Gifs gifs={gifs} />
      <div ref={visor} />
    </>
  )
}
