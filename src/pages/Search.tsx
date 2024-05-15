import Gifs from '@/components/Gifs'
import SearchForm from '@/components/SearchForm'
import useGifs from '@/hooks/useGifs'

export default function Search() {
  const { gifs } = useGifs()
  return (
    <main className='mx-auto flex max-w-5xl flex-col items-center p-6'>
      <SearchForm />
      <Gifs gifs={gifs} />
    </main>
  )
}
