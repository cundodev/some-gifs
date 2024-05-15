import { HERO_GIF } from '@/utils/constants'
import { Arrow } from './Icons'

export default function Hero() {
  return (
    <section className='flex w-full flex-col items-center justify-between gap-4 rounded-lg text-center md:flex-row  md:text-left'>
      <div>
        <h1 className='text-shadow mb-8 text-balance text-6xl font-bold'>
          Some Gifs.
        </h1>
        <h2 className='text-balance text-2xl'>
          Find your favorite gifs instantly.
        </h2>
      </div>
      <div className='mt-auto rotate-[160deg]'>
        <Arrow />
      </div>
      <picture className='hidden w-80 overflow-hidden rounded-lg md:block md:aspect-video'>
        <img className='object-contain' src={HERO_GIF} alt='hero image' />
      </picture>
    </section>
  )
}
