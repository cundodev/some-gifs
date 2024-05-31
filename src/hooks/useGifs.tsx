import { GifContext } from '@/context/GifsContext'
import { getGifs } from '@/services/api'
import { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const INITIAL_PAGE = 0
const FINAL_PAGE = 10

export default function useGifs() {
  const { gifs, updateGifs } = useContext(GifContext)
  const [page, setPage] = useState<number>(INITIAL_PAGE)
  const [loading, setLoading] = useState<boolean>(false)
  const [searchParams] = useSearchParams()

  useEffect(() => {
    setLoading(true)
    getGifs({
      keyword: searchParams.get('q') || 'Anime',
      rating: searchParams.get('rating') || 'g',
    })
      .then(updateGifs)
      .finally(() => setLoading(false))
  }, [searchParams, updateGifs])

  useEffect(() => {
    if (page === INITIAL_PAGE || page >= FINAL_PAGE) return
    setLoading(true)
    getGifs({
      keyword: searchParams.get('q') || 'Anime',
      rating: searchParams.get('rating') || 'g',
      page: page,
    })
      .then((nextGifs) => updateGifs((prevGifs) => prevGifs.concat(nextGifs)))
      .finally(() => setLoading(false))
  }, [page, updateGifs])

  return { gifs, searchParams, loading, updatePage: setPage }
}
