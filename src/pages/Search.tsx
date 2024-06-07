import Gifs from '@/components/Gifs'
import Header from '@/components/Header'
import SearchForm from '@/components/SearchForm'
import useGifs from '@/hooks/useGifs'
import useNearScreen from '@/hooks/useNearScreen'
import { useEffect, useRef } from 'react'

export default function Search() {
  const { gifs, updatePage, searchParams } = useGifs()
  const visor = useRef<HTMLDivElement>(null)
  const { isNearScreen } = useNearScreen({ visor, once: false })

  useEffect(() => {
    if (isNearScreen) updatePage((prevPage) => prevPage + 1)
  }, [isNearScreen, updatePage])

  return (
    <>
      <Header />
      <div className='flex w-full flex-col gap-4 px-6 pt-6'>
        <SearchForm />
        <h3 className='text-3xl font-black'>{searchParams.get('q')?.toLocaleUpperCase()}</h3>
      </div>
      <Gifs gifs={gifs} />
      <div ref={visor} />
    </>
  )
}
