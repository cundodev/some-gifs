import { ChangeEvent, FormEvent } from 'react'
import { SearchIcon } from './Icons'
import { useNavigate, useSearchParams } from 'react-router-dom'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

export default function SearchForm() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  function handleSubmit(evt: FormEvent<HTMLFormElement>): void {
    evt.preventDefault()
    const data = new FormData(evt.currentTarget)
    const query = data.get('query') as string
    const rating = data.get('rating') as string

    const lastSearch = {
      query,
      rating,
    }
    window.localStorage.setItem('lastSearch', JSON.stringify(lastSearch))

    if (!query.trim()) return

    navigate(`/search?q=${query}&rating=${rating}`)
  }

  function handleChange(evt: ChangeEvent<HTMLSelectElement>) {
    const query = searchParams.get('q')
    if (query == null) return

    const rating = evt.currentTarget.value

    navigate(`/search?q=${query}&rating=${rating}`)
  }

  return (
    <form onSubmit={handleSubmit} className='flex w-full flex-col gap-4 sm:flex-row'>
      <div className='flex flex-1'>
        <input
          type='search'
          id='query'
          name='query'
          placeholder='Happy, Anime, The Avengers,...'
          className='w-full rounded-l-lg bg-white/10 p-2'
          defaultValue={searchParams.get('q') || ''}
        />
        <button className='rounded-r-lg bg-pink-600 p-2 text-center'>
          <SearchIcon />
        </button>
      </div>
      <select
        className='ml-auto w-fit rounded-lg bg-[#422733] p-2 text-sm'
        name='rating'
        defaultValue={searchParams.get('rating') || ''}
        onChange={handleChange}
      >
        <option className='font-bold ' disabled>
          Rating:
        </option>
        {RATINGS.map((rating) => (
          <option className='semi-bold px-2' key={rating} value={rating}>
            {rating.toLocaleUpperCase()}
          </option>
        ))}
      </select>
    </form>
  )
}
