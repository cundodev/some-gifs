import { TrendingTerms } from '@/types'
import { API_KEY, BASE_URL } from './settings'

export async function getTrendingTerms(): Promise<TrendingTerms> {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/searches?api_key=${API_KEY}`,
    )
    if (!response.ok) {
      throw new Error(
        `Error getting data (${response.status}: ${response.statusText})`,
      )
    }
    const { data } = await response.json()
    return data
  } catch (error) {
    console.error('Request Error:', error)
    throw error
  }
}
