import { getGifs } from '@/services/api'
import { Gif } from '@/types'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function useGifs() {
  const [gifs, setGifs] = useState<Gif[]>([])
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    getGifs({ keyword: searchParams.get('search') || 'tokyo' }).then(setGifs)
  }, [searchParams])
  return { gifs, setSearchParams }
}
