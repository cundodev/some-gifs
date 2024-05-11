import Category from './Category'
import { useTrendingTerms } from '@/hooks/useTrendingTerms'

export default function TrendingSearchTerms() {
  const trendingTerms = useTrendingTerms()

  if (!trendingTerms) return null

  return (
    <section className='max-w-5xl p-6'>
      <ul className='flex max-w-max flex-wrap gap-2'>
        {trendingTerms.map((term, index) => (
          <Category key={index + term} term={term} />
        ))}
      </ul>
    </section>
  )
}
