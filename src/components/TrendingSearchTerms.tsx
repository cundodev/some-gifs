import { trendingTerms } from '@/utils/constants'
import Category from './Category'
import Marquee from 'react-fast-marquee'
//import { useTrendingTerms } from '@/hooks/useTrendingTerms'

export default function TrendingSearchTerms() {
  //const trendingTerms = useTrendingTerms()

  if (!trendingTerms) return null

  return (
    <section className='group w-full max-w-5xl px-6'>
      <h2 className='mb-4 text-left text-xl font-semibold'>Trending Search Terms</h2>
      <div>
        <Marquee gradient gradientColor='#0a0a0a' gradientWidth={75} pauseOnHover speed={25} direction='right'>
          <ul className='mr-4 flex max-w-max flex-wrap gap-4'>
            {trendingTerms.map((term, index) => (
              <Category key={index + term} term={term} />
            ))}
          </ul>
        </Marquee>
      </div>
    </section>
  )
}
