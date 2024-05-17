import { FormEvent } from 'react'
import { SearchIcon } from './Icons'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function SearchForm() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  function handleSubmit(evt: FormEvent<HTMLFormElement>): void {
    evt.preventDefault()
    const data = new FormData(evt.currentTarget)
    const query = data.get('query') as string
    navigate(`/search?q=${query}`)
  }

  return (
    <form onSubmit={handleSubmit} className='flex w-full scroll-m-6'>
      <input
        type='search'
        id='query'
        name='query'
        placeholder='Happy, Anime, The Avengers,...'
        className=' w-full rounded-l-lg bg-white bg-opacity-10 p-2'
        defaultValue={searchParams.get('q') || ''}
      />
      <button className=' rounded-r-lg bg-fuchsia-600 p-2 text-center'>
        <SearchIcon />
      </button>
    </form>
  )
}
