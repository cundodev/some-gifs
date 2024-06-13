import { NavLink } from 'react-router-dom'
import Auth from './Auth'

export default function Header() {
  return (
    <header className='flex max-w-5xl flex-col items-center justify-between gap-6 border-b border-slate-200/5 px-6 py-4 sm:flex-row'>
      <NavLink to='/' className='text-shadow text-nowrap text-4xl font-bold hover:scale-105 sm:text-2xl '>
        Some Gifs.
      </NavLink>

      <Auth />
    </header>
  )
}
