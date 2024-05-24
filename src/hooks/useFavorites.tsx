import { GifContext } from '@/context/GifsContext'
import { useContext } from 'react'

export default function useFavorites() {
  const { favorites, toggleFavorite } = useContext(GifContext)
  return { favorites, toggleFavorite }
}
