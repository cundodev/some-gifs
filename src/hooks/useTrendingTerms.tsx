import { getTrendingTerms } from '@/services/api'
import { TrendingTerms } from '@/types'
import { useEffect, useState } from 'react'

export function useTrendingTerms() {
  const [trendingTerms, setTrenginTerms] = useState<TrendingTerms>([])

  useEffect(() => {
    getTrendingTerms().then(setTrenginTerms)
  }, [])

  return trendingTerms
}
