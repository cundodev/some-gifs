import { SearchIcon } from './Icons'

export default function SearchForm({
  onSubmit,
}: {
  onSubmit: React.FormEventHandler
}) {
  return (
    <form onSubmit={onSubmit} className='flex w-full px-6 pb-6'>
      <input
        type='text'
        id='query'
        name='query'
        placeholder='Happy, Anime, The Avengers,...'
        className='w-full rounded-l-lg bg-white bg-opacity-10 p-2'
      />
      <button className='rounded-r-lg bg-fuchsia-600 p-2 text-center'>
        <SearchIcon />
      </button>
    </form>
  )
}
