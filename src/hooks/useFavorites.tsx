import { FavsContext } from '@/context/FavsContext'
import { useContext } from 'react'

export default function useFavorites() {
  const favs = useContext(FavsContext)

  return favs
}
