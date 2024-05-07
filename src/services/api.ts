/**
const BASE_URL = 'https://api.giphy.com/v1/'
const API_KEY = import.meta.env.VITE_API_KEY

interface GifData {
  type: string
  id: string
  title: string
  rating: string
  images: ImageGif
}
interface ImageGif {
  downsized: {
    frames: string
    height: string
    width: string
    url: string
    webp: string
    webp_size: string
  }
}

export default function api() {
  const [randomGif, setRandomGif] = useState<GifData>()

  async function getRandomGifs(): Promise<GifData | undefined> {
    try {
      const response = await fetch(
        `${BASE_URL}gifs/random?api_key=${API_KEY}&tag=&rating=g&limit=5`,
      )
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const { data } = await response.json()
      if (!data) throw new Error(`Not found`)
      const { id, title, rating, type, images } = data
      //const { webp } = images.original
      console.log(images)
      return { id, title, rating, type, images } as GifData
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getRandomGifs().then(setRandomGif)
  }, [])

   * <h1 className='mb-4 text-center text-2xl'>
          {randomGif?.title} <strong>{randomGif?.rating}</strong>
        </h1>
        <picture className='flex aspect-video h-60 items-center justify-center'>
          <img
            className='h-full w-full object-cover '
            src={randomGif?.images.downsized.url}
            alt={randomGif?.title}
          />
        </picture>
      }
      */
