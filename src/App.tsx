import { FormEvent } from 'react'
import Gifs from './components/Gifs'
import Hero from './components/Hero'
import TrendingSearchTerms from './components/TrendingSearchTerms'
import useGifs from './hooks/useGifs'
import SearchForm from './components/SearchForm'

function App() {
  const { gifs, setSearchParams } = useGifs()

  function handleSubmit(evt: FormEvent<HTMLFormElement>): void {
    evt.preventDefault()
    const data = new FormData(evt.currentTarget)
    const query = data.get('query') as string
    setSearchParams({ search: query })
    evt.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className='container m-auto max-w-5xl'>
      <div className='absolute inset-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,46,137,0.3),rgba(255,255,255,0))]'></div>
      {/* <header></header> */}
      <main className='flex h-screen w-full flex-col items-center'>
        <Hero />
        <SearchForm onSubmit={handleSubmit} />
        <TrendingSearchTerms />
        <Gifs gifs={gifs} />
      </main>
      {/* <footer></footer> */}
    </div>
  )
}

export default App
