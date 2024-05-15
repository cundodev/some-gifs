import { FormEvent } from 'react'
import { SearchIcon } from './Icons'
//import useGifs from '@/hooks/useGifs'
import { useNavigate } from 'react-router-dom'

export default function SearchForm() {
  //const { searchParams } = useGifs()
  const navigate = useNavigate()

  function handleSubmit(evt: FormEvent<HTMLFormElement>): void {
    evt.preventDefault()
    const data = new FormData(evt.currentTarget)
    const query = data.get('query') as string
    //setSearchParams({ q: query })
    navigate(`/search?q=${query}`)
    // evt.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <form onSubmit={handleSubmit} className='flex w-full scroll-m-6 px-6 pb-6'>
      <input
        type='text'
        id='query'
        name='query'
        placeholder='Happy, Anime, The Avengers,...'
        className=' w-full rounded-l-lg bg-white bg-opacity-10 p-2'
      />
      <button className=' rounded-r-lg bg-fuchsia-600 p-2 text-center'>
        <SearchIcon />
      </button>
    </form>
  )
}
