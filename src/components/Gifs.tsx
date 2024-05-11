import { Gif } from '@/types'

export default function Gifs({ gifs }: { gifs: Gif[] }) {
  return (
    <section className=' flex max-w-5xl flex-wrap gap-2 p-6'>
      {gifs.map((gif) => (
        <div key={gif.id}>
          <img
            src={gif.webp}
            alt={gif.title}
            width={gif.width}
            height={gif.height}
          />
        </div>
      ))}
    </section>
  )
}
