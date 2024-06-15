import Gifs from '@/components/Gifs'
import Header from '@/components/Header'
import SearchForm from '@/components/SearchForm'
import useFavorites from '@/hooks/useFavorites'
import { getFavorites } from '@/services/api'

import { useEffect } from 'react'

export default function Favorites() {
  const { favsStorage, favorites, setFavorites } = useFavorites()

  useEffect(() => {
    if (favsStorage.size === 0) return
    getFavorites({ favs: [...favsStorage.values()] }).then((favs) => {
      console.log(favs, favsStorage)
      setFavorites(favs)
    })
    console.log('render')
  }, [])

  return (
    <>
      <Header />

      <SearchForm />

      {favsStorage.size === 0 ? (
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
