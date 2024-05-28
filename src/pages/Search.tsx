import Gifs from '@/components/Gifs'
import Header from '@/components/Header'
import useGifs from '@/hooks/useGifs'

export default function Search() {
  const { gifs } = useGifs()
  return (
    <>
      <Header />
      <Gifs gifs={gifs} />
    </>
  )
}
