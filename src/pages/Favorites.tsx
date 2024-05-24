import Gifs from '@/components/Gifs'
import useFavorites from '@/hooks/useFavorites'
import { NavLink } from 'react-router-dom'

export default function Favorites() {
  const { favorites } = useFavorites()

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
      {favorites.size === 0 ? (
        <section className='m-6 flex max-h-60 items-center justify-center border border-dashed'>
          <p>
            Your <span className='font-semibold text-pink-600'>favorites</span>{' '}
            list is empty!
          </p>
        </section>
      ) : (
        <Gifs gifs={[...favorites.values()]} />
      )}
    </>
  )
}
