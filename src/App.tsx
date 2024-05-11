import { useEffect, useState } from 'react'
import Gifs from './components/Gifs'
import Hero from './components/Hero'
import TrendingSearchTerms from './components/TrendingSearchTerms'
import { getGifs } from './services/api'
import { Gif } from './types'
import { useSearchParams } from 'react-router-dom'

function App() {
  const [gifs, setGifs] = useState<Gif[]>([])
  const [searchParams] = useSearchParams()

  useEffect(() => {
    getGifs({ keyword: searchParams.get('search') || 'tokyo' }).then(setGifs)
  }, [searchParams])

  return (
    <div className='container m-auto max-w-5xl'>
      <div className='absolute inset-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,46,137,0.3),rgba(255,255,255,0))]'></div>
      {/* <header></header> */}
      <main className='flex h-screen w-full flex-col items-center'>
        <Hero />
        <TrendingSearchTerms />
        <Gifs gifs={gifs} />
      </main>
      {/* <footer></footer> */}
    </div>
  )
}

export default App
