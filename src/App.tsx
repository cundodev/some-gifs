import { HERO_GIF } from './utils/constants'
import { Arrow } from './components/Icons'

function App() {
  return (
    <div className='container m-auto max-w-5xl '>
      <div className='absolute inset-0 -z-10 h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#be185d_100%)]'></div>
      {/* <header></header> */}
      <main className='flex h-screen w-full flex-col items-center overflow-auto'>
        <section className='flex w-full flex-col items-center justify-between gap-4 rounded-lg p-6 text-center md:flex-row md:py-28 md:text-left'>
          <div>
            <h1 className='text-shadow mb-8 text-balance text-6xl font-bold'>
              Some Gifs.
            </h1>
            <h2 className='text-balance text-2xl'>
              Find your favorite gifs instantly.
            </h2>
          </div>
          <div className='mt-auto rotate-[160deg]'>
            <Arrow />
          </div>
          <picture className='hidden max-w-80 overflow-hidden rounded-lg md:block'>
            <img className='object-contain' src={HERO_GIF} alt='hero image' />
          </picture>
        </section>
      </main>
      {/* <footer></footer> */}
    </div>
  )
}

export default App
