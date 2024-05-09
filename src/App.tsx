import Hero from './components/Hero'
import TrendingSearchTerms from './components/TrendingSearchTerms'

function App() {
  return (
    <div className='container m-auto max-w-5xl'>
      <div className='absolute inset-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,46,137,0.3),rgba(255,255,255,0))]'></div>
      {/* <header></header> */}
      <main className='flex h-screen w-full flex-col items-center'>
        <Hero />
        <TrendingSearchTerms />
      </main>
      {/* <footer></footer> */}
    </div>
  )
}

export default App
