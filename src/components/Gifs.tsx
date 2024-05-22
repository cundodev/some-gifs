import type { Gif } from '@/types'
import { Heart, HeartFill } from './Icons'
import { useState } from 'react'

export default function Gifs({ gifs }: { gifs: Gif[] }) {
  const [favorites, setFavorites] = useState<Map<Gif['id'], Gif>>(() => {
    const storeFavorites = window.localStorage.getItem('favorites')
    return storeFavorites ? new Map(JSON.parse(storeFavorites)) : new Map()
  })

  function handleClick(currentGif: Gif) {
    const draft = structuredClone(favorites)

    if (draft.has(currentGif.id)) {
      draft.delete(currentGif.id)
    } else {
      draft.set(currentGif.id, currentGif)
    }

    window.localStorage.setItem(
      'favorites',
      JSON.stringify(Array.from(draft.entries())),
    )

    setFavorites(draft)
  }

  return (
    <section className='h-full w-full columns-auto gap-2 sm:columns-2 md:columns-3'>
      <ul>
        {gifs.map((gif) => (
          <li className='relative' key={gif.id}>
            <picture>
              <img
                src={gif.webp}
                alt={gif.title}
                height={gif.height}
                width={gif.width}
                className='mb-2 w-full rounded-lg bg-slate-600'
                loading='lazy'
              />
            </picture>
            <button
              className='absolute right-2 top-2 z-10 rounded-full bg-black/20 p-2 hover:text-red-500'
              onClick={() => handleClick(gif)}
            >
              {favorites.has(gif.id) ? <HeartFill /> : <Heart />}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
