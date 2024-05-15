import Gifs from '@/components/Gifs'
import SearchForm from '@/components/SearchForm'
import useGifs from '@/hooks/useGifs'

export default function Search() {
  const { gifs } = useGifs()
  return (
    <main className='flex w-full max-w-5xl flex-col items-center gap-8 p-6'>
      <section className='flex w-full flex-col gap-6 text-center md:flex-row md:items-center md:justify-between'>
        <a
          href='/'
          className='text-shadow text-nowrap text-2xl font-bold hover:scale-105 '
        >
          Some Gifs.
        </a>
        <SearchForm />
      </section>
      <Gifs gifs={gifs} />
    </main>
  )
}
