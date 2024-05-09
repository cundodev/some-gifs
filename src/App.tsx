import Hero from './components/Hero'

function App() {
  return (
    <div className='container m-auto max-w-5xl '>
      <div className='absolute inset-0 -z-10 h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#be185d_100%)]'></div>
      {/* <header></header> */}
      <main className='flex h-screen w-full flex-col items-center overflow-auto'>
        <Hero />
      </main>
      {/* <footer></footer> */}
    </div>
  )
}

export default App
