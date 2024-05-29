import { HERO_GIF } from '@/utils/constants'
import { Arrow } from './Icons'

export default function Hero() {
  return (
    <section className='flex w-full flex-col items-center justify-between gap-4 rounded-lg text-center md:flex-row  md:text-left'>
      <div>
        <h1 className='text-shadow mb-8 text-nowrap text-4xl font-bold sm:text-6xl'>Some Gifs.</h1>
        <h2 className='text-balance text-xl sm:text-2xl'>Find your favorite gifs instantly.</h2>
      </div>
      <div className='mt-auto rotate-[160deg]'>
        <Arrow />
      </div>
      <picture className='hidden w-80 overflow-hidden rounded-lg md:block'>
        <img className='object-cover' src={HERO_GIF} alt='hero image' />
      </picture>
    </section>
  )
}
