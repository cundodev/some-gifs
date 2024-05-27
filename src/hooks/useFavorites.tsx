import { FavsContext } from '@/context/FavsContext'
import { getFavorites } from '@/services/api'
import { useContext, useEffect } from 'react'

export default function useFavorites() {
  const { favsStorage, toggleFavorite, favorites, setFavorites } = useContext(FavsContext)

  useEffect(() => {
    if (favsStorage.size === 0) return
    getFavorites({ favs: [...favsStorage.values()] }).then(setFavorites)
  }, [])

  return { favsStorage, toggleFavorite, favorites, setFavorites }
}
