import { GifContext } from '@/context/GifsContext'
import { getGifs } from '@/services/api'
import { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function useGifs() {
  const { gifs, updateGifs } = useContext(GifContext)
  const [loading, setLoading] = useState<boolean>(false)
  const [searchParams] = useSearchParams()

  useEffect(() => {
    setLoading(true)
    getGifs({
      keyword: searchParams.get('q') || 'tokyo',
      rating: searchParams.get('rating') || 'g',
    })
      .then(updateGifs)
      .finally(() => setLoading(false))
  }, [searchParams, updateGifs])

  return { gifs, searchParams, loading }
}
