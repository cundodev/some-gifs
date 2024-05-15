import Gifs from './components/Gifs'
import Hero from './components/Hero'
import TrendingSearchTerms from './components/TrendingSearchTerms'
import useGifs from './hooks/useGifs'
import SearchForm from './components/SearchForm'

function App() {
  const { gifs } = useGifs()

  return (
    <div className='container m-auto max-w-5xl'>
      <div className='absolute inset-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,46,137,0.3),rgba(255,255,255,0))]'></div>
      {/* <header></header> */}
      <main className='flex flex-col items-center'>
        <Hero />
        <SearchForm />
        <TrendingSearchTerms />
        <Gifs gifs={gifs} />
      </main>
      <footer className='w-full border-t border-slate-200/5 py-4 text-center'>
        <p className='inline-block text-gray-500'>By&nbsp;</p>
        <a
          href='https://github.com/cundodev'
          target='_blank'
          className='font-bold hover:text-pink-600'
        >
          CundoDev
        </a>
      </footer>
    </div>
  )
}

export default App
