import { GifContext } from '@/context/GifsContext'
import { getGifs } from '@/services/api'
import { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function useGifs() {
  const { gifs, setGifs } = useContext(GifContext)
  const [loading, setLoading] = useState<boolean>(false)
  const [searchParams] = useSearchParams()

  useEffect(() => {
    setLoading(true)
    getGifs({
      keyword: searchParams.get('q') || 'tokyo',
      rating: searchParams.get('rating') || 'g',
    })
      .then(setGifs)
      .finally(() => setLoading(false))
  }, [searchParams, setGifs])

  return { gifs, searchParams, loading }
}
