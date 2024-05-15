import { GifContext } from '@/context/GifsContext'
import { getGifs } from '@/services/api'
import { useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function useGifs() {
  const { gifs, setGifs } = useContext(GifContext)
  const [searchParams] = useSearchParams()

  useEffect(() => {
    getGifs({ keyword: searchParams.get('q') || 'tokyo' }).then(setGifs)
  }, [searchParams, setGifs])

  return { gifs, searchParams }
}
