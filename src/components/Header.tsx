import { NavLink } from 'react-router-dom'
import SearchForm from './SearchForm'

export default function Header() {
  return (
    <header className='flex max-w-5xl flex-col items-center justify-between gap-6 border-b border-slate-200/5 px-6 py-4 sm:flex-row'>
      <NavLink to='/' className='text-shadow text-nowrap text-4xl font-bold hover:scale-105 sm:text-2xl '>
        Some Gifs.
      </NavLink>
      <div className='w-full sm:w-2/3'>
        <SearchForm />
      </div>
      <NavLink
        to='/favorites'
        className='w-full rounded-md border border-fuchsia-600 p-2 py-2 text-center hover:text-fuchsia-500 sm:w-fit'
      >
        Favorites
      </NavLink>
    </header>
  )
}
