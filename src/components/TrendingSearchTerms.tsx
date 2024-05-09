import { getTrendingTerms } from '@/services/api'
import { TrendingTerms } from '@/types'
import { getRandomColor } from '@/utils/functions'
import { useEffect, useState } from 'react'

export default function TrendingSearchTerms() {
  const [trendingTerms, setTrenginTerms] = useState<TrendingTerms>()

  useEffect(() => {
    getTrendingTerms().then(setTrenginTerms)
  }, [])

  if (!trendingTerms) return null

  return (
    <section className='max-w-5xl p-6'>
      <ul className='flex max-w-max flex-wrap gap-2'>
        {trendingTerms.map((term, index) => {
          const randomColor = getRandomColor()
          return (
            <li
              className={`text-nowrap rounded-lg border-2 p-2 text-center text-sm font-semibold`}
              style={{
                backgroundColor: `${randomColor.bg}1A`,
                borderColor: `${randomColor.border}`,
                color: `${randomColor.border}`,
              }}
              key={index + term}
            >
              {term}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
