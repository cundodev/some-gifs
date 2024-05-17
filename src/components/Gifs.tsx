import { Gif } from '@/types'

export default function Gifs({ gifs }: { gifs: Gif[] }) {
  return (
    <section className='h-full w-full columns-auto gap-2 sm:columns-2 md:columns-3'>
      {gifs.map((gif) => (
        <picture key={gif.id}>
          <img
            src={gif.webp}
            alt={gif.title}
            height={gif.height}
            width={gif.width}
            className='mb-2 w-full rounded-lg bg-slate-600'
            loading='lazy'
          />
        </picture>
      ))}
    </section>
  )
}
