import { NavLink } from 'react-router-dom'
import SearchForm from './SearchForm'
import useFavorites from '@/hooks/useFavorites'
import { HeartFill } from './Icons'

export default function Header() {
  const { favsStorage } = useFavorites()
  return (
    <header className='flex max-w-5xl flex-col items-center justify-between gap-6 border-b border-slate-200/5 px-6 py-4 sm:flex-row'>
      <NavLink to='/' className='text-shadow text-nowrap text-4xl font-bold hover:scale-105 sm:text-2xl '>
        Some Gifs.
      </NavLink>
      <div className='w-full sm:w-2/3'>
        <SearchForm />
      </div>
      {favsStorage.size > 0 && (
        <NavLink
          to='/favorites'
          className='flex h-full w-full items-center justify-center rounded-md border-2 border-fuchsia-600 px-4 py-2 hover:text-fuchsia-500 sm:w-fit'
        >
          <HeartFill />
        </NavLink>
      )}
    </header>
  )
}
