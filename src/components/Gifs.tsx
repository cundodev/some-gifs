import type { Gif } from '@/types'
import FavButton from './FavButton'

export default function Gifs({ gifs }: { gifs: Gif[] }) {
  return (
    <main className='flex w-full max-w-5xl flex-col items-center gap-8 p-6'>
      <section className='h-full w-full columns-auto gap-2 sm:columns-2 md:columns-3'>
        <ul>
          {gifs.map((gif) => (
            <li className='relative' key={gif.id}>
              <picture>
                <img
                  src={gif.webp}
                  alt={gif.title}
                  height={gif.height}
                  width={gif.width}
                  className='mb-2 w-full rounded-lg bg-slate-600'
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
