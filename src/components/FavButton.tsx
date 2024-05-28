import useFavorites from '@/hooks/useFavorites'
import { Heart, HeartFill } from './Icons'
import type { Gif } from '@/types'

export default function FavButton({ id }: { id: Gif['id'] }) {
  const { favsStorage, toggleFavorite } = useFavorites()

  return (
    <button
      className='absolute right-2 top-2 z-10 rounded-full bg-black/20 p-2 hover:text-red-500'
      onClick={() => toggleFavorite(id)}
    >
      {favsStorage.has(id) ? <HeartFill /> : <Heart />}
    </button>
  )
}
