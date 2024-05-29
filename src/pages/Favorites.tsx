import Gifs from '@/components/Gifs'
import Header from '@/components/Header'
import useFavorites from '@/hooks/useFavorites'

export default function Favorites() {
  const { favorites } = useFavorites()

  return (
    <>
      <Header />
      {favorites.length === 0 ? (
        <main className='flex w-full max-w-5xl flex-1 flex-col items-center gap-8 p-6'>
          <section className='flex w-full flex-1 items-center justify-center rounded-md border border-dashed p-6'>
            <p>
              Your <span className='font-semibold text-pink-600'>favorites</span> list is empty!
            </p>
          </section>
        </main>
      ) : (
        <Gifs gifs={favorites} />
      )}
    </>
  )
}
