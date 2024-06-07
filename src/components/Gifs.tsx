import type { Gif } from '@/types'
import FavButton from './FavButton'
export default function Gifs({ gifs }: { gifs: Gif[] }) {
  return (
    <main className='flex min-w-full max-w-5xl flex-col items-center gap-8 p-6'>
      <section className='h-full w-full'>
        <ul className='flex flex-wrap gap-2'>
          {gifs.map((gif, index) => (
            <li className='relative flex-auto' key={gif.id + index} style={{ width: `${gif.width}px` }}>
              <picture>
                <img
                  src={gif.webp}
                  alt={gif.title}
                  height={gif.height}
                  width={gif.width}
                  className='h-full w-full rounded-lg bg-pink-900'
                  loading='lazy'
                />
              </picture>
              <FavButton id={gif.id} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
//columns-auto gap-2 sm:columns-2 md:columns-3
