import Gifs from '@/components/Gifs'
import useFavorites from '@/hooks/useFavorites'
import { getFavorites } from '@/services/api'
import { Gif } from '@/types'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Favorites() {
  const { favorites } = useFavorites()
  const [favsGifs, setFavsGifs] = useState<Gif[]>([])

  useEffect(() => {
    if (favorites.size === 0) return
    getFavorites({ favs: [...favorites.values()] }).then(setFavsGifs)
  }, [])

  return (
    <>
      <header className='flex w-full max-w-5xl items-center justify-between border-b border-slate-200/5 px-6 py-4'>
        <NavLink
          to='/'
          className='text-shadow text-nowrap text-2xl font-bold hover:scale-105 '
        >
          Some Gifs.
        </NavLink>
        <NavLink to='/favorites'>Favorites</NavLink>
      </header>
      <main className='flex w-full max-w-5xl flex-col items-center gap-8 px-6 py-10'>
        {favorites.size === 0 ? (
          <section className='flex w-full flex-1 items-center justify-center border border-dashed p-6'>
            <p>
              Your{' '}
              <span className='font-semibold text-pink-600'>favorites</span>{' '}
              list is empty!
            </p>
          </section>
        ) : (
          <Gifs gifs={favsGifs} />
        )}
      </main>
    </>
  )
}
