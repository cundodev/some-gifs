import { FavsContext } from '@/context/FavsContext'
import { useContext } from 'react'

export default function useFavorites() {
  const { favorites, toggleFavorite } = useContext(FavsContext)
  return { favorites, toggleFavorite }
}
