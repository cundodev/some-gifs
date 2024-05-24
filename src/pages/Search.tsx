import Gifs from '@/components/Gifs'
import SearchForm from '@/components/SearchForm'
import useGifs from '@/hooks/useGifs'
import { NavLink } from 'react-router-dom'

export default function Search() {
  const { gifs } = useGifs()
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
      <main className='flex w-full max-w-5xl flex-col items-center gap-8 p-6'>
        <section className='flex w-full flex-col gap-6 text-center md:flex-row md:items-center md:justify-between'>
          <SearchForm />
        </section>
        <Gifs gifs={gifs} />
      </main>
    </>
  )
}
